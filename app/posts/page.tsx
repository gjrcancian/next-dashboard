'use client'
import React from "react";


function Posts({texto ='', porra=''}){
 const teste2 = (teste:string)=>{
    alert(teste);
  }

  return (
    <>
    <div className='navbar'>
     
    <button onClick={() => teste2('rertet')}  >asd</button>


    </div>

    </>
  );
};

export default Posts;