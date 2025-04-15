import { Icon } from "@iconify/react/dist/iconify.js";
import { BtnGoogle } from "../moleculas/btnGoogle";
import { useAuthStore } from "../../store/authStore";
import { PowerBy } from "../moleculas/powerBy";
import { FrankAnimado } from "../organismos/frankAnimado";

export function LoginTemplate() {
  const { loginGoogle } = useAuthStore();
  return (
    <div className="relative h-screen w-full flex justify-center bg-[url('../../assets/pattern-1.svg'),linear-gradient(210deg,#4d18fb,#6716d1)] bg-[length:600px_600px,_cover] animate-irarriba bg-center bg-no-repeat">
      <div
        className="
          absolute top-5 w-[calc(100%-20px)] text-white border border-[#9c62fff2] 
          rounded-md p-5 flex flex-col justify-center items-center overflow-hidden 
          bg-[linear-gradient(266deg,rgba(0,36,8,1)_0%,rgba(255,0,179,0.104)_0%,rgba(91,31,195,0.597)_61%,rgba(61,30,238,0.253)_90%)]
          tablet:w-[680px] tablet:mx-auto my-3
        "
      >
        <span className="z-[1] mb-2 text-lg font-semibold">
          Administra tus juegos
        </span>
        <Icon
          icon="fluent-emoji:eggplant"
          className="absolute text-[11rem] rotate-[-25deg] top-[-20px] right-[-20px]"
        />
        <PowerBy className="absolute" />
      </div>
      <BtnGoogle label="Iniciar con Google" funcion={loginGoogle} />
      <FrankAnimado />
    </div>
  );
}
