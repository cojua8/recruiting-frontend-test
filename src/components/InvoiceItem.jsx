export default function InvoiceItem({ props }) {
  return (
    <div className="flex flex-row items-center">
      <input
        id={props.id}
        type="radio"
        value=""
        name="invoice"
        onClick={() => props.setSelectedInvoice(props.id)}
        className="mr-2"
      />
      <label htmlFor={props.id}>
        <div className="flex flex-row justify-between w-3/4">
          <div>
            {props.id}
            <span className="text-slate-500">({props.organization_id}) </span>
          </div>
          <p>
            ${props.amount} {props.currency}
          </p>
          <p>Recibida</p>
        </div>
      </label>
    </div>
  );
}
