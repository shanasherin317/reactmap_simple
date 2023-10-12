function Cards(props){
    console.log(props);
    const{image,para,title}=props
    return(
        <>
        <div className="card">
        <img src={image} alt="" />
        <div className="title">
            <h5>{title}</h5>
            <p>{para}</p>
        </div>
        </div>
        </>
    )
}
export default Cards