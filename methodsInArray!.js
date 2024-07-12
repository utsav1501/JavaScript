/**Arrays in JS are Dynamic */
const cities=["Mumbai","Delhi","calcutta","jaipur","chennai"];

console.log(cities.length);

cities[2]="kolkata";//as we know const value cannot be changed but it is only for primitive data type
console.log(cities);

//Methods in Arrays

/** Adding an Element */

//push()->add element at the end

const teams=["CSK","GT","RCB","MI","LSG"];
// teams.push("GT");
const pushArray=teams.push('GT');
// console.log(teams);
console.log(pushArray);

//unshift()->add element to first

teams.unshift("KKR");
console.log(teams);
console.log(teams.length);

/**Removing an element*/

//pop->remove element from end of the array
teams.pop();
console.log(teams);
console.log(teams.length);

//shift->remove element from starting of the array
teams.shift();
console.log(teams);
console.log(teams.length);

//shift

/** check the element is present or not */
//indexof()
const RCBIndex=teams.indexOf("RCB");
console.log(RCBIndex);
const KXIPIndex=teams.indexOf('KXIP');
console.log(KXIPIndex);//return -1 bcz KXIP is not present

// includes ->returns boolean value
const rcbIndex=teams.includes("RCB");
console.log(rcbIndex);
const kxipIndex=teams.indexOf('KXIP');
console.log(kxipIndex);

// slice() and splice() 
//slice removes elements from starting of the element
console.log(teams);
console.log(teams.slice(-1));
console.log(teams);

//splice()
teams.splice(2,0,'DC','KKR');
console.log(teams);

// concat
const teams2=["India","Australia","NewZealand"];
const mergedTeams=teams.concat(teams2);
console.log(mergedTeams);



