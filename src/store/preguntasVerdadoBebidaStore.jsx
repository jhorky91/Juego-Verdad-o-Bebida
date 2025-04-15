import { create } from "zustand";
import {
  BuscarPregunta,
  EditarVerdadoBebida,
  EliminarVerdadoBebida,
  InsertarVerdadoBebida,
  MostrarVerdadoBebida,
} from "../supabase/cruds/crudVerdadoBebida";

export const usePreguntasVerdadBebida = create((set, get) => ({
  dataPreguntas: [],
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  refetch: [],
  itemPreguntaSelect: [],
  selectPregunta: (p) => {
    set({
      itemPreguntaSelect: p,
    });
  },
  mostrarpreguntasverdadbebida: async (p) => {
    const response = await MostrarVerdadoBebida();
/*     set({ refetch: p.refetch });
    set({ dataPreguntas: response }); */
    return response;
  },
  insertarPreguntas: async (p) => {
    await InsertarVerdadoBebida(p);
    const { refetch } = get();
    refetch();
  },
  editarpreguntas: async (p) => {
    await EditarVerdadoBebida(p);
    const { refetch } = get();
    refetch();
  },
  eliminarPreguntas: async (p) => {
    await EliminarVerdadoBebida(p);
    const { refetch } = get();
    refetch();
  },
  buscarPregunta: async (p) => {
    const response = await BuscarPregunta(p);
    set({ dataPreguntas: response });
    return response;
  },
}));
