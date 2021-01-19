console.log("This is index.js");
//constructor
function Book(nam, author, type) {
  this.nam = nam;
  this.author = author;
  this.type = type;
}

//Display Constructor
function Display() {}

//Add methods to display prototype
Display.prototype.add = function (book) {
  console.log("adding to ui");
  tableBody = document.getElementById("tableBody");
  let uiString = `
    <tr>
                        
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
    `;
};
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

//Add Submit event Listener to form

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
  console.log("You have submitted library form");
  let nam = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;
  // Fiction , programming, cooking
  let fiction = document.getElementById("fiction").value;
  let programming = document.getElementById("programming").value;
  let cooking = document.getElementById("cooking").value;

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(nam, author, type);
  console.log(book);

  //remove display
  let display = new Display();
  display.add(book);
  display.clear();
  e.preventDefault();
}
