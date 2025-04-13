import { createContext, useContext, useEffect, useState } from "react";
import {
  InsertarUsuario,
  MostrarUsuarios,
} from "../supabase/cruds/crudUsuarios.jsx";
import { supabase } from "../supabase/supabase.config.jsx";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user == null) {
          setUser(null);
        } else {
          setUser(session?.user);
          InsertUser(session?.user);
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);

  async function InsertUser(p) {
    const response = await MostrarUsuarios({ id_auth_supabase: p.id });
    if (response) {
      return;
    } else {
      const pUser = {
        id_auth_supabase: p.id,
        nombres: p.user_metadata.full_name,
        //user: p.user_metadata.username,
        correo: p.email,
        foto_url: p.user_metadata.avatar_url,
      };
      await InsertarUsuario(pUser);
    }
  }
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
