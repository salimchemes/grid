var items = [
    ['0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    ['1', 'Q', '4', '5', '6', '7', '5', 'G', 'H', 'I', 'J', 'K', 'L'],
    ['2', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', '4'],
    ['3', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    ['4', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    ['5', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    ['6', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    ['7', '1', '3', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

];
var chords = 'E1A7B7';
function getchord(letter, number) {
    var result;
    for (i = 0; i <= 12; i++) {
        if (items[0][i] == letter) {
            result = items[number][i];
        }
    }
    return result;

}

var firstLetter = chords.substring(0, 1);
var firstNumber = chords.substring(1, 2);

var secondLetter = chords.substring(2, 3);
var secondNumber = chords.substring(3, 4);

var thirdLetter = chords.substring(4, 5);
var thirdNumber = chords.substring(5, 6);

var result = getchord(firstLetter, firstNumber) + getchord(secondLetter, secondNumber) + getchord(thirdLetter, thirdNumber);
 
console.log(result);