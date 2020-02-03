import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render(){
      const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;
    return(
    <MuiThemeProvider>
      <React.Fragment  >
          <AppBar title="Confirmar os dados"></AppBar>
          <List>
            <ListItem primaryText="Primeiro nome"
            secondaryText={ firstName }/>
            <ListItem primaryText="Sobrenome"
            secondaryText={ lastName }/>
            <ListItem primaryText="E-mail"
            secondaryText={ email }/>
            <ListItem primaryText="Profissão"
            secondaryText={ occupation }/>
            <ListItem primaryText="Cidade"
            secondaryText={ city }/>
            <ListItem primaryText="Biografia"
            secondaryText={ bio }/>
          </List>
          <br></br>
          <RaisedButton
          label="Confirmar"
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

export default FormUserDetails;
