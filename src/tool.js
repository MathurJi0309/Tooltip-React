import React from 'react';

class tool extends React.Component{
    classn=()=>{
        return `position=${this.props.position}`;
    }

    render(){
        return (
            <div className={`${this.classn()}`}>
                thanks fot hovering on this position + {this.props.position}
            </div>
        )
    }
}


export default tool;