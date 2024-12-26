import { useEffect, useRef } from "react";
import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ open, onClose, title, children }) {
  const ref=useOutsideClick(onClose)
  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-secondary-800 bg-opacity-30 z-50">
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 shadow-lg transition-all duration-500 ease-out w-[calc(100vw-1rem)] md:max-w-lg h-auto max-h-screen overflow-y-scroll"
        >
          <div className="flex items-center justify-between border-b border-b-primary-300 pb-2 mb-6">
            <div className="text-secondary-700 font-bold text-base">{title}</div>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-primary-900" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
