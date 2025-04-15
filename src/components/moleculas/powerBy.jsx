export function PowerBy({ position = "" }) {
  return (
    <footer
      className={`text-xs flex items-center gap-1 text-white/60 z-[100] mt-4 ${position}`}
    >
      <a
        href="https://github.com/jhorky91/Juego-Verdad-o-Bebida"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition duration-300"
        title="Ver repositorio en GitHub"
      >
        Desarrollado por{" "}
        <strong className="text-white font-medium">Jhorky Escalante</strong>
      </a>
    </footer>
  );
}
