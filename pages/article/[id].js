import {Menu} from '../../components';
import { Footer, TitleShortDetails, ArticlePicture, ArticleText1, ReferenceAndTags} from '../../components/articleComps';
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

// const comment = () => {
//     const router = useRouter()
//     const { id } = router.query;
//     console.log(id);
//   }

Article.getInitialProps = async ({query}) => {
    //const router = useRouter()
    const { id } = query
    console.log(id);
    const {data} = await axios.post('https://nuqf.com/getarticleinfowithmenuitems', {'linkId' : id});
    
    return( { 
        data : data
    })
}

export default function Article({data}){
    const {title, title2, imageName1, text1, text2, tags, reference} = data.articleInfo;
    return(
        <React.Fragment>
            <Menu />
            <TitleShortDetails 
                title  ={title}
                title2 ={title2}
            />
            <ArticlePicture 
                imageName1={imageName1}
            />
            <ArticleText1 
                text={text1}
            />
            {/* <ArticlePicture /> */}
            {text2!=="" ? 
                <ArticleText1 
                    text={text2}
                /> : ""
            }
            <ReferenceAndTags 
                tags={tags}
                reference={reference}
            />
            <Footer />
        </React.Fragment>
    )
}
