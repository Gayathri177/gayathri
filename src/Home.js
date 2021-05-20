import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';


class Home extends React.Component{
    constructor(){
        super();
    }
    render() {
        return(
            <body>
                <div class="heading">
                    <div class="jumbotron text-center" id="heading">
                       <h1 class="myname"><b>GAYATHRI.P</b></h1>
                       <p class="myoccupation">Linux Server Administrator 
                       <br/>
                       Budding React JS Developer
                       </p>
                       <ul class="nav nav-pills nav-justified" id="navigation">
                           <li class="nav-item">
                               <a class="nav-link active" href="/">
                                   Home
                               </a>
                               </li>
                               <li class="nav-item">
                               <a class="nav-link active" href="/contact">
                                   Contact
                               </a>
                           </li>
                       </ul>
                    </div>

                     <div class="container">
                      <div class="row">     
                       <div class="col-sm-4">
                           <div class="rounded-circle">
                               <img
                                 src="https://icons.iconarchive.com/icons/icons-land/vista-people/256/Office-Client-Female-Light-icon.png"
                                 class="rounded-circle"
                                 alt="my photo"
                                 width="260px"
                                 height="200px"
                                 />
                                 
                           </div>
                           <br/>
                      </div>
                      <div class="col-sm-8">
                          <h2 class="myskills">Career Objective</h2>
                          <br />
                          <p class="skills">
                          To obtain a challenging andresponsible occupation where I can contribute myself for the successful growth ofthe organization using my abilities and knowledge.
                          </p>
                      </div>
                     </div> 
                     <br/>
                     <div class="container">
                         <div class="row">
                             <div class="col-sm-4">
                                 <h2 class="myskills">Technical Skills</h2>
                                 <br/>
                                 <ul class="skills">
                                     <li>
                                         Front End Languages : HTML,CSS,React JS
                                     </li>
                                     <li>
                                         Programming Languages : C,C++
                                     </li>
                                     <li>
                                         Operating System : CentOS
                                     </li>
                                 </ul>
                                 <br/>
                                 <h2 class="myskills">Area of Expertise</h2>
                                 <br/>
                                 <ul class="Working Skills">
                                     <li>
                                         Linux Server Configuration
                                     </li>
                                     <li>
                                         Server Side Troubleshooting
                                     </li>
                                     <li>
                                         Server Monitoring and Maintenance
                                     </li>
                                     <li>
                                         Domain Hosting and DNS Pointing
                                     </li>
                                 </ul>
                             </div>
                             <div class="col-sm-8">
                                 <h2 class="myskills">Certifications and Track Records</h2>
                                 <br/>
                                 
                                 <li>
                                    Completed "The React Complete Guide" in Udemy.
                                 </li>
                                 <li>
                                    Completed " Intro to Computer Science Course" in Udacity.
                                 </li>
                                 <li>
                                    Certified as a Microsoft Certified Solution Developer(MCSD).
                                 </li>
                                 <li>
                                    Presented a paper “4G Haptic Technology” at National Technical Fest(CIT) and secured 3rd place.  
                                 </li>
                                 <li>
                                    Exhibited a paper on “4G Future Warrior” at National Technical Fest(KCT) and secured 2ed place.
                                    
                                 </li>
                                 <li>
                                 	Acquired Second prize in district level 12thMathematics exam conducted by BNEC.
                                 </li>
                                 <li>
                                    Succeeded school first in both Biology and Tamil 12th public examination.
                                 </li>
                                 
                             </div>
                             <br/>
                             <div class="col-sm-12">
                                 <h2 class="myskills">My Projects</h2>
                                 <br/>
                                 <table class="table table-dark table-striped">
                                     <thead>
                                         <tr>
                                             <th>Project Domain</th>
                                             <th>Programming Languages</th>
                                             <th>Project Description</th>
                                         </tr>
                                     </thead>
                                     <tbody>
                                           <tr>
                                               <td>Full Stack Web Development</td>
                                               <td>HTML,CSS,JavaScript,Bootstrap,React JS</td>
                                               <td>
                                                   <a href={"https://github.com/"}> 
                                                   React Js TODO List Application
                                                   </a>
                                               </td>
                                           </tr>
                                           <tr>
                                               <td>Human Resource Business Automation</td>
                                               <td>SQL Server 2008, Visual Studio 2012,DevExpress.</td>
                                               <td>It is fully based on administrator work. The database contains all details about the Employee in that company . It stores all current changes about the Employees and Provides Great User Interface. It will generate reports of the employees.</td>
                                           </tr>
                                     </tbody>
                                 </table>
                             </div>
                             <br/>
                             <div class="col-sm-12">
                                 <h2 class="myskills">My Education Qualification</h2>
                                 <br/>
                                 <table class="table table-dark table-striped">
                                     <thead>
                                         <tr>
                                             <th>GRADUATION</th>
                                             <th>INSTITUTION</th>
                                             <th>YEAR OF PASSING</th>
                                             <th>PERCENTAGE / CGPA</th>
                                         </tr>
                                     </thead>
                                     <tbody>
                                           <tr>
                                               <td>MBA</td>
                                               <td>Alagappa University. (DDE)</td>
                                               <td>December 2022</td>
                                               <td>not yet</td>
                                           </tr>
                                           <tr>
                                               <td>B.TECH(IT)</td>
                                               <td>KGISL Institute of Technology, Coimbatore. (Anna University, Chennai) </td>
                                               <td>April 2014</td>
                                               <td>8.45/10.00</td>
                                           </tr>
                                           <tr>
                                               <td>HSC</td>
                                               <td>Presentation Convent Girls Higher Secondary School,Theni. ( State Board)</td>
                                               <td>April 2010</td>
                                               <td>87.91%</td>
                                           </tr>
                                           <tr>
                                               <td>SSLC</td>
                                               <td>Presentation Convent Girls Higher Secondary School,Theni. ( State Board)</td>
                                               <td>April 2008</td>
                                               <td>94%</td>
                                           </tr>
                                     </tbody>
                                 </table>
                             </div>
                         </div>

                     </div>
                     <br/>
                     <br/>
                     <div class="jumbotrontext-center"id="footer" >
                         <ul class="nav justify-content-center">
                             <li class="nav-item">
                                 <a href="https://www.linkedin.com/"
                                 class="fa fa-linkedin nav-link"
                                 style={{color:"blue"}}
                                 />
                             </li>
                             <li class="nav-item">
                                 <a href="https://www.youtube.com/"
                                 class="fa fa-youtube nav-link"
                                 style={{color:"blue"}}
                                 />
                             </li>
                             <li class="nav-item">
                                 <a href="https://www.github.com/"
                                 class="fa fa-github nav-link"
                                 style={{color:"blue"}}
                                 />
                             </li>
                             <li class="nav-item">
                                 <a href="https://www.instagram.com/"
                                 class="fa fa-instagram nav-link"
                                 style={{color:"blue"}}
                                 />
                             </li>
                             <li class="nav-item">
                                 <a href="https://www.facebook.com/"
                                 class="fa fa-facebook nav-link"
                                 style={{color:"blue"}}
                                 />
                             </li>
                             <li class="nav-item">
                                 <a href="https://www.twitter.com/"
                                 class="fa fa-twitter nav-link"
                                 style={{color:"blue"}}
                                 />
                             </li>
                         </ul>
                        

                     </div>
                     <br/>
                     <br/>
                    </div>
                </div>
            </body>
        )
    };
}
export default Home;