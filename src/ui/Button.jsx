const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  transparent: "btn--transparent",
};

function Button({ children, variant = "primary", onClick }) {
  return (
    <button onClick={onClick} className={`btn ${btnType[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
