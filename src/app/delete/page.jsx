"use client"
import { useDispatch, useSelector } from "react-redux";
import { deleteAccountThunk } from "../features/authSlice";
import Navbar from "../components/navbar";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";





const DeleteProfile = () => {
  const authInfo = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()
  const router = useRouter();

 
  useEffect(()=>{
    if(!authInfo.id && !authInfo.token){
      return (router.push("/login"))
    }

  },[])
 
const hanldeDeleteBtn  = async() =>{
    const { payload } = await dispatch(deleteAccountThunk(authInfo));
    if (payload?.Success) {
      toast.success("Your Account has Been Deleted !")
      return (router.push("/login"))
    } else {
      console.error("Login failed. Handle the error appropriately.");
      // You might want to display an error message to the user or take other actions.
    }
}


  return <>
  <title>Delete Profile</title>

  <Navbar/>
    <section className="flex flex-col w-10/12 my-12 mx-auto ">
        <p className="text-2xl font-bold text-red-500">Instant Delete Account</p>

       
        <div>
            <p className="my-4">
              Before you proceed, please read the following information carefully:
            </p>
            <ul className="ml-5 list-disc">
              <li>Your profile information will be permanently removed.</li>
              <li>All products linked with your profle will be lost.</li>
              <li>Access to your account and associated data will be lost.</li>
              <li>Any content, including posts and contributions, will be permanently deleted.</li>
            </ul>
      
            <p>
              To confirm the deletion of your profile, type the word <strong>DELETE</strong>:
            </p>
           
      
            <button onClick={hanldeDeleteBtn} className="py-2 px-4 rounded-full bg-red-500 text-white font-semibold mt-5">Delete</button>
          </div>
    </section>
  </>
};

export default DeleteProfile;
