import { supabase } from "../supabase.config.jsx";

const table = "niveles";

export async function MostrarNiveles() {
  try {
    const { data } = await supabase.from(table).select();
    return data;
  } catch (error) {
    console.log(error);
  }
}
