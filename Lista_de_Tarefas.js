import option from 'readline-sync';

const lista_de_tarefa = [];

const adcionar_nova_tarefa = () => {
    const objeto = {};
    objeto.id = option.question('id: ');
    objeto.tarefa = option.question('Nome da tarefa: ');
    objeto.descrição = option.question('Descrção: ');

    lista_de_tarefa.push(objeto);
    console.log('Tarefa Salva Com Sucesso! \n');
};

const verificar_tarefas = () => {
    if (lista_de_tarefa.length === 0) {
        console.log('Nem um objeto encontrado!');
    } else {
        console.log('Objetos');
        lista_de_tarefa.forEach((objeto, index) => {
            console.log(`${index + 1}. ID: ${objeto.id}, Nome: ${objeto.nome}, Descrição: ${objeto.valor}`);
        });
    }
    console.log('');
};

const main = () => {
    let opcaos = '';

    while (opcaos != '3') {
        console.log('\n Menu de tarefas');
        console.log('1 - Adcionar uma tarefa ');
        console.log('2 - Visualizar tarefa ');
        console.log('3 - Sair');
        opcaos = option.question('Escolha opcao: ');

        switch (opcaos) {
            case '1':
                adcionar_nova_tarefa();
                break;
            case '2':
                verificar_tarefas();
            case '3':
                console.log('Saindo!');
                break;
        }
    }
};

main();
