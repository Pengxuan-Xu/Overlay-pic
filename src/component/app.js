import React from 'react';
import ReactDOM from 'react-dom';
import {Image} from './image.js'
import magnify from './magnify.js'
import { MyDropdown } from './dropdown.js';

export class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //change your default image here
            image1Current: 'pad_overlay_1.png',
            image2Current: 'overlayed_output1.png',
            //change your image pair here
            image:[{image1: 'pad_overlay_0.png', image2:'overlayed_output1.png'},
            {image1: 'pad_overlay_1.png', image2:'overlayed_output2.png'},
            {image1: 'pad_overlay_2.png', image2:'overlayed_output3.png'}],
            //change your drop down menu name here
            title:['Pad Overlay']
        }
        
    }

    componentDidMount() {
        magnify("image2","image1", 2)
    }

    onClickImage(pic){
        this.setState({image1Current: pic.image1.toString(),
            image2Current: pic.image2.toString()},()=>{magnify("image2","image1", 2)});
        
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
                        <MyDropdown list={this.state.image}
                            clickLink = {(pic)=>this.onClickImage(pic)}
                            title ={this.state.title[0]} />
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