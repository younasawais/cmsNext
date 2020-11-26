import Image from 'react-bootstrap/Image';

export function ArticlePicture({imageName1}){
    return(
        <section style={{display: 'flex', justifyContent: "space-around"}}>
            <Image src={"https://militating.com/qouh.com/images/" + imageName1} fluid />
    </section>
    )
}


