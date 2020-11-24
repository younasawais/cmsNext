import Link from 'next/link';
import style from '../../styles/Footer.module.css';

export function Footer(){
    return(
        <div style={{width: '100%', textAlign:'center' , height: 50, backgroundColor: '#2e2e2e', width:'100%'}}>
           <p style={{color:'white', paddingTop:7}} className="align-center display-7">
             © Copyright 2020 Qouh - All Rights Reserved
           </p>
        </div>
    )
}
