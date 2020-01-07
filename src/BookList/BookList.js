import React, { Component } from 'react';
import Book from '../Book/Book';

class BookList extends Component {
  
  render(){
    console.log(this.props);
    const book = this.props.books.map((book) => 
      <Book key={book.accessInfo.id} id={book.accessInfo.id} title={book.volumeInfo.title} image={book.volumeInfo.imageLink.smallThumbnail} author={book.volumeInfo.author} price={book.saleInfo.retailPrice.amount} desc={book.volumeInfo.description}/>
    );

    return(
      <>
      {book}
      </>
    );
  }
}

export default BookList;