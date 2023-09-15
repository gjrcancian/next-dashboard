"use client"
import React from "react";
import Image from "next/image";


function SubLinksNavbar({id ='',  children=''}){

  return (
    <>
    <div className="hidden text-blue-300" id={id} >
      
      
      
        {children}

      
   
    </div>
    </>
  );
};

export default SubLinksNavbar;