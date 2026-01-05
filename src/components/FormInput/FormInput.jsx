import "./FormInput.css";

const FormInput = ({ label, type = "text", name, value, onChange, error, placeholder }) => {
  return (
    <div className="form-input">
      <label
        htmlFor={name}
        className="form-input__label"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`form-input__field ${error ? "form-input__field--error" : ""}`}
      />
      {error && <span className="form-input__error">{error}</span>}
    </div>
  );
};

export default FormInput;
