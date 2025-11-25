import { Todo } from "@/types";
import { Trash2, Check, Circle } from "lucide-react";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <div
            className={`group flex items-center justify-between p-4 mb-3 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] ${todo.completed
                    ? "bg-gray-100 text-gray-400"
                    : "bg-white shadow-lg border-2 border-transparent hover:border-indigo-200"
                }`}
        >
            <div className="flex items-center gap-3 flex-1 overflow-hidden">
                <button
                    onClick={() => onToggle(todo.id)}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${todo.completed
                            ? "bg-green-400 text-white"
                            : "bg-gray-100 text-gray-400 hover:bg-indigo-100 hover:text-indigo-500"
                        }`}
                >
                    {todo.completed ? <Check size={18} strokeWidth={3} /> : <Circle size={18} strokeWidth={3} />}
                </button>
                <span
                    className={`text-lg font-medium truncate transition-all duration-300 ${todo.completed ? "line-through" : "text-gray-700"
                        }`}
                >
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => onDelete(todo.id)}
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-500 transition-all duration-300"
                aria-label="Delete task"
            >
                <Trash2 size={18} />
            </button>
        </div>
    );
}
