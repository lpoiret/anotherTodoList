import { Autocomplete, Button, Checkbox, TextField } from "@mui/material";
import { useTodoList } from "./TodoList.hook";

const TodoList = () => {
  const {
    addTodoItem,
    removeTodoItem,
    inputRef,
    onChecked,
    todoList,
    doneList,
    setSearchText,
    searchResults,
  } = useTodoList();

  return (
    <>
      <h1>My Todo</h1>
      <form onSubmit={addTodoItem}>
        <Autocomplete
          onInputChange={(event, newInputValue) => {
            setSearchText(newInputValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Add a location"
              inputRef={inputRef}
              fullWidth
            />
          )}
          options={searchResults}
          getOptionLabel={(option) => option.name}
        />

        <Button variant="outlined" type="submit" sx={{ marginLeft: "20px" }}>
          Add
        </Button>
      </form>

      <h2>{`Tasks to do (${todoList.length}) :`} </h2>
      <ul>
        {todoList.length > 0 ? (
          todoList.map((task) => {
            return (
              <li key={task.id} style={{ marginTop: "10px" }}>
                <Checkbox
                  onChange={() => {
                    onChecked(task.id);
                  }}
                />
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
          <p>Nothing to do</p>
        )}
      </ul>

      <h2>{`${doneList.length} tasks (well) done :`} </h2>
      <ul>
        {doneList.length > 0 ? (
          doneList.map((task) => {
            return (
              <li key={task.id} style={{ marginTop: "10px" }}>
                <Checkbox
                  onChange={() => {
                    onChecked(task.id);
                  }}
                />
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
          <p>Nothing done</p>
        )}
      </ul>
    </>
  );
};

export default TodoList;
