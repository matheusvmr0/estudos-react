import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onDeleteTaskClick, onTaskClick }) {
  const navigate = useNavigate();

  function seeDetailsOnClick(task) {
    navigate(
      `/task?title=${encodeURIComponent(
        task.title
      )}&description=${encodeURIComponent(task.description)}`
    );
  }

  return (
    <ul className="space-y-3 p-6 bg-slate-200 rounded-md shadow-2xl">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full flex items-center gap-2 text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {/*{task.isCompleted ? <CheckIcon /> : null} condicional  */}
            {task.isCompleted && <CheckIcon />} {/* AND operator  */}
            {task.title}
          </button>
          <Button onClick={() => seeDetailsOnClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
