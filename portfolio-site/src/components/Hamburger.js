import './Hamburger.css';


const Hamburger = (props) =>{
    return(
        <>
            <button onClick={props.onClick} className={props.scrollButton ? 'scrolledHam' : 'nonScrolledHam' }><i class="fa fa-bars"></i></button>
        </>
    )
}

export default Hamburger;