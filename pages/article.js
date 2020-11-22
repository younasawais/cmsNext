import {Menu} from '../components/';
import { Footer, TitleShortDetails, ArticlePicture, ArticleText1, ReferenceAndTags} from '../components/articleComps';
import React from 'react';

export default function Article(){
    return(
        <React.Fragment>
            <Menu />
            <TitleShortDetails />
            <ArticlePicture />
            <ArticleText1 />
            <ArticlePicture />
            <ArticleText1 />
            <ReferenceAndTags />
            <Footer />
        </React.Fragment>
    )
}