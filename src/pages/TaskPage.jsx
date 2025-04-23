import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col items-center p-6">
      <div className="w-[500px] space-y-4">
        {/* Cabeçalho com botão voltar e título */}
        <div className="relative">
          <button
            className="absolute left-0 top-0 p-2 rounded-full text-slate-100"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        {/* Conteúdo da tarefa */}
        <div className="bg-slate-200 p-4 rounded-md space-y-4">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
