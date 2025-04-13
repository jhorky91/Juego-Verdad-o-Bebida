import { supabase } from "../supabase.config.jsx";
const table = "usuarios";

/* Insertar Usuario */
export async function InsertarUsuario(p) {
  const { error } = await supabase.from(table).insert(p);
  if (error) {
    console.log(error.message);
    return;
  }
}
/* Mostrar Usuarios */
export async function MostrarUsuarios(p) {
  const { data } = await supabase
    .from(table)
    .select()
    .eq("id_auth_supabase", p.id_auth_supabase)
    .maybeSingle();
  return data;
}
