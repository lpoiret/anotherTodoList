import { Button, TextField } from "@mui/material";
import { useTodoList } from "./TodoList.hook";

const TodoList = () => {
  const { addTodoItem, removeTodoItem, todoListItems, inputRef } =
    useTodoList();

  return (
    <>
      <h1>My Todo</h1>
      <form onSubmit={addTodoItem}>
        <TextField
          id="task"
          label="Task"
          variant="outlined"
          size="small"
          inputRef={inputRef}
        />
        <Button variant="outlined" type="submit" sx={{ marginLeft: "20px" }}>
          Add
        </Button>
      </form>

      <ul>
        {todoListItems.length > 0 ? (
          todoListItems.map((task) => {
            return (
              <li key={task.id} style={{marginTop: "10px"}}>
                {task.name}
                <Button
                  sx={{ marginLeft: "20px" }}
                  variant="outlined"
                  size="small"
                  onClick={() => removeTodoItem(task.id)}
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
