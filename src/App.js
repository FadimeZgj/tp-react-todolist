import "./App.css";
import TaskList from "./components/Task/TaskList";

function App() {
  return (
    <>
      <div className="container">
      <h1 className='mb-4 text-center'>TO DO List</h1>
        <TaskList />
      </div>
    </>
  );
}

export default App;
