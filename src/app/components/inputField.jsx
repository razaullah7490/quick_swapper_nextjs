// CommonInput.js
import React from 'react';

const InputField = ({ label, ...props }) => {
  return (
    <div className='flex flex-col gap-2 mx-auto w-10/12'>
      <label className='text-sm font-medium'>{label}</label>
      <input className='py-2 rounded-full px-5 placeholder:font-light placeholder:text-sm text-sm   placeholder:text-gray-400 outline-none border border-gray-200' {...props} />
    </div>
  );
};

export default InputField;
