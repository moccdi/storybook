import React from 'react';
import './style.css';
import Dialog from "../../components/Dialog@1.0.0";



export default class DemoDialog extends React.Component{
    state ={
        isDialogOpen:false
    }
    openDialog = () =>{
        this.setState({
            isDialogOpen:true,
        })
    }
    closeDialog = () =>{
        this.setState({
            isDialogOpen:false,
        })
    }
    render(){
        const {isDialogOpen} = this.state;
        return(
            <div className="container">
                <button onClick={this.openDialog}>Click Me</button>
                <Dialog
                    header={<b>Some header</b>}
                    actionButtons={[<button onClick={this.closeDialog} key={0}>Close</button>]}
                    isActionsInTop
                    isHeaderInBottom
                    onClose={this.closeDialog} open={isDialogOpen}>
                    <h1>Some Content</h1>
                </Dialog>
            </div>
        )
    }
}