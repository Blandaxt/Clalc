var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");


Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        // const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
            // 'thumbDown': thumbDown
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        // const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('messages2', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            // 'thumbUp':thumbUp
            'thumbDown': thumbDown
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});


// user enters values
// values are operated on after click of operation
document.getElementById("multi").onclick = multiNums
document.getElementById("divide").onclick = divideNums
document.getElementById("sub").onclick = subNums
document.getElementById("add").onclick = addNums

function addNums(){
  //get the value out of the first input
    //get the value out of the second input
    var num1 = parseFloat(document.getElementById("userinput1").value)

    var num2 = parseFloat(document.getElementById("userinput2").value)
    // add both values
    var add = num1 + num2
    // alert the sum
    alert(add)
}

function subNums(){
  //get the value out of the first input
    //get the value out of the second input
    var num1 = parseFloat(document.getElementById("userinput1").value)

    var num2 = parseFloat(document.getElementById("userinput2").value)
    // add both values
    var sub = num1 - num2
    // alert the sum
    alert(sub)
}
// with 2 inputs
// function

function multiNums(){
  //get the value out of the first input
    //get the value out of the second input
    var num1 = parseFloat(document.getElementById("userinput1").value)

    var num2 = parseFloat(document.getElementById("userinput2").value)
    // add both values
    var multi = num1 * num2
    // alert the sum
    alert(multi)
}
// will allert output after running

function divideNums(){
  //get the value out of the first input
    //get the value out of the second input
    var num1 = parseFloat(document.getElementById("userinput1").value)

    var num2 = parseFloat(document.getElementById("userinput2").value)
    // add both values
    var divide = num1 / num2
    // alert the sum
    alert(divide)
}
// with 4 buttons, multiplication, division, subtraction, addition
