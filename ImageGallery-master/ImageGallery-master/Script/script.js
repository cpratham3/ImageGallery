const bigimg=document.getElementById('bigimg');
const pic1=document.getElementById('small1');
const pic2=document.getElementById('small2');
const pic3=document.getElementById('small3');
const pic4=document.getElementById('small4');
const pic5=document.getElementById('small5');
const pic6=document.getElementById('small6');
const pic7=document.getElementById('small7');
const pic8=document.getElementById('small8');
const pic9=document.getElementById('small9');
const pic10=document.getElementById('small10');

const picArr=[pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10];

function displayAbove(thisid){
    const showthis= document.getElementById(thisid);
    bigimg.src=showthis.src;
}


function nextPic(){
    let currentIndex=0;
    let currentPic=bigimg;
    for(let i=0;i<picArr.length;i++){
        if(picArr[i].src==currentPic.src){
            currentIndex=i;
        }
    }
    if(currentPic.src==picArr[9].src){
        currentPic.src=picArr[0].src;
    }
    else{
        currentPic.src=picArr[currentIndex+1].src;
    }
}

function prevPic(){
    let currentIndex=0;
    let currentPic=bigimg;
    for(let i=0;i<picArr.length;i++){
        if(picArr[i].src==currentPic.src){
            currentIndex=i;
        }
    }
    if(currentPic.src==picArr[0].src){
        currentPic.src=picArr[9].src;
    }
    else{
        currentPic.src=picArr[currentIndex-1].src;
    }
}

function exitAssignment(){
    const ask=confirm("Are you sure you want to exit?");
    if(ask){
        window.close();
    }
}