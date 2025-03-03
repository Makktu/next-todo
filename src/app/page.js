import TodoList from './components/TodoList';

export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-gray-900'>
      <TodoList />
    </main>
  );
}
