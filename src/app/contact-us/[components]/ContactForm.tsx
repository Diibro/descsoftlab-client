/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { contactSupport} from "@/server-actions/contact";
import { DataInputs } from "@/utils/util-classes"
import { ChangeEvent, useState } from "react";

export const ContactForm = ({}) => {
     const messageInputs  = new DataInputs();
     const [result,setResult] = useState<{status:boolean, message:string} | null>(null);
     const [loading, setLoading] = useState(false);

     const submit = async(e:ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          try {
               setLoading(true);
               const inputsCheck = messageInputs.checkFieldsIn(["name", "email","subject", "message"]);
               if(!inputsCheck.status){
                    return setResult(inputsCheck);
               }
               const res  = await contactSupport({name: messageInputs.get("name",""), email: messageInputs.get("email", ""), description:messageInputs.get("message", ""), subject:messageInputs.get("subject", "")});
               return setResult(res);
          } catch (error) {
               return setResult({status:false,message:"Error contacting the support. Try again later."})
          }finally{
               setLoading(false);
          }
     }
     return (
          <form onSubmit={submit} method="POST" className="mt-6 space-y-4 w-full">
              <div>
                <label className="block text-gray-700 font-medium">Full Name:</label>
                <input
                  title="Client name"
                  type="text"
                  name="name"
                  required
                  onChange={(e) => messageInputs.set("name", e.target.value, "string" )}
                  className="w-full outline-none border border-gray-300 p-3 rounded-lg focus:border-main-blue-500 focus:ring-main-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email Address</label>
                <input
                  title="Client email"
                  type="email"
                  name="email"
                  required
                  onChange={(e) => messageInputs.set("email", e.target.value, "string" )}
                  className="w-full border outline-none border-gray-300 p-3 rounded-lg focus:border-main-blue-500 focus:ring-main-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Subject</label>
                <input
                  title="Subject"
                  type="text"
                  name="subject"
                  required
                  onChange={(e) => messageInputs.set("subject", e.target.value, "string" )}
                  className="w-full border outline-none border-gray-300 p-3 rounded-lg focus:border-main-blue-500 focus:ring-main-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  title="Client message"
                  name="message"
                  rows={4}
                  required
                  onChange={(e) => messageInputs.set("message", e.target.value, "string" )}
                  className="w-full border outline-none border-gray-300 p-3 rounded-lg focus:border-main-blue-500 focus:ring-main-blue-500"
                ></textarea>
              </div>
               {
                    result ? <>
                         {
                              result.status 
                              ? <p className="text-[1rem] font-medium text-green-600">{result.message}</p> 
                              : <p className="text-[1rem] font-medium text-red-600">{result.message}</p>
                         }
                    </> :null
               }
              <button
                type="submit"
                disabled={loading}
                className="w-full disabled:bg-gray-600 disabled:cursor-not-allowed bg-main-blue-800 text-white font-semibold py-3 rounded-lg hover:bg-main-blue-950 transition flex items-center justify-center space-x-2"
              >
                <span>Send Message</span> <span>✈️</span>
              </button>
            </form>
     )
}