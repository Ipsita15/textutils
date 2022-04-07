import React from 'react'
// import React, { useState } from 'react'
// import { withRouter } from 'react-router-dom'

export default function Contact(props) {


    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: '#f0f0f0',

    // })

    let myStyle = {
        color: props.mode === 'dark'? 'white' :'#042747',
        backgroundColor: props.mode === 'dark'? 'rgb(74 70 120)' :'white',
        // border: '2px solid',
        // borderColor: props.mode === 'dark'? 'white' :'#042747'
    }

    // const [btn, setBtnDark] = useState({
    //     setBtndark = "white"
    // })


    // const [btntext, setBtnText] = useState("Enable Dark Mode")


    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setmyStyle({
    //             color: '#f0f0f0',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light  Mode")
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: '#f0f0f0'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }


    return (
        <div className="container">
            <h1 className="my-4" style={{ color: props.mode === 'dark'? 'white' :'#042747'}}>Contact Info</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        TextUtils give you a way to analyse your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>Free to use </strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus rem 
                            natus veniam nesciunt vel repudiandae inventore, quam error incidunt? Lorem ipsum dolor sit
                             amet consectetur adipisicing elit. Sit, quam.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong> Browser Compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ab 
                           rerum maxime sint repudiandae ipsum earum libero quas. Voluptas, officiis!
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-secondary">{btntext}</button>
            </div> */}
        </div>
    )
}

