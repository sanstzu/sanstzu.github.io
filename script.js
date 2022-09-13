var messages = ["Under construction"];
var curtext = [""];
var state = [false]
const ani_time = 250;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function init(){
    document.getElementById("intro").style.transitionDuration = "0.4s";
}

function addText(id_name, m_id){
    if(!state[m_id]) return;
    var element = document.getElementById(id_name);
    element.innerHTML += messages[m_id][element.innerHTML.length];
}

function delText(id_name,m_id){
    if(state[m_id]) return;
    let text = String(document.getElementById(id_name).innerHTML);
    document.getElementById(id_name).innerHTML = text.slice(0,-1);
    
}

async function show(id_name,id){
    clearTimeout();
    var element = document.getElementById(id_name);
    if(!state[id]){
        await sleep(200);
        state[id] = true;
        console.log("1");
        //await sleep(1000);
        console.log("test");
        text = messages[id];
        element.classList.remove("hidden");
        console.log("el.len = ".concat(String(element.innerHTML.length)))
        for(let i = parseInt(element.innerHTML.length); i < text.length; i++){
            addText(id_name,id);
            await sleep(ani_time/messages[id].length);
        }
    
    } else {
        state[id] = false;
        console.log("2");
        console.log("el.len = ".concat(String(element.innerHTML.length)))
        var len =  element.innerHTML.length
        text = messages[id];
        for(let i = 0; i < len; i++){
            delText(id_name,id)
            await sleep(ani_time/messages[id].length);
        }
    }
    
}