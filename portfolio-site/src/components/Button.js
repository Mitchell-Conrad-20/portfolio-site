import './Button.css';

const Button = ( {children, linkTo} ) =>{
    return(
        <a href={linkTo}>
            <span className='button'>
                {children}
            </span>
        </a>
    )
}

export default Button