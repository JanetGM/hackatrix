import React from 'react';
import { db } from '../firebase';


    const data = db.collection("user").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
    

    function ReporteAgregado(){
        const reporte = data.map(ele => console.log(ele.distric));
    }
  
   



export default ReporteAgregado;