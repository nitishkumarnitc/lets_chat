import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
import Register from './Register';

class Loginscreen extends Component {
    constructor(props){
        super(props);

        this.state={
            username:'',
            password:'',
            loginmessage:'',
            isLogin:true
        }
    }
    componentWillMount(){
        var loginmessage = "Not registered yet, Register Now";
        this.setState({
            loginmessage:loginmessage
        })
    }
    handleClick(event,userRole){
        console.log("event",userRole);
        var loginmessage;
        if(this.state.isLogin){
            loginmessage = "Already registered.Go to Login";
            <div>
                <MuiThemeProvider>
                    <div>
                        <RaisedButton label={"Login"} primary={true} style={style} onClick={(event) => this.handleClick(event,userRole)}/>
                    </div>
                </MuiThemeProvider>
            </div>

            this.setState({
                loginmessage:loginmessage,
                isLogin:false
            })
        }
        else{

            loginmessage = "Not Registered yet.Go to registration";
            this.setState({
                loginmessage:loginmessage,
                isLogin:true
            })
        }
    }
    render() {
        return (
            <div className="loginscreen">
                <div>
                    {this.state.loginmessage}
                </div>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Loginscreen;