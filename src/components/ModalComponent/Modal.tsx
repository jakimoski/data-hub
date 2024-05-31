import { useEffect } from "react";
import "./Modal.scss";
import { createPortal } from "react-dom";

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
    <section className={"modal-overlay"}>
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
    </section>,
    document.body
  );
};

export default Modal;
