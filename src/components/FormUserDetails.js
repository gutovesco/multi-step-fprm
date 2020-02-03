import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

  render(){
      const { values, handleChange } = this.props;
    return(
    <MuiThemeProvider>
      <React.Fragment  >
          <AppBar title="Preencha os campos"></AppBar>
          <TextField 
          hintText="Digite seu primeiro nome" 
          floatingLabelText="Primeiro nome"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          ></TextField>
          <br></br>
          <TextField 
          hintText="Digite seu sobrenome" 
          floatingLabelText="Sobrenome"
          onChange={handleChange('lastName')}
          defaultValue={values.LastName}
          ></TextField>
          <br></br>
          <TextField 
          hintText="Digite seu E-mail" 
          floatingLabelText="E-mail"
          onChange={handleChange('email')}
          defaultValue={values.email}
          ></TextField>
          <br></br>
          <RaisedButton
          label="Continuar"
          primary={true}
          style={style.button}
          onClick={this.continue}
          ></RaisedButton>
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

export default FormUserDetails;
