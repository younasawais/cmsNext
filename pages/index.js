//import Link from 'next/link';
import React, {Fragment} from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Head from 'next/head';

// API load time: https://nuqf.com/getmenunamesandlinks
Home.getInitialProps = async () => {
    const {data} = await axios.post('https://nuqf.com/getmenunamesandlinks');
    return {menuLinks : data.menuLinks, menus: data.menus}
}

export default function Home({menuLinks, menus}){
    return (
        <Fragment>
        <Head>
            <title>Your journey to wisdom..</title>
        </Head>
        <section style={style.section}>
                <div style={style.container}>
                    <h1 style={style.h1}>
                        QOUH
                    </h1>
                    <p style={style.p}>
                    “Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” ― Albert Einstein
                    </p>
                    <div style={style.buttons}>
                        {menus.map((menu, i)=>{return(
                            <Button key={i} style={style.btn} type="button" href={"/article/" + menuLinks[i].linkId} variant="outline-light" >{menu.name}</Button>
                        )})}
                    </div>
                </div>
        </section>
    </Fragment>
    );
}

const style = {
    btn : {
        borderRadius:'100px',
        fontWeight: 500,
        letterSpacing: '1px',
        marginTop: '.4rem',
        marginRight: '.8rem',
        marginBottom: '.4rem',
        marginLeft: '.8rem'
    },
    section : {
        background: 'linear-gradient(0deg, #f3e4cb, #00000091, #59e0ca)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '3rem',
        paddingBottom: '3rem'},
    container : {
        maxWidth: '980px',
        display: 'flex',
        flexDirection: 'column',
        margin: '5px 5px 5px 5px',
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center'},
    h1 : {
        alignSelf: 'center',
        fontFamily: 'Rubik, sans-serif',
        color: 'white',
        fontSize: '4.25rem'},
    p  : {
        alignSelf: 'center',
        fontFamily: 'Rubik, sans-serif',
        fontSize: '1.5rem',
        color: 'white',
        textAlign: 'center'
        },
    buttons : {
        alignSelf: 'center'
        }
}