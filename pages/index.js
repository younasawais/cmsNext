//import Link from 'next/link';
import React, {Fragment} from 'react';
import styles from '../components/home.module.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/nav';

export default function Home(){
    return (
        <Fragment>
        <section className="header5 cid-s9NcstqoeV mbr-fullscreen" id="header5-h" style={{background: 'linear-gradient(0deg, #f3e4cb, #00000091, #59e0ca)'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="mbr-white col-md-10">
                        <h1 className="mbr-section-title align-center pb-3 mbr-fonts-style display-1">
                            Qouh
                        </h1>
                        <p className="mbr-text align-center display-5 pb-3 mbr-fonts-style">
                        “Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” ― Albert Einstein
                        </p>
                        <div className="mbr-section-btn align-center">
                            {/* {menus.map((menu, i)=>{return(
                                <Link key={i} type="button" to={'/article/'+menuLinks[i].linkId} className="btn btn-md btn-white-outline display-4">{menu.name}</Link>
                            )})} */}
                            <Button type="button" href='/article' variant="outline-secondary" >Testing</Button>
                            <Button type="button" href='/article' variant="outline-secondary" >Testing</Button>
                            <Button type="button" href='/article' variant="outline-secondary" >Testing</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
    );
}