import { useEffect, useRef } from "react";
import "./Modal.scss";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

type ModalProps = {
  onClose: () => void;
};

const OverlayModal: React.FC<ModalProps> = ({ onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        console.log(onClose);

        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  const closeModal = (e: React.MouseEvent) => {
    console.log(modalRef.current);
    e.stopPropagation();
    onClose();
  };

  return createPortal(
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={"overlay-nav"}
      onClick={closeModal}
      ref={modalRef}
    ></motion.section>,
    document.body
  );
};

export default OverlayModal;
