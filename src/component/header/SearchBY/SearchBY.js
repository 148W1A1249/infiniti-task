import "./SearchBy.css"
const SearchBY = (props)=>{
    console.log(props.data)
    return<>
   
     {
            (props.data) ? <>
                <div className="pl-3 pr-3"  style={{width:"100%"}}>
                    <h3 className="">Your Interested</h3>
                    <hr/>
                    <div className="cardsContainer">
                        {
                            props.data.map((obj,index)=>{
                                return <>
                                <div className="card m-3" style={{width: "18rem",borderRadius:"5px"}} key={index}>                                    
                                    {/* <img className="card-img-top" src={(obj.show.image.original === null)? obj.show.image.original : "https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg"}  alt="Card cap"/> */}
                                    <img className="card-img-top" src={ obj.show.image.original}  alt="Card cap"/>
                                    {/* <div className="card-body"> */}
                                        {/* <h5 className="card-title text-dark">{obj.show.name}</h5> */}
                                        {/* <p className="card-text">{obj.show.summary}</p> */}
                                        {/* <a href={obj.show._links.self.href} className="btn btn-primary">Watch</a> */}
                                    {/* </div> */}
                                </div>
                                </>;
                            })
                        }
                    </div>                   
                </div>
              </>   
            : null
        }
    
    </>
}

export default SearchBY;