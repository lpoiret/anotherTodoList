import { Container } from "@mui/material";
import TodoList from "../components/TodoList/TodoList";
import { DisplayMode } from "../components/TodoList/TodoList.enum";

function TodoListPage() {
  return (
    <Container maxWidth="sm">
        <h1>TODO LIST</h1>
      <TodoList displayMode={DisplayMode.TODO} />
    </Container>
  );
}

export default TodoListPage;
