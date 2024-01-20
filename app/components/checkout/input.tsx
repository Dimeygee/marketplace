export const CheckoutInput = ({
  type,
  placeholder,
  label,
}: {
  type: string;
  placeholder?: string;
  label?: string;
}) => {
    return  (
        <div className="input_container">
            <label htmlFor={label}>{label}</label>
            { type === 'select' ? (
            <select>

            </select>
            ) : (
            <input type={type} placeholder={placeholder} id={label} name={label} />
            ) }
        </div>
    )
};
