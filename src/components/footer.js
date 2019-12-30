import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {/* <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li> */}
              <li><a href="https://github.com/jamesravenscroft"><i className="fa fa-github" /></a></li> 
              <li><a href="https://www.linkedin.com/in/james-ravenscroft-iii/"><i className="fa fa-linkedin" /></a></li>
              {/* <li><a href="#"><i className="fa fa-instagram" /></a></li>
              <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              <li><a href="#"><i className="fa fa-skype" /></a></li> */}
            </ul>
           
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}