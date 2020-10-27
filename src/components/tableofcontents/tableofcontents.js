import React from 'react';
import SectionsContainer from '../sections/sections.container';

const api = require('thirukkural-js');

const { detailAPI } = api;

export default function TableOfContents({handleClick}) {
    return (
        <SectionsContainer all={detailAPI.getAll()} handleClick={handleClick}/>
    )
}