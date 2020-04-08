import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck, Card, Row, Col, Button } from 'react-bootstrap';
import EventCard from "../components/EventCard";

export default class EventList extends Component {
    render() {
        return (
            <Card style={Styles.card}>
                <Row>
                    <Col sm={{ span: 7, offset: 0 }}>
                        <Card.Text> <b> Upcoming Events </b> </Card.Text>
                    </Col>

                    <Col sm={{ span: 2, offset: 1 }}>
                        <Button style={Styles.button}> <b>See all </b></Button>
                    </Col>
                </Row>

                <Row>
                    <Col lg={{ span: 5, offset: 0 }}>
                        <Card.Text style={Styles.subtitle}> See what's happening soon in your area. </Card.Text>
                    </Col>
                    
               </Row>

                <Row>
                    <Col sm={{ span: 3, offset: 0 }}>
                        <EventCard/>
                    </Col>
                    <Col sm={{ span: 3, offset: 0 }}>

                        <EventCard/>
                    </Col>
                    <Col sm={{ span: 3, offset: 0 }}>
                        <EventCard/>
                    </Col>
                </Row>
            </Card>
            )
    }
}

const Styles = {
    card: {
        width: "67rem",
        border: "none",
    },

    subtitle: {
        fontSize: "small",
        //color: "#7C7C7C"
    }, 

    button: {
        fontSize: "small",
        width: "74%",
        height: "87%",
        border: "none",
        backgroundColor: "white",
        color: "#1C8D9B",
    }
};