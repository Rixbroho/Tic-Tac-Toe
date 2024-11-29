const boxes=document.querySelectorAll(".box");

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let Xturn=true;

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('click');
        if(Xturn){
            box.innerHTML='X';
        }
        else{
            box.innerHTML='O';
        }
        box.disabled=true;
        // box.apple=true;
        Xturn=!Xturn;
        checkWin();
    })
})

const checkWin = ()=>{
    for(patten of win){
        console.log(patten[0],patten[1],patten[2]);
        // console.log(boxes[patten[0]],boxes[patten[1]],boxes[patten[2]]);
    }
}


function reset(){
    location.reload();
}