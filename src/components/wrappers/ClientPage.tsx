import { ReactNode } from "react"
import ClientHeader from "../headers/ClientHeader"
import ClientFooter from "../footers/ClientFooter"

const ClientPage = ({children}:{children:ReactNode}) => {
     return (
          <>
               <ClientHeader />
               <main className="w-full flex-1">{children}</main>
               <ClientFooter />
          </>
     )
}

export default ClientPage