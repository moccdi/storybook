import React, {Fragment} from 'react';

import './style.css';

export default class Dialog extends React.Component{
    static defaultProps = {
        isHeaderInBottom:false,
        isActionsInTop:false,
    };
    dialogRef = $dialog => {
        this.$dialog = $dialog;
    };
    componentDidUpdate(prevProps){
        if(!prevProps.open && this.props.open){
            this.$dialog.showModal();
        }
        if(prevProps.open && !this.props.open){
            this.close();
        }
    };
    backdropClick = ({clientX,clientY}) =>{
        const {top,bottom,left,right} = this.$dialog.getBoundingClientRect();
        console.log(clientY)
        console.log(clientX)
        console.log(this.$dialog.getBoundingClientRect())
        const isInDialog =
            clientY >= top &&
            clientY <= bottom &&
            clientX >= left &&
            clientX <= right;
        if(!isInDialog){
            this.close();
        }
    }
    close = () => {
        if(typeof this.props.onClose === 'function'){
            this.props.onClose();
        }
        this.$dialog.close();
    }
    render(){
        const { header,children,actionButtons,isHeaderInBottom,isActionsInTop } = this.props;
        return(
            <dialog className="dialog" onClick={this.backdropClick} ref={this.dialogRef}>
                <div className="dialog-inside">
                    <section className={`dialog-header ${isHeaderInBottom ? 'bottom' : ''}`}>{header}</section>
                    <section className="dialog-content">{children}</section>
                    <section className={`dialog-actions ${isActionsInTop ? 'top' : ''}`}>
                        {
                            actionButtons.map(b => (
                               <Fragment>{b}</Fragment>
                            ))
                        }
                    </section>
                </div>
            </dialog>
        )
    }
}