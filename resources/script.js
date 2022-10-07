const aliases = ["Clayton Fernalo", "sanstzu", "sans", "one and only", "unysolo"]
const ani_time = 250;
const duration = 5000;
const typing_id = "alias";
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", async function() {
    var cur = 0;
    var rise = 1;
    var cur_idx = 0;
    var cur_len = aliases[cur].length;
    var element = document.getElementById(typing_id);
    while(1){
        if(rise == 1){
            element.innerHTML += aliases[cur][cur_idx];
            if(cur_idx == cur_len - 1){
                rise = 0;
                await sleep(duration);
            } else {
                cur_idx++;
            }
        } else {
            element.innerHTML = element.innerHTML.slice(0,-1);
            if(cur_idx < 1){
                rise = 1;
                cur = (cur + 1)%aliases.length;
                cur_len = aliases[cur].length;
                
            } else {
                cur_idx--;
            }
        }
        await sleep(ani_time/cur_len);
    }
})

/*
Old typing effect script
async function show(id_name,id){
    var element = document.getElementById(id_name);
    await sleep(200);
    //console.log("1");
    //await sleep(1000);
    //console.log("test");
    text = aliases[id].toLowerCase();
    //console.log("el.len = ".concat(String(element.innerHTML.length)))
    element.innerHTML = "";
    for(let i = 0; i < text.length; i++){
        console.log(aliases[id][i]);
        element.innerHTML += aliases[id][i];
        console.log(element.innerHTML);
        await sleep(ani_time/text.length);
    }
    //console.log("--");
}


async function hide(id_name){
    var element = document.getElementById(id_name);
    //console.log(element.innerHTML);
    //console.log(element.innerHTML.length);
    await sleep(1);
    //console.log("2");
    //console.log("el.len = ".concat(String(element.innerHTML.length)))
    var len =  element.innerHTML.length;
    var text = element.innerHTML;
    for(let i = 0; i < len; i++){
        //console.log(i);
        element.innerHTML = element.innerHTML.slice(0,-1);
        await sleep(ani_time/len);
    }
}

document.addEventListener("DOMContentLoaded", async function() {
    //console.log("0");
    var cur = 0;
    while(1){
        //console.log("1");
        show(typing_id,cur);
        await sleep(duration);
        hide(typing_id);
        cur = (cur+1)%aliases.length;
        await sleep(ani_time+200);
    }
})
*/
/*
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
*/