////////////////////////Group Challenge//////////////////////////////
//Bubble Sort
function bubble_sort(array){
    let temp;
    console.log(array);
for(let i=0;i<array.length;i++){
    
    for(let j=0;j<array.length-i-1;j++){
        if(array[j]>array[j+1]){
           temp=array[j+1];
           array[j+1]=array[j];
           array[j]=temp;
       }
     }
}
console.log(array);
}
bubble_sort([10,13,15,4,2,0,3,5,7,8,12,20,40]);
////////////////////////////////////////////////////
//Selection Sort
function selection(array){
    let i,j,k,temp;
    console.log(array);
    for(i=0; i<array.length; i++){
        k=i;
        for(j=i; j<array.length; j++){
            if(array[j]<array[k])
            k=j;
        }
        temp=array[i];
        array[i]=array[k];
        array[k]=temp;
    }
    console.log(array);
}
selection([10,13,15,4,2,0,3,5,7]);
////////////////////////////////
//Insertion Sort
function insertion(array){
    let i,j,temp;
    console.log(array);
    for(i=1; i<array.length; i++){
        temp=array[i];
        j=i-1;
        while(j>=0 && array[j]>temp){
            array[j+1]=array[j];
            j--;
        }
        array[j+1]=temp;
    }
    console.log(array);
}
insertion([10,13,15,4,2,0,3]);
//:::;;;:::;;;:::;;;
function insertion(array) {
    let i, j, temp;
    console.log(array);
    for (i = 1; i < array.length; i++) {
      temp = array[i];
      for (j = i-1; j >= 0; j--) {
        if (temp > array[j]) {
          break;
        }
        array[j + 1] = array[j];
      }
      array[j + 1] = temp;
    }
    console.log(array);
  }
//////////////////////////////
//Linear Search

function linearSearch(array,value) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === value) {
           return i;
        }
       
    }
    return null;
}
linearSearch([1, 12, 33, 4, 65],4);
// console.log(linearSearch([1, 12, 33, 4, 65],4));
/////////////////////////////////
console.log("*******************************************");
//Binary Search
function binarySearch(array,val){
   let i=0,j=array.length-1,k,index=null;
    while(i<=j){
     k=Math.floor((i+j)/2);
     if(val===array[k]){
      index=k;
      j=k-1;
     }
     else if(val<array[k]){
        j=k-1;
     }else{
        i=k+1;
     }
    }
    
    return index;
}
console.log(binarySearch([1,2, 2, 3, 4, 5,6,7,8,9,10],2));
