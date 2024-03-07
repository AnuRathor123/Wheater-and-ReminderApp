import React, { useState } from 'react';
import { MainWrapper } from './weather.module';
import NotesList from '../componets/NotesList';
import CreateNotes from '../componets/CreateNotes';
import { Note } from '../models/note.models';
import { Col, Container, Row } from 'react-bootstrap';

function DisplayNotes() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: " Schedule meeting for sprint planning",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);


  return (
    <>
     <MainWrapper>
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={ setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={ setNotes}/>
          </Col>
        </Row>
      </Container>
      </MainWrapper>
    </>
  );
}

export default DisplayNotes;
