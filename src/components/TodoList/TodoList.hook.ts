import { useState } from "react";
import { TASKS } from "../../basics/constants/tasks.const";
import { v4 as uuidv4 } from 'uuid';

export const useTodoList = () => {
  const [todoListItems, setTodoListItems] = useState(
    TASKS.map((task) => ({ name: task.name, id: task.id }))
  );

  const generateTodoItem = () => {
    const randomTask =
    TASKS[Math.floor(Math.random() * (TASKS.length - 1))];

    return {name: randomTask.name, id: uuidv4()};
  };

  const addTodoItem = () => {
    // Shallow
    // todoListItems.push(generateTodoItem())
    // setTodoListItems(todoListItems)

    // Prev state
    // setTodoListItems([...todoListItems, generateTodoItem()]);

    setTodoListItems((prevState) => [...prevState, generateTodoItem()]);
  };

  const removeTodoItem = (id: string) => {
    setTodoListItems((prevState) => prevState.filter((item) => item.id != id));
  };

  return {
    todoListItems,
    generateTodoItem,
    addTodoItem,
    removeTodoItem
  };
};
