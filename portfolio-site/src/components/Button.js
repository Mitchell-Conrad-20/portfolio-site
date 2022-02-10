import './Button.css';

const Button = ( {children, linkTo} ) =>{
    return(
        <>
            <a href={linkTo}>
                <button>
                    
                    { children }
                
                </button>
            </a>
        </>
    )
}

export default Button