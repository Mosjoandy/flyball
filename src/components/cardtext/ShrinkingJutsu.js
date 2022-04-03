import React from 'react';
import './ShrinkingJutsu.css';
import { Container, Card, Badge } from "react-bootstrap";

function ShrinkingJutsu() {
    return (
        <Container>
            <Card.Text id='fadeOne'>Flyball is a team relay race for dogs. 2 teams of 4 dogs race against each other. The racecourse consists of 4 jumps spaced 10 feet apart with a
            </Card.Text>
            <div className="d-flex justify-content-center">
                <Badge bg="success" className="text-center" style={{ marginBottom: '10px' }}>Show More</Badge>
            </div>
        </Container>
    );
};

export default ShrinkingJutsu;