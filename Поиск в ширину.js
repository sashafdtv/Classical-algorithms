const graphs = {
    "you": ["alice", "bob", "claire"],
    "bob": ["anuj", "peggy"],
    "alice": ["peggy"],
    "claire": ["thom", "johny"],
    "anuj": [],
    "peggy": [],
    "thom": [],
    "johny": []
};

const bfs = (graphs, start) => {

    let turn = []; //Создаем очередь
    let checked = []; //Список уже проверенных людей

    graphs[start].forEach(element => {
        turn.push(element); //Добавляем в очередь узлы начального элемента графа
    });

    while (turn.length > 0) { 
        let person = turn.shift(); //Удаляем первый узел из очереди и кладем его в person
        if (person[0] === "j" ) { //Любое условие
            return person;
        } else {
            checked.push(person);
            graphs[person].forEach(element => { //Если условие не выполнено, добавляем все соседние узлы person в конец очереди
                if (!(checked[element])) turn.push(element); //Проверка на уже проверенный узел
            });
        }
    }

};

console.log(bfs(graphs, "you", "alice"));