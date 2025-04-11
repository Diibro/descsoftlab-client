import Image from "next/image"
import Link from "next/link"

export const HeroSection = () => {
     return (
          <section className="w-full min-h-screen bg-gray-100 relative grid grid-cols-1 md:grid-cols-2 gap-[20px] items-center">
               <div className="w-full h-full relative flex flex-col justify-center p-[50px] md:pl-[100px]">
                    <div className="w-[100px] aspect-square rounded-full bg-main-blue-200 absolute bottom-[20px] left-[20px] opacity-70"></div>
                    
                    <div className="relative z-10 flex flex-col items-start gap-[20px]">
                         <h1 className="text-[2.5rem] font-extrabold text-main-blue-950 leading-tight">Empowering Digital Transformation</h1>
                         <p className="text-[1.2rem] text-gray-600 max-w-[80%]">Desc Softlab is dedicated to making digital services accessible and affordable across Rwanda and Africa.</p>
                         <Link href={'/services'} className="mt-4 px-[30px] py-[25px] bg-main-blue-900 text-white text-[1.2rem] rounded-[30px] hover:bg-main-blue-600 transition-all duration-300">Explore Our Services →</Link>
                    </div>
               </div>
               <div className="w-full h-full relative flex items-center justify-center pt-[10px] md:pt-[5px]">
                    {/* Decorative circle element */}
                    <div className="absolute w-[70%] aspect-square rounded-full bg-gray-200 opacity-50 z-0"></div>
                    
                    {/* Circular image container */}
                    <div className="relative z-10 w-[70%] aspect-square rounded-full overflow-hidden border-8 border-white shadow-lg">
                         <Image 
                              src={'/home/kwibuka-31.png'} 
                              fill
                              alt="Workspace with laptop, notebook and coffee" 
                              className="object-cover" 
                              sizes="(max-width: 700px) 50vw, 50vw"
                         />
                    </div>
               </div>
          </section>
     )
}