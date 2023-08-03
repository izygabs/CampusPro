import logo from './logo.png'

function Schools (props){
    return(
        <div>
            <div className="hp-school-div">
                <div className='hp-img-div'>
                    <img src={`../images/${props.image}`}/>
                </div>
                <div className='hp-props-text'>
                    <p>{props.description}</p>
                    <p> #{props.amount} </p>
                    <p>{props.campus.toUpperCase()}</p>
                </div>
                
            </div>
        </div>
    )
}
export default Schools