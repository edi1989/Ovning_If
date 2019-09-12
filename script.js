//Funktion kontrollera ålder
function CheckAge(){
    var age = document.getElementById ("textbox"); //Hämtar värdet i textrutan i index

    if(age.value <= 17 && age.value >= 0){ //När ålder är mellan 0-17 = För ung
        alert("Too young!")
    }

    else if(age.value > 65){ //När ålder är större än 65 = För gammal
        alert("Too old!")
    }
    else if(age.value >= 18 && age.value <=65){ //När ålder är mellan 18-65 = Korrekt ålder
        alert("Correct age!")
    }

    }



