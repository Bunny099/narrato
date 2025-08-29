
import { useState } from "react";
import { Mail } from "lucide-react"
import { FaGoogle } from "react-icons/fa";
export function AuthModal({ onClose }: { onClose?: () => void }) {

    const [isSignup,setSignup] = useState<boolean>(true)

    return <div className="fixed inset-0 bg-black/20  min-h-screen w-full flex flex-col items-center justify-center" >

        { isSignup ?  <div className="relative bg-white rounded-lg flex flex-col items-center   w-[600px] h-[400px] px-22">
            {/* Joining first time account creation - Sign up*/}

            <div className=" relative top-0 left-70 flex items-end justify-end">
                <button onClick={onClose} className="hover:cursor-pointer hover:text-gray-900 items-end w-8 h-8 text-gray-500">X</button>
            </div>

        <h1 className="text-3xl  pb-2 font-semibold">Join Narrato </h1> 
            

            <div className="relative rounded-3xl py-2 mt-6 w-80 text-center border border-gray-800"> <p className="absolute left-3 top-3 text-gray-400" ><FaGoogle /> </p> Sign up with google</div>


            <div className="relative rounded-3xl py-2  mt-3 w-80 text-center border border-gray-800"><Mail className="absolute left-2 top-2 " size={18} color="gray" />Sign up with Email</div>


            <div onClick={()=>setSignup(false)} className="py-6">Already have an account? <span className=" underline">Sign in</span></div>

            <p className="text-gray-500">Click “Sign up” to agree to Narrato’s Terms of Service and acknowledge that Narrato’s Privacy Policy applies to you.</p>
        </div> 
        :
         <div className="relative bg-white rounded-lg flex flex-col items-center   w-[600px] h-[400px] px-22">
            {/* Joining first time account creation - Sign up*/}

            <div className=" relative top-0 left-70 flex items-end justify-end">
                <button onClick={onClose} className="hover:cursor-pointer hover:text-gray-900 items-end w-8 h-8 text-gray-500">X</button>
            </div>

        <h1 className="text-3xl  pb-2 font-semibold">Welcome Back </h1> 
            

            <div className="relative rounded-3xl py-2 mt-6 w-80 text-center border border-gray-800"> <p className="absolute left-3 top-3 text-gray-400" ><FaGoogle /> </p> Sign in with google</div>


            <div className="relative rounded-3xl py-2  mt-3 w-80 text-center border border-gray-800"><Mail className="absolute left-2 top-2 " size={18} color="gray" />Sign in with Email</div>


            <div onClick={()=>setSignup(true)} className="py-6">Dont have an account? <span className=" underline">Sign up</span></div>

            <p className="text-gray-500">Click “Sign In” to agree to Narrato’s Terms of Service and acknowledge that Narrato’s Privacy Policy applies to you.</p>
        </div>
        
        
        
        }

       



    </div>
}