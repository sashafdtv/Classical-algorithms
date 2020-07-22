function swap(items, firstIndex, secondIndex) {
      const temp = items[firstIndex];
      items[firstIndex] = items[secondIndex];
      items[secondIndex] = temp;
}

function partition(items, left, right) {

      var pivot = items[Math.floor((right + left) / 2)];

      while (left <= right) {

            while (items[left] < pivot) {
                  left++; 
            }
            while (items[right] > pivot) {
                  right--;
            }
            if (left <= right) {
                  swap(items, left, right);
                  left++;
                  right--;
            }
      }
      return left;
}

function quickSort(items, left, right) {
      var index;
      if (items.length > 1) { //Сортировка продолжается, пока в массиве больше 1 элемента
            index = partition(items, left, right); //Происходит смещение элементов, возвращается правая граница
            if (left < index - 1) { //Если начало массива меньше 
                  quickSort(items, left, index - 1); //Рекурсивный вызов для правой стороны
            }
            if (index < right) { //если 
                  quickSort(items, index, right);
            }
      }
      return items;
}

console.log(quickSort(["a", "b", "c", "a"], 0, 2));