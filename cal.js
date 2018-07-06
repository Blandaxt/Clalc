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
