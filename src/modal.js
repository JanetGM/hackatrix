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
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle" style={{color: '#f7b801'}}>Incidencias</h5>
                        
                    </div>
                    <div class="modal-body">
                        <div style={{textAlign: 'center'}}>
                            <label className="mt-1" style={{textAlign: 'center', width: '100%'}}>
                                <input type="file" onChange={this.handleChange} style={{visibility: 'hidden'}}/>
                                <Camera src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7fFGqVa3fsdaLgicuPGKh3Bnuhq1hsnFaVNfpJUxOFmzO-PA" alt="camara"/>
                            </label>
                        <button type="button" onClick={this.handleUpload} class="btn btn-primary" style={{borderRadius: '6px', background: 'linear-gradient(166.04deg, #BAFB67 -5.37%, #00D23A 196.64%)', border: '0px'}}>Añadir imagen</button>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1" style={{color: '#f7b801'}}>Describe la incidencia</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" style={{background: 'linear-gradient(147.47deg, #FEB665 24.48%, #F66EB4 118.65%)', border:'0px' }} data-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" style={{background: 'linear-gradient(166.04deg, #BAFB67 -5.37%, #00D23A 196.64%)', border: '0px'}}>Registrar</button>
                    </div>
                    </div>
                </div>
                </div>
            </>
           )
        }
}

export default ModalTemplate;