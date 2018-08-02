import React from 'react';
import ReactDOM from 'react-dom';
import {Image} from './image.js'
import magnify from './magnify.js'
import { MyDropdown } from './dropdown.js';

export class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image1Current: 'pad_overlay_1.png',
            image2Current: 'overlayed_output.png',
            image1:['pad_overlay_0.png','pad_overlay_1.png','pad_overlay_2.png'],
            image2:['overlayed_output.png'],
            title:['Pad Overlay','Overlayed Output']
        }
        
    }

    componentDidMount() {
      magnify("image2","image1", 2);
    }

    onClickImage1(pic){
        this.setState({image1Current: pic});
    }
    
    onClickImage2(pic){
        this.setState({image2Current: pic});
    }
    

    render(){
        return (
            <div>
                <div className='header'>
                    <div className='mycontainer'> 
                        <h1>IMAGE OVERLAY </h1>
                    </div>
                </div>


                <div className='nav'>
                    <div className= 'container'>
                        <MyDropdown list={this.state.image1}
                            clickLink = {(pic)=>this.onClickImage1(pic)}
                            title ={this.state.title[0]} />
                        <MyDropdown list={this.state.image2}
                            clickLink = {(pic)=>this.onClickImage2(pic)}
                            title ={this.state.title[1]} />
                    </div>


                </div>    


                <div id='image'>
                    <div className='mycontainer center'>
                        <Image image1={this.state.image1Current} 
                            image2={this.state.image2Current}  />
                    </div>
                </div>

            </div>
        ) 

    }
}