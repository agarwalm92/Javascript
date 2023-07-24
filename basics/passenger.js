document.getElementById("count-el").innerText = 0;
let target = 3;

function increment() {
    var count = document.getElementById("count-el").innerHTML;
    var newCount = Number(count) + 1;   
    document.getElementById("count-el").innerText = newCount;    

    if (newCount === target) {
        document.getElementById("count-el").innerText = newCount;
        //alert("You reached target! Yay");
        document.getElementById("add").disabled = true;
        document.getElementById("sucessMsg").visible = true;
        //document.getElementById("count-el").innerText = 0;
    }
}

function reset() {
    document.getElementById("count-el").innerText = 0;
    document.getElementById("add").disabled = false;
    document.getElementById("sucessMsg").visible = false;
}
