import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://www.techieapps.com/wp-content/uploads/2018/12/hire-full-stack-developers.gif"
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>
                            <p>HTML/CSS | Bootstrap | Javascript | ReactJs | NodeJs | Express | MongoDB</p>
                            <div className="social-links">
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                </a>

                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>

                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-github" aria-hidden="true"></i>
                                </a>

                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-codepen" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;

