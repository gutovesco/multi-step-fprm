import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class Success extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render(){
    return(
    <MuiThemeProvider>
      <React.Fragment  >
          <AppBar title="Sucesso!"></AppBar>
          <h1>Obrigado pela submissão.</h1>
          <p>Você vai receber um email com mais instruções.</p>

      </React.Fragment>
    </MuiThemeProvider>
    )
}
}

const style = {
    button: {
        margin: 25,
    }
}

export default Success;
