import './Button.css';

const Button = ({ onClick, children }) =>{
    return(
            <><span className='button'>
                <button onClick={onClick}>{children}</button>
            </span>
        </>
    )
}

export default Button;