import React from "react";



function Map(){
    return(
        <div>
            <div className="mapTitle"><p>Map Location</p></div>
            <div className="mapArea">
                <div className="map">
                    <iframe className="embedMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1580137105466!2d76.59747281429091!3d11.323158751961202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8999c5c8321d1%3A0x95ce9506ede0c3b3!2sDestiny%20-%20The%20Farm%20Resort!5e0!3m2!1sen!2sin!4v1678533478111!5m2!1sen!2sin" allowFullScreen="" loading="" referrerPolicy="" title="HEllo WoRld!"></iframe>
                </div>
            </div>
        </div>
    );
}


export default Map;