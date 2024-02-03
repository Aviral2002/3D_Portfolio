import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox'
import  Loader  from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '',message: ''})
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const {alert , showAlert, hideAlert} = useAlert();

  const handlechange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')

    emailjs.send(

      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:"Aviral Srivastava",
        from_email:form.email,
        to_email:"aviralsrivastava121@gmail.com",
        message:form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    
    ).then(() => {
      setIsLoading(false);
      showAlert({show: true, text:'Message sent successfully!',
    type:'success'})

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle');
        setForm({name: '', email: '',message: ''});
        
      }, [3000])

    }).catch((error) => {
      setIsLoading(false);
      showAlert({show: true, text:'I didnt receive your message',
      type:'danger'})
      setCurrentAnimation('idle');
      console.log(error);
      
    })
       

  };
  const handlefocus = () => setCurrentAnimation('walk');
  const handleblur = () => setCurrentAnimation('idle');
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}
      
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in{' '}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Touch
        </span></h1>
        
        <form className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handlesubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input 
            type="text"
            name="name"
            className='input'
            placeholder='Ram'
            required
            value={form.name}
            onChange={handlechange}
            onFocus={handlefocus}
            onBlur={handleblur}/>
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input 
            type="email"
            name="email"
            className='input'
            placeholder='ram@gmail.com'
            required
            value={form.email}
            onChange={handlechange}
            onFocus={handlefocus}
            onBlur={handleblur}/>
          </label>
          <label className='text-black-500 font-semibold'>
           Your Message
            <textarea 
            name="message"
            rows={4}
            className='textarea'
            placeholder='let me know how can I help you !'
            required
            value={form.message}
            onChange={handlechange}
            onFocus={handlefocus}
            onBlur={handleblur}/>
          </label>
          <button
          type="submit"
          className='btn'
          disabled={isLoading}
          onFocus={handlefocus}
          onBlur={handleblur}
          onChange={handlechange}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  
  )
}

export default Contact