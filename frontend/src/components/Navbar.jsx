import react from "react"
import '../styles/navbar.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Gallery from "./Galerie"

function Navbar(){
    return <nav>
                <div className="menu-container">
                    <div className="menu-top"> MENU</div>
                    <div className="menu-bottom">
                        <Link to="/">
                            <div className="menu-item">Hlavní stránka</div>
                        </Link>
                        <Link to="/tipy_na_vylety">
                            <div className="menu-item">Tipy na výlety</div>
                        </Link>
                        <Link to="/vzkazy_v_lahvi">
                            <div className="menu-item">Vzkazy v láhvi</div>
                        </Link> 
                            
                        <Link to="/galerie">
                            <div className="menu-item">Galerie</div>
                        </Link>
                        <Link to="/about">
                            <div className="menu-item">O mě</div>
                        </Link>
                        
                    </div>
                </div>
                <div className="menu-container"> 
                    <div className="menu-top"> CHCETE NÁM POMOCI?</div>
                    <div className="menu-bottom">
                        <div className="table-item">Chcete nám pomoci s asistencí nebo rehabilitací pro Jakuba?</div>
                        <div className="table-item">U Konta Bariery máme transparentní účet <br/>777 777 222 / 0800 <br/>VARIABILNÍ SYMBOL 9901125839 přesměruje platbu na účet Jakuba.</div>
                        <img className="qr-code-kb" src="./icons/QR_code_kontoB.png"/>
                        <div className="table-item">Děkujeme! ❤️</div>
                    </div>
                </div>
                <div className="menu-container">
                    <div className="menu-top"> MÉDIA</div>
                    <div className="menu-bottom-media">

                    <a href="https://www.youtube.com/watch?v=qlqvp2tuQws" target="_blank"> 
                        <div className="menu-item">Emma a Kuba – Dokument Olgy Špátové</div>
                    </a>

                    <a href="https://www.mujrozhlas.cz/nocni-mikroforum/host-emma-robinson-maminka-pecovatelka-lektorka-jogy" target="_blank">
                        <div className="menu-item">Český rozhlas - pořad noční Mikrofórum - rozhovor s Barborou Chuecos</div>
                    </a>

                    <a href="https://www.needo.cz/needo-talks/nejsme-hrdinove/" target="_blank">
                        <div className="menu-item">NEEDO TALKS - Rozhovor s Evou Němčkovou</div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=Jq7jDn2e9q4" target="_blank">
                        <div className="menu-item">Co znamená být neformální pečující</div>
                    </a>

                    <a href="https://youtu.be/4_7rg9cZRhE?feature=shared" target="_blank">
                        <div className="menu-item">Emma Robinson pro SPIRALIS</div>
                    </a>

                    <a href="https://www.ceskatelevize.cz/porady/1097429889-cerne-ovce/214452801081013/cast/356554/?fbclid=IwAR2xfHsn_Ax-luGyz_2F0y_iDNwMxY4taQNzFmc-EOE-SMVCsJEIHKaDguU" target="_blank">
                        <div className="menu-item">Česká televize - Černé ovce</div>
                    </a>
                                
                    </div>
                </div>

                <div className="menu-container">
                    <div className="menu-top"> SLEDUJTE NÁS</div>
                    <div className="menu-bottom-follow">
                    <div>
                        <a href="https://www.youtube.com/@emmarobinson8573" target="_blank">
                        <div className="menu-icon-container"><img className="menu-icon" src="./icons/youtube.jpg"/></div>
                        </a>
                    </div>
                    
                    
                    <div>
                        <a href="https://www.facebook.com/emma.robinson.3954546" target="_blank">
                        <div className="menu-icon-container"><img className="menu-icon" src="./icons/fb-icon.png"/></div>
                        </a>
                    </div>

                    <div>
                        <a href="https://bandzone.cz/_113981" target="_blank">
                        <div className="menu-icon-container"><img className="menu-icon" src="./icons/bandzone.jpg"/></div>
                        </a>
                    </div>

                    <div>
                        <a href="https://cz.linkedin.com/in/emma-robinson-5852b720a" target="_blank">
                        <div className="menu-icon-container"><img className="menu-icon" src="./icons/linkedin.png"/></div>
                        </a>
                    </div>
                    </div>
                </div>
            </nav>

}
export default Navbar