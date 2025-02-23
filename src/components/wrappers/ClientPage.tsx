import { ReactNode } from "react"
import ClientHeader from "../headers/ClientHeader"
import ClientFooter from "../footers/ClientFooter"

const ClientPage = ({children}:{children:ReactNode}) => {
     return (
          <>
               <ClientHeader />
               <main className="flex flex-col items-center max-w-[1512px] mx-auto ">{children}</main>
               <ClientFooter />
          </>
     )
}

export default ClientPage