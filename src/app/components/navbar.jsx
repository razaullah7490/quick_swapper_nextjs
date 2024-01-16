"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../features/authSlice"
import { useRouter } from "next/navigation"
const Navbar = () => {
    const authInfo = useSelector(state => state.auth.user)
    const [showProfilePopup, setShowProfilePopup] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()

    return (
        <>

            <div className='navbarGradient py-3 flex flex-col'>
                <div className="flex flex-row w-11/12 mx-auto justify-between items-center">
                    <p className="text-white text-sm">Welcome to Quick Swapper</p>
                    <div className="text-white text-sm  flex flex-row items-center  gap-3">
                        <Image src={'/assets/DeviceMobileCamera.svg'} width={24} height={24} />
                        <span>Get App</span>
                    </div>
                </div>
                <div className="hidden sm:flex  w-11/12 mx-auto mt-3 flex-row justify-between items-center">
                    <Link href={'/'}>
                        <Image src={'/assets/logo_540.png'} className="w-[150px] h-[37.25px]" height={200} width={200} />
                    </Link>
                    <div className="flex bg-white relative rounded-full px-4 py-2 w-4/12">
                        <Image src={'/assets/Search.svg'} width={15.64} height={16.02} />
                        <input type="text" name="" className=" outline-none border-none px-4 placeholder:text-sm " placeholder="Search Product" id="" />
                    </div>
                    <div className="flex flex-row gap-5 items-center">
                        <div className="icons flex flex-row gap-5">
                            <Image src={'/assets/Chat.svg'} width={24} height={24} />
                            <Image src={'/assets/Matches.svg'} width={24} height={24} />
                            <Image src={'/assets/Notification.svg'} width={24} height={24} />
                        </div>
                        <div className="rounded-md flex px-3 py-2 relative ">
                            {/* <Image src={'/assets/Chat.svg'}  width={24} height={24}/> */}
                            {authInfo.token ? (<>
                                <button onClick={() => { setShowProfilePopup(prev => !prev) }} className="flex flex-row bg-gray-50 rounded-full py-2   px-5 items-center   gap-4">
                                    Profile</button>
                                {showProfilePopup && (
                                    <div className="absolute flex flex-col bg-gray-50 rounded-md  gap-4 w-[12rem] py-4 px-4 right-3 top-14">
                                        <div className="flex gap-3 flex-row">
                                            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                                            <div className="flex flex-col">
                                                <p className="text-sm font-medium">{authInfo?.name}</p>
                                            </div>
                                        </div>
                                        <button onClick={()=>{dispatch(logout())}} className="py-1 px-2 bg-white rounded-full border border-red-300">Logout</button>
                                        <button onClick={()=>{router.push("/delete")}} className="py-1 px-2 bg-red-600 text-white rounded-full ">Delete Account</button>
                                    </div>
                                )}
                            </>
                            ) : (
                                <Link href={'/login'} className="flex flex-row bg-gray-50 rounded-full py-2   px-5 items-center   gap-4">
                                    Login</Link>

                            )}
                        </div>
                        {/* <Link href={'/'} className="flex flex-row bg-gray-50 rounded-full py-2   px-5 items-center   gap-4">
                            <GoPlus size={25} color="black"/>
                            <span className="font-medium">Add Product</span>
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar