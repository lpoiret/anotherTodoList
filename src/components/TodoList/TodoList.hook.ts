import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskType } from "../../basics/types/task.type";
import { TASKS } from "../../basics/constants/tasks.const";
import debounce from "@mui/material/utils/debounce";

export const useTodoList = () => {
  const [todoListItems, setTodoListItems] = useState<TaskType[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<TaskType[]>([]);

  const inputRef = useRef<HTMLInputElement>();

  const generateTodoItem = (taskName: string) => {
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
    todoListItems,
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
