import React from 'react'
import Chapters from './chapters'

const api = require('thirukkural-js');

const { detailAPI } = api;

export default function ChaptersContainer({chaptergroup, handleClick}) {
    const chapters = detailAPI.getChapters(chaptergroup);
    return <Chapters chapters={chapters} handleClick={handleClick}/>
}