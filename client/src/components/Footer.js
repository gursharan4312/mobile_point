import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer className="container-fluid">
      <div className="row p-4">
        <div className="col-4 text-center">
          <h3>Mobile Point</h3>
          <small>copyright &copy; All rights reserved</small>
        </div>
        <div className="col-4 text-center">
          <h5>Contact</h5>
          <ul>
            <li>
              <a href="mailto:contact@mobilepoint.ca">contact@mobilepoint.ca</a>
            </li>
            <li>+1(604)333-3333</li>
          </ul>
        </div>
        <div className="col-4 text-center">
          <h5>Links</h5>
          <ul>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  .row {
    background: #3ac2f0;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: #212529;
  }
`;
