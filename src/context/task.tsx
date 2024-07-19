import { FC, ReactNode, createContext, useState } from "react";
import { TaskType } from "../basics/types/task.type";
import React from "react";

export type TaskContext = {
  todoTask: TaskType[];
  setTodoTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

const initiatialState = { todoTask: [], setTodoTask: () => {} };
export const TaskContext = createContext<TaskContext>(initiatialState);

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskProvider: FC<TaskProviderProps> = ({ children }) => {
  const [todoTask, setTodoTask] = useState<TaskType[]>([]);
  const currentValue = { todoTask, setTodoTask };
  return (
    <TaskContext.Provider value={currentValue}>{children}</TaskContext.Provider>
  );
};
