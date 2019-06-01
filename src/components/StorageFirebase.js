import { storage } from '../firebase';
import React, { Component } from 'react';
import styled from 'styled-components';

const Camera = styled.img`
  width: 20%;
`

export class StorageFirebase extends Component {
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
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    this.sCameraetState({url});
                })
            },   
        (error) => {
          console.log(error);
        }  
      );
    }
    render() {
       
        return (
            <>
              <input type="file" onChange={this.handleChange} />
              <Camera src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7fFGqVa3fsdaLgicuPGKh3Bnuhq1hsnFaVNfpJUxOFmzO-PA" alt="camara"/>
              <button type="button" onClick={this.handleUpload}>Añadir imagen</button>
            </>
        )
    }
}

export default StorageFirebase;
