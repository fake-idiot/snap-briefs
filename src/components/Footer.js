import React, { Component } from 'react'
import SnapBriefsLogo from "../assets/images/SnapBriefsLogo.png"
import Facebook from "../assets/images/facebook.png"
import LinkedIn from "../assets/images/linkedin.png"
import Instagram from "../assets/images/instagram.png"
import Pintrest from "../assets/images/pintrest.png"

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className="d-flex flex-wrap justify-content-around align-items-center mt-4 border-top" >
            <div className="col-md-4 d-flex align-items-center" >
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img src={SnapBriefsLogo} alt="" style={{height: "60px", width: "100px"}} />
                </a>
                <span className="text-muted">© All rights reserved to SnapBriefs, Inc. 2023</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-muted" href="/">
                        <img src={Facebook} alt="" style={{height: "24px", width: "24px"}} />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="/">
                        <img src={LinkedIn} alt="" style={{height: "24px", width: "24px"}} />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="/">
                        <img src={Instagram} alt="" style={{height: "24px", width: "24px"}} />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="/">
                        <img src={Pintrest} alt="" style={{height: "24px", width: "24px"}} />
                    </a>
                </li>
            </ul>
        </footer>
      </>
    )
  }
}

export default Footer