import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';
class PhoneDirectory extends Component {
    constructor()
    {
        super();
        this.state= {
            subscribersList : [{
                id : 1, 
                name : "Rahul Beniwal", 
                phone : "95558490549"
            }, 
            {
                id : 2, 
                name  : "Kuldeep",
                phone : "85715477"
            }
        ]
        }
    }
    addSubscriberHandler = (newSubscriber)=>{
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0)
        {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        }
        else 
        {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList : subscribersList});
        console.log(this.state.subscribersList);
    }
    render() {
        return (
            // <ShowSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            <ShowSubscriber subscribersList={this.state.subscribersList}/>
        )
    }
}
export default PhoneDirectory;
