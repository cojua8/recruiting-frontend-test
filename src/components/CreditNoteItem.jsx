export default function InvoiceItem({ props }) {
  console.log(props);
  return (
    <div className="flex items-center mb-4">
      <input
        id={props.id}
        type="radio"
        value=""
        name="credit_note"
        onClick={() => props.setSelectedCreditNote(props.id)}
      />
      <label htmlFor={props.id}>
        <div className="flex flex-row justify-between">
          <div>
            {props.id}
            <span className="text-slate-500">({props.organization_id}) </span>
          </div>
          <p>
            ${props.amount} {props.currency}
          </p>
          <p>{props.selectedInvoice}</p>
        </div>
      </label>
    </div>
  );
}
