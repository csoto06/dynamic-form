import { Button, Card, CardGroup, Modal } from 'react-bootstrap';
import React from 'react';
import "./CardResume.css";

export default function CardResumeHobbies(props) {
    const { subtitle, hobbiesStorage, text } = props
  return (
    <div>
        <Card className='text-center p-2 card-resume'>
            <Card.Body>
                <Card.Subtitle><b>{subtitle}</b></Card.Subtitle>
                <ul>
                    {
                        hobbiesStorage.map((hobbie, index) => (
                            <li key={index}>{hobbie.label}</li>
                        ))
                    }
                </ul>
            </Card.Body>
        </Card>
        {
            text && (
                <Card className='text-center p-2 card-resume'>
                    <Card.Body>
                        <Card.Subtitle><b>Your additional hobbie is : </b></Card.Subtitle>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                </Card>
            )
        }
    </div>
  )
}
