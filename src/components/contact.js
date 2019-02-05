import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
           <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Hemant Prasad</h2>
                    <img src="data:image/jpeg;base64,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" alt="avatar"
                    style={{height: '250px'}}/>
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em' }}>Hello there! I'd like to work in a challenging environment where my skills and knowledge are utilized for the achievement of the objectives of the organization.</p>
                </Cell>

                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    
                    <div className="contact-list">
                    <List>

                    <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Comfortaa'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                            +91-7278656823
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Comfortaa'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            imhkp4u@gmail.com
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                       <ListItemContent style={{fontSize: '30px', fontFamily: 'Comfortaa'}}>
                            <i className="fa fa-skype" aria-hidden="true"/>
                            imhkp4u
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                       <ListItemContent style={{fontSize: '30px', fontFamily: 'Comfortaa'}}>
                            <i className="fa fa-fax" aria-hidden="true"/>
                            033-65465654
                        </ListItemContent>
                    </ListItem>

                    </List>
                    </div>

                </Cell>
            </Grid>
           </div>
        )
    }
}

export default Contact;