
function CheckAge(){
    var age = document.getElementById ("textbox");

    if(age.value <= 17 && age.value >= 0){
        alert("Too young!")
    }

    else if(age.value > 65){
        alert("Too old!")
    }
    else if(age.value >= 18 && age.value <=65){
        alert("Correct age!")
    }

    }



