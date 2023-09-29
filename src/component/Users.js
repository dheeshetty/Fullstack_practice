import { useState, useEffect } from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = () => {
    axios
      .get('http://localhost:4000/users')
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.error(err))
  }

  const handleSubmit = () => {
    axios
      .post('http://localhost:4000/users', newUser)
      .then((res) => {
        fetchUsers();
        setNewUser({
          first_name: '',
          last_name: '',
          email: '',
          avatar: '',
        })
      })
      .catch((err) => console.error(err))
  }

  return (
    <Container>
      <h1>Users</h1>
      <Row>
        {users.map((user, index) => (
          <Col md={4} key={index}>
            <Card style={{ width: '18rem', marginTop: '10px', textAlign: 'center' }}>
              <Card.Img variant="top" src={user.avatar} style={{ borderRadius: '100%', width: '200px', height: '200px', margin: '5px auto' }} />
              <Card.Body>
                <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                <Card.Text>
                  {user.email}
                </Card.Text>
                <Button variant="dark">Send request</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      <h3 style={{ marginTop: '50px' }}>Add a new user</h3>
      <input
        type="text"
        placeholder="First name"
        value={newUser.first_name}
        onInput={(e) => setNewUser({
          ...newUser,
          first_name: e.target.value
        })}
      /><br /><br />
      <input 
        type="text" 
        placeholder="Last name" 
        value={newUser.last_name} 
        onInput={(e) => setNewUser({
        ...newUser,
        last_name: e.target.value
      })} 
      /><br /><br />
      <input 
        type="email" 
        placeholder="Email" 
        value={newUser.email}
        onInput={(e) => setNewUser({
          ...newUser,
          email: e.target.value
        })} 
      /><br /><br />
      <input 
        type="text" 
        placeholder="Avatar URL" value={newUser.avatar}
        onInput={(e) => setNewUser({
          ...newUser,
          avatar: e.target.value
        })} 
      /><br /><br />
      <Button variant='dark' onClick={handleSubmit}>Submit</Button>
    </Container>

  )
}

export default Users