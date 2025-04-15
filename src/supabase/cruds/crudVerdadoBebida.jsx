import { supabase } from "../supabase.config.jsx";
import Swal from "sweetalert2";

const table = "preguntas";

export async function InsertarVerdadoBebida(p) {
  const { error } = await supabase.rpc("insertarverdadobebida", p);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Oops! ...",
      footer: '<a href="">Agregue nueva descripcion</a>',
      position: "center",
    });
    return;
  } else {
    Swal.fire({
      icon: "success",
      title: "Registrado",
      showConfirmButton: false,
      timer: 2500,
      position: "center",
    });
  }
}

export async function MostrarVerdadoBebida() {
  const { data } = await supabase
    .from(table)
    .select()
    .order("id", { ascending: true });
  return data;
}

export async function MostrarVerdadoBebidaXNivel(p) {
  const { data } = await supabase
    .from(table)
    .select()
    .eq("id_nivel", p.id_nivel)
    .order("id", { ascending: true });
  return data;
}

export async function EliminarVerdadoBebida(p) {
  const { error } = await supabase.from(table).delete().eq("id", p.id);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Error al eliminar",
      text: "Oops! ...",
      position: "center",
    });
  }
}

export async function EditarVerdadoBebida(p) {
  const { error } = await supabase
    .from(table)
    .update(p)
    .eq("id", p.id);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      footer: '<a href="">Agregue una nueva descripcion</a>',
    });
    return;
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Actualizado",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

export async function BuscarPregunta(p) {
  try {
    const { data } = await supabase
      .from("preguntas_verdad_bebida")
      .select()
      .ilike("pregunta", "%" + p.pregunta + "%");

    return data;
  } catch (error) {}
}