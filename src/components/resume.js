import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://www.crystalgraphicsimages.com/template/gfaczegc_largest.jpg" alt="avatar" style={{paddingTop: '8em', height: '250px'}}/>
                        </div>

                        <h2 style={{paddingTop: '1em'}}>Hemant Prasad</h2>
                        <h4 style={{color: 'grey'}}>Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Currently, I'm a freelance web developer looking for full time opportunities. I'm having expertise in PHP, Javascript, HTMl/CSS, React, Express etc.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>66/6 Atindra Mukherjee Lane, Shibpur, Howrah-711102</p>
                        <h5>Phone</h5>
                        <p>+91-7278656823</p>
                        <h5>Email</h5>
                        <p>imhkp4u@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                            startYear={2008}
                            endYear={2013}
                            schoolName=<a href="http://www.contaipublicschool.com/free-proof-reading/" rel="noopener noreferrer" target="_blank">
                            <i class="fa" aria-hidden="true">Contai Public School</i>
                            </a>
                            schoolDescription="Contai Public School is a high achieving academy that prides itself upon its academic standards and personal development. Its ethos is one of care and support, challenging every student to achieve their full potential in everything they do."
                        /> 
                        <Education 
                            startYear={2013}
                            endYear={2015}
                            schoolName=<a href="http://sjvidyalaya.net/" rel="noopener noreferrer" target="_blank">
                            <i class="fa" aria-hidden="true">Shree Jain Vidyalaya</i>
                            </a>
                            schoolDescription="Shree Jain Vidyalaya, Howrah, established by the Shree S. S. Jain Sabha, is one of the best schools in Howrah, which has endeavoured and fulfilled the noble mission of rendering education to the common masses at the most reasonable rates."
                        />
                        <Education 
                            startYear={2015}
                            endYear={2019}
                            schoolName=<a href="http://www.mckvie.edu.in/" rel="noopener noreferrer" target="_blank">
                            <i class="fa" aria-hidden="true">MCKV Institute of Engineering</i>
                            </a>
                            schoolDescription="MCKV Institute of Engineering is an engineering college founded in 1999, affiliated to West Bengal University of Technology. It ranks as one of the top engineering colleges in West Bengal and graded AA+ by Careers 360 in 2015."
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            jobName=<a href="https://www.upwork.com/o/profiles/users/_~01832288c2d25d4e0f/" rel="noopener noreferrer" target="_blank">
                            <i class="fa" aria-hidden="true">Upwork</i>
                            </a>
                            jobDescription="I'm working at Upwork as a freelance web developer. Apart from that I have 4.5+ years of experience in Content Development. I've a worked with a plethora of foreign companies."
                        />
                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            jobName=<a href="https://hadeplatform.com/profile.php?e=3437343830363736343731383339373662326330623533656463356437393536326335346465613661306261333561623864386137373765383335363439613132636362623131323530373335636235a210a3d0d599f1feaa47a639be7374c675ed6a0b495ab9dc10bca4c512e08733&r=b7Hwdfg7djqUfPMdqCIJzGaYTSZvUgr6" rel="noopener noreferrer" target="_blank">
                            <i class="fa" aria-hidden="true">Hade Platform</i>
                            </a>
                            jobDescription="I've worked with this company based out in Orange Avenue
                            Orlando, Florida as a Cyrptocurrency writer."
                        />
                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            jobName=<a href="https://brainly.co/about.html" rel="noopener noreferrer" target="_blank">
                            <i class="fa" aria-hidden="true">Brainly</i>
                            </a>
                            jobDescription="I'm currently working as a Freelance Content Developer for Brainly - the world's largest community of students and learners."
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>

                        <Skills 
                            skill="HTML/CSS"
                            progress={100}
                        />
                        <Skills
                            skill="Javascript"
                            progress={70}
                        />
                        <Skills
                            skill="ReactJs"
                            progress={60}
                        />
                        <Skills
                            skill="NodeJs"
                            progress={60}
                        />
                        <Skills
                            skill="PHP"
                            progress={50}
                        />
                        <Skills
                            skill="Laravel"
                            progress={40}
                        />
                        <Skills
                            skill="MongoDB"
                            progress={40}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Resume;