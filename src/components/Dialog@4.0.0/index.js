import React from 'react';
import './style.css';
import seapig,{REQUIREDS,REQUIRED} from 'seapig';



export default class Dialog extends React.Component{
    static defaultProps = {
        open:false
    };
    static resolvedPropertyNames = {
        'header': REQUIRED,
        'content': REQUIRED,
        'actions': REQUIREDS,
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
        const {
            headerChildren, contentChildren, actionsChildren} = seapig(
            this.props.children,
            Dialog.resolvedPropertyNames,
         );
        return(

            <dialog className="dialog"
                    onClick={this.backdropClick}
                    ref={this.dialogRef}>
                <div className="dialog-inside">
                    <section className="dialog-header">
                        {headerChildren}
                    </section>
                    <section className="dialog-content">
                        {contentChildren}
                    </section>
                    <section className="dialog-actions">
                        {actionsChildren}
                    </section>
                </div>


            </dialog>
        )
    }
}
