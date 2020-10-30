import React from 'react';
import renderer from 'react-test-renderer';
import ChapterGroups from '../chaptergroups';

test('should render component', () => {
    const component = renderer.create(
        <ChapterGroups chaptergroups={[]}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})