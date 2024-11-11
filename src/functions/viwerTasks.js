import { saveTasks } from './addTasks.js';

const displayTasksFormatted = () => {
  const tasksToFormat = saveTasks;
  checkIfTheFunctionIsEmpty(tasksToFormat);
  tasksToFormat.forEach((saveTasks) => {
    console.log(`\nID: ${saveTasks.id}`);
    console.log(`Nome: ${saveTasks.name}`);
    console.log(`Descrição: ${saveTasks.description}\n`);
  });
};

const checkIfTheFunctionIsEmpty = (saveTasks) => {
  if (!saveTasks.length) {
    console.log('\nAdicione tarefas antes de vizualizar na opção [1]! \n');
  }
};

export default displayTasksFormatted;
