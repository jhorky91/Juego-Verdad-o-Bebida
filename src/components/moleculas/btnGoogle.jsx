export function BtnGoogle({ funcion, label }) {
  return (
    <button
      className="
    relative top-32 z-[1]
    w-[294px] h-12
    flex items-center justify-center gap-4
    text-white text-[1.125em] font-extrabold tracking-[2px]
    bg-[#644dff] border-2 border-[#4836bb]
    rounded-xl
    shadow-[0_8px_0_#4836bb]
    skew-x-[-10deg]
    transition-all duration-100 ease-in
    hover:drop-shadow-[0_15px_20px_rgba(101,77,255,0.39)]
    active:tracking-[0px] active:translate-y-2 active:shadow-none
  "
      onClick={funcion}
    >
      {label}
    </button>
  );
}
