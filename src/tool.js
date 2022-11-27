import React from 'react';

class Tool extends React.Component{
    classn=()=>{
        return `${this.props.position}`;
    }

    render(){
        return (
            <div className={`${this.classn()}`}>
                thanks for hovering on the {this.props.position} position
            </div>
        )
    }
}


export default Tool;