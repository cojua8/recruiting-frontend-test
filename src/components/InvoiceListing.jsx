import React, { useEffect, useState } from "react";
import InvoiceItem from "./InvoiceItem";
import CreditNoteItem from "./CreditNoteItem";
import SucessModal from "./SucessModal";

export default function InvoiceListing() {
  const [data, setData] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [selectedCreditNote, setSelectedCreditNote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://recruiting.api.bemmbo.com/invoices/pending")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const receivedInvoices = data.filter((item) => item.type === "received");

  const creditNotes = data.filter(
    (item) => item.type === "credit_note" && item.reference === selectedInvoice
  );

  return (
    <div className="flex flex-col items-center mt-2">
      <p className="text-2xl font-medium">Selecciona una factura</p>
      <div className="my-4">
        {receivedInvoices.map((item, index) => (
          <InvoiceItem key={index} props={{ ...item, setSelectedInvoice }} />
        ))}
      </div>
      <p className="text-2xl font-medium">Notas de crédito</p>
      <div className="my-4">
        {creditNotes.length > 0 ? (
          creditNotes.map((item, index) => (
            <CreditNoteItem
              key={index}
              props={{ ...item, selectedInvoice, setSelectedCreditNote }}
            />
          ))
        ) : (
          <p className="text-slate-500 italic">No credit notes found</p>
        )}
      </div>
      <button
        className="rounded bg-fuchsia-400 mt-5"
        onClick={() => setShowModal(true)}
        disabled={selectedCreditNote !== null}
      >
        <p className="text-white my-2 mx-3">Asignar</p>
      </button>
      <SucessModal {...{ showModal, setShowModal }} />
    </div>
  );
}
