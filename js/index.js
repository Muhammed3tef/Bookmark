var inputName = document.getElementById("inputName");
var inputURL = document.getElementById("inputURL");
var lnyar = document.getElementById("lnyar");
var xmark=document.getElementById("xMark")
var alertMessage = document.getElementById("alertMessage")
var alertUrl = document.getElementById("alertUrl")
var bookmarkData = [];
if (localStorage.userName != null) {
  bookmarkData = JSON.parse(localStorage.getItem("userName"));
  readData();
} else {
  bookmarkData = [];
}
//close
xmark.addEventListener("click",function(){
    lnyar.classList.replace("d-block","d-none")
})
//add
function addData() {
  if (inputName.classList.contains("is-valid")&&inputURL.classList.contains("is-valid")) {
    var databook = {
        code: inputName.value,
        link: inputURL.value,
      };
      bookmarkData.push(databook);
      localStorage.setItem("userName", JSON.stringify(bookmarkData));
      inputName.classList.remove("is-valid")
      inputURL.classList.remove("is-valid")
      readData();
      clearData();
  } else {
    lnyar.classList.replace("d-none","d-block")
  }
}
//clear
function clearData() {
  inputName.value = null;
  inputURL.value = null;
}
//read
function readData() {
  var cartona = "";
  for (var i = 0; i < bookmarkData.length; i++) {
    cartona += `<tr class="border  border-start-0 border-end-0 border-top-0">
        <td>${i + 1}</td>
        <td> ${bookmarkData[i].code}</td>
        <td class="p-3"><button  class="btn btn-warning px-4 fw-semibold"><i class="fa-solid fa-eye"></i>  <a href="${
          bookmarkData[i].link
        }" target="_blank">Visit</a></button></td>
        <td><button onclick="deleteData(${i})" class="btn btn-danger fw-semibold px-4"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`;
  }
  document.getElementById("tbodyData").innerHTML = cartona;
}
//delete
function deleteData(index) {
  bookmarkData.splice(index, 1);
  localStorage.userName = JSON.stringify(bookmarkData);
  readData();
  console.log(index);
}

//valid
function vaildInputs(element) {
  var regex = {
    inputName: /^[a-zA-z]{5,}$/i,
    inputURL: /https:\/\//,
  };
  if (regex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.replace("d-block","d-none")
  }
   else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.replace("d-none","d-block")
  }
}
