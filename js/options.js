const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function showOptions(classname){
    if(document.getElementById(classname) == null){
        document.getElementsByClassName(classname)[0].style.display = 'block';
    }else{
        document.getElementById(classname).style.display = 'block';
    }
}
async function hideOptions(classname){
    if(document.getElementById(classname) == null){
        document.getElementsByClassName(classname)[0].style.display = 'none';
    }else{
        document.getElementById(classname).style.display = 'none';
    }
}
async function showEditor(hidden, showed){
    document.getElementById(hidden).style.display = 'none';
    document.getElementById(showed).style.display = 'block';
}
