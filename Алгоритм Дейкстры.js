const graphs = { //Объект узлов и веса графа
    "start": {
        "a": 6,
        "b": 2
    },
    "a": {
        "end": 1
    },
    "b": {
        "a": 3,
        "end": 5
    }
};

const costs = { //Объект стоимости перехода
    "a": 6,
    "b": 2,
    "end": undefined
};

const parents = { //Объект родителей
    "a": "start",
    "b": "start",
    "end": Infinity
};

const processed = {}; //Массив для отслеживания уже обработанных узлов

const findLowestCostNode = () => {
    let minCost;
    let nearNode;
    let resultNode;

    if (Object.keys(costs).length > Object.keys(processed).length) {
        minCost = costs[Object.keys(costs)[0]];
        nearNode = Object.keys(costs)[0];
    }

    for (var node in costs) {
        if (
            costs[node] < minCost && processed[node] !== true
        ) {
            minCost = costs[node];
            nearNode = node;
            resultNode = node;
        }
    }
    return resultNode;
};

const D = () => {
    let node = findLowestCostNode();

    while (node) {

        let cost = costs[node];
        let neignbors = graphs[node];

        for (let i in neignbors) { // Перебираем всех соседей узла
            let new_cost = cost + neignbors[i]; // Новая стоимость
            if (costs[i] > new_cost || costs[i] === undefined) {
                costs[i] = new_cost;
                parents[i] = node;
            }
            processed[node] = true;
        }


        node = findLowestCostNode();
    }
};

D();
console.log(costs);