import React, { useState, useTransition, useEffect } from "react";

//imported stuffs
import './Menu.css';
import menuLogo from "./pic/menu_logo.png";
import burger from "./pic/burger.png";
import { init } from "@emailjs/browser";

const Menu = (props) => {

    //mobile menu states





    return (
        <>
        <div className="menu">

            <div className="left">
                <img onClick={props.homeClick} className="menu_logo" src={menuLogo} alt="" />
            </div>

            <div className="right">
                <div className="btn">
                    <button 
                    className="btnFont"
                    onClick={props.releasesClick}
                    style={{
                        scale: props.relfontsize,
                    }}>
                        releases
                    </button>
                </div>

                <div className="btn">
                    <button 
                    className="btnFont"                    
                    onClick={props.submitClick} 
                    style={{
                        scale: props.subfontsize,                        
                    }}>
                        submit music
                    </button>
                </div>

                <div className="btn">
                    <button 
                    className="btnFont"                    
                    onClick={props.contactClick}
                    style={{
                        scale: props.contfontsize,
                    }}>
                        contact</button>
                </div>
            </div>

            <div onClick={props.wraper} className="burgerBtn">
                    <img className="burger" src={burger} />
            </div>
        </div>
        <div className="mobileMenu" style={{visibility: props.visibility}}>
            <div className="mobileButtons">
                <button onClick={props.releasesClick} className="mobileButton">releases</button>
                <button onClick={props.submitClick} className="mobileButton">submit music</button>
                <button onClick={props.contactClick} className="mobileButton">contact</button>
            </div>

        </div>
        </>
    )
};



export default Menu;