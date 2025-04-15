import {
  DataModulosConfiguracion,
  DataModulosJugador,
} from "../../utils/dataEstatica";

import { Fondoanimado } from "../organismos/fondoAnimado";
import { Icon } from "@iconify/react";
import { PowerBy } from "../moleculas/powerBy";
import { DataUser } from "../organismos/dataUser";
import { CardJuego } from "../organismos/cardJuego";

export function SettingTemplate() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen relative overflow-y-auto overflow-x-hidden bg-[color:var(--bg-color)]">
      {/* Header */}
      <div className="relative w-[calc(100%-20px)] md:w-[680px] text-white text-center border border-purple-400 rounded-lg p-5 flex flex-col justify-center overflow-hidden bg-gradient-to-r from-green-950 via-pink-300/10 to-indigo-600/30 mt-5 shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
        <span
          className="text-3xl md:text-5xl z-20 drop-shadow-lg bg-black/30 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-black/50"
          aria-label="Juego Verdad o Bebida"
        >
          Verdad o Bebida
        </span>
        <span
          className="mt-2 z-1 drop-shadow-lg bg-black/30 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-black/50"
          aria-label="Administra tus juegos"
        >
          Administra tu juego
        </span>
        <Icon
          icon="fluent-emoji:eggplant"
          className="absolute top-8 -right-5 text-[11rem] rotate-[-25deg] opacity-30 transition-all duration-300 ease-in-out hover:opacity-80"
          aria-hidden="true"
        />
        <PowerBy position="text-center mt-6" />
      </div>

      {/* User Data */}
      <DataUser />

      {/* Main Content */}
      <section className="grid w-full px-5 gap-10 text-white md:grid-cols-[1fr_10px_1fr] max-w-6xl mx-auto mt-10 relative z-10">
        {/* ADMIN MODE */}
        <section className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg backdrop-blur-md">
          <article className="flex items-center gap-2 text-2xl font-bold mb-5 border-b-2 border-purple-400 pb-2 px-4 bg-black/30 rounded-md">
            <Icon icon="twemoji:pig-face" />
            <span>Modo Admin</span>
          </article>
          <article className="grid grid-cols-1 gap-4 justify-items-center w-full">
            {DataModulosConfiguracion.map((item, index) => (
              <CardJuego item={item} key={index} />
            ))}
          </article>
          <Icon
            icon="twemoji:pig-face"
            aria-label="Modo administrador"
            className="absolute inset-0 m-auto text-[25rem] opacity-10 w-1/2 hidden md:block animate-[float_3s_ease-in-out_infinite] pointer-events-none"
          />
        </section>

        {/* Divider */}
        <section className="hidden md:flex w-[2px] bg-gradient-to-b from-transparent via-gray-400/30 to-transparent rounded-full" />

        {/* PLAYER MODE */}
        <section className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg backdrop-blur-md">
          <article className="flex items-center gap-2 text-2xl font-bold mb-5 border-b-2 border-indigo-400 pb-2 px-4 bg-black/30 rounded-md">
            <Icon icon="fluent-emoji:dagger" />
            <span>Modo Jugador</span>
          </article>
          <article className="grid grid-cols-1 gap-4 justify-items-center w-full">
            {DataModulosJugador.map((item, index) => (
              <CardJuego item={item} key={index} />
            ))}
          </article>
          <Icon
            icon="fluent-emoji:dagger"
            aria-label="Modo jugador"
            className="absolute inset-0 m-auto text-[25rem] opacity-10 w-1/2 hidden md:block animate-[float_3s_ease-in-out_infinite] pointer-events-none"
          />
        </section>
      </section>

      <span className="blur"></span>
      <Fondoanimado />
    </div>
  );
}
