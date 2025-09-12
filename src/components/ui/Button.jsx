const Button=({ children, variant = "primary", className = "", ...props })=> {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      className={`${variants[variant]} font-medium py-2 px-4 rounded-lg transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;