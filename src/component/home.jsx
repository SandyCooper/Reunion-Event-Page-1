import React, {useState} from "react";
import styled,{keyframes} from 'styled-components';

function Home(){

    const [hover, setHover] = useState(null);
    // const [hover2, setHover2] = useState(null);

    function handleMouseOver(event){
        setHover(true);
    }
    // function handleMouseOver2(event){
    //     setHover2(true);
    // }

    const blkMove = keyframes`
        from {left: 0px}
        to {left: 615px}
    `;

    const blkMove2 = keyframes`
        from {left: 665px}
        to {left: 50px}
    `;

    const Div = styled.div`
        animation-name: ${blkMove};
        animation-duration: 4s;
        animation-fill-mode: forwards;
    `;

    const Divi = styled.div`
        animation-name: ${blkMove2};
        animation-duration: 3s;
        animation-fill-mode: forwards;
    `;

    const Divii = styled.div`
        animation-name: ${blkMove};
        animation-duration: 6s;
        animation-fill-mode: forwards;
    `;

    let countDown = new Date("April 15, 2023 00:00:00").getTime();

    let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDown - now;

    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance %  (1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((distance %  (1000*60*60))/(1000*60));
    let seconds = Math.floor((distance %  (1000*60))/(1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("day").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("second").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("day").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("minute").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        document.getElementById("second").innerHTML = "00";

    }
    
},1000);


    return(
        <div onMouseOver={handleMouseOver} className="homeBody">
            <div id="tree" className="block1">
                {hover ? <Div className="imageBlk1"></Div> : <div className="imageBlk1"></div>}
                <div className="blk1Quotes1"><div className="lines"><span className="span1">Hey Pepole!</span><p className="p1">Welcome to the Batch of 2009 Reunion Page.</p><p className="p2">What We Doing In 2023?</p><p className="p3">After meetups in college, cafes, bars, weddings, sundowns etc...</p><p className="p4">Finally we are onboard to go to <span className="span2">Destiny FarmStay!</span></p></div></div>
                <div className="blk1Quotes2">❝ Every Partying is a form of Death, as every Reunion is a type of Heaven ❞</div>
            </div>
            <div id="stem" className="block1">
                {hover ? <Divi className="imageBlk2"></Divi> : <div className="imageBlk2"></div>}
                <div className="countDownDiv blk1Quotes1-1">
                    <div>
                        <p id="days">00</p>
                        <span>Days</span>
                    </div>
                    <div>
                        <p id="hours">00</p>
                        <span>Hours</span>
                    </div>
                    <div>
                        <p id="minutes">00</p>
                        <span>Minutes</span>
                    </div>
                    <div>
                        <p id="seconds">00</p>
                        <span>Seconds</span>
                    </div>
                </div>
                <div className="countDownDiv blk1Quotes2">
                    <div>
                        <p id="day">00</p>
                        <span>Days</span>
                    </div>
                    <div>
                        <p id="hour">00</p>
                        <span>Hours</span>
                    </div>
                    <div>
                        <p id="minute">00</p>
                        <span>Minutes</span>
                    </div>
                    <div>
                        <p id="second">00</p>
                        <span>Seconds</span>
                    </div>
                </div>
            </div>
            <div className="block1">
                {hover ? <Divii className="imageBlk3"></Divii> : <div className="imageBlk3"></div>}
                <div className="blk1Quotes1-1">❝ Act of gathering as a Family strengthens the Connection made long ago ❞</div>
            </div>
        </div>
    );
}


export default Home;