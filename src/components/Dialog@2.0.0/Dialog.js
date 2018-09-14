import React from 'react';

import './style.css';


import DialogContent from './DialogContent'
import DialogHeader from './DialogHeader'
import DialogActions from './DialogActions'

export default class Dialog extends React.Component{
    static defaultProps = {
        open:false
    };
    static resolvedComponentNames = [
        DialogActions.name,
        DialogHeader.name,
        DialogContent.name,
    ]
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
    getComponentChildren = () => {
        return React.Children.toArray(this.props.children).reduce(
            (result, element) => {
                if(Dialog.resolvedComponentNames.includes(element.type.name)){
                    result[element.type.name] = element;
                }
                return result;
            },
            {},
                );
    };
    render(){
        const {
            [DialogHeader.name]: dialogHeader,
            [DialogContent.name]: dialogContent,
            [DialogActions.name]: dialogActions,
        } = this.getComponentChildren();
        return(


            <dialog className="dialog"
                    onClick={this.backdropClick}
                    ref={this.dialogRef}>
                <div className="dialog-inside">
                    { dialogHeader}
                    { dialogContent}
                    { dialogActions}
                </div>


            </dialog>
        )
    }
}