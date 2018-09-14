import React from 'react';

import Dialog from "../../components/Dialog@3.0.0";
import './style.css';



export default class DemoDialog3 extends React.Component{
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
                    onClose={this.closeDialog} open={isDialogOpen}>


                        <b header>Some header</b>

                        <h1 content>Some Content</h1>


                        <button actions onClick={this.closeDialog}>
                            Close
                        </button>

                    <button actions onClick={this.closeDialog}>
                        Confirm
                    </button>
                </Dialog>
            </div>
        )
    }
}
