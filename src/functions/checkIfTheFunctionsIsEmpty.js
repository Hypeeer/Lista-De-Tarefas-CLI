const checkIfTheFunctionIsEmpty = (saveTasks) => {
  if (!saveTasks.length) {
    console.log('\nAdicione tarefas antes de vizualizar na opção [1]! \n');
  }
};

export default checkIfTheFunctionIsEmpty;
