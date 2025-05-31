import Divider from "./Divider";
import { motion } from "framer-motion";
export default function Modal({
  title,
  submitButton,
  onClickSubmit,
  setShowModal,
  children,
}) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="animate-fadein fixed inset-0 bg-neutral-100/30 flex items-center justify-center z-50 transition"
    >
      <div
        role="dialog"
        aria-modal="true"
        className="bg-white rounded-md shadow-lg max-w-md w-full"
      >
        <div className="flex items-center justify-between p-2">
          <h1 className="text-xl uppercase">{title}</h1>
          <button
            type="button"
            className="bg-red-500 p-1 rounded-md text-white hover:bg-red-600 transition cursor-pointer text-sm"
            onClick={() => setShowModal(false)}
          >
            X
          </button>
        </div>
        <Divider />
        <div className="p-2">{children}</div>
        <Divider />
        <div className="p-2 flex justify-end space-x-2">
          <button
            type="button"
            className="bg-red-500 p-1 rounded-md text-white hover:bg-red-600 transition cursor-pointer text-sm"
            onClick={() => setShowModal(false)}
          >
            close
          </button>
          <button
            type="button"
            className="bg-emerald-500 p-1 rounded-md text-white hover:bg-emerald-600 transition cursor-pointer text-sm"
            onClick={onClickSubmit}
          >
            {submitButton}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
