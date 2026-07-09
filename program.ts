//Reverse string:

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

console.log(reverseString("playwright"));

function rev() {
    let rev: string = "";
    const a: string = "Playwright";

    for (let i = a.length - 1; i >= 0; i--) {
        rev = rev += a[i];
    }

    console.log(rev);
}

rev();

//palindrome

function isPalindrome(str: string): boolean {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

//count
function countVowels(str: string): number {
    let count = 0; //initialise count variable to 0
    const vowels = "aeiouAEIOU";

    for (const ch of str) {
        if (vowels.includes(ch)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Automation Testing"));

//duplicate numbers

function findDuplicates(arr:number[]):number[]{
const seen =new Set <number>();
const duplicates =new Set<number>();

for (const num of arr){
if(seen.has(num)){
duplicates.add(num);
}else{
seen.add(num);
}
}
return Array.from(duplicates);
}
console.log(findDuplicates([1,2,3,2,4,5,1]));

//unique numbers

function findUniqueNumbers(arr: number[]): number[] {
    const uniqueNumbers = new Set<number>();

    for (const num of arr) {
        uniqueNumbers.add(num);
    }

    return Array.from(uniqueNumbers);
}

console.log(findUniqueNumbers([1, 2, 3, 2, 4, 5, 1]));

//to remove duplicate numbers from an array

function removeDuplicates(arr: number[]): number[] {
    return Array.from(new Set(arr));
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5]));

//second largest number in an array with sorting

function getLargest(arr: number[]): number {
    arr.sort((a, b) => b - a); // descending order
    return arr[0];
}

const numbers = [12, 45, 67, 23, 89];

console.log(getLargest(numbers));

//second largest number in an array with sorting
function secondLargest(arr: number[]): number {
    const unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique[1];
}

console.log(secondLargest([10, 20, 5, 40, 40, 30]));

//character count in a string

function charCount(str:string): Record<string, number>{
const result:Record<string,number>={};
for (const ch of str){
result[ch]=(result[ch]||0)+1;
}
return result;
}
console.log(charCount("testing"));

//First Non-Repeating Character in a String

function firstNonRepeatingChar(str: string): string | null {
    const charCount: Record<string, number> = {};

    for (const ch of str) {
        charCount[ch] = (charCount[ch] || 0) + 1;
    }

    for (const ch of str) {
        if (charCount[ch] === 1) {
            return ch;
        }
    }
    
    return null; // Return null if no non-repeating character is found
}
console.log(firstNonRepeatingChar("automation")); // Output: "u"


//Anagram Check
function isAnagram(str1:string,str2:string):boolean{
    const format = (str: string) =>
        str.toLowerCase().split('').sort().join('');

    return format(str1) === format(str2);
}

console.log(isAnagram("listen", "silent"));

   

//Find max and min

function findMaxMin(arr:number[]): { max:number; min: number } {
let max=arr[0];
let min=arr[0];

for (const num of arr) {
if (num >max) max=num;  
 if(num<min)min=num;
}
return {max, min};
}
console.log(findMaxMin ([10,5, 30,2,50]));
