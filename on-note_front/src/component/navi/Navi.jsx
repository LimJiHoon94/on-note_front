import React from "react"
import { Container , Row , Col } from "react-bootstrap";
import './Navi_style.scss';


function Navi(){


    return(
        <div className="navBar">
           <header>
                <nav>
                    <div className="logo">
                    <a href="#none">
                    
                    </a>
                    </div>
                    <ul className="gnb">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">RECIPE</a></li>
                        <li><a href="#ranking">SEARCH</a></li>
                    </ul>
                </nav>
            </header>
        </div> 
    )
}

export default Navi;