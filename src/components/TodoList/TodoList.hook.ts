import { useState } from "react";
import { TASKS } from "../../basics/constants/tasks.const";
import { v4 as uuidv4 } from 'uuid';
import { TaskType } from "../../basics/types/task.type";

export const useTodoList = () => {
  const [todoListItems, setTodoListItems] = useState<TaskType[]>(
    TASKS.map((task) => ({ name: task.name, id: task.id, done: false }))
  );

  const generateTodoItem = (): TaskType => {
    const randomTask =
    TASKS[Math.floor(Math.random() * (TASKS.length - 1))];

    return {name: randomTask.name, id: uuidv4(), done: false};
  };

  const addTodoItem = () => {
    // Shallow
    // todoListItems.push(generateTodoItem())
    // setTodoListItems(todoListItems)

    // Prev state
    // setTodoListItems([...todoListItems, generateTodoItem()]);

    setTodoListItems((prevState) => [...prevState, generateTodoItem()]);
  };

  return {
    todoListItems,
    generateTodoItem,
    addTodoItem,
  };
};
