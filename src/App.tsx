import { Container } from "@mui/material";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <TodoList />
      </Container>
    </>
  );
}

export default App;
