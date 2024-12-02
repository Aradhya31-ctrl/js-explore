const name = "Aradhya"
const repocount = 3

// console.log(name + repocount);
console.log(`Hello my name is ${name} amd I have ${repocount} repos`);

const coursename = new String(`Javascript`)
// console.log(coursename[1]);
// console.log(coursename.length);
// console.log(coursename.toUpperCase());
// console.log(coursename.charAt(2));
// console.log(coursename.indexOf('t'));
const newstring = coursename.substring(0,4)
console.log(newstring);
const anotherstring = coursename.slice(-8,4)
console.log(anotherstring);
const anotherstringg = "  Aradhya  "
console.log(anotherstringg.trim());

const url = "https://aradhya%20/aradhyasingh"
console.log(url.replace('%20','-'))
console.log(url.includes('shreya'))