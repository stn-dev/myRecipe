import React, { useState } from 'react'

function Texte({ content, as }) {
    const Tag = as;
    return (
        <Tag> {content} </Tag>
    )
}
export default Texte;