import Menu from '../../components/Menu.js';
import { Footer, TitleShortDetails, ArticlePicture, ArticleText1, ReferenceAndTags} from '../../components/articleComps';
import React from 'react';
import axios from 'axios';
import Head from 'next/head';

// const comment = () => {
//     const router = useRouter()
//     const { id } = router.query;
//     console.log(id);
//   }

Article.getInitialProps = async ({query}) => {
    //const router = useRouter()
    const { id } = query
    //console.log(id);
    const {data} = await axios.post('https://nuqf.com/getarticleinfowithmenuitems', {'linkId' : id});
    
    return( { 
        articleInfo : data.articleInfo,
        articleMenuItems : data.articleMenuItems
    })
}

export default function Article({articleInfo, articleMenuItems}){
    const {title, title2, imageName1, text1, text2, tags, reference} = articleInfo;
    return(
        <React.Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <Menu 
                articleMenuItems= {articleMenuItems}
            />
            <TitleShortDetails 
                title  ={title}
                title2 ={title2}
            />
            {
                imageName1 ? 
                <ArticlePicture 
                    imageName1={imageName1}
                /> : ""
            }
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
