import './Hamburger.css';


const Hamburger = (props) =>{
    return(
        <>
            <button onClick={props.onClick}><i class="fa fa-bars"></i></button>
        </>
    )
}

export default Hamburger;