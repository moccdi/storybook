import React from 'react';
//import AttachMoneyIcon from 'material-ui-icons/AttachMoney';

import Select from "../components/Select";

const style = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width: '100vw',
    height:'160vh',
    top:'400px'
};
const selectStyle = {
    width: '400px',
    height: '55px',
    boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    backgroundColor: '#fff',
    borderRadius: '5px',
    paddingLeft: '10px',
}
const imageStyle ={
    width: '40px',
    height: '40px'
}

// const iconStyle = {
//     marginRight: '6px',
// }

// const valuesStyle ={
//     display: flex,
//     alignItems: 'center',
// }
// const ValueComponent = (value) =>(
//     <div style={valuesStyle}>
//         <AttachMoneyIcon />
//         <span>{value}</span>
//     </div>
// )

const Image = () => <img src="https://img00.deviantart.net/c93b/i/2014/002/8/5/the_imperial_logo_by_geoffery10-d70ke9z.png"
                         style={imageStyle}
                         alt="Imperial Logo"/>
export default class ValueCustomizeDemo extends React.Component{
    state = {
        value: null,
    }
    OnChoseItem = item =>{
        this.setState({
            value:item,
        });
    };
    render(){
        const {items} = this.props;
        const {value} = this.state;
        return(
            <div style={style}>
                <Select style={selectStyle}
                        items={items}
                        value={value}
                        onChange={this.OnChoseItem}
                        iconComponent={Image}
                />
            </div>
        )
    }
}