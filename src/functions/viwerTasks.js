import { saveTasks } from './addTasks.js';

const displayTasksFormatted = () => {
  saveTasks.forEach((saveTasks) => {
    console.log(`Id: ${saveTasks.id} - Name: ${saveTasks.name} - Descrição: ${saveTasks.description} `);
  });
};

export default displayTasksFormatted;
