const list = document.getElementById('list');
const title = document.getElementById('title');
const author = document.getElementById('author');
const books=[];
button.addEventListener("click", function()
{
    const booklist={
    titleName: title.value,
    authorName:author.value
    };
    books.push(booklist);
    console.log(books)
title.value='';
author.value='';
displayBooks();
});

function displayBooks() {
    const bookContainer = document.createElement('div');
    // list.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
   
      const titleElement = document.createElement('h3');
      titleElement.textContent = books[i].titleName;
      
  
      const authorElement = document.createElement('h3');
      authorElement.textContent = books[i].authorName;
      
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', function() {
        removeBook(i);
      });
      bookContainer.appendChild(titleElement);
      bookContainer.appendChild(authorElement);
      bookContainer.appendChild(removeButton);
  
      list.appendChild(bookContainer);
      }
    }
      
