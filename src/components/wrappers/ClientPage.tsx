import { ReactNode } from "react"
import ClientHeader from "../headers/ClientHeader"
import ClientFooter from "../footers/ClientFooter"

const ClientPage = ({children}:{children:ReactNode}) => {
     return (
          <div className="w-full min-h-screen overflow-x-hidden flex flex-col">
               <ClientHeader />
               <main className="w-full flex-1">{children}</main>
               <ClientFooter />
          </div>
     )
}

export default ClientPage