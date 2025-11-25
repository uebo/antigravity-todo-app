import { Todo } from "@/types";
import TodoItem from "./TodoItem";
import { Sparkles } from "lucide-react";

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
    if (todos.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="bg-indigo-50 p-4 rounded-full mb-4 animate-bounce">
                    <Sparkles className="text-indigo-400" size={32} />
                </div>
                <p className="text-gray-500 text-lg font-medium">タスクはありません</p>
                <p className="text-gray-400 text-sm mt-1">新しいタスクを追加して始めましょう！</p>
            </div>
        );
    }

    return (
        <div className="w-full space-y-2">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
