import React,{useState} from 'react'
import {Card, Col, Modal, Row} from 'react-bootstrap';
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Card style={{width:'28rem'}} className='shadow btn mb-5' onClick={handleShow}>
      <Card.Img variant="top" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113d1046-6bdc-4475-a781-99f6cf7d1acd/001-understand-yourself-large-opt.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
            <img className='img-fluid' style={{height:'250px'}} src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113d1046-6bdc-4475-a781-99f6cf7d1acd/001-understand-yourself-large-opt.png" alt="" />
            </Col>
            <Col md={6}>
            <h2 className='fw-bolder text-dark'>Project Title</h2>
            <p>Project Overview: <span className='fw-bolder' style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit earum a deserunt eveniet fugit, ullam unde expedita tenetur, asperiores, inventore ratione reprehenderit repellat neque hic voluptas illum placeat perferendis et? </span></p>
            <p>Language Used: <span className='fw-bolder text-danger'>HTML,CSS,JS</span></p>
            </Col>
          </Row>
          <div className="mt-3">
            <a href="https://github.com/Sreelakshmit123/MediaPlayer" target='_blank' className='btn me-3'><i style={{height:'40px'}} className="fa-brands fa-github fa-2x"></i></a>
            <a href="" target='_blank' className='btn me-3'><i style={{height:'40px'}} className="fa-solid fa-link fa-2x"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard