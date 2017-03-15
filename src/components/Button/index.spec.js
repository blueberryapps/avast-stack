import { render, shallow } from 'enzyme';
import * as React from 'react';
import Button from './index';

// Snapshot tests
// Looping over test cases is effective and DRY, just respect KISS principle!
// https://en.wikipedia.org/wiki/KISS_principle
describe('<Button /> snapshots', () => {
  const kinds = ['primary', 'secondary'];

  kinds.forEach(kind => (
    it(`should render buttons of kind: ${kind}`, () => {
      expect(render(<Button kind={kind} />)).toMatchSnapshot();
    })
  ));

  const testCases = [
    { kind: 'primary', disabled: true },
    { kind: 'primary', disabled: false },
    { kind: 'secondary', disabled: false },
    { kind: 'secondary', disabled: true }
  ];

  testCases.forEach((props) => {
    it(`should render button with props: ${JSON.stringify(props)}`, () => {
      const wrapper = render(<Button {...props} />);

      // DISCUSS if needed - protects from breaking main functionality?
      expect(wrapper.find('button').length).toBe(1);

      // change breaking functionality can be easily overlooked?
      expect(wrapper).toMatchSnapshot();
    });
  });
});

// Behavior testing
describe('<Button /> behavior', () => {
  it('should register onClick handler', () => {
    const onClickHandler = jest.fn();
    const button = shallow(<Button kind="primary" onClick={onClickHandler} />);

    button.simulate('click');
    expect(onClickHandler.mock.calls.length).toEqual(1);
  });
});
