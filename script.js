let operator;
let array=[0];
showNumber()
/*array [0] will be the first number and array[1] will be the second number
after calculation, array [1] will be copied to array[0], then array [1] will
be deleted*/

function calculate(){
    numberA=array[0];
    numberB=array[1];
    if (array.length==2){
        if (operator=="add"){
            array[0]=numberA+numberB;
        }
        else if (operator=="subtract"){
            array[0]=numberA-numberB;
        }
        else if (operator=="multiply"){
            array[0]=numberA*numberB;
        }
        else if (operator=="divide"){
            array[0]=numberA/numberB;
        }
        array[0]=array[0].toString()
        array.pop();
    }
    showNumber();
}

function showNumber(){
    if(array.length==1){
        if (document.getElementById("screen").innerText=array[0]==0){
            document.getElementById("screen").innerText=array[0];
        }
        else{
            document.getElementById("screen").innerText=parseInt(array[0].toString(1));
        }
    }
    else if(array.length==2){
        if (document.getElementById("screen").innerText=array[1]==0){
            document.getElementById("screen").innerText=array[1];
        }
        else{
            document.getElementById("screen").innerText=parseInt(array[1].toString(1));
            }
    }
    console.log(array)
}


document.querySelectorAll('button').forEach(item =>{
    item.addEventListener('click', (e) =>{
        if (item.id.length>2){ // operator button pressed
            if (item.id=="clear"){
                if(array.length==2){
                    array.pop();
                }
                array[0]=0;
            }
            if (array.length==2){
                calculate()
            }
            else{
                array.push(0);
            }
            operator=item.id;
            console.log(operator)
        }
        else{ //number button pressed
            if (array.length==1){
                array[0]=array[0].toString()+item.id;
            }
            else if (array.length==2){
                array[1]=array[1].toString()+item.id;
            }
        }
        showNumber()
    })
})

/*Psuedo code
listen for buttons,
when one button is pressed, save into an array of 2 long, 
when operator is pressed, store choice in operator variable
when second number is pressed, save into array[1] and return the answer
make array[0]=array[1] and delete array[1] for future calculatons.

what i need: calculate function

global array*/