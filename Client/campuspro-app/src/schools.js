import logo from './images/campuspro(6).png';
import location from './images/location-icon.png'

function Schools (props){
    return(
        <div>
            <div className="hp-school-div">
                <div className='hp-img-div'>
                    <img src={`../images/${props.image}`}/>
                    <div>
                        <img className='hp-locate' src={location}/>
                        <p>{props.campus.toUpperCase()}</p>
                    </div>
                </div>
                <div className='hp-props-text'>
                    <p>{props.description}</p>
                    <p> #{props.amount.toLocaleString()} </p>
                </div>
                
            </div>
        </div>
    )
}
export default Schools