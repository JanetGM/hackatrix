import React from 'react';
import styled from 'styled-components';

const ChooseDistric = ({district})=> {
    
    const Wrapper = styled.section`
    padding: 1em;
    background: papayawhip;
    `;
    const Title = styled.h1`
    font-family:'Source Sans Pro', sans-serif;
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    `;
    const Select = styled.select`
    margin-top:10%;
    margin-left:25%;
    width:50%;
    height:20px;
    font-size: 10px;
    border-radius:2px;
    
    `;
    const AddDistric = styled.div`
    margin-top:10%;
    width:50%;
    height:100%;
    padding:10%;
    border:dashed;
    `;
    const FatherComponent = styled.div`
    display:flex;
    justify-content:center;
    `;
    const ButtonAddDistritic=styled.button`
    border-radius:50%;
    border:none;
    margin-left:35%;
    `;
    const TitleBottom = styled.div`
    font-size:10px;
    margin-top:30px;
    `;
    
        return(
        <> 
       
                <Wrapper>
                <Title>
                    Notificaciones sobre mi distrito
                </Title>
                </Wrapper>
                <Select>
                  {
                      district.map(e=><option>{e.name}</option>)            
                         }
                </Select>
                <FatherComponent>
                    <AddDistric> 
                    <ButtonAddDistritic onClick={()=>alert('no me toques ahí')}>+</ButtonAddDistritic>
                    <TitleBottom>Agregar otro distrito</TitleBottom>
                    </AddDistric>
                </FatherComponent>
        </>
        
        )
    }

    

export default ChooseDistric;