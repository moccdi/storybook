import React from 'react';
import Dialog,{
    DialogHeader,
    DialogActions,
    DialogContent
} from "../../components/Dialog@2.0.0";
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

                    <DialogHeader top={false}>
                        <b>Some header</b>
                    </DialogHeader>
                    <DialogContent>
                        <h1>Some Content</h1>
                    </DialogContent>
                    <DialogActions top={false}>
                        <button onClick={this.closeDialog}>
                            Close
                        </button>
                    </DialogActions>

                </Dialog>
            </div>
        )
    }
}
