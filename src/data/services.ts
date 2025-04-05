import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { IconType } from "react-icons"
import { FaPaintBrush } from "react-icons/fa"
import { FaCode, FaLightbulb } from "react-icons/fa6"
import { PiChartLineUpBold } from "react-icons/pi"

//importing images
import DesignImage from '../../public/services/design.webp';
import SoftwareImage from '../../public/services/software.png';
import ConsultingImage from '../../public/services/consulting.webp';
import DigitalImage from '../../public/services/digital.jpg';
export interface IServiceCategory {
     id:number
     title:string
     intro: string
     description:string
     services: string[]
     icon: IconType
     image: StaticImport
}

export const MainServices: IServiceCategory[] = [
     {
          id:1,
          title: "Software Development", 
          icon: FaCode, 
          image:SoftwareImage,
          intro: "We build smart, scalable, and secure software solutions tailored to your needs.",
          description: " From mobile apps to web platforms, our team crafts user-friendly applications that solve real-world problems and drive business growth. Whether you're starting from scratch or improving existing systems, we turn ideas into powerful digital products." ,
          services: ["Web application development", "Mobile app development", "API development and integration", "SaaS product development", "E-commerce platforms", "Maintenance & support services","DevOps and CI/CD setup"]
     },
     {
          id:2,
          title: "IT Consulting", 
          icon: FaLightbulb, 
          image: ConsultingImage,
          intro: "Expert guidance to help you make the right tech decisions.",
          description: "We offer strategic IT consulting services to align your technology with your business goals. From infrastructure planning to system audits and digital transformation, we help you reduce risks, optimize performance, and stay ahead of the curve." ,
          services: ["IT infrastructure analysis & planning","Cloud migration and architecture design","Cybersecurity assessment and implementation", "Data Analytics", "IT audits and risk assessment","Data management & backup solutions","Systems integration consulting", "IT strategy planning, architecture and implementation", "Software Installations: operating systems, ms office, and other applications","Technology roadmap development"]
     },
     {
          id:3,
          title: "Design", 
          icon: FaPaintBrush, 
          image: DesignImage,
          intro:"Creative, impactful, and user-centered design that brings your brand to life.",
          description: "Our design services cover everything from UI/UX and branding to marketing materials. We blend aesthetics with functionality to create visuals that not only look amazing but also engage and convert your audience." ,
          services: ["Logo and brand identity design","Graphic design (posters, banners, business cards)","Website design (responsive & modern)","Product mockups","UI/UX design for websites and apps", "Wireframing and prototyping","Packaging design", "Presentation design", "Social media creatives"]
     },
     {
          id:4,
          title: "Digital Marketing", 
          icon: PiChartLineUpBold, 
          image:DigitalImage,
          intro:"Grow your online presence and reach the right audience.",
          description: "We provide full-service digital marketing including SEO, social media management, paid ads, email marketing, and content strategy. Our goal is to boost your visibility, drive traffic, and help you convert leads into loyal customers." ,
          services: ["Search Engine Optimization (SEO)", "Social media marketing & management", "Google Ads & social ads (Meta, LinkedIn, X)", "Content marketing & blog writing","Email marketing & automation", "Conversion rate optimization", "Analytics and performance reporting","Online reputation management", "Video marketing & short-form content strategy"]
     }
]