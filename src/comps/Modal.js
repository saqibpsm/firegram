import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const clickHandle = e => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <div className='backdrop' onClick={clickHandle}>
      <motion.img
        src={selectedImg}
        alt='enlarge image'
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </div>
  );
};

export default Modal;
