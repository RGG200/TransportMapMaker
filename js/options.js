const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function showOptions(classname){
    document.getElementById(classname).style.display = 'block';
}
async function hideOptions(classname){
    document.getElementById(classname).style.display = 'none'
}
async function showEditor(hidden, showed){
    document.getElementById(hidden).style.display = 'none';
    document.getElementById(showed).style.display = 'block';
}
