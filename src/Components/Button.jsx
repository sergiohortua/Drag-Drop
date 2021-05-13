import React from 'react'
import Modal from './Modal'


const Button =(props)=>{   
        return(
            <div>
                <button onClick={props.onOpenModal}>MODAL</button>
                 <Modal isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}/>
            </div>
            
        )
}
export default Button



