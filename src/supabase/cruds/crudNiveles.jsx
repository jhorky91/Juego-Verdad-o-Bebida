import { supabase } from "../supabase.config.jsx";

export async function MostrarNiveles() {
  try {
    const { data } = await supabase.from("niveles").select();
    return data;
  } catch (error) {
    console.log(error);
  }
}
