import React from 'react'
import { BiGlobe } from 'react-icons/bi'
import { HiCode } from 'react-icons/hi'
import { FiServer } from 'react-icons/fi'


export const ServicesSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-100">
      <div className="w-full mx-auto ">
        <h3 className="font-inter font-bold text-3xl md:text-5xl text-center text-main-blue-950 leading-tight mb-8 md:mb-16">Our Services</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10 w-full">
          {/* Web Design Card */}
          <div className="bg-white rounded-xl p-10 md:p-10 shadow-md hover:shadow-lg transition-shadow duration-300 h-full w-full">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-8">
              <BiGlobe className="text-blue-600 text-3xl" />
            </div>
            
            <h3 className="font-inter font-bold text-xl md:text-2xl text-main-blue-900 mb-4">Web Design & Development</h3>
            
            <p className="font-inter text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
              Custom websites and applications built with modern technologies
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">•</span>
                <span className="font-inter text-gray-700 text-sm md:text-base">Responsive Design</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">•</span>
                <span className="font-inter text-gray-700 text-sm md:text-base">SEO Optimization</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">•</span>
                <span className="font-inter text-gray-700 text-sm md:text-base">Performance Tuning</span>
              </li>
            </ul>
          </div>
          
          {/* Software Development Card */}
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-8">
              <HiCode className="text-blue-600 text-3xl" />
            </div>
            
            <h3 className="font-inter font-bold text-xl md:text-2xl text-main-blue-900 mb-4">Software Development</h3>
            
            <p className="font-inter text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
              Scalable software solutions for businesses of all sizes
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">•</span>
                <span className="font-inter text-gray-700 text-sm md:text-base">Custom Applications</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">•</span>
                <span className="font-inter text-gray-700 text-sm md:text-base">API Integration</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">•</span>
                <span className="font-inter text-gray-700 text-sm md:text-base">Mobile Apps</span>
              </li>
            </ul>
          </div>
          
          {/* IT Consulting Card */}
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-8">
              <FiServer className="text-blue-600 text-3xl" />
            </div>
            
            <h3 className="font-inter font-bold text-xl md:text-2xl text-main-blue-900 mb-4">IT Consulting</h3>
            
            <p className="font-inter text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
              Expert guidance for your technology infrastructure and strategy
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">•</span>
                <span className="font-inter text-gray-700 text-sm md:text-base">Infrastructure Planning</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">•</span>
                <span className="font-inter text-gray-700 text-sm md:text-base">Security Audits</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">•</span>
                <span className="font-inter text-gray-700 text-sm md:text-base">Cloud Solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}