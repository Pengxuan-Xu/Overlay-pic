import React from 'react';
import ReactDOM from 'react-dom';

export class Image extends React.Component{
    constructor(props){
        super(props);
    }

   

    render (){
        let image1 = this.props.image1;
        let image2 = this.props.image2;
        return (
            <div>
                <div className="img-magnifier-container">
                    <img className="one" id="image1" src={window.location.origin +"/img/"+image1} width = {500} height ={420} border="5" />
                    <img className="two" id="image2" src={window.location.origin +"/img/"+image2} width = {500} height ={420} border="5"/>
                </div>

            </div>
        )
    }
}
