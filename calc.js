// var val="";
// var opt = "";
// var total=0;
// function calculate(y) {
//     opt=y;
//     if(y  != ""){
//       document.getElementById("data1").value=total;
//     }
//     if(opt != ""){
//       var num=document.getElementById("data").value;
//       document.getElementById("data").value=0;
//       val="";
//     }
//     if(total == 0)
//       total = num;
// }
// function display(x){
//    val +=""+x; 
//     document.getElementById("data").value=val;
//    if(opt != ""){
      
//     if(opt == "+") {
//         total=total+num;
//       }
//       else if(opt == "-"){
//         total=total-num;
//       }
//       else if(opt == "*"){
//        total=total*num;
//      }
//      else if(opt == "/"){
//        total=total/num;
//      }
//       else if(opt == "AC"){
//         document.getElementById("data1").value=0;
//         document.getElementById("data").value=0;
//             total=0;
//             val="";
//       }
     
//    }
   
   
// }
let screen = document.getElementById('data');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
