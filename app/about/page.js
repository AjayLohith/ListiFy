"use client";
import React from 'react'; 
import NavBar from '@/Components/NavBar'; 
import About from '@/Components/About';
 export default function AboutPage() {
    return (
    <>      
    <NavBar />    
      <div className="min-h-screen bg-[#EBF5DF] pt-16 flex flex-col items-center">     
           <div className="w-[80%] max-w-[600px] mx-auto mt-10">     
                 <About />   
                      </div>   
                         </div>  
      </>
    );
}