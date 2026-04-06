let input = document.querySelector("#input")
let addBtn = document.getElementById("add-btn")
let ul = document.getElementById("lists")
let form = document.getElementById("form")
let error = document.getElementById("error")

form.addEventListener("click", function(e) {
  e.preventDefault()
  if (input.value.trim() === ""){
    error.textContent = "Biron nima kiriting"

    setTimeout(() =>{
      error.textContent = ""
    }, 3000)
  } else {
  let li = document.createElement("li")
  let button = document.createElement("button")

  li.textContent = input.value
  button.textContent ="🗑️"

  li.appendChild(button)
  ul.appendChild(li)
  input.value = ""
  }
})

ul.addEventListener("click", (e) => {
  if(e.target.tagName === "BUTTON"){
    e.target.parentElement.remove()
  }
})