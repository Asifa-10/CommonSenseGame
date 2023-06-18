const add=[];
const rightvalues=["Uttar Pradesh","Maharashtra","Bihar","West Bengal","Andhra Pradesh","Madhya Pradesh","Tamil Nadu","Rajasthan","Karnataka","Gujarat"];
const btn=[];

for (var k = 0; k <=8; k++) {
    btn[k+1]= document.getElementsByTagName("button")[k];
}

function set(val){
    let sum=0;
    const val1= document.getElementsByTagName("td")[val-1].innerHTML;
    const val2= document.getElementsByTagName("td")[val].innerHTML;
    document.getElementsByTagName("td")[val-1].innerHTML=val2;
    document.getElementsByTagName("td")[val].innerHTML=val1;

    for (var a = 0; a <=9; a++) {
        add[a]=document.getElementsByTagName("td")[a].innerHTML;
    }
    for (var l = 0; l <=9; l++) {
        if (rightvalues[l].trim()===add[l].trim()) {
            sum++;
            document.getElementsByTagName("td")[l].style.color="green";
        } else{
            document.getElementsByTagName("td")[l].style.color="red";
        }  
    }
    if (sum==10) {
        alert("✨Congratulations!! You are so intelligent..✨")
    }
}

btn[1].addEventListener("click",()=>{
    set(1);
});
btn[2].addEventListener("click",()=>{
    set(2);
});
btn[3].addEventListener("click",()=>{
    set(3);
});
btn[4].addEventListener("click",()=>{
    set(4);
});
btn[5].addEventListener("click",()=>{
    set(5);
});
btn[6].addEventListener("click",()=>{
    set(6);
});
btn[7].addEventListener("click",()=>{
    set(7);
});
btn[8].addEventListener("click",()=>{
    set(8);
});
btn[9].addEventListener("click",()=>{
    set(9);
});