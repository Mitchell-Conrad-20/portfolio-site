import './Button.css';

const Button = ({ onClick, children }) =>{
    return(
        <>
            <button onClick={onClick}>
                <span className='button'>{children}</span>
            </button>
        </>
    )
}

export default Button;