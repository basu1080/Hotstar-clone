import { Fragment} from "react";
import ReactDOM from 'react-dom';
import './Modal.css';
import { useDispatch } from "react-redux";
import { formToggleSliceActions } from "../../store/FormToggleSlice";
const  BackDrop = () => {
    const dispatch = useDispatch()
    const toggleModal = e => {
        dispatch(formToggleSliceActions.toggleModal())
    }
    return(<div className="backdrop" onClick={toggleModal}></div>)
}

const ModalOverlay = (props) => {

    return(<div className="overlay">{props.children}</div>)
    
}

const Modal = props => {
    const element = document.querySelector("#modal")

    return(
        <Fragment>
        {ReactDOM.createPortal(<BackDrop />, element)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, element)}
        </Fragment>
    )
}

export default Modal;