import React from 'react'
import { IServiceCategory, MainServices } from '@/data/services'
import Link from 'next/link'




export const ServicesSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-100">
      <div className="w-full mx-auto ">
        <h3 className="font-inter font-bold text-3xl md:text-5xl text-center text-main-blue-950 leading-tight mb-8 md:mb-16">Our Services</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10 w-full'>
          {
            MainServices.map(s => <ServiceCard key={`home-services-${s.id}`} service={s} />)
          }
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({service}:{service: IServiceCategory}) => {
  const Icon = service.icon;
  return (
    <Link href={`/services/${service.id}`} prefetch={true} className='bg-white rounded-xl hover:shadow-main-blue-800 p-6 md:p-10 shadow-md hover:shadow-lg transition-shadow duration-300 h-full'>
      <div className="w-14 h-14 bg-main-blue-100 rounded-xl flex items-center justify-center mb-8">
        <Icon className="text-main-blue-600 text-3xl" />
      </div>
      <h3 className="font-inter font-bold text-xl md:text-2xl text-main-blue-900 mb-4">{service.title}</h3>
      <p className="font-inter text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
        {service.intro}
      </p>
      <ul className="space-y-4">
        {
          service.services.length > 0 ?  
            service.services.map((s,index) => index < 2 && <li key={`service-${service.title}-${index}`} className='flex items-center'>
              <span className="text-main-blue-600 text-xl mr-3">•</span>
              <span className="font-inter text-gray-700 text-sm md:text-base">{s}</span>
            </li>)
          : null
        }
      </ul>
    </Link>
  )
}