import React from 'react'

function Triangle({vertices, color}) {
    const pathData = [
        'M', vertices[0][0], vertices[0][1],
        'L', vertices[1][0], vertices[1][1],
        'L', vertices[2][0], vertices[2][1],
        'Z',
    ].join(' ')

    return(
        <path d={ pathData } fill={ color } />
    )
}

const vertices = [
    [0,60],
    [30,0],
    [60,60]
]

render()