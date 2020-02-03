import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

class FormPersonalDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render(){
      const { values, handleChange } = this.props;
    return(
    <MuiThemeProvider>
      <React.Fragment  >
          <AppBar title="Preencha os campos"></AppBar>
          <TextField 
          hintText="Digite sua profissão" 
          floatingLabelText="Profissão"
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
          ></TextField>
          <br></br>
          <TextField 
          hintText="Digite sua cidade" 
          floatingLabelText="Cidade"
          onChange={handleChange('city')}
          defaultValue={values.city}
          ></TextField>
          <br></br>
          <TextField 
          hintText="Digite sua bio" 
          floatingLabelText="bio"
          onChange={handleChange('bio')}
          defaultValue={values.bio}
          ></TextField>
          <br></br>
          <RaisedButton
          label="Continuar"
          primary={true}
          style={style.button}
          onClick={this.continue}
          ></RaisedButton>
          <RaisedButton
          label="Voltar"
          primary={true}
          style={style.button}
          onClick={this.back}
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

export default FormPersonalDetails;
