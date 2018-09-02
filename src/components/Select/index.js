import React, {Fragment} from 'react';


import ArrowIcon from './Arrowlcon';
import style from "./style.css";
import DefaultValueComponent from './DefaultValueComponent';



export default class Select extends React.Component{
    static defaultProps = {
        valueComponent:DefaultValueComponent,
        items:[],
    }
    state = {
        itemContainerBox:{},
        opened:false,
        //onChange: ()=> {},
    }

    componentDidMount(){
       window.addEventListener('scroll',this.setItemsConteinerBox)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.setItemsConteinerBox)
    }
    getItemsContainerBox = () =>{
       // offsetWidth/offsetHeight //какой размер сейчас у елемента и сколько места занимает на странице
       // clientWidth/clientHeight //не учитывает падинги
        console.log('aff')
        if(!this.rootElement || !this.itemsContainerElement){
            return;
        }
        const rootElementBoundery = this.rootElement.getBoundingClientRect();
        const itemsContainerElementBoundery = this.itemsContainerElement.getBoundingClientRect();
        const left = rootElementBoundery.left;
        // console.log('bef')
        // console.log("window.innerHeight" + window.innerHeight + 'px')
        // console.log("this.itemsContainerElement.offsetHeight" + this.itemsContainerElement.offsetHeight + 'px')
        console.log("itemsContainerElementBoundery.bottom" + itemsContainerElementBoundery.bottom + 'px')
        console.log("itemsContainerElementBoundery.top" + itemsContainerElementBoundery.top + 'px')
        console.log("rootElementBoundery.bottom" + rootElementBoundery.bottom + 'px')
        console.log("rootElementBoundery.top" + rootElementBoundery.top + 'px')
        const top = itemsContainerElementBoundery.bottom < window.innerHeight
        ? rootElementBoundery.bottom - this.itemsContainerElement.offsetHeight
        : rootElementBoundery.top;
        return{
            width:`${this.rootElement.offsetWidth}px`,
            left:`${left}px`,
            top:`${top}px`,
        }
        console.log(top)
    };
    setItemsConteinerBox =() => {
        const itemContainerBox = this.getItemsContainerBox();
        this.setState({
            itemContainerBox,
        });
    };

    closeItemsContainer = () => {
        this.setState({
            opened:false,
        });
    };
    openItemsContainer = () => {
        this.setState((state) => ({
            opened:true,
            itemContainerBox:{
                ...state.itemContainerBox,
                ...this.getItemsContainerBox()
            },
        }));
    };
    onClickHandler = (item) => (even) =>{
        this.setState();
    };

    renderItemContainer = () => (
        <div className="mui-select-items-container-wrapper" onClick={this.closeItemsContainer}>
            <div className="mui-select-items-container"
             ref={itemContainer =>{
                this.itemsContainerElement = itemContainer;}}
             style={this.state.itemContainerBox}>
                <ul className="mui-select-items-list">
                    {this.props.items.map(item =>
                            <li className={`mui-select-list-item ${item === this.props.value ? 'active' : ''}`}
                                onClick={()=> this.props.onChange(item)}>{item}
                            </li>)}
                </ul>
            </div>
        </div>
    );
    render() {
        const { style,value,valueComponent:ValueComponent } = this.props;
        const { opened } = this.state;
        return (
            <Fragment>
            <div className="mui-select-root" style={style}
                 ref={root=> {
                    this.rootElement = root;}}>
                <div className="mui-select-value"
                     onClick={this.openItemsContainer}>
                    <ValueComponent value={value}/>
                </div>
                <button className="mui-select-arrow-button"
                        onClick={this.openItemsContainer}>
                    <ArrowIcon />
                </button>
            </div>
                {opened && this.renderItemContainer()}
            </Fragment>
        )
    }
}


// export default function Select() {
//     return<h1>Hello,World</h1>
// }