export function Icono({ children, className = "", style = {} }) {
  return (
    <span className={`text-[20px] ${className}`} style={style}>
      {children}
    </span>
  );
}
