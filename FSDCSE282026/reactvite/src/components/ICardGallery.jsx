import React from 'react'
import ICard from './ICard'
import  pic1 from '../images/pic1.png'

function ICardGallery(){
    const student={
    pic:{pic1},
    roll:"1234",
    name:"swastik bindal",
    branch:"cse",
    college:"ABES Engineering College"
        
    }
    return (
        <div  style= {{display:'flex' ,justifyContent:'space-evenly' ,border:'2'}}>
        {/* <ICard pic={pic1} roll="3456" name="Swastik" branch ="Cse" college="Abes Engineering College "/>
         <ICard roll="8808" name="Abhishek" branch="cse" />
         <ICard  roll="3645" name="reserve" branch ="Cse" college="Abes Engineering College "/>
        </div> */}
        <ICard data={student} />
        </div>
    )
}
export default ICardGallery 