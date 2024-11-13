import checkIfTheFunctionIsEmpty from '../verification/isEmpty.js';
import { saveTasks } from './addTasks.js';

const displayTasksFormatted = () => {
  const tasksToFormat = saveTasks;
  console.log('\nAqui estão suas tarefas');
  checkIfTheFunctionIsEmpty(tasksToFormat);
  tasksToFormat.forEach((saveTasks) => {
    console.log(`\nID: ${saveTasks.id}`);
    console.log(`Nome: ${saveTasks.name}`);
    console.log(`Descrição: ${saveTasks.description}\n`);
  });
  return tasksToFormat;
};

export default displayTasksFormatted;
