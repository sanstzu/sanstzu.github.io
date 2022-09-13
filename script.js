var messages = ["Under construction"];

function init(){
    document.getElementById("intro").style.transitionDuration = "0.4s";
}

function addText(id_name, s){
    console.log(s);
    document.getElementById(id_name).innerHTML += s;
    setTimeout(1000);
}

function delText(id_name){
    let text = String(document.getElementById(id_name).innerHTML);
    document.getElementById(id_name).innerHTML = text.slice(0,-1);
    
}

function show(id_name,id){
    if(document.getElementById(id_name).classList.contains("hidden")){
        console.log("1");
        text = messages[id];
        document.getElementById(id_name).innerHTML = "";
        document.getElementById(id_name).classList.remove("hidden");
        for(let i = 0; i < text.length; i++){
            setTimeout(() => addText(id_name,text[i]),i*parseFloat(250/text.length));
        }
    
    } else {
        console.log("2");
        text = messages[id];
        for(let i = 0; i < text.length; i++){
            setTimeout(() => delText(id_name),i*parseFloat(250/text.length));
        }
        setTimeout(() => document.getElementById(id_name).classList.add("hidden"), 501);
    }
    
}