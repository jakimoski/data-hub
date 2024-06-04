import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../ModalComponent/Modal";

export default function Catalog({ catalog }: { catalog: string }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <img onClick={() => setShowModal(true)} src={catalog} alt="Neptun" />
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)}>
            <div className="catalog">
              <img className="catalog__img" src={catalog} alt="Neptun" />
            </div>
          </Modal>,
          document.body
        )}
    </>
  );
}
