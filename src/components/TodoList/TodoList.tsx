import { TASKS } from "../../basics/constants/tasks.const";

const TodoList = () => {
  return (
    <>
      <h1>My Todo</h1>
      <ul>
        {TASKS.map((task) => {
          return <li key={task.id}>{task.name}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
