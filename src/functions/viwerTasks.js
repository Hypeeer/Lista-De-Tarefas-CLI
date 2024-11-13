import checkIfTheFunctionIsEmpty from './checkIfTheFunctionsIsEmpty.js';
import { saveTasks } from './addTasks.js';

const displayTasksFormatted = () => {
  const tasksToFormat = saveTasks;
  checkIfTheFunctionIsEmpty(tasksToFormat);
  tasksToFormat.forEach((saveTasks) => {
    console.log(`\nID: ${saveTasks.id}`);
    console.log(`Nome: ${saveTasks.name}`);
    console.log(`Descrição: ${saveTasks.description}\n`);
  });
  return tasksToFormat;
};

export default displayTasksFormatted;
