"use client"
import InputField from "../components/inputField";
import { motion } from 'framer-motion'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector , useDispatch } from "react-redux";

import Image from "next/image";
import { useEffect, useState } from "react";
import { logIn } from "../services/authService";
import { loginThunk, loginWithGoogleThunk } from "../features/authSlice";
import { useRouter } from 'next/navigation'


  

import { signIn, useSession } from "next-auth/react"
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/footer";
import PasswordField from "../components/passwordInputField";


export default function LoginPage() {
 
  const dispatch = useDispatch()
  const router = useRouter();
  const session = useSession()
  
  
  const auth = useSelector(state => state.auth.user)


  const [userInfo , setUserInfo] = useState({
    email : "",
    password : "",
    mobileToken: ""
  })


  
  const handleInputChange = (e) =>{
    setUserInfo({...userInfo  , [e.target.name] :  e.target.value})
}


  const handleLoginSubmit = async(e) =>{
    console.log("handleLoginSubmit")
    if(!userInfo.email){
     return toast.error("Email Address is required !")
    }
    if(!userInfo.password){
      return toast.error("Password is required !")
    }
    console.log({userInfo})
    const { payload } = await dispatch(loginThunk(userInfo));
    if (payload.Success) {
      router.push('/');
    } else {
      toast.warn(payload.message)
      toast.warn(payload.error)
    }

  } 

useEffect(() =>{
  if(auth._id && auth.token){
    router.replace("/")
  }
},[])


  useEffect(()=>{
    console.log({session})
    if(session.status === "authenticated"){
      // dispatch hanldeLoginWithGogle and set  user info to server
      const googleDAta = {
        email : session.data.user.email,
        displayName : session.data.user.name,
        photoUrl : session.data.user.image,
        mobileToken : ""
      }
      dispatch(loginWithGoogleThunk(googleDAta)).then(res =>{
        console.log({res})
      }).catch(err => console.log({err}))
    }
  },[session.status])


  return (
    <div className="flex flex-col sm:flex-row w-full overflow-hidden ">


      <div className="w-full hidden sm:block mx-auto h-[100vh]  sm:w-6/12 bg-[#7B64D6]">
        <div className="flex m-5">
          <Image src={'/assets/logo_540.png'} width={100} height={120} className="w-32" alt="Image" />
        </div>

        <div className="flex h-full  justify-center items-center">
        <motion.div
              initial={{ scale : 0.1  }}
              animate={{ scale: 1 }}
              transition={{ duration : .3}}
          
          className="bg-[#866DE8] h-[17rem] w-[17rem] rounded-full">

            <div className="flex flex-col relative">

            <motion.div
              initial={{ x: -100 , opacity : 0 }}
              animate={{ x : 4 , opacity : 1 }}
              transition={{ duration: 0.2 }}           
              className=" relative right-[-1.5rem] ml-auto w-[6rem]">
                <Image
                  src={'/assets/loginpage_backlayer_1.png'}
                  alt="Your Image Alt Text"
                  width={100}
                  height={100}
                />
              </motion.div>

              <motion.div
              initial={{ x: 50 , opacity : 0 }}
              animate={{ x : -1 , opacity : 1 }}
              transition={{ duration: 0.7 }}
              className="bg-gray-300 relative left-[-1rem] sm:left-[-2rem]  w-[6rem]">
                <Image
                  src={'/assets/loginpage_backlayer_2.png'}
                  alt="Your Image Alt Text"
                  width={100}
                  height={100}
                />
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}

              className="absolute left-[3.5rem] sm:left-[3.5rem] top-[-3.1rem]   sm:top-[-3.5rem] w-[10rem]  overflow-hidden  rounded-bl-[3rem]  rounded-br-[3rem]">
                <Image
                  src={'/assets/phone_ss.png'}
                  alt="Image"
                  className="w-full h-full"
                  width={800} 
                  height={800}
                />
              </motion.div>
          </div>
              </motion.div>
        </div>

      </div>
      <div className="w-full mx-auto pt-12  h-[100vh] overflow-y-scroll mb-4 sm:mb-0 sm:w-6/12 bg-white flex flex-col mx-auto  items-center">
        {/* <div className="flex m-5 w-6 ml-auto">
          <AiOutlineCloseCircle size={30} />
        </div>
 */}

        <p className="font-semibold  text-2xl">
          Welcome To Quick Swappers
        </p>
        <p className="text-xl font-normal  mt-5">Please enter your details</p>

        <div onClick={()=>{signIn("google")}} className="googleBtn cursor-pointer my-10 py-3 w-8/12 mx-auto flex rounded-full justify-center items-center gap-3 border border-gray-200 flex-row">
          <Image width={20} height={20} src={'/assets/googleLogo.png'}  alt="Image"/>
          <p className="text-sm font-semibold">Sign In with google</p>
        </div>


        <div className="flex flex-row w-8/12  mx-auto justify-between items-center">
          <p className="border border-b  border-gray-300 w-5/12"></p>
          <span>OR</span>
          <p className="border border-b  border-gray-300 w-5/12"></p>
        </div>
        <div className="mt-10 w-10/12 mx-auto">
          <InputField  onChange={(e)=>{handleInputChange(e)}} label="Email" type="text" name="email" placeholder="Email Address" />
        </div>
        <div className="mt-5 w-10/12 mx-auto">
          <PasswordField  onChange={(e)=>{handleInputChange(e)}} label="Password"  name="password" placeholder="Password" />
        </div>
        <p className="text-sm font-normal text-blue-400 text-end w-8/12 mt-2">Forget Password ?</p>



      <div className="flex w-8/12 mt-20">
        <button onClick={handleLoginSubmit} className="rounded-full py-3 px-3 w-full text-center bg-[#7B64D6] text-white">  
          Login
        </button>
      </div>

      <p className=" font-medium mt-3 text-center text-gray-800">Login as guest</p>
      <p className=" font-normal  mt-3  mb-6 text-center text-gray-800">Don’t have an account? <a href="/register" className="text-blue-500">Register</a></p>


      </div>
  </div>
  )
}
