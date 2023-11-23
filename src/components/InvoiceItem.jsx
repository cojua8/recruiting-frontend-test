export default function InvoiceItem({ props }) {
  const usdValue =
    props.currency === "CLP" ? (
      <span className="text-slate-500">(${props.amount / 800} USD)</span>
    ) : null;

  return (
    <div className="flex flex-row items-center border-slate-500 border px-2 hover:bg-slate-300">
      <input
        id={props.id}
        type="radio"
        value=""
        name="invoice"
        onClick={() => props.setSelectedInvoice(props)}
        className="mr-2"
      />
      <label htmlFor={props.id}>
        <div className="flex flex-row justify-between w-3/4">
          <div>
            {props.id}
            <span className="text-slate-500">({props.organization_id}) </span>
          </div>
          <p>
            ${props.amount} {props.currency} {usdValue}
          </p>
          <p>Recibida</p>
        </div>
      </label>
    </div>
  );
}
