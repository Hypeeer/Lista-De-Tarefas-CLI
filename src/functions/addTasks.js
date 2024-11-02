import readlineSync from 'readline-sync';

const saveTasks = [];

const addTasks = () => {
  const object = {};
  object.id = readlineSync.question('\nId: ');
  object.name = readlineSync.question('name: ');
  object.description = readlineSync.question('Descrição: ');
  console.log('\nTarefa salva com sucesso!');
  saveTasks.push(object);
  exitMenu();
};

const exitMenu = () => {
  console.log('\nDeseja salvar outra tarefa ? ');
  const userChoice = readlineSync.question('Sim (s) / Não (n): ');
  if (userChoice === 's') {
    return addTasks();
  } else if (userChoice === 'n') {
    console.log('\nDeseja volta para o menu pricipal ?');
    const userChoice = readlineSync.question('Sim (s) / Não (n): ');
    return userChoice === 's' ? console.log('\nVoltando para o menu...\n') : console.log('Obrigado (a)! Ate logo');
  }
};

export default addTasks;
export { saveTasks };
