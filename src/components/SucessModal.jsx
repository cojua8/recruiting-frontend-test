import ReactModal from "react-modal";

export default function SuccessModal({
  showModal,
  setShowModal,
  creditNoteData,
  invoiceData,
}) {
  if (!showModal) {
    return null;
  } else {
    return (
      <ReactModal isOpen={showModal} className="bg-white">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 text-green-400 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
          <p>Nota de crédito asignada correctamente</p>
          <p>Nota de crédito: {creditNoteData.id}</p>
          <p>
            Monto: ${creditNoteData.amount} {creditNoteData.currency}
          </p>
          <p>Factura: {invoiceData.id}</p>
          <p>
            Monto: ${invoiceData.amount} {invoiceData.currency}
          </p>
          <p>
            Nuevo monto: ${invoiceData.amount - creditNoteData.amount}{" "}
            {invoiceData.currency}
          </p>
          <button
            className="rounded bg-fuchsia-400 mt-5"
            onClick={() => setShowModal(false)}
          >
            <p className="text-white my-2 mx-3">Cerrar</p>
          </button>
        </div>
      </ReactModal>
    );
  }
}
