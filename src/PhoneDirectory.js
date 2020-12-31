import React , {Component} from 'react';
import ShowUser from './ShowUser';
import AddUser from './AddUser';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import SUBSCRIBERLIST from './record';

class PhoneDirectory extends Component{

    constructor()
    {
        super();
        this.state = {
            record : SUBSCRIBERLIST
        }
    }
    deleteHandler = (id)=>
    {
        let tempRecord = this.state.record;
        let subscriberIndex= 0;
        tempRecord.forEach((subscriber , index )=>{
            if(subscriber.id === id)
            {
                subscriberIndex = index;
            }
        });
        tempRecord.splice(subscriberIndex , 1);
        this.setState({record : tempRecord})
    }
    addSubscriberHandler  = (newSubscriber)=>{
        let userList  = this.state.record; 
        if(userList.length  > 0)
        {
            newSubscriber.id = userList[userList.length -1 ].id + 1;
        }
        else 
        {
            newSubscriber.id =1;
        }
        userList.push(newSubscriber);
        this.setState({record : userList});
    }
    render()
    {
        return (
            <Router>
            <Route exact path="/" render={()=> <ShowUser record={this.state.record} onDeleteHandler={this.deleteHandler}/> }/>
            <Route exact path="/adduser" render={({history})=> <AddUser history={history} addSubscriberHandler={this.addSubscriberHandler}/>} />
            </Router>
        )
    }
}
export default PhoneDirectory;