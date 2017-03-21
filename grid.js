var items = [
         //0    1    2    3    4    5    6    7    8    9   10    11   12  
    /*0*/['0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], /*0*/
    /*1*/['1', 'Q', 'F', '5', '6', '7', '6', 'G', 'H', 'I', 'J', 'K', 'L'], /*1*/
    /*2*/['2', 'A', '0', 'C', 'A', 'V', 'B', 'G', 'H', 'I', 'J', 'K', '4'], /*2*/
    /*3*/['3', 'A', '1', 'C', '6', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], /*3*/
    /*4*/['4', 'A', '4', 'C', '4', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], /*4*/
    /*5*/['5', 'A', '6', '0', '8', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], /*5*/
    /*6*/['6', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], /*6*/
    /*7*/['7', '1', '3', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'Z']  /*7*/

];

function getchord(letter, number) {
    var result;
    for (i = 0; i <= 12; i++) {
        if (items[0][i] == letter) {
            result = items[number][i];
        }
    }
    return result;
}
var key = 'A1L2L';

if (key.length != 6) {
    result = "Some coordinates are missing";
}
else {
    var firstLetter = key.substring(0, 1);
    var firstNumber = key.substring(1, 2);

    var secondLetter = key.substring(2, 3);
    var secondNumber = key.substring(3, 4);

    var thirdLetter = key.substring(4, 5);
    var thirdNumber = key.substring(5, 6);
    
    var result = getchord(firstLetter, firstNumber) + getchord(secondLetter, secondNumber) + getchord(thirdLetter, thirdNumber);


}

console.log(result);