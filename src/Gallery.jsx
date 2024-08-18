import HornedBeast from './HornedBeast';
import hornedBeast from './hornedBeast.json';

function Gallery() {
    return (
        <>
            {/* <HornedBeast title= "imagen0" description="img de ref" imgUrl= "https://i.pinimg.com/564x/4a/93/ae/4a93ae0e9fbf96e68a84b4fad16ef748.jpg"/>
            <HornedBeast title= "imagen1" description= "img de ref 2" imgUrl= "https://i.pinimg.com/564x/74/93/9e/74939e98de87121da530cdd6f3d8c839.jpg"/>
             */}
            {hornedBeast.map(hornedBeast => (
                
                <HornedBeast key={hornedBeast._id} title={hornedBeast.title} description={hornedBeast.description} imgUrl={hornedBeast.image_url} horns={hornedBeast.horns}/>
            ))
            }
        </>
    );
}

export default Gallery;