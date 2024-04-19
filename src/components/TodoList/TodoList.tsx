import { Button } from "@mui/material";
import { useTodoList } from "./TodoList.hook";

const TodoList = () => {
  const { addTodoItem, todoListItems } = useTodoList();

  return (
    <>
      <h1>My Todo</h1>
      <Button variant="outlined" onClick={addTodoItem}>
        Add
      </Button>
      <ul>
        {todoListItems.map((task) => {
          return <li key={task.id}>{task.name}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
