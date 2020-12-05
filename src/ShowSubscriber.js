import Header from './Header'
import './ShowSubscriber.css';
import React, {Component} from 'react';
import './common/common.css';

class ShowSubscriber extends Component {

    render() {
        function deleteHandler(message) {
            alert(message);
        }
        console.log("REnder was called");

        return (<div className="component-container">
            <Header heading="Phone Directory" creator="Rahul Beniwal"/>
            <div className="component-body-container">
                <button className="custom-btn add-btn">Add</button>

                <div className="grid-container heading-container">
                    <span className="grid-item name-heading">Name</span>
                    <span className="grid-item phone-heading">Phone</span>
                </div>
                {
                this.props.subscribersList.map(sub => {
                    return <div key={
                            sub.id
                        }
                        className="grid-container">
                        <span className="grid-item "> {
                            sub.name
                        }</span>
                        <span className="grid-item "> {
                            sub.phone
                        }</span>
                        <span className="grid-item action-btn-container">
                            <button className="custom-btn delete-btn"
                                onClick={
                                    deleteHandler.bind(this, "Delete Clicked")
                            }>Delete</button>
                        </span>
                    </div>
            })
            } </div>
        </div>);

    }
}

export default ShowSubscriber;
