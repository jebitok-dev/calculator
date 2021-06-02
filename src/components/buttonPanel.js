import React from 'react';
import Button from './buttons';

export default class ButtonPanel extends React.Component {
    renderButton = (i) => <Button name={i} />

    render() {
      return (
        <div>
          <div className="calculator-row">
            {this.renderButton('(')}
            {this.renderButton('7')}
            {this.renderButton('4')}
            {this.renderButton('1')}
            {this.renderButton('0')}
          </div>
          <div className="calculator-row">
            {this.renderButton(')')}
            {this.renderButton('8')}
            {this.renderButton('5')}
            {this.renderButton('2')}
            {this.renderButton('.')}
          </div>
          <div className="calculator-row">
            {this.renderButton('%')}
            {this.renderButton('9')}
            {this.renderButton('6')}
            {this.renderButton('3')}
            {this.renderButton('=')}
          </div>
          <div className="calculator-row">
            {this.renderButton('AC')}
            {this.renderButton('÷')}
            {this.renderButton('x')}
            {this.renderButton('-')}
            {this.renderButton('+')}
          </div>
        </div>
      );
    }
}
