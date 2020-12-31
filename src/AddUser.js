import react from "react";
import React from 'react';
import Header from './Header';
import {Link , Redirect} from 'react-router-dom';
import {Form , FormGroup , Label , Input , FormText, Button, Card , CardTitle , CardBody , CardImg  , Media , CardImgOverlay} from 'reactstrap';



class AddUser extends React.Component{

    constructor(){
        super();
        this.state = {
            id : 0 ,
            name : '',
            phone : ''
        }
    }
    inputChangeHandler = (event)=>
    {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);

    }
    onFormSubmit(e)
    {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({
            id : 0 ,
            name : '',
            phone : ''
        })
        this.props.history.push("/");
    }

    render(){
    return (
        <div>
            <Header heading="Add User"/>
            <Link to="/" exact>
            <Button className="mt-3 ml-3 btn-danger">Back</Button>
            </Link>
            <Form className="col-12  col-sm-8 col-md-6 col-lg-4 mt-5" onSubmit={this.onFormSubmit.bind(this)}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" placeholder="Enter User Name" onChange={this.inputChangeHandler}/>
                </FormGroup>
                <FormGroup>
                    <Label for="phoneNumber">Phone</Label>
                    <Input type="tel" name="phone" placeholder="Enter Your Phone Number" onChange={this.inputChangeHandler}/>
                </FormGroup>
                <button className="btn-success btn-md" type="submit" onClick={this.clickHandler}>Submit</button>
            </Form>
            <Card className="col-12 col-md-5 col-lg-3 mb-5 mr-5 mt-5">
            <CardImg width="100%" 
            src={
                        require("./user.png").default
                    }
                    alt="image"/>
            <CardImgOverlay>
                <Media>
                    <Media left middle>
                    </Media>
                    <Media body className="ml-5" style={{color : "red"}}>
                    <Media heading>{this.state.name}</Media>
                    <p>
                        {this.state.phone}
                    </p>
                    </Media>
                </Media>
            </CardImgOverlay>
            </Card>
        </div>
    )    
    }
}
export default AddUser;