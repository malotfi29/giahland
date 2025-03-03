const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  transparent: "btn--transparent",
};

function Button({ children, variant = "primary", onClick,className,type }) {
  return (
    <button type={type} onClick={onClick} className={`btn ${className} ${btnType[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
