import TodoContainer from "@/components/TodoContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 flex items-start justify-center">
      <TodoContainer />
    </main>
  );
}
