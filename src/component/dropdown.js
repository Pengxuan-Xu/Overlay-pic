import React from 'react';
import ReactDOM from 'react-dom';

export class MyDropdown extends React.Component{
    constructor(props){
        super(props);
    }

    
    render(){
        const listItem = this.props.list.map((item) => {
        return (
            <a className="dropdown-item" href='#' 
                key= {item.toString()}
                onClick={()=>this.props.clickLink(item.toString())}>
                {item.toString()}
            </a>
           )
        })

        return(
            <div className='dropdown-button'>
            <div className="dropdown">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                {this.props.title}
                </button>
                <div className="dropdown-menu">
                <h5 className="dropdown-header">Images Name</h5>
                {listItem}
                </div>
            </div>
            </div>
        )
    }
}