import React, { useState } from 'react';
import axios from 'axios'; //API jaoks
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import DUMMY_DATA from './data';
import '../src/css/App.css';

function MessageRow(message, index) {
  return (
    <div className="text-box" key={index}>
      <div className="message" >{message.text}</div>
      <div className="user-name" >{message.senderId}</div>
    </div>
  )
}

function Chat() {

  const [user, setUser] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState(DUMMY_DATA);

  async function handleSubmit(e) {
    /*const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);   -- läheb API päringu saatmiseks*/

    setPosts([...posts, {
      senderId: user,
      text: content
    }]);
  }

  return (
    <Container className="page-container">
      <h1>VOCO</h1>
      <div className="chat-container">
        <div className="messages-box">
          {posts.map((message, index) => MessageRow(message, index))}
        </div>

        <Form>
          <div id='inputForm'>
            
            <Form.Group className='userBX'>
              <Form.Control value={user} onChange={e => setUser(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className='contentBX'>
              <Form.Control value={content} onChange={e => setContent(e.target.value)}></Form.Control>
            </Form.Group>
          </div>
          <Button className='btn-block' onClick={e => handleSubmit(e)}>Send</Button>
        </Form>
      </div>

    </Container>
  );
}

export default Chat;
