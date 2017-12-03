import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


class Login extends Component{
    constructor(props){
        super();
        this.state={
            username:'',
            password:''
        }
    }

    handleClick(event){
        const baseUrl="http://localhost:4000/api/";
        var self=this;
        var payload={
            "email":this.state.username,
            "password":this.state.password
        }

        axios.post(baseUrl+'login',payload)
            .then(response=>{
                console.log(response);
                if(response.data.code==200/**/){
                    console.log("Login successfull");
                    //Redirect to chat page
                    //save the token

                }else if(response.data.code==204/**/){
                    console.log("User Name and password donot match");
                    //alert
                    //stay at the same page
                }else{
                    console.log("User Name doesnot exist");
                    //alert()
                }

            })
    }

    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Login">
                            <TextField
                                hintText="Enter Your User name"
                                floatingLabelText="User Name"
                                onChange={(event,newvalue)=>{
                                    this.setState({username:newvalue})
                                }}
                            />
                            <br/>
                            <TextField
                                type="password"
                                hintText="Enter your password"
                                floatingLabelText="Password"
                                onChange={(event,newValue)=>{
                                    this.setState({password:newValue})
                                }}
                            />
                            <br/>
                            <RaisedButton label="Submit"
                                          primary={true}
                                          style={style}
                                          onClick={(event)=>this.handleClick(event)}
                            />
                        </AppBar>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

const style={
    margin:15
};

export default Login;
