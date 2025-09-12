const Card=({ title, children, className })=> {
  return (
    <div className={`bg-white p-6 rounded-lg shadow ${className}`}>
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
}
export default Card;