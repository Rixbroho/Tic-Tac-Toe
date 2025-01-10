const boxes=document.querySelectorAll(".box");
const xCount=document.getElementById('xCount');
const oCount=document.getElementById('oCount');
const btns=document.querySelectorAll('section>button')

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
let count=0;
let xWin=0;
let oWin=0;

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
        // box.apple=true; this will not work
        turnCheck();
        count++;
        checkWin();
    })
})

const turnCheck=()=>{
    if(Xturn){
        document.getElementById('turn').innerHTML='O';
    }
    else{
        document.getElementById('turn').innerHTML='X';
    }
    Xturn=!Xturn;
}

const checkWin = ()=>{
    for(patten of win){
        // console.log(patten[0],patten[1],patten[2]);
        // console.log(boxes[patten[0]],boxes[patten[1]],boxes[patten[2]]);
        let var1=boxes[patten[0]].innerHTML;
        let var2=boxes[patten[1]].innerHTML;
        let var3=boxes[patten[2]].innerHTML;
        // console.log(var1);
        // console.log(var2);
        // console.log(var3);
        if(var1!='' && var2!='' && var3!=''){
            if(var1==var2 && var2==var3){
                if(var1=='X'){
                    alert('X won');
                    xWin++;
                    xCount.innerText=xWin;
                }
                else if (var1=='O'){
                    alert('O won');
                    oWin++;
                    oCount.innerText=oWin;
                }
                boxes.forEach((box)=>{
                    box.disabled=true;
                })
                count=0;
                return;
                // reset();
            }
        }
    }
    if(count==9){
        console.log('done')
        count=0;
        alert('Draw');
    }
}


function nextGame(){
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerHTML='';
    })
}

//to reload the pagae
function reset(){
    location.reload();
}
