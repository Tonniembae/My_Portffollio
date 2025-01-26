import React from 'react'
import MagicButton from './ui/MagicButton'
import { socialMedia } from '@/data'
import { FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">Your {" "}</span> digital presence to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:tonniejunior08@gmail.com">
          <MagicButton title="Let's get in touch" icon={<FaPhoneAlt />} position="right" />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © @2025 Tonnietech
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center background-filter background-blur-lg saturate-200 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt="profile.img" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>

      {/* Fixed WhatsApp Icon */}
      <a
        href="https://wa.me/+254796213661" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition-all z-[100000]"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="40" height="40" />
      </a>
    </footer>
  )
}

export default Footer
