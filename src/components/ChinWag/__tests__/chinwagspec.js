cd 
cd Proimport ChinWag from '../index'
'use strict';
jest.mock('react-dom');
jest.mock('react/lib/ReactDefaultInjection');
describe('ColorPicker', function() {

    beforeEach(() => {
        jest.resetModules()
        global.Renderer= require('react-test-renderer');
        global.React= require('react');
        global.TestUtils= require('react-addons-test-utils');
    });

    test('Link renders correctly', () => {
      const tree = Renderer.create(
        <ChinWag onKeyUp={function(){}} messages={[]} styles={{}} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
});