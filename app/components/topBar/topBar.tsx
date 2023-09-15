"use client"
import React from "react";
import Image from "next/image";

function Topbar(){
    //inicio estilos
        const containerTopBar = 'bg-red-900 w-14/14 flex flex-row between';
        const containerLogoTopBar = 'bg-blue-800 flex-none w-72 h-14 p-2';
        const containerMeioTopBar = 'grow h-14 p-2';
        const containerLoginTopBar = 'flex-none w-60 h-14 p-2';

    //fim estilos
  return (
    <>
        <div className={containerTopBar}>
            <div className={containerLogoTopBar}>
               RapiSaas
            </div>

            <div className={containerMeioTopBar}>
                
            </div>
        
            <div className={containerLoginTopBar}>
               Login
            </div>

        </div>
 </>

  );
  
};

export default Topbar;