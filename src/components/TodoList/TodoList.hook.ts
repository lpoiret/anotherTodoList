import { FormEvent, useMemo, useRef, useState } from "react";
import { TASKS } from "../../basics/constants/tasks.const";
import { v4 as uuidv4 } from 'uuid';
import { TaskType } from "../../basics/types/task.type";

export const useTodoList = () => {
  const [todoListItems, setTodoListItems] = useState<TaskType[]>(
    TASKS.map((task) => ({ name: task.name, id: task.id, done: task.done }))
  );

  const inputRef = useRef<HTMLInputElement>();

  const generateTodoItem = (taskName: string): TaskType => {
    return { name: taskName, id: uuidv4(), done: false };
  };

  const addTodoItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValue = inputRef.current?.value;
    if (inputValue) {
      setTodoListItems((prevState) => [
        ...prevState,
        generateTodoItem(inputValue),
      ]);
    }
  };

  const removeTodoItem = (id: string) => {
    setTodoListItems((prevState) => prevState.filter((item) => item.id != id));
  };

  const todoList = useMemo(
    () => todoListItems.filter((task) => !task.done),
    [todoListItems]
  );
  const doneList = useMemo(
    () => todoListItems.filter((task) => task.done),
    [todoListItems]
  );

  const onChecked = (taskId: string) => {
    const taskIndex = todoListItems.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
      return;
    }
    const task = todoListItems[taskIndex];
    task.done = !task.done;
    todoListItems.splice(taskIndex, 1, task);
    setTodoListItems([...todoListItems]);
  };

  return {
    todoListItems,
    generateTodoItem,
    addTodoItem,
    removeTodoItem,
    inputRef,
    onChecked,
    todoList,
    doneList,
  };
};
