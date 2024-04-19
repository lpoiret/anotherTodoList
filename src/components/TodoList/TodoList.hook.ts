import { useState } from "react";
import { RECIPES } from "../../basics/constants/recipes.const";
import { v4 as uuidv4 } from 'uuid';

export const useTodoList = () => {
  const [todoListItems, setTodoListItems] = useState(
    RECIPES.map((recipe) => ({ name: recipe.name, id: recipe.id }))
  );

  const generateTodoItem = () => {
    const randomRecipe =
      RECIPES[Math.floor(Math.random() * (RECIPES.length - 1))];

    return {name: randomRecipe.name, id: uuidv4()};
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
