import React from 'react';

class MenuNav extends React.Component {
    render() {
        return (
            <>
                <div class="btn-group" role="group" aria-label="Basic example" style={{width: '100%',
                        marginTop: '270px'}}>
                    <button type="button" class="btn btn-secondary" style={{borderRadius: '0px'}}><img src={require('./images/menu.png')} style={{marginTop: '10px',
    marginBottom: '15px', width: '30%'}}/></button>
                    <button type="button" class="btn btn-secondary" style={{borderRadius: '0px'}}><img src={require('./images/bot.png')} style={{marginTop: '10px',
    marginBottom: '15px', width: '30%'}}/></button>
                    <button type="button" class="btn btn-secondary" style={{borderRadius: '0px'}}><img src={require('./images/stat.png')} style={{marginTop: '10px',
    marginBottom: '15px', width: '30%'}}/></button>
                </div>
            </>
        )
    }
}

export default MenuNav;