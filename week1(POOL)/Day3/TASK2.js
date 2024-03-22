/////////Arrays & Loops
//Task 1
function sum(numbers) {
  let t=0; 
  for (let i = 0; i < numbers.length; i++) {
    t += numbers[i];
  }
  return t;
}
let numbers = [4, 2, 7];
const t = sum(numbers);
console.log(t); 
///////////
function countEven(numbers1) {
    let C = 0;
    for (let i = 0; i < numbers1.length; i++) {
      
      if (numbers1[i] % 2 === 0) {
        
        C++;
      }
    }
    return C;
  }
  const numbers1 =[4, 2, 7];
  const r = countEven(numbers1);
  console.log(r);
  ///////////
  function double(numbers2) {
  let d = [];
  for (let i = 0; i < numbers2.length; i++) {
    d.push(numbers2[i] * 2);
  }
  return d;
}
console.log(numbers2 = [4, 2, 7]);
console.log(double(numbers2));
//Task 2
function sockMerchant(socks){
  let array=selection(socks);
  let i=1,repeated_value=array[0],numbre_reap=0,tmp=1;
  while(i<array.length){
     if(repeated_value===array[i]){
       tmp++;
     }else{
       numbre_reap+=Math.floor(tmp/2);
       tmp=1;
       repeated_value=array[i];
     }
     i++;
  }
  numbre_reap+=Math.floor(tmp/2);
  return numbre_reap;
 }
 console.log(sockMerchant([1, 2, 1, 2, 1, 3, 2])); 
 console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); 
 console.log(sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); 
 console.log(sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9]));
