const defaultComparator = (a, b) => { //Компаратор необходим, если мы работаем с массивами
      if (a < b) {
          return -1;
      }
      if (a > b) {
          return 1;
      }
      return 0;
  };
  
  const quickSort = (
      unsortedArray,
      comparator = defaultComparator
    ) => {
    
      const sortedArray = [ ...unsortedArray ]; //Создаем копию передаваемого масива
    
      const recursiveSort = (start, end) => {
    
        if (end - start < 1) { //Сортировка возвращает значения, когда передается массив с 0 - 1 элементом
          return;
        }
    
        const pivotValue = sortedArray[end]; //Опорная точка в конце массива
        let splitIndex = start; //Граница между меньшими и большими значениями относительно опорной точки. Изначально ставится в начале
        for (let i = start; i < end; i++) { 
          const sort = comparator(sortedArray[i], pivotValue); //Сравниваем значения
    
          if (sort === -1) { //Если значение элемента меньше опорной точки
    
            if (splitIndex !== i) { //Если split не ровняется индексу элемента (на практике такое происходит, когда был найден хотя бы 1 элемент больше опорного)
              // В такой ситуации каждый элемент меньше опорного переносится влево от уже найденого большего
              const temp = sortedArray[splitIndex];
              sortedArray[splitIndex] = sortedArray[i];
              sortedArray[i] = temp;
            }
    
            splitIndex++; //split сдвигается
          }
    
        }
    
        sortedArray[end] = sortedArray[splitIndex]; //Вызов двух рекурсивных функций для подмассивов слева и справа
        sortedArray[splitIndex] = pivotValue;
    
        recursiveSort(start, splitIndex - 1);
        recursiveSort(splitIndex + 1, end);
      };
    
      recursiveSort(0, unsortedArray.length - 1);
      return sortedArray;
    };
    console.log(quickSort([3,2,1, 34343, 0]));
  