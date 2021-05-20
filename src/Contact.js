import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';
import "./index.css";
class Contact extends React.Component{
    constructor(){
        super();
        this.state= {subject: "", body: ""};
    }
    validateForm = event => {
        var subject = document.getElementById("subject").value;
        var body = document.getElementById("body").value;
        window.location.href = 
        "mailto:gayathrip.it@gmail.com?subject="+subject+"&body="+body;
        event.preventDefault();
        return false;
    };
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
                      <h1 style={{textAlign:"center"}}> Mail Form</h1>
                            <div class="container" id="mailme">
                                <div class="row" >
                                    <div class="col sm-8 offset-md-2">

                                      <form class="justify-content-center" onSubmit={this.validateForm} target="_blank" method="GET"> 
                                      <div class="form-group form-group-lg">
                                      <lable class="skills" for="subject">
                                          Name
                                      </lable>
                                  <input 
                                      type="text"
                                      id="subject"
                                      class="form-control" 
                                      required
                                      />
                                    </div>
                                    
                                    <div class="form-group form-group-lg">
                                          <lable class="skills" for="Body">
                                              Your Message
                                          </lable>
                                          <textarea id="body" class="form-control" rows="5" required />
                                      </div>
                                      <input 
                                      type="submit"
                                      value="Send"
                                      id="navigation"
                                      class="btn btn-primary"
                                      />
                                  </form>
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
                     <br />
                     </div>
                     
                     </body>
                     );
}
}
export default Contact;
