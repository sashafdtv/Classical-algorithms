const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binary_search = function (arr, el) {
    // Верхняя и нижняя границы диапазона поиска
    // В начале поиска диапазоном будет весь массив
    let low = 0;
    let hight = arr.length - 1;

    while (low <= hight) { //Поиск продолжается, пока low меньше или равно hight 
    //В случае, если искомое значение отсутствует, hight рано или поздно станет меньше low
    
        mid = Math.floor((low + hight) / 2); //Расчет среднего индекса с округлением в меньшую сторону
        console.log(mid);

        if (el === arr[mid]) {
            return mid;
        } else if (el > arr[mid]) {
            low = mid + 1; // Смещение low в часть массива после arr[mid]
        } else {
            hight = mid - 1; // Смещение hight в часть массива перед arr[mid]
        }
    }
};

console.log(binary_search(arr, 85));