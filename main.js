const overly = document.querySelector('.overly');
let library = [];

function addBookBtn() {
  openOverly();
}

function openOverly() {
  overly.classList.add('active');
}

function closeOverly() {
  overly.classList.remove('active');
}

function addToLibrary() {
  let titleInput = document.querySelector('.title');
  let authorInput = document.querySelector('.author');
  let pagesInput = document.querySelector('.pages');
  let checkboxInput = document.querySelector('#cb');

  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read = false;

  if (checkboxInput.checked) {
    read = true
  }else {
    read = false
}

  if (title.trim() !== "" && author.trim() !== "" && pages.trim() !== "") {
    library.push({ title: title, author: author, pages: pages,read:read});
    renderLibrary();
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
  }
}

function deleteCard(cardIndex) {
  library.splice(cardIndex, 1);
  renderLibrary();
}

function renderLibrary() {
  const container = document.querySelector('.container');
  container.innerHTML = "";
  library.forEach((book, index) => {
    let div = document.createElement('div');
    div.classList.add('card');

    const deletebtn = document.createElement('button');
    deletebtn.textContent = "Delete";
    deletebtn.classList.add('delete');
    deletebtn.onclick = function () {
      deleteCard(index);
    };

    const readbtn = document.createElement('button');
    readbtn.textContent = "read";
    if (book.read) {
        readbtn.classList.remove('unread')
        readbtn.classList.add('read')
    }else{
        readbtn.classList.remove('read')
        readbtn.classList.add('unread')
    }
    readbtn.onclick = function() {
        book.read = !book.read
        if (book.read) {
            readbtn.classList.remove('unread')
            readbtn.classList.add('read')
        }else{
            readbtn.classList.remove('read')
            readbtn.classList.add('unread')
        }
    }


    div.innerHTML =
      `<p>title: ${book.title}</p>
        <p>author: ${book.author}</p>
        <p>pages: ${book.pages}</p>`
    div.appendChild(readbtn);
    div.appendChild(deletebtn);
    container.appendChild(div);
  });
  closeOverly();
}