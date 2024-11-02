import readlineSync from 'readline-sync';
import addTasks from './src/functions/addTasks.js';

const mainMenu = () => {
  do {
    console.log('Lista de tarefas');
    console.log('[1] Adicionar Tarefa');
    console.log('[2] Vizualizar Lista de Tarefas');
    console.log('[3] Marca Tarefa Comcluidas');
    console.log('[4] Remover Terefa');
    console.log('[0] Encerra Programa');

    let choice = readlineSync.question('Digite: ');

    switch (choice) {
      case '1':
        addTasks();
        break;
      case '2':
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
  } while (true);
};

mainMenu();

export default mainMenu;
