import { useState, FormEvent } from "react";
import { Plus } from "lucide-react";

interface TodoFormProps {
    onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
    const [text, setText] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative mb-8">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="新しいタスクを入力..."
                className="w-full px-6 py-4 text-lg bg-white rounded-full shadow-md border-2 border-transparent focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all placeholder-gray-400 text-gray-700 pr-16"
            />
            <button
                type="submit"
                disabled={!text.trim()}
                className="absolute right-2 top-2 bottom-2 w-12 h-12 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Add task"
            >
                <Plus size={24} strokeWidth={3} />
            </button>
        </form>
    );
}
