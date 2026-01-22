let O_block = document.getElementById("block");
let O_cagoule = document.getElementById("cagoule");
let O_history = document.getElementById(("history"));

function getRandomNumber(I_min, I_max){
    return Math.round(Math.random() * (I_max - I_min) + I_min);
}


let A_tableau = [];
let A_tableauHistory = [];
for(i=0; i<20; ++i){
    A_tableau.push(getRandomNumber(-10, 40))
}


console.log(A_tableau)



let I_temps=0;
function changeblock(){
    O_block.textContent = A_tableau[I_temps]+"°C";
    A_tableauHistory.push("                             "+A_tableau[I_temps]+"°C");
    O_history.textContent = A_tableauHistory;
    if(A_tableau[I_temps]<0){
        O_block.className = "blue";
        O_cagoule.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
    }
    if(A_tableau[I_temps]>0 && A_tableau[I_temps]<20){
        O_block.className = "green";
        O_cagoule.textContent = "";
    }
    if(A_tableau[I_temps]>20 && A_tableau[I_temps]<30){
        O_block.className = "orange";
        O_cagoule.textContent = "";
    }
    if(A_tableau[I_temps]>30){
        O_block.className = "red";
        O_cagoule.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
    }
    ++I_temps; if(I_temps>19){I_temps=0}
}

setInterval(() => { changeblock()},2000);

