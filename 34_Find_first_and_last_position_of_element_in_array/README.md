34. Найдите первую и последнюю позицию элемента в отсортированном массиве.
    Решено
    Середина
    Темы
    Компании
    Дан массив целых чисел nums, отсортированных в порядке неубывания, найдите начальную и конечную позицию заданного targetзначения.

Если targetне найден в массиве, верните [-1, -1].

Вы должны написать алгоритм со  O(log n)сложностью выполнения.



Пример 1:

Ввод: nums = [5,7,7,8,8,10], цель = 8
Вывод: [3,4]
Пример 2:

Ввод: nums = [5,7,7,8,8,10], цель = 6
Вывод: [-1,-1]
Пример 3:

Ввод: nums = [], цель = 0
Вывод: [-1,-1]


Ограничения:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
numsпредставляет собой неубывающий массив.
-109 <= target <= 109