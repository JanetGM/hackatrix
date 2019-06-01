import React from 'react';
import { storage } from './firebase';
import styled from 'styled-components';


const Camera = styled.img`
  width: 20%;
`

class ModalTemplate extends React.Component {
    constructor() {
        super();
        this.state = {
            image: null,
            url: ''
        }
    }

    handleChange = (e) => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }))
        }
    }
    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        
        (error) => {
             // error function ....
          console.log(error);
        }, 
      () => {
          // complete function ....
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({url});
          })
      });
    }

    render () {
        return ( 
            <>
    
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Incidencias</h5>

            <div>
                <label className="mt-5">
                <input type="file" onChange={this.handleChange} style={{visibility: 'hidden'}}/>
              <Camera src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7fFGqVa3fsdaLgicuPGKh3Bnuhq1hsnFaVNfpJUxOFmzO-PA" alt="camara"/>
              </label>
              <button type="button" onClick={this.handleUpload}>Añadir imagen</button>
            </div>

            </div>
            <div className="modal-body">
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Describe la incidencia</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary">Registrar</button>
            </div>
            </div>
        </div>
        </div>
            </>
           )
        }
}

export default ModalTemplate;