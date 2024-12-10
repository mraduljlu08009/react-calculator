import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'
import './Button.css';

const operatorPadButtons = [
['+' ,'-', 'X','÷', '=']
];

class OperatorPad extends React.Component{
    render () {
        return (
          <div className = "OperatorPad" > {
                    operatorPadButtons.map((row, i) => {
                        return ( 
                            <div key={i} className = "buttonRow" > {
                                row.map((value) => {
                                    return (
                                        <Button 
                                            key={value} 
                                            handleClick={this.props.addOperator} >
                                                {value}
                                        </Button>
                                    );
                                })
                            }    
                            </div>
                        );
                    })
                } 
                </div> 
        );
    }
  render () {
    return (
      <div className="OperatorPad"> 
        {operatorPadButtons.map((row, i) => {
          return ( 
            <div key={i} className = "buttonRow" > 
              {row.map((value) => {
                const clickHandler = value === '=' ? this.props.calculateResult : this.props.addOperator;
                return (
                  <Button 
                    key={value} 
                    handleClick={clickHandler} >
                      {value}
                  </Button>
                );
              })}
            </div>
          );
        })
      }</div> 
    );
  }
}

// OperatorPad.propTypes = {
//     children: PropTypes.any.isRequired
// };

export default OperatorPad;

