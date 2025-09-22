import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <>
      <div className="h-screen flex  flex-col justify-center items-center bg-blue-700 dark:bg-black">
        <ThemeToggle />
        <h1 className="text-center text-4xl text-white">
          DarkMode in TailwindCSS v4
        </h1>
      </div>
    </>
  );
}

export default App;
