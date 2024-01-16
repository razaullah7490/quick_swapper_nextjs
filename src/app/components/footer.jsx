import { ToastContainer } from "react-toastify"

const Footer = () => {
  return (
    <>
    
<ToastContainer
className={"zl"}
position="top-right"
autoClose={5000}
hideProgressBar={true}
newestOnTop={true}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  )
}

export default Footer