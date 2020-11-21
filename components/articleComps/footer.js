import Link from 'next/link';

export function Footer(){
    return(
        <section className="cid-s4p88QQ5Vx" id="footer7-8">
            <div className="container">
                <div className="media-container-row align-center mbr-white">
                    <div className="row row-links">
                    <ul className="foot-menu">
                        {/* {names.map((name, index) => {
                            return(
                                <NavLink key={index} style={{paddingLeft:5, paddingRight:5 }} to={'/' + links[index]} className="foot-menu-item mbr-fonts-style display-7">
                                    <p className="text-white mbr-bold" href="#">{name}</p>
                                </NavLink>
                            )
                        })} */}
                        <Link href='/home' className="foot-menu-item mbr-fonts-style display-7"><p className="text-black mbr-bold">test 1</p></Link>
                        <Link href='/home' className="foot-menu-item mbr-fonts-style display-7"><p className="text-black mbr-bold">test 2</p></Link>
                    </ul>
                    </div>
                    <div className="row row-copirayt">
                        <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
                            © Copyright 2020 Qouh - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}