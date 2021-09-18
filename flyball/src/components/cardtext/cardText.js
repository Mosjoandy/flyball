import React from 'react';
import { Card, Badge } from "react-bootstrap";

function CardJutsu() {
    return (
        <div>
            <Card.Text>Flyball is a team relay race for dogs. 2 teams of 4 dogs race against each other. The racecourse consists of 4 jumps spaced 10 feet apart, with a start line 6 feet in front of the first jump and a flyball box 15 feet from the last jump.</Card.Text>
            <Card.Text>The first dog must race over all four hurdles to the box and trigger the box with its paws. The box then releases a tennis ball, which the dog must catch and bring back over all four jumps.</Card.Text>
            <Card.Text>As the first dog returns, the second dog starts running. Ideally, the dogs pass nose-to-nose at the start line. The dog is faulted if it passes too early and must run again at the end.</Card.Text>
            <Card.Text>The race continues until all four dogs have finished. If a dog or handler makes an error (such as dropping a ball, going around a jump, or passing too early), that dog must rerun. The first team that finishes running all dogs wins. However, both winning and losing teams gain points towards their titles, depending on how fast they finish the race! </Card.Text>
            <div className="d-flex justify-content-center">
                <Badge bg="success" className="text-center" style={{ margin: '10px' }}>Less</Badge>
            </div>
        </div>
    );
};

export function ExpansionJutsu(props) {

    return (
        <div>
            {props.paraOne}
            <br />
            <div className="d-flex justify-content-center">
                <Badge bg="success" className="text-center" style={{ margin: '10px' }}>More</Badge>
            </div>
        </div>
    );
};

export default CardJutsu;

export function ShrinkingJutsu() {
    return (
        <div>

        </div>
    );
};