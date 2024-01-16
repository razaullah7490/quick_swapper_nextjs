"use client"
import InputField from "../components/inputField";
import { motion } from 'framer-motion'
import { AiOutlineCloseCircle } from "react-icons/ai";

import Image from "next/image";
import { useState, useEffect } from "react";


import { ToastContainer, toast } from 'react-toastify';




export default function RegsiterPage() {

    const [userInfo, setUserInfo] = useState({
        fullname: "",
        gender: "",
        dob: "",
        email: "",
        phone: "",
        lat: "",
        long : "",
        password: "",
        cPassword: ""
    })

    const handleInputChange = (e) => {
        console.log(e.target.name + "-" + e.target.value)
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }




    const handleRegisterBtn = async () => {
        console.log({userInfo})
        toast("wow")
        // signUp(userInfo)
    }




    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserInfo({...userInfo ,  lat : latitude , long : longitude})
          },
          (error) => {
            console.error('Error getting location:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser');
      }
    };

    useEffect(() => {
        getLocation()


    }, [])

    // useEffect(() => {
    //     if ('Notification' in window) {
    //       Notification.requestPermission().then( async (permission) => {
    //         if (permission === 'granted') {
    //           console.log('Notification permission granted.');
    //           const currentToken = await messaging.getToken({
    //             vapidKey: "your_web_push_certificate_key_pair",
    //           });
    //         console.log('FCM Token:', currentToken);
    //         }
    //       });
    //     }
    //   }, []);


    

    const requestSubscription = async () => {
        if ('serviceWorker' in navigator && 'PushManager' in window) {
          // Register the service worker
          const registration = await navigator.serviceWorker.register('/service-worker.js');

          // Request permission and subscribe
          const permission = await Notification.requestPermission();
          if (permission === 'granted') {
            const subscription = await registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: 'BETZJJnaW8CTU8NLua3h8mQK0QtO1IDKBBOY3PzDhA-pBZBf4K0S0s7ivFXkvRSPNkwmoDTtiKvlpFYj7lsPS6s',
            });

            return  JSON.stringify(subscription)
          }
        }
      };  





    useEffect(() => {
       
        requestSubscription().then(res => {
            console.log({res})
         }).catch(err => console.log({err}))
      }, []);


    // const getSubscription = async () => {
    //     const registration = await navigator.serviceWorker.register('/service-worker.js');
    //     const subscription = await registration.pushManager.subscribe({
    //         userVisibleOnly: true,
    //         applicationServerKey: 'BETZJJnaW8CTU8NLua3h8mQK0QtO1IDKBBOY3PzDhA-pBZBf4K0S0s7ivFXkvRSPNkwmoDTtiKvlpFYj7lsPS6s',
    //     })
    //     return  JSON.stringify(subscription)
    // }


    




    return (
        <div className="flex flex-col sm:flex-row w-full   overflow-hidden ">




            <div className="w-full mx-auto h-[100vh] hidden sm:block  sm:w-6/12 bg-[#7B64D6]">
                <div className="flex m-5">
                    <Image src={'/assets/logo_540.png'} width={100} height={120} className="w-32" alt="Image" />
                </div>

                <div className="flex h-full  justify-center items-center">
                    <motion.div
                        initial={{ scale: 0.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: .3 }}

                        className="bg-[#866DE8] h-[17rem] w-[17rem] rounded-full">

                        <div className="flex flex-col relative">

                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 4, opacity: 1 }}
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
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: -1, opacity: 1 }}
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
                                initial={{ opacity: 0, y: 40 }}
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
            <div className="w-full h-[100vh] overflow-y-scroll	 mx-auto pt-12  pb-12 sm:mb-0 sm:w-6/12 bg-white flex flex-col mx-auto  items-center">
                {/* <div className="flex m-5 w-6 ml-auto">
                            <AiOutlineCloseCircle size={30} />
                            </div>
                    */}

                <p className="font-semibold  text-2xl">
                    Create account
                </p>
                <p className="md:text-xl text-normal font-normal  mt-5">Create your account to get started</p>




                <div className="mt-10 w-10/12 mx-auto">
                    {/* <InputField name="fullName"  onChange={(e) => {handleInputChange(e)}} label="Full Name" type="text" placeholder="Enter your Full Name" /> */}
                </div>

                <p className="text-sm text-start w-9/12 px-3 mt-4 font-medium ">Gender</p>
                <div className="mt-3 w-8/12 mx-auto flex flex-row justify-evenly">
                    <div className="flex flex-row gap-2">
                        <input  onChange={(e) => {handleInputChange(e)}} value={"male"}  type="radio" name="gender" id="male" />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input type="radio"   onChange={(e) => {handleInputChange(e)}}  name="gender" value={"female"} id="female" />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>




                <div className="mt-5 w-10/12 mx-auto">
                    <InputField onChange={(e) => {handleInputChange(e)}} value={userInfo.fullname} label="Full Name" type="text" name="fullname" placeholder="Enter Your Name " />
                </div>


                <div className="mt-5 w-10/12 mx-auto">
                    <InputField onChange={(e) => {handleInputChange(e)}} value={userInfo.email} label="Email" type="email" name="email" placeholder="Enter Your Email " />
                </div>

               

                <div className="mt-5 w-10/12 mx-auto">
                    <InputField  onChange={(e) => {handleInputChange(e)}} value={userInfo.phone}  label="Phone" type="number" name="phone" placeholder="Enter Your Phone " />
                </div>


                <div className="mt-5 w-10/12 mx-auto">
                    <InputField  onChange={(e) => {handleInputChange(e)}} value={userInfo.dob}  label="Date Of Birth" type="date" name="dob" />
                </div>


                <div className="mt-5 w-10/12 mx-auto">
                    <InputField  onChange={(e) => {handleInputChange(e)}} value={userInfo.password}  label="Password" type="password" name="password" placeholder="Password " />
                </div>




                <div className="mt-5 w-10/12 mx-auto">
                    <InputField  onChange={(e) => {handleInputChange(e)}} value={userInfo.cPassword}  label="Confirm Password" type="password" name="cPassword" placeholder="Password " />
                </div>


                <div className="flex w-8/12 mt-20">
                    <button onClick={handleRegisterBtn} className="rounded-full py-3 px-3 w-full text-center bg-[#7B64D6] text-white">
                        Register
                    </button>
                </div>

                <p className=" font-normal  mt-5 text-center text-gray-800">Already have an account ? <a href="/login" className="text-blue-500">Login</a></p>


            </div>
        </div>
    )
}
