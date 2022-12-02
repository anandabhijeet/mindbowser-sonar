import React from 'react'
import { Stack } from 'react-bootstrap'

import "./card.css";

const MissionVissonCard = ({title, content, backgroundColor}) => {

  return (
    <div className='mvCard px-4 py-3 my-5' style={{backgroundColor:`${backgroundColor}`}}>
        <Stack>
        <h1 className='heading1'>{title}</h1>
        <p >{content}</p>
        </Stack>
    </div>
  )
}

export default MissionVissonCard;