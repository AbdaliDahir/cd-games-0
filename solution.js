function ArrayChallenge(strArr) {
  let result = '';
  for (let index = 0; index < strArr[0].length; index++) {
      if (strArr[0][index] === '1' && strArr[0][index] === strArr[1][index]) return result += '1'
      else return result += '0'
  }

  return result;
}
console.log(ArrayChallenge(readline()));






import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isON: true }
  }

  handleClick() {
    this.setState({ isON: !this.state.isON });
  }

  render() {
    const { isON } = this.state;
    let isActive = isON ? 'ON' : 'OFF';
    return (
      <button onClick={this.handleClick}>{isActive}</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);




import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState(true);

  const handleClick = () => {
    setState(!state);
  }

  return (
    <button onClick={handleClick}>{state ? 'ON' : 'OFF'}</button>
  )
}



/**
   * Challenge
   * Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
   * Sample Test Cases
   *
   * Input:"hello world"
   * Output:"Hello World"
   *
   * Input:"i ran there"
   * Output:"I Ran There"
   *
   * @param {string} sentence A string to be converted into Capitalised Case
   * @return {string} A sentence in Capitalised Case
   */
  letterCapitalize (sentence) {
    return sentence.split(' ')
      .map(item => item.charAt(0).toUpperCase() + item.substring(1))
      .join(' ');
  }

  /**
   * Challenge
   * Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
   * Sample Test Cases
   *
   * Input:"fun&!! time"
   * Output:"time"
   *
   * Input:"I love dogs"
   * Output:"love"
   *
   * @param {string} sentence A string to iterate over and search for longest word
   * @return {string} Longest word in the sentence
   */
  longestWord (sentence) {
    let words = sentence.replace(/\W/g, ' ')
      .replace(/ +|\s/g, ' ')
      .split(' ')
      .sort((a, b) => a.length < b.length);

    return words[0];
  }


















const findLongestIncreasingSequence = (source) => {
  let length = source.length

  let findLongestIncreasingSequence = Array(length).fill(1)

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (source[i] > source[j] && (findLongestIncreasingSequence[i] < findLongestIncreasingSequence[j] + 1)) {
        findLongestIncreasingSequence[i] = findLongestIncreasingSequence[j] + 1
      }
    }
  }

  let maximum = 0

  for (let i = 0; i < length; i++) {
    maximum = Math.max(maximum, findLongestIncreasingSequence[i])
  }
  return maximum
}

const source = [10, 22, 9, 33, 21, 50, 41, 60]

try {
  console.log(findLongestIncreasingSequence(source))
} catch (e) {
  if (e instanceof RangeError) {
    console.log(e)
  }
  
  
  
  
  
  
  
  
  
  

  
 // Using the JavaScript language, have the function PalindromeCreator(str) take the str parameter being passed and determine if it is possible to create a palindromic string of at least 3 characters by removing 1 or 2 characters. For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a palindrome. For this example your program should return the two characters that were removed with no delimiter and in the order they appear in the string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome, then return the string not possible. If the input string is already a palindrome, your program should return the string palindrome.

// The input will only contain lowercase alphabetic characters. Your program should always attempt to create the longest palindromic substring by removing 1 or 2 characters (see second sample test case as an example). The 2 characters you remove do not have to be adjacent in the string.

// Input:"mmop"
// Output:"not possible"

// Input:"kjjjhjjj"
// Output:"k"
// Hint
// Try looping through the string and removing every character to see if it produces a palindrome. Then you can also try and remove different pairs of letters within the string as well.

const isPalindrome = (str) => str === str.split('').reverse().join('')

function PalindromeCreator (str) {
  for (var i = 0; i < str.length; i++) {
    // str minus 1 char:
    let temp1 = str.slice(0, i)
    let temp2 = str.slice(i + 1)
    // let removedLetter = str[i]
    // console.log(removedLetter + '\n' + 'part 1:  ' + temp1, '\npart 2:  ' + temp2 + '\n')
    let tempStr = temp1 + temp2

    console.log(temp1, temp2, tempStr)
    if (isPalindrome(tempStr)) {
      return str[i]
    }
  }
}

console.log(PalindromeCreator('kjjjhjjj'))
  
  
  
  
  
  
  
  
  
  
  
  // reverse array elments positions to first to last

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < arr.length / 2; i++) {
  let tempFirst = arr[i]
  let tempLast = arr[arr.length - i - 1]
  arr[arr.length - i - 1] = tempFirst
  arr[i] = tempLast
}

console.log(arr)
  
  
  
  
  
  
  
  
  
  
  // Given a range of numbers, count the numbers which have same first and last digits
// Ex: Between 7 and 20 such numbersare 8,9 and 11
let firstDigit = 0
let lastDigit = 0

for (let i = 8; i < 20; i++) {
  if (i < 10) {
    firstDigit = i
    lastDigit = i
  } else {
    firstDigit = Math.floor(i / 10)
    lastDigit = i % 10
  }

  if (firstDigit === lastDigit) {
    console.log(i)
  }
}
  
  
  
  
  
  
  
  
  
  
  // Given an array of numbers in sorted order, count the paris of numbers whose sum is less than X

let defaultArr = [2, 4, 6, 8, 9]
const x = 14

let counter = 0

function repeater (arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[arr.length - 1]
    if (sum < x) {
      counter = counter + 1
    }

    if (sum > x) {
      let currentArray = arr.slice(0, arr.length - 1)
      repeater(currentArray)
      break
    }
  }
}

repeater(defaultArr)

console.log(counter, 'counter')
  
  
  
  
  
  
  
  // Given an array of numbers in sorted order, count the paris of numbers whose sum is less than X

let defaultArr = [2, 4, 6, 8, 9]
const x = 14

let counter = 0

function repeater (arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[arr.length - 1]
    if (sum < x) {
      counter = counter + 1
    }

    if (sum > x) {
      let currentArray = arr.slice(0, arr.length - 1)
      repeater(currentArray)
      break
    }
  }
}

repeater(defaultArr)

console.log(counter, 'counter')
  
  
  
  
  
  
  
  
  
  
  
  
  //rearrange_array_linear
  
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = []

for (let i = 0; i < arr.length / 2; i++) {
  result.push(arr[arr.length - i - 1])
  result.push(arr[i])
}

console.log(result)

  
  
  
  // SUBARRAY
  // input arr = [1, 4, 20, 3, 10, 5]
//  value = 33
// result = [3, 5]

// input arr = [1, 2, 3, 4, 5, 0, 0, 0, 0, 6, 7, 8, 9, 10]
//  value = 15
// result = [1, 8]

const arr = [1, 4, 20, 3, 10, 5]
const subArray = (arr, value) => {
  let sum = 0
  let right = 0
  let left = 0
  let result = [0, 0]

  while (right < arr.length) {
    sum += arr[right]
    while (left < right && sum > value) {
      sum -= arr[left++]
    }

    console.log(result.length, result[1], result[0], right, left)
    if (sum === value && (result.length === 1 || ((result[1] - result[0]) < (right - left)))) {
      result = [ left + 1, right + 1 ]
    }
    right++
  }

  console.log('largest sub array', result)
}

subArray(arr, 33)
