export default function InvoiceItem({ props }) {
  const usdValue =
    props.currency === "CLP" ? (
      <span className="text-slate-500">(${props.amount / 800} USD)</span>
    ) : null;

  return (
    <div className="flex items-center border-slate-500 border px-2 hover:bg-slate-300">
      <input
        id={props.id}
        type="radio"
        value=""
        name="credit_note"
        onClick={() => props.setSelectedCreditNote(props)}
      />
      <label htmlFor={props.id}>
        <div className="flex flex-row justify-between">
          <div>
            {props.id}
            <span className="text-slate-500">({props.organization_id}) </span>
          </div>
          <p>
            ${props.amount} {props.currency} {usdValue}
          </p>
          <p>{props.selectedInvoice.id}</p>
        </div>
      </label>
    </div>
  );
}
