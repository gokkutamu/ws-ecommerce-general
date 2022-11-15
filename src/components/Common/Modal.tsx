// Import dependencies
import * as React from "react";
import ReactDOM from "react-dom";

// Import styles.
import './common.css';

const BackDrop = (props: any) => {
    return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props: any) => {
    return (
        <div className="modal">
            <div className="content">
                {props.children}
            </div>
        </div>
    );
};

const portalElement = document.getElementById("overlays")!;

const Modal = (props: any) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackDrop onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>
                    {props.children}
                </ModalOverlay>,
                portalElement
            )}
        </React.Fragment>
    );
};

export default Modal;