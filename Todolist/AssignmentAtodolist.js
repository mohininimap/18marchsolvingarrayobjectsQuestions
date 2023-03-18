function addData(){
    var v1=document.getElementById("inp1").value;
    var crelement=document.createElement("div")
    var crtext=document.createTextNode(v1);
    crelement.appendChild(crtext);
    document.getElementById("displaylist").appendChild(crelement);
}

function clearAllList(){
    document.getElementById("addbtn").disabled = false;
    document.getElementById("displaylist").remove();
}
function doneList(a){
    document.getElementById(a).disabled = true;
    // document.getElementById("myDIV").style.opacity = "0.5";

    document.getElementById("addbtn").style.opacity = "0.5";
}