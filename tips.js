/// FIRST REVERSE

/*Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function FirstReverse(str) { 
var reverse = '';
    for(var i = str.length - 1; i >= 0; i--)
    reverse += str[i];
    return reverse; 
  return str; 
         
}

//LONGEST WORD

function LongestWord(sen) { 

// First convert the string into an array with only the words.
// Then compare each words.length (after removing special characters from word) and sort these lengths in descending order.
// return the first element from that sorted array.

 var sentence = sen.split(" ")          
                    .sort(function(a,b){  
    return b.replace(/[^a-zA-Z]/g, "").length - a.replace(/[^a-zA-Z]/g, "").length;
  });
  return sentence.shift();
}


// MEAN MODE

/* https://coderbyte.com/question/mean-mode

*  Have the function MeanMode(arr) take the array of numbers stored in arr and         *
*  return 1 if the mode equals the mean, 0 if they don't equal each other              *
*  (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).     *
*  The array will not be empty, will only contain positive integers, and will not      *
* contain more than one mode.                                                          *
*                                                                                      *
*  SOLUTION                                                                            *
*  Since it is possible that I will want a function that will calculate the mean or    *
*  mode in the future, I decided to create separate functions for each. The mean is    *
*  calculated by the average of all values in the array. The mode is the number that   *
*  exists the most in the array. My solution is to call my two functions and then      *
*  compare to see if they are equal and if so return 1 else return 0.                  *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Create separate functions for getMean and getMode                              *
*    2) Compare the values returned from the two functions                             *
*    3) If values are equal return 1 else return 0
*/

mean = arr => (arr.reduce((a, b) => a + b))/(arr.length);

// mode is just the problem of finding the element with greatest no of occurrence
mode = arr => {

    let obj = {}, max = 1, mode;

    for (let i of arr) {
        obj[i] = obj[i] || 0;
        obj[i]++
    }

    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if ( obj[i] > max ) {
                max = obj[i]
                mode = i;
            }
        }
    }
    return mode;
}

meanMode = arr => mean(arr) == mode(arr)

let myArr = [5, 3, 3, 3, 1]

console.log(mean(myArr))

console.log(mode(myArr))

console.log(meanMode(myArr))


/*
QUESTION:
Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.
*/
function AlphabetSoup(str) {
  return str.split("").sort().join("");
}

// keep this function call here
AlphabetSoup(readline());




















/*
QUESTION:
Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.
*/
function CheckNums(num1,num2) {
  return (num1 == num2)?-1:(num2>num1)
}

// keep this function call here
CheckNums(readline());


/* QUESTION:
Have the function CorrectPath(str) read the str parameter being passed, which will represent the movements made in a 5x5 grid of cells starting from the top left position. The characters in the input string will be entirely composed of: r, l, u, d, ?. Each of the characters stand for the direction to take within the grid, for example: r = right, l = left, u = up, d = down. Your goal is to determine what characters the question marks should be in order for a path to be created to go from the top left of the grid all the way to the bottom right without touching previously travelled on cells in the grid.

For example: if str is "r?d?drdd" then your program should output the final correct string that will allow a path to be formed from the top left of a 5x5 grid to the bottom right. For this input, your program should therefore return the string rrdrdrdd. There will only ever be one correct path and there will always be at least one question mark within the input string.
================================================================================
Input:"???rrurdr?"
Output:"dddrrurdrd"

Input:"drdr??rrddd?"
Output:"drdruurrdddd"
*/
var N = 5; //size of grid

var dir = { //"[u|r|d|l]":[dx,dy]
	"u":[0,-1],
	"d":[0,1],
	"r":[1,0],
	"l":[-1,0]
}

function CorrectPath(str){
	var i,j;
	var dirs = str.split("");

	var grid = [];
	/* Generate a NxN grid, where each element in the grid represents the direction to take.
	Default is '?'
	*/
	for(i=0;i<N;i++){
		grid.push([]);
		for(j=0;j<N;j++){
			grid[i].push("?");
		}
	}

	/*
	==Smarter way?==
	If we sum up the individual directions' dx and dy, we can get an idea of what's lacking from the difference in the sums and the total size of the grid (N=5).
	For eg. "???rrurdr?":
		[1,0]+[1,0]+[0,-1]+[1,0]+[0,1]+[1,0] = [4,0]
		[4,-4] - [4,0] = [0,-4]
		This means that if there are 4 '?'s, there needs to be 4'd's and 0'l/r's.
		If there are 5 '?'s, there might be 4'd's, 1'r', 1'l', so the final total is also [0,-4]
	*/
	var nQ = 0; //number of question marks to be found
	var diffSum = [N-1,-(N-1)]; //we need to traverse 4 spaces right and 4 spaces down
	for(i=0;i<dirs.length;i++){
		var c  = dirs[i];
		if(c == '?') nQ++;
		else{
			diffSum[0] -= dir[c][0];
			diffSum[1] -= dir[c][1];
		}
	}

	var combos = generateCombos(nQ, diffSum);

	return dirs;
}

function generateCombos(nQ, diffSum){
	
}

readline = ()=>{
	return "r?d?drdd";
}

CorrectPath(readline());


/*
QUESTION:
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer. 
*/

var fact = {}

function FirstFactorial(n) {
    if(n<=2) return n;
    if(fact.hasOwnProperty(n)) return fact[n]

    return fact[n] = n*FirstFactorial(n-1);
}

// keep this function call here
FirstFactorial(readline());


/*
QUESTION:
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer. 
*/

var fact = {}

function FirstFactorial(n) {
    if(n<=2) return n;
    if(fact.hasOwnProperty(n)) return fact[n]

    return fact[n] = n*FirstFactorial(n-1);
}

// keep this function call here
FirstFactorial(readline());


/*
QUESTION:
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string "sredoC dna dlroW olleH". 
*/

function FirstReverse(str) {
	return str.split("").reverse().join("");
}

// keep this function call here
FirstReverse(readline());




/*
QUESITON:
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 
*/

function LetterCapitalize(str) {
  var s = str.split(" ");
  for(var i=0;i<s.length;i++){
      var w = s[i].split("");
      w[0] = w[0].toUpperCase();
      s[i] = w.join("");
  }

  return s.join(" ");
}

// keep this function call here
LetterCapitalize(readline());



/*
QUESTION: 
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
*/

function LetterChanges(str) {
  var abc = "abcdefghijklmnopqrstuvwxyz";
  var rot1 = {"z":"a"};
  var l,i;
  var vowels = {
      "a":"A",
      "e":"E",
      "i":"I",
      "o":"O",
      "u":"U"
  }

  for(i=0;i<abc.length-1;i++){ //avoid z
      l = abc[i+1];
      rot1[abc[i]] = (vowels.hasOwnProperty(l))?vowels[l]:l;
  }

  _str = str.split("");
  for(i=0;i<_str.length;i++){
      l = _str[i];
      _str[i] = (rot1.hasOwnProperty(l))?rot1[l]:l;
  }

  // code goes here
  return _str.join("");
}

// keep this function call here
LetterChanges(readline());


/* QUESTION: 
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

function LongestWord(sen) {
  var words = sen.replace(/[^a-zA-Z0-9 ]/gi,"").split(" ");

  var maxi = {
      "word":null,
      "length":0
  }
  for(var i=0;i<words.length;i++){
      if(words[i].length>maxi.length){
          maxi.word = words[i];
          maxi.length = words[i].length;
      }
  }
  // code goes here
  return maxi.word;
}

// keep this function call here
LongestWord(readline());



/*
QUESTION:
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
*/

function QuestionsMarks(_str) {
  //Replace all groups of non-numberic and non-question marks characters with "|".
  //This is to separate out numbers which were previously separated by other characters
  var str = _str.replace(new RegExp("([^0-9\\?]+)","gi"),"|");

  //Remove "|" characters which are next to question marks
  //This is so that later when we are finding for "???" we won't have problems
  str = str.replace(new RegExp("(\\?\\|)|(\\|\\?)","gi"),"?");

  //At this point, we have the numbers separated purely by '?'s and '|'s
  var regNumbers = new RegExp("([0-9]+)","gi");
  var i, result, results = [];

  //Get all the indexes of the numbers in this string
  while(result = regNumbers.exec(str)){
      results.push({
          "number": parseInt(result),
          "index": result.index
      });
  }

  var no10 = true;
  var r1,r2;
  for(i=0;i<results.length-1;i++){
      r1 = results[i];
      r2 = results[i+1];

      if(r1.number+r2.number != 10) continue;
      no10 = false;
      if(str.substring(r1.index+1,r2.index) != "???" ) return false;
  }

  if(no10) return false;
  
  return true;
}

//For testing purposes
/*
//n=-1;
testcases = ["arrb6???4xxbl5???eee5","9???1???9??1???9","5??aaaaaaaaaaaaaaaaaaa?5?5"];
readline = ()=>{
  return testcases[i];
}
for(i=0;i<testcases.length;i++)
//*/
QuestionsMarks(readline());



/*
QUESTION:
Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. 
*/

function SimpleAdding(num) {
  return parseInt(num*(num+1)/2); //in case of floating point
}

// keep this function call here
SimpleAdding(readline());




/*
QUESTION: Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 
*/

function SimpleSymbols(str) {
  var abc = new RegExp("[A-Z]","gi");

  var indexes = [];
  var result;

  while(result = abc.exec(str)){
    indexes.push(result.index);
  }

  for(i=0;i<indexes.length;i++){
      if(indexes[i]===0 || indexes[i]==str.length-1) return false;

      var ind = indexes[i];
      if(str[ind-1]!="+" || str[ind+1]!="+") return false;
  }

  return true;
}

// keep this function call here
SimpleSymbols(readline());


/*
QUESTION:
Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.
*/

function TimeConvert(num) {
  return parseInt(num/60)+":"+num%60;
}

// keep this function call here
TimeConvert(readline());





/*
QUESTION:
Have the function VowelSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of some arbitrary size filled with letters from the alphabet, and determine if a 2x2 square composed entirely of vowels exists in the matrix. For example: strArr is ["abcd", "eikr", "oufj"] then this matrix looks like the following:

a b c d
e i k r
o u f j

Within this matrix there is a 2x2 square of vowels starting in the second row and first column, namely, ei, ou. If a 2x2 square of vowels is found your program should return the top-left position (row-column) of the square, so for this example your program should return 1-0. If no 2x2 square of vowels exists, then return the string not found. If there are multiple squares of vowels, return the one that is at the most top-left position in the whole matrix. The input matrix will at least be of size 2x2.
===============================================================================
Input:["aqrst", "ukaei", "ffooo"]

Output:"1-2"


Input:["gg", "ff"]

Output:"not found"
*/
function isVowel(c){
	switch(c){
		case 'a': case 'A':
		case 'e': case 'E':
		case 'i': case 'I':
		case 'o': case 'O':
		case 'u': case 'U':
			return true;
		default:
			return false;
	}
}

function VowelSquare(strArr) {
	var arr = [];

    var i,j;
    //Make string array a 2D array.
    for(i=0;i<strArr.length;i++){
        arr.push(strArr[i].split(""));
    }

	for(i=0;i<arr.length-1;i++){
		for(j=0;j<arr[i].length-1;j++){
			if( isVowel(arr[i][j]) && isVowel(arr[i+1][j]) && isVowel(arr[i][j+1])  && isVowel(arr[i+1][j+1]) ){
				return i+"-"+j;
			}
		}
	}
	return "not found";
}

// keep this function call here
VowelSquare(readline());



/*
QUESTION:
Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.

Hard challenges are worth 15 points and you are not timed for them.
*/

/* NOTE:
This is an interesting mathematical constant, wherein there are at most 8 iterations before we arrive at the constant 6174. Note also that repeating digits (eg. 1111, 2222 etc) will arrive at the constant 0000. For a full solution, we must account for this also.
*/

function KaprekarsConstant(num) {
	if(num == 6174) return 0; //reached the constant
	if(num == 0 || num == 1111 || num == 2222 || num == 3333 || num == 4444 || num == 5555 || num == 6666 || num == 7777 || num == 8888 || num == 9999) return 0; //special case

	var numArr = [];
	var i;

	numArr = num.toString().split("").sort(function(a,b){ return parseInt(b)-parseInt(a); }); //sort digits in descending order
	var l = numArr.length; for(i=0;i<4-l;i++) numArr.push(0); //add missing '0's to the back

	n1 = parseInt(numArr.join(""));
	n2 = parseInt(numArr.reverse().join(""));

    //return 1;
	return 1+KaprekarsConstant(Math.abs(n2-n1));
}

// keep this function call here
KaprekarsConstant(readline());




/* QUESTION:
Have the function MaximalSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of 0 and 1's, and determine the area of the largest square submatrix that contains all 1's. A square submatrix is one of equal width and height, and your program should return the area of the largest submatrix that contains only 1's. For example: if strArr is ["10100", "10111", "11111", "10010"] then this looks like the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

For the input above, you can see the bolded 1's create the largest square submatrix of size 2x2, so your program should return the area which is 4. You can assume the input will not be empty.
*/

//Modified 2D Maximal Square algo (dynamic programming)
//Skips if the max square sum is not k*k

function MaximalSquare(strArr) {
  var arr = [];

  var i,j;
  //Make string array a 2D array.
  for(i=0;i<strArr.length;i++){
      arr.push(strArr[i].split(""));
  }

  var anyOnes = false;
  //Create the DP array/summation table
//Single pass - O(n^2)
  for(i=0;i<arr.length;i++){
      for(j=0;j<arr[i].length;j++){
          arr[i][j] = parseInt(arr[i][j]); //make int first cos it's parsed as a string
          if(arr[i][j]==1) anyOnes = true;

          if(i>0) arr[i][j] += arr[i-1][j];
          if(j>0) arr[i][j] += arr[i][j-1];
          if(i>0 && j>0) arr[i][j] -= arr[i-1][j-1];             //avoid double counting
      }
  }

  if(!anyOnes) return 0;

  mx = 1;
  sm = 0;

//Pass over again, with matrix k - O(n^2*k)
  for(i=0;i<arr.length;i++) for(j=0;j<arr[i].length;j++){ //start coord
      for(k=1;k<arr.length;k++){ //size of matrix, skip 1x1 because we know it'll be one unless there are no ones (checked beforehand)
    /* End coordinates */
          end_i = i+k;
          end_j = j+k;
    if(end_i>=arr.length || end_j>=arr[i].length) break;

    /* Sum from DP summation array/table */
          sm = arr[end_i][end_j]; //sum from (0,0) to (end_i, end_j) - O(1)
          if(i>0) sm -= arr[i-1][end_j]; //exclude subrect (0,0) to (i-1,end_j) - O(1)
          if(j>0) sm -= arr[end_i][j-1]; //exclude subrect (0,0) to (end_i,j-1) - O(1)
          if(i>0 && j>0) sm += arr[i-1][j-1]; //include back the double counted excluded (0,0) to (i-1,j-1) subrect - O(1)
          //The sum is finally here: sum from (i,j) to (end_i,end_j) - total O(4)

          if(sm!=(k+1)*(k+1)) continue;

          if(sm>mx){
              mx = sm;
          }
      }
  }

  // Return mx. Total O(2*n^2*k*4) = O(8*n^2*k)
  return mx;
}

//For testing purposes
/*
readline = ()=>{
return ["0111", "1111", "1111", "1111"];
}
//*/

// keep this function call here
MaximalSquare(readline());




/*
QUESTION:
Have the function PentagonalNumber(num) read num which will be a positive integer and determine how many dots exist in a pentagonal shape around a center dot on the Nth iteration. For example, in the image below you can see that on the first iteration there is only a single dot, on the second iteration there are 6 dots, on the third there are 16 dots, and on the fourth there are 31 dots.
*/

function PentagonalNumber(n) {
	//Basically: f(n) = 1+5*(1+2+...+n-1) = 1+5*(n+1-1)(n-1)/2 (based on Gauss summation)
	return 1+5*parseInt(n*(n-1)/2);
}

// keep this function call here
PentagonalNumber(readline());
