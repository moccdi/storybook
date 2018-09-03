import React from 'react';
import Select from "../components/Select";

const style = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width: '100vw',
    height:'100vh',
};

export default class MultipleDemo extends React.Component{
    state = {
        value: null,
    }
    OnChoseItem = items =>{

        const value = items.join(', ').slice(0,20);
        this.setState({
            value: value === items.join(', ') ? value : `${value}...`
        });
        if (value === items.join(', ')){
            alert('чеее')
        }
    };
    render(){
        const {items} = this.props;
        const {value} = this.state;
        return(
            <div style={style}>
                <Select
                    items={items}
                    multiple
                    value={value}
                    onChange={this.OnChoseItem}/>
            </div>
        )
    }
}