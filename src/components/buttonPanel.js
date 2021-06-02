import React from 'react';
import Button from './buttons';

export default class ButtonPanel extends React.Component {
    renderButton = (i) => <Button name={i} />

    render() {
      return (
        <div>
          <div className="calculator-row">
            {this.renderButton('(')}
            {this.renderButton(')')}
            {this.renderButton('%')}
            {this.renderButton('AC')}
          </div>
          <div className="calculator-row">
            {this.renderButton('7')}
            {this.renderButton('8')}
            {this.renderButton('9')}
            {this.renderButton('÷')}
          </div>
          <div className="calculator-row">
            {this.renderButton('4')}
            {this.renderButton('5')}
            {this.renderButton('6')}
            {this.renderButton('X')}
          </div>
          <div className="calculator-row">
            {this.renderButton('1')}
            {this.renderButton('2')}
            {this.renderButton('3')}
            {this.renderButton('-')}
          </div>
          <div className="calculator-row">
            {this.renderButton('0')}
            {this.renderButton('.')}
            {this.renderButton('=')}
            {this.renderButton('+')}
          </div>
        </div>
      );
    }
}
