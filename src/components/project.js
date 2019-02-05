import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
            this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
               <div className="projects-grid">
                   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >React Project #1</CardTitle>
                        <CardText>ver since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur</CardText>
                        <CardActions border>
                             <Button colored>GitHub</Button>
                             <Button colored>CodePen</Button>
                             <Button colored>LiveDemo</Button>
                        </CardActions>

                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
               </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >React Project #2</CardTitle>
                    <CardText>ver since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>

                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >React Project #3</CardTitle>
                        <CardText>ver since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur</CardText>
                        <CardActions border>
                             <Button colored>GitHub</Button>
                             <Button colored>CodePen</Button>
                             <Button colored>LiveDemo</Button>
                        </CardActions>

                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
               </Card>
               </div>
            )
        }
        else if(this.state.activeTab === 1) {
            return(
                <div>
                    <h1>This is Angular</h1>
                </div>
            )
        }else if(this.state.activeTab === 2) {
            return(
                <div>
                    <h1>This is VueJS</h1>
                </div>
            )
        }else if(this.state.activeTab === 3) {
            return(
                <div>
                    <h1>This is MongoDB</h1>
                </div>
            )
        }
    }
    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onchange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <Grid> 
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;