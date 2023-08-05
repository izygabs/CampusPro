function SubRentpage1(props){
    return(
        <div>
            <div className="sp-sub-div">
                <div className="sp-img-div">
                    <img src={`../images/${props.image}`}/>
                </div>
                <div className="sp-text-div">
                    <p>{props.description}</p>
                    <p>#{props.amount.toLocaleString()}</p>
                    <p>{props.campus.toUpperCase()}</p>
                    <button>
                        Rent this property
                    </button>

                </div>
            </div>
        </div>
    )
}
export default SubRentpage1