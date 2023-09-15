"use client"
import React from "react";
import Image from "next/image";
import {STYLES_LINKS_NAVBAR} from "../assets/styles_navbar";
import {ScriptsNavbar} from "../assets/scripts_navbar";

function LinksNavbar({texto ='', page='', img='', idSubMenu=''}){
  
    const {link_menu, texto_link} = STYLES_LINKS_NAVBAR;
    const scripts = new ScriptsNavbar;

  return (
    <li className='m-1'>
      <button onClick={() => scripts.exibirEsconderSubMenu(idSubMenu)} className={link_menu}>
        
        <Image alt='dsad' width='23' height='23' src={img} />
        
        <span className={texto_link}>
        
          {texto}

        </span>
          
      </button>
    </li>

  );
};

export default LinksNavbar;