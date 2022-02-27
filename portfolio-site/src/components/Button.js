import './Button.css';

const Button = ({ onClick, children, scrollButton }) =>{
    return(
        <>
            <button onClick={onClick} className={scrollButton ? 'scrolledBtn' : 'nonScrolledBtn' }>
                <span className='button'>{children}</span>
            </button>
        </>
    )
}

export default Button;