import Link from "next/link"
import styles from "./components.module.css"
const Footer = () => {
     return (
     <footer className="footer">
          <div className="col">
               <h4>Our Platforms</h4>
               <div className="links">
                    <Link href="https://mindblend.info">Mind Blend</Link>
               </div>
          </div>
          <div className="col">
               <h4>Location</h4>
               <div className="links">
                    <Link href="tel:+25078079232">Call Us: +250780795232</Link>
                    <Link href="mailto:descsoftlab22@gmail.com">Email us: descsoftlab22@gmail.com</Link>
               </div>
          </div>
          <div className="col">
               <h4>Do business</h4>
               <div className="links">
                    <Link href="https://wa.me/+250780795232">Whatsapp: +250780795232</Link>
               </div>
          </div>
          <div className="col">
               <h4>Support & Links</h4>
               <div className="links">
                    <Link href="/works">Work</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact-us">Contact Us</Link>
               </div>
          </div>
     </footer>
     )
}

export default Footer