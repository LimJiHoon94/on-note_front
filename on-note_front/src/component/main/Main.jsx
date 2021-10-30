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
            
            <section className="firstSection">
                <div className="firstComment">
                    <h1>Cocktail</h1>
                    <p>
                        칵테일 레시피를 손쉽게 확인하세요!
                    </p>
                </div> 
                <div className="fitstContent">
                    <div class="firstContentRow">
                        <div className="firstContentItem">
                            <img src="img/campari.jpg"  />
                            <h6>
                                캄파리
                            </h6>
                            <p className="firstContentItemTag">
                                #리큐르 #달달 
                            </p>
                        </div>
                        <div className="firstContentItem">
                            <img src="img/gintonic.jpg"  />
                            <h6>
                                진토닉
                            </h6>
                            <p className="firstContentItemTag">
                                #진 #라임 #청량 
                            </p>
                        </div>
                        <div className="firstContentItem">
                            <img src="img/bodca.jpg"  />
                            <h6>
                                스크류 드라이버
                            </h6>
                            <p className="firstContentItemTag">
                                #보드카 #오렌지
                            </p>
                        </div>
                    </div>
                </div>
                <div className="fitstContent">
                    <div class="firstContentRow">
                        <div className="firstContentItem">
                            <img src="img/sunrise.jpg"  />
                            <h6>
                                데킬라 선라이즈
                            </h6>
                            <p className="firstContentItemTag">
                                #데킬라 #오렌지 #그레나딘 
                            </p>
                        </div>
                        <div className="firstContentItem">
                            <img src="img/manheton.jpg"  />
                            <h6>
                                맨하탄
                            </h6>
                            <p className="firstContentItemTag">
                                #버번 #베르뭇 
                            </p>
                        </div>
                        <div className="firstContentItem">
                            <img src="img/godfather.jpg"  />
                            <h6>
                                갓파더
                            </h6>
                            <p className="firstContentItemTag">
                                #아마레또 #위스키 #대부 
                            </p>
                        </div>
                    </div>
                </div>
                
            </section>
        </div> 
    )
}  

export default Main;