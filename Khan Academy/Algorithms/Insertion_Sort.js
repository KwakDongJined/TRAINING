var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value; 
};

var insertionSort = function(array) {
    for(var i = 1 ; i<array.length;i++){
        insert(array,i-1,array[i]);
    }

};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [20, 11, 7, 9, -1, -3, 0];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array,[-3,-1,0,7,9,11,20]);
