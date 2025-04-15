import { Link } from "react-router-dom";
import { LottieAnimacion } from "../moleculas/lottieAnimacion";

export function CardJuego({ item }) {
  return (
    <div className="relative w-[300px] h-[280px] flex flex-col border border-white/10 bg-white/5 backdrop-blur-md rounded-[12px] shadow-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:border-[var(--bg5)] hover:shadow-[0_0_25px_rgba(128,0,255,0.3)] hover:scale-[1.03] hover:-translate-y-[2px] hover:bg-black hover:[background-image:url('data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'250\'%20height=\'30\'%20viewBox=\'0%200%201000%20120\'%3E%3Cg%20fill=\'none\'%20stroke=\'%23222\'%20stroke-width=\'10\'%3E%3Cpath%20d=\'M-500%2075c0%200%20125-30%20250-30S0%2075%200%2075s125%2030%20250%2030s250-30%20250-30s125-30%20250-30s250%2030%20250%2030s125%2030%20250%2030s250-30%20250-30\'/%3E%3C/g%3E%3C/svg%3E')] bg-[length:400%_100%] hover:bg-[position:200%_center]">
      <div className="absolute top-2 right-2 z-40 px-2 py-[2px] text-xs font-semibold text-lime-400 bg-lime-400/10 rounded-full border border-lime-400/20">
        {item.modo}
      </div>

      <Link
        to={item.link}
        target={item.target}
        className={`card absolute inset-[1px] z-20 rounded-inherit flex flex-col p-2 ${
          !item.state ? "false" : ""
        }`}
      >
        <div className="card-content flex flex-col flex-grow">
          <div className="card-image flex items-center justify-center h-[180px]">
            <img
              src={item.icono}
              className="h-[70%] grayscale transition duration-300 hover:grayscale-0"
              alt="icono"
              loading="lazy"
            />
            <LottieAnimacion animacion={item.animacion} alto="120" />
          </div>

          <div className="card-info-wrapper flex items-center justify-start flex-grow px-5 max-[500px]:px-2">
            <div className="card-info flex flex-col gap-2">
              <i className="fa-duotone fa-unicorn text-[var(--colorsubtitlecard)] text-[1em] leading-5 h-5 max-[500px]:text-[0.8em]" />
              <div className="card-info-title">
                <h3 className="font-semibold font-[Rubik] text-[var(--colorsubtitlecard)] text-[1.1em] leading-5 max-[500px]:text-[0.9em]">
                  {item.title}
                </h3>
                <h4 className="text-[var(--colortitlecard)] text-[0.85em] font-medium mt-2 max-[500px]:text-[0.8em] max-[500px]:mt-1">
                  {item.subtitle}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
