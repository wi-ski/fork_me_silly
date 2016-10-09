jest.dontMock('../index.js');

describe('ColorPicker', function() {
  var React = require('react');
  var ReactDOM = require('react-dom');
  var TestUtils = require('react-addons-test-utils');
  var ColorPicker;

  beforeEach(function() {
    ColorPicker = require('../index.js');
  });

  it('should exist', function() {
    // Render into document
    var colorPicker = TestUtils.renderIntoDocument( <ColorPicker /> );
    expect(TestUtils.isCompositeComponent(colorPicker)).toBeTruthy();
  });
});