import React, { useRef } from "react";
import emailjs from '@emailjs/browser';


const ContactUs = () => {
    const form  = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_r4jik8b', 'template_0nezmv1', form.current, 's2GIZiNjo1RTr026o')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };
  return (
    <div className="p-8 bg-gradient-to-r flex items-center justify-center from-[#C0DEFF] to-[#ADA2FF] h-[80vh]   m-8 border-black rounded-lg">
      <form ref={form} onSubmit={sendEmail} className="items-center md:w-[35%] ">
        <div className="flex flex-col">
          <label className="text-xl  font-sans "> Name</label>
          <input
            className="mb-4 border-[1px] rounded-lg border-gray-300"
            autoComplete="off"
            type="text"
            name="user_name"
            required
            
          />
        </div>
        <div >
          <label className="text-xl  font-sans mb-2">Contact Number</label>
          <input
            className="mb-4 w-[100%] border-[1px] rounded-lg border-gray-300 "
            autoCapitalize="off"
            type="number"
            name="contact_number"
            required
          />
        </div>
        <div>
          <label className="text-xl  font-sans mb-2">Email Address</label>
          <input
            className="mb-4 w-[100%] border-[1px] rounded-lg border-gray-300 "
            autoCapitalize="off"
            type="email"
            name="user_email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl font-sans ">Country</label>
          <select className="border-[1px] mb-4 rounded-lg border-gray-300" name="States" >
            <option >select States</option>
            <option >Madhaya Pradesh</option>
            <option >Uttar Pradesh</option>
            <option >Andhra Pradesh</option>
          </select>
        </div>
        <div>
            <h2 className="text-xl  font-sans ">Services Required</h2>
            <select className="w-[100%] mb-4 border-[1px] rounded-lg border-gray-300" name="services" >
            <option >Select Services</option>
            <option >GST Registration</option>
            <option >LLP Registration</option>
            
          </select>
        </div>
        <button className=" w-[100%] rounded-lg mx-auto  mt-8  p-2 bg-[#FFE5F1]">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;