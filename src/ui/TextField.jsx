function TextField({
  label,
  name,
  
  placeholder="",
  register,
  validationSchema="",
  type = "text",
  required,
  errors,
}) {
  return (
    <div>
      <label className="mb-2 block text-primary-900" htmlFor={name}>
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
      // value={value}
        {...register(name, validationSchema)}
        className="textField__input"
        type={type}
        id={name}
        autoComplete="off"
        placeholder={placeholder}
      />
      {errors && errors[name] && <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>}
    </div>
  );
}

export default TextField;
