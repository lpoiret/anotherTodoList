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
        {todoListItems.map((recipe) => {
          return <li key={recipe.id}>{recipe.name}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
