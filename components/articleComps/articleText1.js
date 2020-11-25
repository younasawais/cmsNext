

export function ArticleText1({text}){
    let textChecked = checkDoubleDot(text);
    return(
        <section className="mbr-section article content1 cid-s4ph3iTfV8" id="content1-c">
        <div className="container">
            <div className="media-container-row">
                <div className="col-12  col-md-12" style={{fontSize: '1rem', color: '#767676', fontFamily: 'Rubik, sans-serif',     fontStyle: 'normal',
                    lineHeight: 1.6}} >
                {/* <p>{textChecked}</p> */}
                    { 
                        textChecked.map((par, index) => {return(
                            <p key={index} ><span style={{fontSize:'1rem'}}>{par.replace(/(::)/,'.')}</span></p>
                        )})
                    }
                </div>
            </div>
        </div>
      </section>
    )
}


/*****************************************************/
/*********************** Check if no :: **************/
/*****************************************************/
function checkDoubleDot(str){
    const reg = /::/;
    let result = reg.test(str);
    let arr = [];
    if(result){
        arr = str.match(/.+?(::)/g);
    }else{
        arr[0] = str;
    }
    return arr;
}