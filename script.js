if (localStorage.getItem("number") == null){
    document.getElementById("number").innerHTML = "0";
}else{
    document.getElementById("number").innerHTML = localStorage.getItem("number");
}

function add(){
    const cCount = parseInt(document.getElementById("number").innerHTML);
    document.getElementById("number").innerHTML = cCount + 1;
    localStorage.setItem('number', cCount + 1)
}

function subs(){
    const cCount = parseInt(document.getElementById("number").innerHTML);
    document.getElementById("number").innerHTML = cCount - 1;
    localStorage.setItem('number', cCount - 1)
}