import { RECIPES } from "../../basics/constants/recipes.const";

const TodoList = () => {
  return (
    <>
      <h1>My Todo</h1>
      <ul>
        {RECIPES.map((recipe) => {
          return <li key={recipe.id}>{recipe.name}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
