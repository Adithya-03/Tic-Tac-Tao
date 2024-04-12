let boxes = document.querySelectorAll(".box");
let val = document.getElementsByClassName('congs')
let player0 = true; 
let count = 0
let winnerpattern = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
    count+=1
    console.log(count)
    console.log("box was clicked");
    if(player0){
        box.innerText = "0"
        player0 = false;
    }else{  
        box.innerText = "x"
        player0 = true;
    }
    box.disabled = true;
    checkpattern();
   });

 

});

const buttondisable = () =>{
    for(let box of boxes){
        box.disabled = true; 
    }
}
const nowinner = ()=>{
     let mg = document.querySelector(".msg")
     mg.innerText = ` sorry no winner this time`
}

const checkpattern = () =>{
    for(let pattern of winnerpattern){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
    if (posval1 !="" && posval2 !="" && posval3 !="" ){
        if(posval1 === posval2 && posval2 === posval3 ){
            console.log("winner",posval1)
            // val[0].innerText = 'Congratulations!'
            let mg = document.querySelector(".msg")
            mg.innerText = ` Congratulations you win`
            buttondisable()
        }
        if(count===9){
            if(posval1 !== posval2 && posval2 !== posval3 ){
                console.log("no winner")
                nowinner()
        }
    }
  }
};
};

