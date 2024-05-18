import React from 'react'
import { Card } from 'antd';
import "./course.css";
import card1 from "D:/Shrey Project/Front/src/components/image/Hip Hop .mp4";
import card2 from "D:/Shrey Project/Front/src/components/image/Contemporary Dance.mp4";
import card3 from "D:/Shrey Project/Front/src/components/image/breakdance.mp4";
import card4 from "D:/Shrey Project/Front/src/components/image/folk dance.mp4";
import card5 from "D:/Shrey Project/Front/src/components/image/Kumar_Sharma .mp4";
import card6 from "D:/Shrey Project/Front/src/components/image/ballerina.mp4";

const { Meta } = Card;

export default function Course() {
  return (
    <div>

{/* -------------------card 1----------------------- */}

<div className="card1">
      <Card 
    hoverable
    style={{
      width: 240,
    }}
    cover={ <video src={card1} className='-course-image-size' controls alt="Video"></video> }
  >
    <Meta title="Hip-Hop Dance"/>
    <p> </p>
  </Card>
  </div>

  {/* -------------------card 2----------------------- */}

<div className="card2">
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={ <video src={card2} className='-course-image-size' controls alt="Video"></video> }
  >
    <Meta title="Contemporary Dance" description="" />
  </Card>   
  </div>

  {/* -------------------card 3----------------------- */}

<div className="card3">
  <Card
    hoverable
    style={{
      width: 240,
    }}
     cover={ <video src={card3} className='-course-image-size' controls alt="Video"></video> }
  >
    <Meta title="Break-Dancing" description="." />
  </Card>
  </div>

  {/* -------------------card 4----------------------- */}

<div className="card4">
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={ <video src={card4} className='-course-image-size' controls alt="Video"></video> }
  >
    <Meta title="Folk Dance" description="" />
  </Card>
  </div>

  {/* -------------------card 5----------------------- */}

<div className="card5">
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={ <video src={card5} className='-course-image-size' controls alt="Video"></video> }
  >
    <Meta title="Classical Dance" description="" />
  </Card>
  </div>

  {/* -------------------card 6----------------------- */}

<div className="card6">
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={ <video src={card6} className='-course-image-size' controls alt="Video"></video> }
  >
    <Meta title="Ballet Dance"  description="" />
  </Card>
  </div>
    </div>
  )
}
