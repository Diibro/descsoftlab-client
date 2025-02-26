import { IoCheckmarkCircleOutline } from "react-icons/io5";

export const ChooseUsSection = () => {
    return (
        <section className="w-full py-[80px] bg-gray-50">
            <div className="max-w-[1512px] mx-auto px-[20px]">
                {/* Section Title */}
                <div className="w-full text-center mb-[60px]">
                    <h2 className="text-[2.5rem] font-bold text-[#1a2b5e]">Why choose us ?</h2>
                </div>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {/* Feature 1 */}
                    <div className="flex items-start gap-[15px]">
                        <span className="text-main-blue-600 text-[1.5rem] mt-[3px]">
                            <IoCheckmarkCircleOutline />
                        </span>
                        <p className="text-[1.1rem] text-gray-700 font-medium">
                            Provide high-quality digital products and services
                        </p>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="flex items-start gap-[15px]">
                        <span className="text-main-blue-600 text-[1.5rem] mt-[3px]">
                            <IoCheckmarkCircleOutline />
                        </span>
                        <p className="text-[1.1rem] text-gray-700 font-medium">
                            Provide high-quality digital products and services
                        </p>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="flex items-start gap-[15px]">
                        <span className="text-main-blue-600 text-[1.5rem] mt-[3px]">
                            <IoCheckmarkCircleOutline />
                        </span>
                        <p className="text-[1.1rem] text-gray-700 font-medium">
                            Promote digital awareness and knowledge
                        </p>
                    </div>
                    
                    {/* Feature 4 */}
                    <div className="flex items-start gap-[15px]">
                        <span className="text-main-blue-600 text-[1.5rem] mt-[3px]">
                            <IoCheckmarkCircleOutline />
                        </span>
                        <p className="text-[1.1rem] text-gray-700 font-medium">
                            Create job opportunities in technology
                        </p>
                    </div>
                    
                    {/* Feature 5 */}
                    <div className="flex items-start gap-[15px]">
                        <span className="text-main-blue-600 text-[1.5rem] mt-[3px]">
                            <IoCheckmarkCircleOutline />
                        </span>
                        <p className="text-[1.1rem] text-gray-700 font-medium">
                            Contribute to Rwanda&apos;s digital economy
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}