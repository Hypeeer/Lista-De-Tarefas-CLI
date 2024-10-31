import readlineSync from 'readline-sync';

const mainMenu = () => {
    console.log(`Lista de tarefas`);
    console.log(`[1] Adicionar Tarefa`);
    console.log(`[2] Vizualizar Lista de Tarefas`);
    console.log(`[3] Marca Tarefa Comcluidas`);
    console.log(`[4] Remover Terefa`);
    let choice = readlineSync.question(`Digite: `)
    
    switch(choice){
        case '1':
            break
        case "2":
            break
        case "3":
            break
        case "4":
            break
    }
}

mainMenu()