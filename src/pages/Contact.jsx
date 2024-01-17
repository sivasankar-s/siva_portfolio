import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      // console.log(import.meta.env.EMAILJS_SERVICE_ID),
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        to_name: "Sivasankar",
        from_email: form.email,
        to_email: "siva.sankar.s@outlook.com",
        message: form.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      
    ).then(() => {
      setIsLoading(false);
      //Show success message
      // console.log(import.meta.env.EMAILJS_PUBLIC_KEY)

      setForm({name: '', email: '', message: ''})
    }).catch((err) => {
      setIsLoading(false)
      console.log(err)
    })
  }
  const handleFocus = () => {

  }

  const handleBlur = () => {
    
  }


  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
      <h1 className='head-text'>Contact me</h1>

      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
        <label className='text-black-500 font-semibold'>
          Name
          <input type='text' name='name' className='input' placeholder='Name' required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
        </label>

        <label className='text-black-500 font-semibold'>
          Email
          <input type='email' name='email' className='input' placeholder='example@email.com' required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
        </label>

        <label className='text-black-500 font-semibold'>
          Your Message
          <textarea name='message' className='textarea' rows={4} placeholder='Tell me anything' required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
        </label>
        
        <button className='contactbtn flex justify-center' disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur}>{isLoading ? 'Sending...' : 'Send Message'}</button>

      </form>
      </div>
    </section>
  )
}

export default Contact