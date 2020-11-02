import React from 'react';
import '../../App.css'
import Hero from '../Hero'
import { Timeline } from 'react-twitter-widgets'
import Card from 'react-bootstrap/Card';
import './Home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
    return (
        <>
            <Hero />
            <div className="heading">
        <img src="https://i.imgur.com/0KsnPLk.png" height="100px" />
        <h1><b>What's the world saying about ASL?</b></h1>
      </div>
      <Container className="container">
        <Row className="row">
          <Col className="tweet">
            <Card className="card">
              <Card.Body>
                <Card.Header style={{
                  color: '#34B8FD'
                }}>#ASL tweets </Card.Header>
                <Card.Text>
                  <Timeline
                    dataSource={{
                      sourceType: 'list',
                      id: '1321683053203382272'
                    }}
                    options={{
                      chrome: 'noheader nofooter',
                      height: '350',
                      width: '5rem',
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="tweet">
            <Card className="card">
              <Card.Body>
                <Card.Header style={{
                  color: '#34B8FD'
                }}>Awareness on the 'feed</Card.Header>
                <Card.Text>
                  <Timeline
                    dataSource={{
                      sourceType: 'list',
                      id: '1321683053203382272'
                    }}
                    options={{
                      chrome: 'noheader nofooter',
                      height: '350',
                      width: '5rem',
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="tweet">
            <Card className="card">
              <Card.Body>
                <Card.Header style={{
                  color: '#34B8FD'
                }}>#ASLFacts</Card.Header>
                <Card.Text>
                  <Timeline
                    dataSource={{
                      sourceType: 'list',
                      id: '1321683053203382272'
                    }}
                    options={{
                      chrome: 'noheader nofooter',
                      height: '350',
                      width: '5rem',
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default Home;