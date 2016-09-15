jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Detail = require('../src/pages/Detail').default;

describe('Detail', () => {
    it('starts with zero commits', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{repo: ''}} />
        );

        expect(rendered.state.commits.length).toEqual(0);
    });
    it('shows commits by default', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{repo: ''}} />
        );

        expect(rendered.state.catState).toEqual('commits');
    });
    it('shows forks when the button is tapped', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{repo: ''}} />
        );

        const forksButton = rendered.refs.forks;
        TestUtils.Simulate.click(forksButton);
        expect(rendered.state.catState).toEqual('forks');
    });
    it('fetches forks from GitHub', (done) => {

        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{repo: 'react'}} />
        );

        setTimeout(function(){
          expect(rendered.state.forks.length).toEqual(30);
          done(); // call this to finish off the it block
        }, 2000);
    });

    it('fetches forks from a local source', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{repo: ''}} />
        );

        const testData = require('./forks-data-mock.json');
        rendered.saveFeed('forks', testData);

        const forks = TestUtils.scryRenderedDOMComponentsWithClass(rendered, 'author-class');
        expect(forks.length).toEqual(30);


        expect(rendered.state.forks.length).toEqual(30);
    });
});