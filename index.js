document.querySelector("#checkBtn").addEventListener("click", function() {
    let num = document.querySelector("#textField").value;
    let pId = document.querySelector("#pId");
    // console.log(num);
    try {
        if(num < 5) {
            throw "Input is too low"
        } else if(num > 10) {
            throw "Input is too long"
        } else {
            pId.textContent = "Your number is " + num;
        }
    } catch (error) {
        alert("Error : " + error)
    }
});