import {BrowserRouter as Router, Link , NavLink , Redirect, Prompt} from 'react-router-dom'
import {Route} from 'react-router-dom';
import React from 'react';
import About from './About';
function User(params) {
    console.log(params);
    return (

        <div>
            Welcome {params.username} </div>
    )
}

class ReactRouter extends React.Component {
    state = {
        loggedIn : false
    }
    loginHandle = ()=>{
        console.log(this.state.loggedIn);
        this.setState((prevState)=>{
            return (
                {
                    loggedIn : !prevState.loggedIn
                }
            )

        })
    }
    render() {
        return (
            <div>
                <Router>
                <ul>
                    <li>
                        <NavLink to="/" activeStyle={
                            {color : "green"}
                        } exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about/" activeStyle={
                            {color : "green"}
                        } exact>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/Rahul" activeStyle={
                            {color : "green"}
                        } exact>Rahul</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/Kuldeep" activeStyle={
                            {color : "green"}
                        } exact>Kuldeep</NavLink>
                    </li>
                </ul>
                {/* <Prompt when={!this.state.loggedIn}  */}
                <input type="button" value={this.state.loggedIn ? "logout" : "login"} onClick={this.loginHandle.bind(this)}></input>
                    <Route path="/" exact
                        render={
                            () => {
                                return (
                                    <h1>Welcome home</h1>
                                )
                            }
                        }/>
                    <Route path="/about/" strict exact
                        component={About}/>
                    <Route path="/user/:username" exact strict
                        render={ ({match})=>{
                            console.log(match.params.username)
                            return this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/"/>);
                        } }/>
                </Router>
            </div>
        )
    }
}
export default ReactRouter;
