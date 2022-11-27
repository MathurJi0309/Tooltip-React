import React from 'react';
import './App.css';
import Tool from './tool';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      position:"top",
      hovering:false,
    };
  }
  handleClick=(pos)=>{
    this.setState({
      position:pos,
    })
  };
  handleMouseEnter=()=>{
    this.setState({
      hovering:true,
    });
  };
  handleMouseLeave=()=>{
    this.setState({
      hovering:false
    })
  }
  render(){
    return (
      <div className="App">
        <div className='btn-position'>
          <div className='grp-name'>
            here select the position of the hovering!! ==
          </div>
          <button
          className= {this.state.position=== 'top' ? "btn active" :"btn" }
          onClick={(e)=>{
            this.handleClick('top');
          }}>
            top
          </button>
          <button
          className={this.state.position=== 'left' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('left');
          }}>
            left
          </button>
          <button
          className={this.state.position=== 'right' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('right');
          }}>
            right
          </button>
          <button
          className={this.state.position=== 'down' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('down');
          }}>
            down
          </button>
        </div>
        <div id="button-container">
          <button
          className='btn hover-btn'
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
          >
            {this.state.hovering && <Tool position={this.state.position}/>}
            Hover Over Me!!
          </button>
        </div>
        {/* <button >
          Hover over me!
        </button> */}
        <div>
          <h5 className='copyright'>
            Copyright 2022-2023 Mathur_Ji All Rights Reserved!!
          </h5>
        </div>
      </div>
    );
  }
}

export default App;
