import './Button.css';

const Button = ( {children}, {linkTo} ) =>{
    return(
        <div className='button'>
            <a href={linkTo}>{children}</a>
        </div>
    )
}

export default Button