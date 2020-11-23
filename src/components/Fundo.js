import React from 'react';
import Fundo from '../images/img-fundo.jpg'

export default function ImagemFundo() {
 return (
   <div>
       <img src={Fundo} style={{width: "100%", filter: "blur(10px)", zIndex: "-1", position: "absolute", height: "100%"}}/>
   </div>
 );
}