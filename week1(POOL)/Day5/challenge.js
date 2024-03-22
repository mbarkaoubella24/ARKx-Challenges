const books = require("./books.json");
///////////////////////////////
function priceOfBook(bookName) {
  for(let i=0;i<books.length;i++){
    if(bookName===books[i].title)
       return books[i].price;
  }
}
///////////////////////////////
function affordableBooks(budget) {
   let array=[];
   for(let i=0;i<books.length;i++){
    if(budget >= books[i].price)
       array.push(books[i]);
  }
  return array;
}
/////////////////////////////
function findBookByGenre(genre) {
 let array=[];
  for (let i=0;i<books.length;i++){

    for(let j=0;j<books[i].genres.length;j++){
      if (genre===books[i].genres[j])
         array.push(books[i]);
    }
 
  }
  return array;
}
///////////////////////////////////
function if_existe(array,string){
  for(let i=0;i<array.length;i++){
    if(string===array[i]) return true;
    
  }
  return false;
}
function all_genres(){
  let array=[];
  for(let i=0;i<books.length;i++){
    for(let j=0;j<books[i].genres.length;j++){
      if(!if_existe(array,books[i].genres[j]))
        array.push(books[i].genres[j]);
    }
  }
  return array;
  
}

function groupByGenre() {
  let groups=[];
  let genres=all_genres();

  for(let i=0;i<genres.length;i++){
    let group={};
    group.genre=genres[i];
    group.books=findBookByGenre(genres[i]);
    groups.push(group);
  }
  
  return groups;
}
//////////////////////////////////
function sortBooksByPrice() {
  let i, j, k, temp;
  
  for (i = 0; i < books.length; i++) {
    k = i;
    for (j = i; j < books.length; j++) {
      if (books[j].price < books[k].price) k = j;
    }
    temp = books[i];
    books[i] = books[k];
    books[k] = temp;
  }
  
 return books;
}
//////////////////////////////////////
(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");

    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
     if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();
