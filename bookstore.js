// Enter your code below here and ABOVE the HELPER FUNCTIONS

 function makeStore() {
  var books= generateBooks()
  return {}
  }
  var bookStore = makeStore()
  


    function displayBook(book) {
      return book.title + ' ' + book.author + ' ' + book.price + ' ' + book.category+' '+book.id

    }
    function displayBooks(books) {
      var output =""
      for (var i=0; i< books.length;i++){
        output=output + displayBook(books[i]) + "\n"
      }
      return output 
    }
    function isMatch(book,query) {
      var b=(book.title +' '  + book.author + ' ' +book.category ).toLowerCase()
      var q=query.toLowerCase()
      return b.indexOf(q)
    }
    function getBook(id) {
      for (var i=0; i<books.length;i++){
        if (books[i].id ===id) {
          return books[i]
        }
      }
    }
    function removeBook(id) {
      for (var i=0; i<books.length;i++){
        if (books[i].id === id) {
          books.splice(i,1)
          return books
        }
      }
    }


  
    function makeStore() {
      var books = generatebooks()
    return {
      displaybooks: function(n) {
        for (var i=0; i<n;i++){
          console.log(displayBook(books[i]))
        } 
      }
      search: function(query) {
        var results= []
        for (var i=0; i<books.length;i++){
          if (isMatch(book[i],query) ){
            results.push(books[i])
          }
          return results
        }
    }
    getBook:function(id) {
      for (var i=0; i<books.length;i++){
        if (books[i].id ===id) {
          return books[i]
        }
      }
    }
    removeBook:function(id) {
      for (var i=0; i<books.length;i++){
        if (books[i].id === id) {
          books.splice(i,1)
          return books

    }
    }

  }
}
 




// ==============================================================================
// HELPER FUNCTIONS

function generateBooks(n) {
  // __rawBooks is defined in books.js
  var booksArray = __rawBooks.split(',');
  var numBooks = n || booksArray.length - 1;
  var categories = ['classic', 'horror', 'romantic comedy', 'self help', 'historical'];

  function makeBook(bookName, id) {
    var tuple = bookName.split('by');

    return {
      id: id,
      title: tuple[0].trim(),
      author: tuple[1].trim(),
      price: parseFloat(randN(10, 35).toFixed(2)),
      category: randElt(categories)
    };
  }

  return reduce(take(booksArray, numBooks), function(books, s, i) {
    return conj(books, makeBook(s, i));
  }, []);
}
