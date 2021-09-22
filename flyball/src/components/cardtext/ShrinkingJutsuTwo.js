import React from 'react';
import './ShrinkingJutsu.css';
import { Container, Card, Badge } from "react-bootstrap";

function ShrinkingJutsuTwo() {
    return (
        <Container>
            <Card.Text id='fadeOne'>We have been a team for over 15 years, having fun with our dogs and only using positive training techniques to learn this exciting team sport.
            </Card.Text>
            <div className="d-flex justify-content-center">
                <Badge bg="success" className="text-center" style={{ marginBottom: '10px' }}>Show More</Badge>
            </div>
        </Container>
    );
};

export default ShrinkingJutsuTwo;