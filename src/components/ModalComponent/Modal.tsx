import { useEffect } from "react";
import "./Modal.scss";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return createPortal(
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={"modal-overlay"}
      role="dialog"
      aria-modal="true"
    >
      <div className={"modal-overlay"} onClick={() => onClose()}></div>
      <div className="modal">
        <div className="modal__wrapper">
          <button
            className="modal__close-btn"
            onClick={() => onClose()}
          ></button>
          {children}
        </div>
      </div>
    </motion.section>,
    document.body
  );
};

export default Modal;
