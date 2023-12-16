// project 04  
function number() {
      let frist_B = parseInt(document.getElementById("F_input").value);
      let second_b = parseInt(document.getElementById("S_input").value);

      let anser = frist_B + second_b;
      document.getElementById('Answer').innerHTML = "Answer is " + anser;

}


// project 05
function tin() {
      let number = document.getElementById("box").value;
      let lenth = number.length;
      let frisrTow = number.substr(0,2)
      let lastnum = number.substr(lenth-9,9)
      let num;

      if (lenth < 9){
            alert('Invalid number')
            document.getElementById("h3").innerHTML = "Invalid number";
      } else if (lenth == 9){
            alert("Correct your number")
            num = '+94' + number;
            document.getElementById("h3").innerHTML = num;
      } else if (lenth == 10){
            num = "+94" + lastnum;
            alert("Correct your number")
            document.getElementById("h3").innerHTML = num;
      }else if(lenth == 11 && frisrTow != 94){
            alert('Invalid number')
            document.getElementById("h3").innerHTML = "Invalid number";
      }else if (lenth ==11 && frisrTow == 94){
            num = number
            alert("Correct your number")
            document.getElementById("h3").innerHTML = num;
      }else{
            alert('Invalid number')
            document.getElementById("h3").innerHTML = "Invalid number";
      }
}


// project 06
function fn0() {
     let anser = document.getElementById("display").innerHTML;
     let aaaa = document.getElementById("display").innerHTML = anser + 0;
 }
 

function fn1() {
      let anser = document.getElementById("display").innerHTML;
      document.getElementById("display").innerHTML = anser + 1;
 }

 function fn2() {
      let anser = document.getElementById("display").innerHTML;
      document.getElementById("display").innerHTML = anser + 2;
 }

 function fn3() {
      let anser = document.getElementById("display").innerHTML;
      document.getElementById("display").innerHTML = anser + 3;
 }

 function fn4() {
      let anser = document.getElementById("display").innerHTML;
      document.getElementById("display").innerHTML = anser + 4;
 }

 function fn5() {
      let anser = document.getElementById("display").innerHTML;
      document.getElementById("display").innerHTML = anser + 5;
 }

 function fn6() {
      let anser = document.getElementById("display").innerHTML;
      document.getElementById("display").innerHTML = anser + 6;
 }

 function fn7() {
      let anser = document.getElementById("display").innerHTML;
      document.getElementById("display").innerHTML = anser + 7;
 }

 function fn8() {
      let anser = document.getElementById("display").innerHTML;
      document.getElementById("display").innerHTML = anser + 8;
 }

 function fn9() {
      let anser = document.getElementById("display").innerHTML;
      document.getElementById("display").innerHTML = anser + 9;
 }

function fneraser() {
     let anser = document.getElementById("display").innerHTML;
     let eraser = anser.slice(0, -1);
     document.getElementById("display").innerHTML = eraser;

}


let = op;
let = fristsave;
function fnP() {
     fristsave = document.getElementById("display").innerHTML;
     document.getElementById("display").innerHTML = 0;
     op = 1;

}



function fnR() {
     fristsave = document.getElementById("display").innerHTML;
     document.getElementById("display").innerHTML = 0;
     op = 2;

}



function fnB() {
     fristsave = document.getElementById("display").innerHTML;
     document.getElementById("display").innerHTML = 0;
     op = 3;

}




function fnG() {
     fristsave = document.getElementById("display").innerHTML;
     document.getElementById("display").innerHTML = 0;
     op = 4;

}

function fnS() {
     let secondsave = document.getElementById("display").innerHTML;
     if (op == 1) {
         document.getElementById("display").innerHTML = parseFloat(fristsave) + parseFloat(secondsave);
     } else if (op == 2) {
         document.getElementById("display").innerHTML = parseFloat(fristsave) - parseFloat(secondsave);
     } else if (op == 3) {
         document.getElementById("display").innerHTML = parseFloat(fristsave) / parseFloat(secondsave);
     } else if (op == 4) {
         document.getElementById("display").innerHTML = parseFloat(fristsave) * parseFloat(secondsave);
     }
 }

 function fnAC() {
     document.getElementById("display").innerHTML = "0";
     op = 0;
 }
 