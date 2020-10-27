import React from 'react';
import Sections from './sections'
import ChapterGroupsContainer from '../chaptergroups/chaptergroups.container';

const api = require('thirukkural-js');
const { detailAPI } = api;

export default function SectionsContainer({all, handleClick}) {
    const sections = detailAPI.getSections(all)
    return <Sections sections={sections} handleClick={handleClick} 
        ChapterGroups={ChapterGroupsContainer}/>
}
