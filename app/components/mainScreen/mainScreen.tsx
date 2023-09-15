"use client"
import React from "react";


function MainsScreen(){
 const teste = (teste:string)=>{
      const minhaDiv = document.getElementById('porra');
      const minhaDiv2 = document.getElementById('porra2');

      if(minhaDiv && minhaDiv2){
        if(minhaDiv.style.display !='none'){
            minhaDiv.style.display = 'none';
            minhaDiv2.style.display = 'block';
        }else{
            minhaDiv.style.display = 'block';
            minhaDiv2.style.display = 'none';
        }
      }
    
  }

  return (
    <>
    <div className='app text-slate-500'>
     
    <button id='porra' onClick={() => teste('rertet')}  className=''>asddsaasd</button>
    <button id='porra2' onClick={() => teste('rertet')}  className='hidden'>www</button>
        


    </div>

    </>
  );
};

export default MainsScreen;