import React,{useState} from 'react'
import { Modal,Button } from 'react-bootstrap'
import uploadImg from '../assets/images/uploadImg.jpg'


function EditProject() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
    <button onClick={handleShow} className='btn '><i style={{height:'34px'}} className="fa-solid fa-edit fa-2x"></i></button>
    <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col-lg-6">
            <label> 
             <input type="text" style={{display:'none'}} />
             <img style={{height:'250px'}} className='w-100' src={uploadImg} alt="" />
            </label>
          </div>
          <div className="col-lg-6">
          <div className='mb-3'>
            <input type="text" className='form-control' placeholder='Project Title' />
        </div>  
        <div className='mb-3'>
            <input type="text" className='form-control' placeholder='Language Used' />
        </div>  
        <div className='mb-3'>
            <input type="text" className='form-control' placeholder='Project Github Link ' />
        </div>  
        <div className='mb-3'>
            <input type="text" className='form-control' placeholder='project Website link ' />
        </div>  
        <div className='mb-3'>
            <input type="text" className='form-control' placeholder='Project Overview ' />
        </div>         
         </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
   
  )
}

export default EditProject