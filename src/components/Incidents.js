import React from 'react';
import styled from 'styled-components'

const IncidentsWrapper = styled.section`
  display: grid;
  grid-gap: 50px 60px;
  justify-items: center;
  grid-template-columns: auto auto;
  padding: 30px;
`

const IconsWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid green;
  text-align: center;
  box-sizing: border-box;
  
`
const Icons = styled.i`
  align-item: center;
  line-height: 1.8;
  font-size: 1.8rem;
`
const IncidentText = styled.span`
  font-size: 0.8rem;
  text-align: center;
  line-height: 4;
` 

const Incidents = () => {
  return (
    <IncidentsWrapper>
      <div>
        <IconsWrapper>
          <Icons className="fas fa-car-crash"/>
        </IconsWrapper> 
        <IncidentText>Choque</IncidentText>
      </div> 
      <div>
        <IconsWrapper>
          <Icons className="fas fa-shield-alt"/>
        </IconsWrapper>
        <IncidentText>Seguridad</IncidentText>
      </div>  
      <div>
        <IconsWrapper>
          <Icons className="fas fa-car-crash"/>
        </IconsWrapper> 
        <IncidentText>Basura</IncidentText>
      </div> 
      <div>
        <IconsWrapper>
          <Icons className="fas fa-shield-alt"/>
        </IconsWrapper>
        <IncidentText>Desorden</IncidentText>
      </div>
      <div>
        <IconsWrapper>
          <Icons className="fas fa-car-crash"/>
        </IconsWrapper> 
        <IncidentText>Delito</IncidentText>
      </div> 
      <div>
        <IconsWrapper>
          <Icons className="fas fa-shield-alt"/>
        </IconsWrapper>
        <IncidentText>Seguridad</IncidentText>
      </div> 
    </IncidentsWrapper>
  )

};
export default Incidents;