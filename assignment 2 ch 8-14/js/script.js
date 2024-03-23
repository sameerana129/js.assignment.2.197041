document.getElementById("my-button").onclick = function(){
    let num1 =prompt("Enter string number")
    let num2 =+prompt("Enter integer number")
    let sum = num1 + num2
    document.getElementById("st").innerHTML = num1+ "+" + num2
document.getElementById("st1").innerHTML = "After Concatinate: "+ sum
}
document.getElementById("my-button1").onclick=function(){
    let name= prompt("Enter your Name")
    document.getElementById("st").innerHTML=name
    document.getElementById("st1").innerHTML=name
    if(name==="Samee"){
        document.getElementById("my-button1").onclick=alert("Very Good Name")
    }
    else{
        document.getElementById("my-button1").onclick=alert("Nice Name")  
    }
}
document.getElementById("my-button3").onclick = function(){
    let number = prompt("Enter number ' 1 to 100' ")
    let Grade;
    if (number>=90) {
        document.getElementById("st1").innerHTML = "Grade : "+"A+"
        document.getElementById("st").innerHTML = "Total Number= "+ number
    } else if(number>=80) {
        document.getElementById("st1").innerHTML = "Grade : "+"A"+""
        document.getElementById("st").innerHTML = "Total Number= "+ number
    } else if(number>=70){
        document.getElementById("st1").innerHTML = "Grade : "+"B"
        document.getElementById("st").innerHTML = "Total Number= "+ number
    }
    else if(number>=60){
        document.getElementById("st1").innerHTML = "Grade : "+"C"
        document.getElementById("st").innerHTML = "Total Number= "+ number
    }
    else if(number>=50){
        document.getElementById("st1").innerHTML = "Grade : "+"D"
        document.getElementById("st").innerHTML = "Total Number= "+ number
    }
    else{
        document.getElementById("st1").innerHTML = "Grade : "+"F"
        document.getElementById("st").innerHTML = "Total Number= "+ number
    }
}
document.getElementById("my-button2").onclick = function(){
    let num1 =+prompt("Enter first Number")
    let num2 =+prompt("Enter second Number")
    let operator = prompt("Enter Comparison operator")
    if (operator==="<") {
        let output= num1 < num2
        document.getElementById("st").innerHTML = num1+"<"+num2
        document.getElementById("st1").innerHTML = output
    } else if (operator===">") {
        let output= num1 > num2
        document.getElementById("st").innerHTML = num1+">"+num2
        document.getElementById("st1").innerHTML = output
    }
    else if (operator===">=") {
        let output= num1 >= num2
        document.getElementById("st").innerHTML = num1+">="+num2
        document.getElementById("st1").innerHTML = output
    }
    else if (operator==="<=") {
        let output= num1 <= num2
        document.getElementById("st").innerHTML = num1+"<="+num2
        document.getElementById("st1").innerHTML = output
    }
    else
        document.getElementById("st").innerHTML = "Invalid Choose Operator"
}
document.getElementById("my-button5").onclick =function(){
    let age = prompt("Enter your Age")
let weight = prompt("Enter you Weight")
if (weight>="80"&age<=30) {
    document.getElementById("st1").innerHTML = "You Are Faty boy"
    document.getElementById("st").innerHTML = "Age= " + age +"years "+ "& " + "weight= " +weight + "KG"
} else if(weight<80&age<60){
    document.getElementById("st1").innerHTML = "You Are  handson man"
    document.getElementById("st").innerHTML = "Age= " + age +"years "+ "& " + "weight= " +weight + "KG"
}    
else if(age>=60&weight>=50){
    document.getElementById("st1").innerHTML = "You Are Senior Citizens"
    document.getElementById("st").innerHTML = "Age= " + age +"years " + "& " + "weight= " +weight + "KG"
}
else{
    document.getElementById("st1").innerHTML = "Try Again!"
}
}
document.getElementById("my-button4").onclick =function(){
// program to find the largest among three numbers

// take input from the user
let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");
let num3 = prompt("Enter third number: ");
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
// display the result
document.getElementById("st").innerHTML = "num1= "+num1+" & "+"num2= "+num2+"& "+"num3= "+num3
document.getElementById("st1").innerHTML =("The largest number is " + largest);
}
document.getElementById("my-button6").onclick =function(){
    let name = prompt("Enter Username")
    let password;
    if (name==="samee129") {
        let password  =prompt("Enter Password")
        if (password==="12345678") {
            document.getElementById("my-button7").onclick = (" Login successfully")
            document.getElementById("st1").innerHTML = "Login successfully"
            document.getElementById("st").innerHTML = "Username= "+name+"& "+"Password= "+password
        }else {
            document.getElementById("btn-7").onclick = alert("Wrong Password")
            document.getElementById("st1").innerHTML = "Wrong Password"
            document.getElementById("st").innerHTML = "Username= "+name+"& "+"Password= "+password
        }
    }
    else {
        document.getElementById("btn-7").onclick = alert("Wrong Username")
        document.getElementById("st1").innerHTML = "Wrong Username"
        document.getElementById("st").innerHTML = "Username= "+name+"& "+"Password= "+password
    }
}
document.getElementById("demo").onclick=function(){
    document.getElementById("st").innerHTML=" "
}
document.getElementById("demo1").onclick=function(){
    document.getElementById("st1").innerHTML=" "
}