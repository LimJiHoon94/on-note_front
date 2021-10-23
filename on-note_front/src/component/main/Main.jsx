import React from "react"
import { Container , Row , Col } from "react-bootstrap";
import './Main_style.scss';


function Main(){


    return(
        <div className="MainPage">
            <div className="intro">
                <div className="inner">    
                    <div className="heading">
                        <h1>COCKTAIL US</h1>
                        <p>
                            함께 즐기는 칵테일의 모든것 
                        </p>
                    </div>
                </div>
            </div> 
        </div> 
    )
}  

export default Main;