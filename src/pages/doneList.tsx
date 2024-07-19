import { Container } from "@mui/material";
import TodoList from "../components/TodoList/TodoList";
import { DisplayMode } from "../components/TodoList/TodoList.enum";

function DoneListPage() {
  return (
    <Container maxWidth="sm">
      <h1>DONE LIST</h1>
      <TodoList displayMode={DisplayMode.DONE} />
    </Container>
  );
}

export default DoneListPage;
