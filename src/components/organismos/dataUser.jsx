import { Icon } from "@iconify/react/dist/iconify.js";
import { UserAuth } from "../../context/authContext";
import { BtnSave } from "../moleculas/btnSave";
import { useAuthStore } from "../../store/authStore";

export function DataUser() {
  const { user } = UserAuth();
  const { logout } = useAuthStore();

  const avatar = user?.user_metadata?.picture;
  const email = user?.email || "Usuario sin email";

  return (
    <div className="relative w-full flex justify-center mt-8 px-4">
      <div className="w-full max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-white shadow-lg transition hover:shadow-xl flex flex-col items-center gap-4">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 shadow-md">
          <img
            src={avatar || "/img/default-avatar.png"}
            className="w-full h-full object-cover"
            alt="Foto de perfil del usuario"
          />
        </div>

        {/* Texto */}
        <div className="text-center">
          <h3 className="text-md font-semibold mb-1">Bienvenido</h3>
          <p className="text-xs text-white/80 break-words">{email}</p>
        </div>

        {/* Botón Cerrar sesión */}
        <BtnSave
          funcion={logout}
          color="#fff"
          titulo="Cerrar sesión"
          bgcolor="#5603ef"
          icono={<Icon icon="jam:log-out" />}
          ariaLabel="Cerrar sesión"
        />
      </div>
    </div>
  );
}

