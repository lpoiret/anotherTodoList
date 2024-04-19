import { FormEvent, useRef, useState } from "react";
import { TASKS } from "../../basics/constants/tasks.const";
import { v4 as uuidv4 } from "uuid";

export const useTodoList = () => {
  const [todoListItems, setTodoListItems] = useState(
    TASKS.map((task) => ({ name: task.name, id: task.id }))
  );
  const inputRef = useRef<HTMLInputElement>();

  const generateTodoItem = (taskName: string) => {
    return { name: taskName, id: uuidv4() };
  };

  const addTodoItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const inputValue = inputRef.current?.value
    if(inputValue) {
      setTodoListItems((prevState) => [...prevState, generateTodoItem(inputValue)]);
    }
  };

  const removeTodoItem = (id: string) => {
    setTodoListItems((prevState) => prevState.filter((item) => item.id != id));
  };

  return {
    todoListItems,
    generateTodoItem,
    addTodoItem,
    removeTodoItem,
    inputRef,
  };
};
