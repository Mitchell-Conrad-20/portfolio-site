import './Button.css';

const Button = ({ onClick, children, scrollButton, className }) =>{
    return(
        <>
            <button onClick={onClick} className={ 
                scrollButton ? 'scrolledBtn' : 'nonScrolledBtn' 
                + ' ' + className
                }>
                <span className='button'>{children}</span>
            </button>
        </>
    )
}

export default Button;