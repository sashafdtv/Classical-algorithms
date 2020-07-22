const arr = [5, 2, 4, 6, 7, 2, 1];

const selectionSort2 = arr => {

    arr.forEach((element, i) => { // Для каждого элемента массива...
        let indexMin = i;

        for (let j = i + 1; j < arr.length ; j++) { // и оставшихся n-1 элементов массива...
            if (arr[indexMin] > arr[j]) { //происходит сравнение...
                indexMin = j; //если меньше, присваиваем меньшее indexMin.
            }
        }

        if (indexMin !== i) { //Если найдено меньшее...
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]; // меняем местами.
        }
    });
    return arr;
};

console.log(selectionSort2(arr));