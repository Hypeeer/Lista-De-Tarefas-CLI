import readlineSync from 'readline-sync';
import addTasks from './src/functions/addTasks.js';
import displayTasksFormatted from './src/functions/viwerTasks.js';

const mainMenu = () => {
  while (true) {
    console.log('Lista de tarefas');
    console.log('[1] Adicionar Tarefa');
    console.log('[2] Vizualizar Lista de Tarefas');
    console.log('[3] Marca Tarefa Concluidas');
    console.log('[4] Remover Terefa');
    console.log('[0] Encerra Programa');

    let choice = readlineSync.question('Digite: ');

    switch (choice) {
      case '1':
        addTasks();
        break;
      case '2':
        displayTasksFormatted();
        break;
      case '3':
        break;
      case '4':
        break;
    }
    if (choice === '0') {
      console.log('Fim do programa!');
      break;
    }
  }
};

mainMenu();

export default mainMenu;
