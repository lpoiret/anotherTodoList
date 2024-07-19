import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoListPage from "./pages/todoList";
import DoneListPage from "./pages/doneList";
import { TaskProvider } from "./context/task";
import HomePage from "./pages/home";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/todo" element={<TodoListPage />}></Route>
          <Route path="/done" element={<DoneListPage />}></Route>
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
