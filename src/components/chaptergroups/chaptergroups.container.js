import React from 'react'
import ChapterGroups from './chaptergroups'

import ChaptersContainer from '../chapters/chapters.container';

const api = require('thirukkural-js');
const { detailAPI } = api;

export default function ChapterGroupsContainer({section, handleClick}) {
    const chaptergroups =  detailAPI.getChapterGroups(section)
    return <ChapterGroups chaptergroups={chaptergroups} handleClick={handleClick} Chapters={ChaptersContainer}/>
}