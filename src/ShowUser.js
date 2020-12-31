import {render} from '@testing-library/react';
import Header from './Header';
import React from 'react';
import {
    Media,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';

class ShowUser extends React.Component {
    constructor() {
        super();
        this.state = {
            id : 0
        }
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(idVal)
    {
        this.props.onDeleteHandler(idVal);
    }

    render() {
        const record = this.props.record.map( (element) => {
            return(
                <Card className="col-12 col-md-5 col-lg-3 mb-5 mr-5" key={element.id}>
                <CardImg width="100%"
                    src={
                        require("./user.png").default
                    }
                    alt="image"/>
                <CardImgOverlay>
                    <Media tag="li">
                        <Media left middle>
                            <Media heading></Media>
                        </Media>
                        <Media body className="ml-5"
                            style={
                                {color: "red"}
                        }>
                            <Media heading>
                                <span>{element.name}</span>
                            </Media>
                            <p>{element.phone}</p>
                        </Media>
                        <Media right>
                            <button className="btn-primary removebutton btn-sm" onClick={()=>this.onDelete(element.id)}>Remove</button>
                        </Media>
                    </Media>
                </CardImgOverlay>
            </Card>
            )
        })
        return (
            <div>
                        <Header heading="Phone Directory" creator="Rahul Beniwal"/>
                        <div className="row mt-3">
                        {record}
                        </div>
            </div>
        )
    }
}
export default ShowUser;
