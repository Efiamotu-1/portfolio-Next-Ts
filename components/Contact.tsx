import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import {useForm, SubmitHandler} from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string
}

type Props = {}

const Contact = (props: Props) => {

  const {
    register, handleSubmit
  } = useForm<Inputs>()

const onSubmit: SubmitHandler<Inputs> = (formData) => {
  window.location.href = `mailto:musahabeebfy10@gmail?subject=${formData.subject}&body= Hi my name is ${formData.name}. ${formData.message} (${formData.email})`
}

  return (
    <div className='h-screen space-y-10 snap-start w-90'>
      <h3 className='text-center my-10 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
      <div className='flex flex-col text-center md:text-left md:flex-row 
      justify-evenly mx- items-center'>
        <div className='flex flex-col space-y-10'>
          <h4 className='text-2xl font-semibold text-center'>
              I have got just what you need.{" "}
              <span className='underline decoration-[#F7AB0A]/50'>
              Let&apos;s Talk
              
              </span>
          </h4>

          <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-xl'>+234 706 932 1986</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-xl'>musahabeebfy10@gmail.com</p>
            </div>

            <div className='flex items-start space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-xl'>1, Adebanjo Agege-dopemu Lagos, Nigeria.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-10'>
            <div className='flex space-x-2'>
              <input {...register('name')} placeholder='Name' type="text" className="contactInput" />
              <input {...register('email')} placeholder='Email' type="email" className="contactInput" />
            </div>

            <input {...register('subject')} placeholder='Subject' type="text" className="contactInput" />

            <textarea {...register('message')} placeholder='Message' name="" id="" className="contactInput"></textarea>
            <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact