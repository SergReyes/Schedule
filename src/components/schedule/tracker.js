import React, {Component} from 'react';

class Tracker extends Component{

    calculateProgress = function(){
        return (this.props.amountEnrolled / this.props.amountPossible) * 100;
    }.bind(this);

    render(){
        return( 
        <div className="tracker">
            <div className="tracker__title">Progress Tracker</div>
            <div className="tracker__percentage">
            {this.calculateProgress()}%
            </div>

        </div>
        );
    }
}

export default Tracker;