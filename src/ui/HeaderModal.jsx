
import useOutsideClick from "../hooks/useOutsideClick"

function HeaderModal({ open, onClose, children }) {
  const ref=useOutsideClick(onClose)
  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 right-0 w-full h-screen bg-primary-100 bg-opacity-30 z-50">
        <div
          ref={ref}
          className="fixed top-5 right-5 rounded-lg bg-white p-4 shadow-lg transition-all duration-500 ease-out w-1/2 max-h-[calc(100vh-2rem) overflow-y-auto]"
        >
          
          {children}
        </div>
      </div>
    )
  );
}

export default HeaderModal;
