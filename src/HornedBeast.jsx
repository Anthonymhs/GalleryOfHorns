function HornedBeast (props) {
    return(
        <>
            <h2>{props.title}</h2>
            <img src={props.imgUrl} style={{width:'100px'}} alt={props.title}/>
            <p>{props.description}</p>
            <p>Cantidad de Cuernos: {props.horns}</p>
        </>
    );
}

export default HornedBeast;