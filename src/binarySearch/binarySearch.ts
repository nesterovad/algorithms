/**
 * Бинарный поиск в отсортированном массиве чисел или строк
 * @param {Array<number | string>} arr - Отсортированный массив чисел или строк
 * @param {number | string} item - Элемент для поиска
 * @returns {number | undefined} - Порядковый номер элемента в массиве или undefined, если элемента в массиве нет
 */
export default function BinarySearch(arr: Array<number | string>, item: number | string): number | undefined {
    let start: number = 0, end: number = arr.length - 1;
    while (start <= end){
        let mid: number = Math.ceil((start + end) / 2);
        if (arr[mid] === item){
            return mid;
        }else if (arr[mid] > item){
            end = mid - 1;
        }else if (arr[mid] < item){
            start = mid + 1;
        }else{
            return undefined;
        }
    }
}