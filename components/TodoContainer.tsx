"use client";

import { useState, useEffect } from "react";
import { Todo } from "@/types";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoContainer() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from LocalStorage on mount
    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            try {
                setTodos(JSON.parse(savedTodos));
            } catch (e) {
                console.error("Failed to parse todos", e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to LocalStorage whenever todos change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos, isLoaded]);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            text,
            completed: false,
            createdAt: Date.now(),
        };
        setTodos((prev) => [newTodo, ...prev]);
    };

    const toggleTodo = (id: string) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: string) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    if (!isLoaded) {
        return null; // Or a loading spinner
    }

    return (
        <div className="max-w-md mx-auto w-full">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 border border-white/50">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl font-black text-gray-800 tracking-tight mb-2">
                        My Tasks <span className="text-indigo-500">.</span>
                    </h1>
                    <p className="text-gray-500 font-medium">
                        {todos.filter((t) => !t.completed).length} tasks remaining
                    </p>
                </header>

                <TodoForm onAdd={addTodo} />

                <div className="mt-6">
                    <TodoList
                        todos={todos}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                </div>
            </div>
        </div>
    );
}
