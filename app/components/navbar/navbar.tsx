'use client'
import React, { useEffect, useState } from "react";
import LinksNavbar from "./components/linksNavbar";
import SubLinksNavbar from "./components/subLinksNavbar";
import { IMGS_NAVBAR } from "./assets/imgs_navbar";
import { prisma } from "@/app/lib/prisma";
import { GetSelect } from "@prisma/client/runtime/library";
import { GetServerSideProps } from "next";
import { json } from "stream/consumers";


interface Users {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  hashedPassword: string | null;
  createdAt: Date;
  updatedAt: Date;
  
}
function Navbar({ user}) {


  const {icon_home, icon_financas} = IMGS_NAVBAR;


  return (
    <>
    <div className='a90vh bg-white w-72'>
    {JSON.stringify(user, null, 2)}

        <LinksNavbar idSubMenu={'home_sub_links'} texto={'Dashboard'} page={'https://www.youtube.com.br'} img={icon_home}/>
          <SubLinksNavbar id={'home_sub_links'}>
            {JSON.stringify(user, null, 2)}

          </SubLinksNavbar>


        <LinksNavbar idSubMenu={'financeiro_sub_links'} texto={'Financeiro'} page={'https://www.youtube.com.br'}  img={icon_financas}/>
          <SubLinksNavbar id={'financeiro_sub_links'}>
 dsasda
          </SubLinksNavbar>

    
    </div>

    </>
  );
};

export const getServerSideProps: GetServerSideProps = async() =>{
      const users = await prisma.user.findMany()
      console.log("dsa"+users)
      const data = users.map(user =>{
         return{
        id:user.id,
        name:user.name,
      }

    });
    return{
      props :{
        user : data
      }
    }
  }

export default Navbar;
