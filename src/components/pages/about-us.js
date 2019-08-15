import React from "react";
import { Link } from "react-router-dom";
import AboutUsPictureOne from "../../../static/assets/pictures/about-us-one.jpg"
import AboutUsPictureTwo from "../../../static/assets/pictures/about-us-two.jpg"
import AboutUsPictureThree from "../../../static/assets/pictures/about-us-three.jpg"

export default function() {
    return (
        <div className="about-us-wrapper">

            <div className="heading-wrapper">
                    <h1>About Us</h1>
            </div>

            <div className="page-container">
                <div className="content-wrapper">

                    <img src= {AboutUsPictureOne} />

                    <p>
                    Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit. Nam sit amet iaculis risus. Suspendisse lacinia nibh 
                     nec nunc porta ornare. Maecenas mi ligula, semper ac nisl eget, 
                     interdum laoreet est. Cras bibendum, ex eu sollicitudin mattis, purus 
                     augue mattis nibh, eget placerat elit nunc at arcu. Integer vel porta 
                     dui, et feugiat erat. Nam scelerisque sapien lectus, ac vehicula lacus 
                     faucibus in. Donec posuere, turpis ut ornare aliquam, nulla odio aliquet 
                     arcu, nec venenatis odio diam in velit. Fusce porttitor erat dui, ut 
                     sollicitudin lorem accumsan vitae. Nulla facilisi.
                    </p>
                </div>
            </div>

            <div className="spacer60"></div>

            <div className="squares-wrapper">
                <div className="squares">
                    <div className="square">
                        <div className="img-wrapper">
                            <img src= {AboutUsPictureTwo} />
                        </div>

                        <div className="square-text-wrapper">
                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Dolorem laboriosam accusantium velit asperiores enim illo.
                            </p>
                        </div>
                    </div>

                <div className="square">
                    <div className="square-text-wrapper">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem laboriosam accusantium velit asperiores enim illo. Aliquam nostrum, libero eum sint animi consectetur blanditiis alias maxime repudiandae voluptatum illum deleniti necessitatibus. Dolorem hic repellat odio atque accusantium commodi, dolores nobis voluptates provident possimus quisquam, obcaecati esse voluptatibus earum qui modi assumenda!</p> 
                    </div>

                    <div className="img-wrapper">
                        <img src= {AboutUsPictureThree} />
                    </div>
                </div>
            </div>
            </div>
            
        </div>
        );

    
}