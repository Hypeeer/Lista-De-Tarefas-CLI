import readlineSync from 'readline-sync';
import addTasks from '../functions/addTasks.js';
//função para trata a saida do programa, tanto o encerramento ou a volta ao fluxo do menu principal
const exitMenuAddTask = () => {
  console.log('\nDeseja salvar outra tarefa ? ');
  const userChoice = readlineSync.question('Sim (s) / Não (n): ').toLowerCase();
  if (userChoice === 's') {
    return addTasks();
  } else if (userChoice === 'n') {
    return backToManu();
  } else {
    console.log('\nEntrada invalida, tente novamente!');
    exitMenuAddTask();
  }
};

const backToManu = () => {
  console.log('\nDeseja volta para o menu?');
  const userChoice = readlineSync.question('Sim (s) / Não (n): ').toLowerCase();
  if (userChoice === 's') {
    console.log('\nVoltando para o menu!...\n');
  } else if (userChoice === 'n') {
    console.log('Ate a proxima!...');
    process.exit(0);
  } else {
    console.log('\nEntrada invalida, tente novamente!');
    backToManu();
  }
};

export default exitMenuAddTask;
