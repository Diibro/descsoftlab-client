import Image from "next/image";
import UserIcon from "../../../../public/images/user-icon.png";
export const TeamCard = ({member}:{member: {name:string, position:string, bio:string, id:number}}) => {
     return (
          <div className="w-full flex flex-col items-center justify-start gap-[12px] p-[24px] border border-gray-300 rounded-[12px]">
               <Image src={UserIcon} alt={member.name} width={200} height={200} className="w-[100px] p-[5px] aspect-square object-cover rounded-full border-[2px] border-main-blue-700" />
               <h3 className="mt-4 text-2xl font-semibold text-main-blue-950">{member.name}</h3>
               <p className="text-gray-600">{member.position}</p>
          </div>
     )
}