import {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskType } from "../../basics/types/task.type";
import { TASKS } from "../../basics/constants/tasks.const";
import debounce from "@mui/material/utils/debounce";
import { TaskContext } from "../../context/task";

export const useTodoList = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<TaskType[]>([]);

  const {todoTask, setTodoTask} = useContext(TaskContext)

  const inputRef = useRef<HTMLInputElement>();

  const generateTodoItem = (taskName: string) => {
    return { name: taskName, id: uuidv4(), done: false };
  };

  const addTodoItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValue = inputRef.current?.value;
    if (inputValue) {
      setTodoTask((prevState) => [
        ...prevState,
        generateTodoItem(inputValue),
      ]);
    }
  };

  const removeTodoItem = (id: string) => {
    setTodoTask((prevState) => prevState.filter((item) => item.id != id));
  };

  const todoList = useMemo(
    () => todoTask.filter((task) => !task.done),
    [todoTask]
  );
  const doneList = useMemo(
    () => todoTask.filter((task) => task.done),
    [todoTask]
  );

  const onChecked = (taskId: string) => {
    const taskIndex = todoTask.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
      return;
    }
    const task = todoTask[taskIndex];
    task.done = !task.done;
    todoTask.splice(taskIndex, 1, task);
    setTodoTask([...todoTask]);
  };

  const searchTasks = useCallback(
    async (taskName: string): Promise<void> => {
      if (taskName.length < 3) {
        setSearchResults([]);
        
        return
      }

      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      const searchResults =  TASKS.filter((task) => {
        const searchRegex = new RegExp(`${taskName}.*`, "i");
        return searchRegex.test(task.name);
      });

      setSearchResults(searchResults)
    },
    [setSearchResults]
  );

  const debouncedSearchTask = useCallback(debounce(searchTasks, 500), [debounce, searchTasks]);

  useEffect(() => {
    const fetchData = async () => {
      await debouncedSearchTask(searchText);;
    };

    fetchData();
  }, [debouncedSearchTask, searchText]);

  return {
    todoTask,
    generateTodoItem,
    addTodoItem,
    removeTodoItem,
    inputRef,
    onChecked,
    todoList,
    doneList,
    searchText,
    setSearchText,
    searchResults,
  };
};
