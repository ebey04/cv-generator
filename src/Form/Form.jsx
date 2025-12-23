import './Form.css'

function Input({
    label,
    type = "text",
    value,
    onChange,
    name,
    placeholder
    }) 
    {
        return (
            <div className="input-group">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            </div>
        );
    }

    export default Input;