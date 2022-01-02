import React from 'react'
//SASS
import '../Style/title.scss'

const Title = ({name}) => {
    return (
        <div>
                <span className='title'>{name}</span>
        </div>
    )
}

export default Title;
