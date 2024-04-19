import { Button } from "@mui/material";
import { useTodoList } from "./TodoList.hook";

const TodoList = () => {
  const { addTodoItem, removeTodoItem, todoListItems } = useTodoList();

  return (
    <>
      <h1>My Todo</h1>
      <Button variant="outlined" onClick={addTodoItem}>
        Add
      </Button>

      <ul>
        {todoListItems.length > 0 ? (
          todoListItems.map((recipe) => {
            return (
              <li key={recipe.id}>
                {recipe.name}
                <Button
                  sx={{marginLeft: "20px"}}
                  variant="outlined"
                  onClick={() => removeTodoItem(recipe.id)}
                >
                  Remove
                </Button>
              </li>
            );
          })
        ) : (
          <p>The list is empty</p>
        )}
      </ul>
    </>
  );
};

export default TodoList;
