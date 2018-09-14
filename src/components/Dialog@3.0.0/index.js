import React from 'react';
import './style.css';




export default class Dialog extends React.Component{
    static defaultProps = {
        open:false
    };
    static resolvedPropertyNames = [ 'header', 'content', 'actions' ];
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
    // getComponentChildren = () => {
    //     return React.Children.toArray(this.props.children).reduce(
    //         (result, element) => {
    //
    //             const resolvedElementProperty = Object.keys(element.props).find( prop =>
    //                 Dialog.resolvedPropertyNames.includes(prop),
    //             );
    //             const elemntCollectionName = `${resolvedElementProperty}Children`;
    //             if(resolvedElementProperty){
    //
    //                 result[elemntCollectionName] = element;
    //             }
    //             return result;
    //         },
    //         {},
    //     );
    // };
    getComponentChildren = () => {
        return React.Children.toArray(this.props.children).reduce(
            (result, element) => {

                const resolvedElementProperty = Object.keys(element.props).find( prop =>
                    Dialog.resolvedPropertyNames.includes(prop),
               );
                const elemntCollectionName = `${resolvedElementProperty}Children`;
               if(resolvedElementProperty){
                 if(!result[elemntCollectionName]){
                     result[elemntCollectionName] = []
                 }
                   result[elemntCollectionName] = [
                       ...result[elemntCollectionName],
                       element
                   ]
               }
                return result;
            },
            {},
        );
    };
    render(){
        const {
            headerChildren,
            contentChildren,
            actionsChildren,
        } = this.getComponentChildren();
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
