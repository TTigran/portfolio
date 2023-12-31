import React from 'react'
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Tigran Martirosyan</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p></p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+374 94615979</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">martirosyantigran.developer@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Address: <span className="text-lightText">Gyumri, Ghandilyan 21b 8a</span>
        </p>
      </div>
    </div>
  );
}

export default ContactLeft