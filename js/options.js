const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function showOptions(classname){
    document.getElementById(classname).style.animation = "fade-in 0.8s";
    await sleep(600) 
    document.getElementById(classname).style.display = 'block';
}
async function hideOptions(classname){
    document.getElementById(classname).style.animation = "fade-out 0.8s";
    await sleep(600)
    document.getElementById(classname).style.display = 'none'
}
async function showEditor(hidden, showed){
    document.getElementById(hidden).style.animation = "fade-out 0.8s";
    await sleep(800)
    document.getElementById(hidden).style.display = 'none';
    document.getElementById(showed).style.display = 'flex';
    document.getElementById(showed).style.animation = "fade-in 1s";
}
