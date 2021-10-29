console.log('RandomNo Generate');

var initialValue = 0, finalValue = 0, randomNo = 0;


function random(){
    for( let i = 1; i > 0 ; i++ ){
        randomNo = Math.ceil(Math.random()*finalValue);
        console.log(randomNo);
        if(randomNo >= initialValue){
            break
        };
    }    
}

function store(){
    initialValue = document.getElementById("initialNo").value;
    finalValue = document.getElementById("finalNo").value;
}

function generate(){
    if(finalValue >= initialValue){
    random();
    document.getElementById("result").innerHTML = randomNo;
    document.getElementById("result").style.fontSize = "20vh";
    document.getElementById("result").style.color = "white";
    }
    else{
        document.getElementById("result").style.fontSize = "6vh";
        document.getElementById("result").style.color = "#763626";
        document.getElementById("result").innerHTML = "Initial No can't be greater than Final No";

    }
}

document.getElementById("initialNo").addEventListener("keyup",store);
document.getElementById("finalNo").addEventListener("keyup",store);
document.getElementById("button").addEventListener("click",generate);


