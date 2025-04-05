import Image from "next/image"

export const AboutSection = () => {
    return (
        <section className="w-full py-[80px] bg-white">
            <div className="max-w-[1512px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[50px] px-[20px]">
                {/* Left side - Image with decorative elements */}
                <div className="w-full h-full relative">
                    <div className="w-full h-full relative z-10">
                        <Image 
                            src={'/images/team-working.png'} 
                            width={200} 
                            height={200} 
                            alt="Team working together" 
                            className="w-[65%] aspect-square rounded-full object-cover shadow-lg"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-[-20px] left-[-20px] w-[100px] h-[100px] rounded-full bg-red-100 z-0"></div>
                    <div className="absolute bottom-[-30px] right-[30%] w-[150px] h-[150px] rounded-full bg-blue-100 z-0"></div>
                    <div className="absolute bottom-[20px] left-[20px] w-[60px] h-[60px] rounded-full bg-yellow-100 z-0"></div>
                </div>

                {/* Right side - Content */}
                <div className="w-full flex flex-col justify-center gap-[40px]">
                    {/* Mission Section */}
                    <div className="flex flex-col gap-[15px]">
                        <h2 className="text-4xl font-bold font-sans text-main-blue-950 leading-tight">Our Mission</h2>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            To utilize our expertise in software engineering and electronic 
                            engineering to provide top-notch digital products and services 
                            to people around the world, while ensuring their accessibility 
                            to everyone, especially in Rwanda.
                        </p>
                    </div>

                    {/* Vision Section */}
                    <div className="flex flex-col gap-[15px]">
                        <h2 className="text-4xl font-bold font-sans text-main-blue-950 leading-tight">Our Vision</h2>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            To become the leading technology company in Rwanda and beyond, 
                            known for our commitment to providing innovative and reliable 
                            digital products and services that meet the needs of our customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}