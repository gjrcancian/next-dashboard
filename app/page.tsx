
import React from 'react';
import Navbar from './components/navbar/navbar'
import MainsScreen from './components/mainScreen/mainScreen';
import Topbar from './components/topBar/topBar';

export default function Home() {
  return (
        
        <div className='h-full'>

          <Topbar/> 

          <main className='main' >
                  

            <Navbar texto={'asd'} porra={'sadsa'} />  

            <MainsScreen />

          </main>
          
        </div>
  )
  
}
