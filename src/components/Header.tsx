import Image from "next/image"
import LogoDesc from "@/assets/desc softlab.png"
import Link from "next/link"

const Header = () => {
     return (
     <div className="header">
          <header className="logo-container">
               <Link href="/"><Image src={LogoDesc} width="40" height="40" alt="desc image" className="logo-image" /></Link>
               <h2>Desc Softlab</h2>
          </header>
          <div className="nav-bar">
               <Link href="/works">Work</Link>
               <Link href="/about">About</Link>
               <Link href="/services">Services</Link>
               <Link href="/contact-us">Contact Us</Link>
          </div>
     </div>
     )
}

export default Header