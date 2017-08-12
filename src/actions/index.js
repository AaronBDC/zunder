export function selectBook(book){
//  console.log('A Book has been selected:', book.title);
//selectBook is an action creator it needs to return an action
// an object with a type property.
//actions have two piece type: payload  
return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}