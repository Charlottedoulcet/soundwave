import "./button.css";

const Button = ({ children, variant = "primary", size = "md", type = "button", disabled = false, onclick }) => {
  const className = `btn btn--${variant} btn--${size}`;

  return (
    <button type={type} className={className} disabled={disabled} onclick={onclick}>
      {children}
    </button>
  );
};

export default Button;
