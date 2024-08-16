function HornedBeast (props) {
    return(
        <>
            <h2>El titulo de la imagen es: {props.title}</h2>
            <p>Descripción de imagen: {props.description}</p>
            <img src={props.imgUrl} style={{width:'80px'}} alt={props.title}/>
            <p>mi edad es: {props.edad}</p>
        </>
    );
}

export default HornedBeast;