import readlineSync from 'readline-sync';
import exitMenuAddTask from '../verification/backToManu.js';

const saveTasks = []; // Recebe todos as tarefas em um array de objetos

const addTasks = () => {
  const object = {}; //guarda todas as caracteristicas da tarefas do usuario
  object.id = readlineSync.question('\nId: ');
  object.name = readlineSync.question('name: ');
  object.description = readlineSync.question('Descrição: ');
  console.log('\nTarefa salva com sucesso!');
  saveTasks.push(object); //ao final o push adiconar em fila no array vazio
  exitMenuAddTask();
};

export default addTasks;
export { saveTasks }; //exporta para os demais arquivos para os dados serem tratados
