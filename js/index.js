var btnSubmit = document.getElementById("submit");
var siteName = document.getElementById("name");
var siteUrl = document.getElementById("urlInput");
var btnVisit = document.getElementById("btnVisit");
var btnDelet = document.getElementById("btnDelet");
var btnUpdate = document.getElementById("update");
var closeBtn = document.getElementById("closeBtn");
var globalIndex
 var anchor=document.querySelector("a");
var bookMarkers; 

var lightHouse=document.querySelector(".lightHouse")

var modall=document.querySelector(".modall")




if (localStorage.getItem("bookMarkers") !== null) {
  bookMarkers = JSON.parse(localStorage.getItem("bookMarkers"))
  display(bookMarkers);
  console.log(bookMarkers);
} else {
  bookMarkers = [];
  console.log(bookMarkers);

}

function addBookmark() {
  if (validationUrl() && validatioName()) {
    var bookMark = {
      siteName: siteName.value,

      siteUrl: siteUrl.value

    }
    console.log(bookMarkers);

    bookMarkers.push(bookMark);


    display(bookMarkers);
    saveToLocalStorage();


    clear()
  }
  else {
    lightHouse.classList.remove("d-none")
  }


}


function clear() {
  siteName.value = null,
    siteUrl.value = null
}

function display(bookMarkers) {
  var cartoona = ""
  for (i = 0; i < bookMarkers.length; i++) {
    cartoona += `<tr>
  <td>
   ${i}
  </td>
  <td>
    ${bookMarkers[i].siteName}
  </td>
  <td>
   <button  id = "btnVisit"   onclick="visitSite()"     class="btn btn-warning btn-visit"> <i class="fa-solid fa-eye"></i>VISIT</button>
   <a href="${bookMarkers[i].siteUrl } class="d-none"   target="blank" >open site</a>
  </td>
  <td>
    <button  onclick="deletBookMark()"     id = "btnDelet" class="btn btn-danger"> <i class="fa-solid fa-trash"></i>Delet</button>
  </td>
</tr>
`


  }
  document.getElementById("tableBody").innerHTML = cartoona
}


function saveToLocalStorage() {
  localStorage.setItem("bookMarkers", JSON.stringify(bookMarkers))

}


function deletBookMark(index) {
  bookMarkers.splice(index, 1)
  display(bookMarkers)
  saveToLocalStorage()






}
function setUpdate() {
  globalIndex = index
  siteName.value = bookMarkers[index].siteName,
    siteUrl.value = bookMarkers[index].siteUrl

}
function updateBookMark() {
  var bookMark = {
    siteName: siteName.value,
    siteUrl: siteUrl.value

  }

  bookMarkers.splice(globalIndex, 1, bookMark)
  saveToLocalStorage()
  display(bookMarkers)
  btnSubmit.classList.add("d-none");
  btnUpdate.classList.remove("d-none")
}

function validationUrl() {
  var regex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)$/
  var text = siteUrl.value
  if (regex.test(text)) {
    siteUrl.classList.add("is-valid")
    siteUrl.classList.remove("is-invalid")
    return true
  }
  else {
    siteUrl.classList.remove("is-valid")
    siteUrl.classList.add("is-invalid")
    return false
  }
}
function validatioName() {
  var regex = /^[a-z0-9_-]{3,15}$/
  var text = siteName.value
  if (regex.test(text)) {
    siteName.classList.add("is-valid")
    siteName.classList.remove("is-invalid")
    return true
  } else {
    siteName.classList.remove("is-valid")
    siteName.classList.add("is-invalid")
    return false
  }
}

btnVisit.addEventListener("click",function(){
 visitSite()
})

function visitSite(){
  anchor.classList.remove("d-none")
 
}

function closeModal(){
 lightHouse.classList.add("d-none")

 
}


closeBtn.addEventListener("click", function(){
  closeModal()

});


document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeModal();
  }
});


