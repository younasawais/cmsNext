

export function ReferenceAndTags(){
    return(
        <section>
        <div className="container">
            <div className="media-container-row">
                <div className="title col-12 col-md-12">
                    <h2 style={{fontFamily: 'Rubik, sans-serif', fontSize: '1rem',textAlign: 'center'}}
                    className="pb-3 display-7"><strong>
                        Reference book:</strong> 'The Art Of The Story-Teller'</h2>
                    <h3 style={{fontFamily: 'Rubik, sans-serif', fontSize: '1rem', color: '#767676', textAlign: 'center'}}
                    className="display-7"><strong>
                        Tags</strong>:  Speech, public speaking, story telling, stories, 
                        {/* {articleTags.map(tag => {
                            return(' ' + tag + ', ')
                        })} */}
                        </h3>
                </div>
            </div>
        </div>
      </section>
    )
}