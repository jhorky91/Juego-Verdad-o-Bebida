import { Icono } from "../atomos/icono";


export function BtnSave({
  funcion,
  titulo,
  bgcolor = "#5603ef",
  icono,
  url,
  color = "#fff",
  disabled = false,
  width = "auto",
  position = "static",
}) {
  return (
    <button
      type="submit"
      onClick={funcion}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "#646464" : bgcolor,
        color,
        width,
        position,
        zIndex: 2,
        border: "2px solid rgba(50, 50, 50, 0.2)",
        borderBottom: disabled ? "2px solid rgba(50, 50, 50, 0.2)" : "5px solid rgba(50, 50, 50, 0.2)",
        transform: disabled ? "translate(0, 0)" : "translate(0, -3px)",
        boxShadow: disabled ? "none" : undefined,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "0.2s linear",
        borderRadius: "16px",
        fontWeight: 700,
        fontSize: "15px",
      }}
      className="flex items-center justify-center px-[25px] py-[10px] active:translate-y-0"
    >
      <section className="flex gap-[12px] items-center">
        <Icono style={{ color }}>{icono}</Icono>
        {titulo && (
          <span className="btn">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {titulo}
            </a>
          </span>
        )}
      </section>
    </button>
  );
}
