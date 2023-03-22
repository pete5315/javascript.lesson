function add7(){
    let number = parseInt(prompt("Enter number"));
    number=number+7;
    console.log(number);
}


function capitalize(string){
    //document.getElementById("frm1").submit();
    let stringupper=string.toUpperCase();
    let stringlower=string.toLowerCase();
    let string2=stringupper.slice(0,1)
    let string3=stringlower.slice(1);
    let string4=string2+string3;
    console.log(string2);
    console.log(string3);
    alert(string4);
    string.slice(string.length);
}