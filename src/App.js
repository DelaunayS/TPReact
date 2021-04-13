import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';

export class Example1 extends Component {
    render() {
        return (            
            <>
                <h5 className="container-fluid text-center text-primary">                    
                    Voici un accordéon de TP réalisés avec React et proposés par &nbsp;
                    <a href="https://openclassrooms.com/fr">OpenClassrooms</a>
                    &nbsp; ou  &nbsp;
                    <a href="https://www.freecodecamp.org/">freecodecamp</a>                    
                </h5>

                <div>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Palindrome
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                  <div id="root1">
                                    <App1/>
                                  </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Message chiffré par décalage
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                  <div id="root2">
                                    <App2/>
                                  </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                Convertisseur en nombre romain
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                  <div id="root3">
                                    <App3/>
                                  </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                Pendu simplifié sur les animaux
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                  <div id="root4">
                                    <App4/>
                                  </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                    </Accordion>
                </div>
            </>
        );
    }
}

export default Example1;