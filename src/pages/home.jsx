import { useQuery } from "@tanstack/react-query";
import { HomeTemplate } from "../components/templates/homeTemplate";
import { Spinner } from "../components/moleculas/spinner";
import { usePreguntasVerdadBebida } from "../store/preguntasVerdadoBebidaStore";
import { useNivelesStore } from "../store/nivelesStore";


export function Home() {
  const {
    mostrarpreguntasverdadbebida,
    buscarPregunta,
    buscador,
    dataPreguntas,
  } = usePreguntasVerdadBebida();
  const { mostrarNiveles } = useNivelesStore();
  const { isLoading, error, refetch } = useQuery({
    queryKey: ["mostrar preguntas verdad bebida"],
    queryFn: () => mostrarpreguntasverdadbebida({ refetch: refetch }),
  });
  const { data: dataniveles } = useQuery({
    queryKey: "mostrar niveles",
    queryFn: mostrarNiveles,
  });
  useQuery({
    queryKey: ["buscar preguntas", buscador],
    queryFn: () => buscarPregunta({ pregunta: buscador }),
  });
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <span>error...{error.message}</span>;
  }
  return (
    <>
      <HomeTemplate data={dataPreguntas} />
    </>
  );
}
