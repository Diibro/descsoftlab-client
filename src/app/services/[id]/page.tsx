import ClientPage from "@/components/wrappers/ClientPage";
import { IServiceCategory, MainServices } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default async function ServicePage ({params}:{params:Promise<{id:string}>}) {
     const serviceId =(await params).id;
     
     const service: IServiceCategory | undefined = MainServices.find(s => s.id === +serviceId)
     
     if(!service) return (
          <ClientPage><div className="w-full flex items-center py-[50px] justify-center"><p className="text-main-blue-950 text-[1.2rem]">Sevice not found!</p></div></ClientPage>
     )
     const Icon = service.icon
     return (
          <ClientPage>
               <div className="w-full h-auto relative overflow-hidden">
                    <Image src={service.image} alt={service.title} width={800} height={400} placeholder="blur" className="w-full absolute z-0 top-0 left-0 h-full object-cover" />
                    <div className="w-full flex items-center justify-between px-[5%] py-[40px] bg-black/80 relative">
                         <div className="w-auto flex flex-col items-start gap-[20px]">
                              <h1 className="text-[2.8rem] font-extrabold text-white">{service.title}</h1>
                              <p className="text-[1rem] font-bold text-main-blue-200">{service.intro}</p>
                         </div>
                         <div className="w-auto h-auto p-[10px] bg-gradient-to-br from-main-blue-100 to-main-blue-300 rounded-full">
                              <Icon className="text-[50px] text-main-blue-800" />
                         </div>
                    </div>
               </div>
               <div className="w-full flex flex-col py-[50px] bg-white items-start justify-start gap-[30px] px-[2%] md:px-[5%] lg:px-[10%] ">
                    <p className="text-[1.2rem] w-full text-center text-gray-700">
                         {service.description}
                    </p>
                    <ul className="space-y-4">
                         {
                              service.services.length > 0 ?  
                                   service.services.map((s,index) => <li key={`service-${service.title}-${index}`} className='flex items-center'>
                                   <span className="text-main-blue-600 text-xl mr-3">•</span>
                                   <span className="font-inter text-gray-700 text-[1.1rem]">{s}</span>
                                   </li>)
                              : null
                         }
                    </ul>
                    <div className="w-full flex items-center justify-center py-[20px]">
                         <Link className="px-[30px] py-[15px] text-center bg-main-blue-800 text-white rounded-[50px] hover:bg-main-blue-950" href={'/contact-us'} prefetch>Contact us </Link>
                    </div>
               </div>
          </ClientPage>
     )
}