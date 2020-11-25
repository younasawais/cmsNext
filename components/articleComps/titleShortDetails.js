
export function TitleShortDetails({title, title2}){
    return(
        <section>
        <meta charSet="utf-8" />
        <title>Title of the page</title>
        <div className="container">
            <div className="media-container-row">
                <div className="title col-12 col-md-12">
                    <h2 style={{fontFamily: 'Rubik, sans-serif', fontSize: '3rem', textAlign: 'center'}} >
                        <strong style={{fontWeight: 'bold'}}>{title}</strong>
                    </h2>
                    <h3 className="align-center" 
                    style={{
                        fontFamily: 'Rubik, sans-serif',
                        fontSize: '1.5rem',
                        color: '#767676',
                        fontWeight: 300
                    }}>{title2}</h3>
                </div>
            </div>
        </div>
        </section>
    )
}