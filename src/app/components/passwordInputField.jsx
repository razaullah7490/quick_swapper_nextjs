// CommonInput.js

import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

import { IoEyeOffOutline } from "react-icons/io5";

const PasswordField = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex flex-col gap-2 mx-auto w-10/12  relative'>
      <label className='text-sm font-medium'>{label}</label>
      <input
        type={showPassword ? "text" : "password"}
        className='py-2 rounded-full px-5 placeholder:font-light placeholder:text-sm text-sm placeholder:text-gray-400 outline-none border border-gray-200'
        {...props}
      />
      <div className="absolute  right-4 bottom-3">
        {showPassword ? (
          <VscEyeClosed onClick={() => setShowPassword(false)} />
        ) : (
          <VscEye onClick={() => setShowPassword(true)} />
        )}
      </div>
    </div>
  );
};

export default PasswordField;
