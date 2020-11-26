import {Fragment} from 'react';

export default function Logo(){
    return(
        <Fragment>
                <div className="menu-logo" style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div className="navbar-brand">
                        <a href="/">
                            <h2 style={{fontFamily: "Squada One", color: '#939393'}}>QOUH.com</h2>
                        </a>
                    </div>
                </div>
        </Fragment>
    )
}