import React, { useRef, useState } from 'react'

let data=["","","","","","","","",""];
function TicTacToe() {
    let [count,setCount]=useState(0)
    let [lock,setLock]=useState(false)
    let titleRef=useRef(null)
    let box1=useRef(null)
    let box2=useRef(null)
    let box3=useRef(null)
    let box4=useRef(null)
    let box5=useRef(null)
    let box6=useRef(null)
    let box7=useRef(null)
    let box8=useRef(null)
    let box9=useRef(null)

    let arrBox=[box1,box2,box3,box4,box5,box6,box7,box8,box9]


    const toggle=(e,num)=>{
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML='X';
            data[num]='X'
            setCount(++count);
        }
        else{
            e.target.innerHTML='O'

            data[num]='O'
            setCount(++count);
        }

        checkwin();
    }

    const checkwin=()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6]);
        }
    }

    const won=(winner)=>{
        setLock(true);
        if(winner==='X'){
            titleRef.current.innerHTML='Congratulation player X'
        }
        else{
            titleRef.current.innerHTML='Congratulation player O'
        }
    }

    const reset=()=>{
        setLock(false)
        data=["","","","","","","","",""];
        titleRef.current.innerHTML='Tic-Tac-Toe Game In <span>React</span>'
        arrBox.map((e)=>{
            e.current.innerHTML="";
        })
    }  
  return (
    <div className='responsive mx-auto my-28  w-[350px]  h-[450px]    text-center bg-black  rounded-xl p-5 shadow-blue-500/50'>

        <h1 className='text-black text-xl m-5 font-extrabold text-red-500' ref={titleRef}>Tic-Tac-Toe Game In <span className='text-red-900'>React</span></h1>
        <div className='h-[300px]  flex w-[800px] m-auto'>
            <div className='row1'>
                <div className="boxes flex h-[80px] w-[80px] bg-blue-200 m-2 rounded-2xl px-9 py-7 pointer" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes flex h-[80px] w-[80px] bg-blue-200 m-2 rounded-2xl px-9 py-7 pointer" ref={box2} onClick={(e)=>{toggle(e,)}}></div>
                <div className="boxes flex h-[80px] w-[80px] bg-blue-200 m-2 rounded-2xl px-9 py-7 pointer" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
            </div>

            <div className='row2'>
                <div className="boxes flex h-[80px] w-[80px] bg-blue-200 m-2 rounded-2xl px-9 py-7 pointer" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes flex h-[80px] w-[80px] bg-blue-200 m-2 rounded-2xl px-9 py-7 pointer" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes flex h-[80px] w-[80px] bg-blue-200 m-2 rounded-2xl px-9 py-7 pointer" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
            </div>

            <div className='row3'>
                <div className="boxes flex h-[80px] w-[80px] bg-blue-200 m-2 rounded-2xl px-9 py-7 pointer" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes flex h-[80px] w-[80px] bg-blue-200 m-2 rounded-2xl px-9 py-7 pointer" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes flex h-[80px] w-[80px] bg-blue-200 m-2 rounded-2xl px-9 py-7 pointer" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
      
      <button className=' bg-red-500 rounded-2xl px-10 py-2' onClick={reset}>Reset</button>

    </div>
  )
}

export default TicTacToe