import './Modal.css';
import {motion, AnimatePresence} from 'framer-motion';
import { forwardRef, useState, useImperativeHandle } from "react";

const Modal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false)

    useImperativeHandle(ref, () => {
        return{
            open: () => setOpen(true),
            close: () => setOpen(false)
        }
    })

    return( 
        <AnimatePresence>
            {open && ( 
                <>
                {/*Animations modal background opacity*/}
                <motion.div 
                    initial={{
                        opacity:0
                    }}
                    animate={{
                        opacity: 1        
                    }}
                    exit={{
                        opacity: 0
                    }}
                    onClick={() => setOpen(false)}
                    className='modal-backdrop' />
    
                {/*Animations modal modal pop up*/}
                <motion.div 
                    initial={{
                        scale: 0
                    }}
                    animate={{
                        scale: 1
                    }}
                    exit={{
                        scale: 0
                    }}
                    className='modal-content-wrapper'>
    
                    {/* Content goes on this div*/}
                    <motion.div initial={{
                        x:100,
                        opacity:0
                    }}
                    animate={{
                        x:0,
                        opacity:1,
                        transition:{
                            delay: 0.3,
                            duration:0.3
                        }
                    }}
                    exit={{
                        x:100,
                        opacity:0,
                        transition:{
                            duration:0.3,
                            transition:{
                                delay:0.3
                            }
                        }
                    }}
                    className='modal-content'>
                        {props.children}
                    </motion.div>    
                </motion.div>
                </>
            )}

        </AnimatePresence>
        
    )
})
  
export default Modal;