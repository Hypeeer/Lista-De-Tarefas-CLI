import readlineSync from 'readline-sync';

const saveTasks = []; // Recebe todos as tarefas em um array de objetos

const addTasks = () => {
  const object = {}; //guarda todas as caracteristicas da tarefas do usuario
  object.id = readlineSync.question('\nId: ');
  object.name = readlineSync.question('name: ');
  object.description = readlineSync.question('Descrição: ');
  console.log('\nTarefa salva com sucesso!');
  saveTasks.push(object); //ao final o push adiconar em fila no array vazio
  exitMenu();
};

//função para trata a saida do programa, tanto o encerramento ou a volta ao fluxo do menu principal
const exitMenu = () => {
  console.log('\nDeseja salvar outra tarefa ? ');
  const userChoice = readlineSync.question('Sim (s) / Não (n): ');
  if (userChoice === 's') {
    return addTasks();
  } else if (userChoice === 'n') {
    console.log('\nDeseja volta para o menu pricipal ?');
    const userChoice = readlineSync.question('Sim (s) / Não (n): ');
    if (userChoice === 's') {
      console.log('Voltando para o menu!...');
    } else {
      console.log('Obrigado (a). Ate logo!');
      process.exit(0); //encerra a execução do fluxo caso as condiçoes seja aceitas
    }
  }
};

export default addTasks;
export { saveTasks }; //exporta para os demais arquivos para os dados serem tratados
