/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import BpkInput from 'bpk-component-input';
import BpkSelect from 'bpk-component-select';

import BpkPhoneInput from './BpkPhoneInput';

const dialingCodeProps = {
  id: 'dialing-code',
  name: 'Dialing code',
  label: 'Dialing code',
  className: 'dialing-code',
  wrapperClassName: 'dialing-wrapper',
};

const dialingCodes = [
  { code: '44', description: '+44', numberPrefix: '+44' },
  { code: '55', description: '+55', numberPrefix: '+55' },
];

const defaultProps = {
  id: 'phone-input-id',
  name: 'Telephone input',
  label: 'Telephone number',
  value: '1234',
  dialingCode: '44',
  className: 'fancy-input',
  onChange: () => {},
  onDialingCodeChange: () => {},
  dialingCodes,
  dialingCodeProps,
};

describe('BpkPhoneInput', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<BpkPhoneInput {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with a "large" attribute', () => {
    const { asFragment } = render(<BpkPhoneInput {...defaultProps} large />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with the "dialingCodeMask" attribute', () => {
    const { asFragment } = render(
      <BpkPhoneInput {...defaultProps} dialingCodeMask />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with a "disabled" attribute', () => {
    const { asFragment } = render(<BpkPhoneInput {...defaultProps} disabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with a "valid" attribute', () => {
    const { asFragment } = render(<BpkPhoneInput {...defaultProps} valid />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with a "wrapperProps" attribute', () => {
    const { asFragment } = render(
      <BpkPhoneInput
        {...defaultProps}
        wrapperProps={{ className: 'container', 'aria-label': 'container' }}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with a dialing code image attribute', () => {
    const { asFragment } = render(
      <BpkPhoneInput
        {...defaultProps}
        dialingCodeProps={{ image: <span />, ...dialingCodeProps }}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call "onChange" when phone number changes', () => {
    const onChange = jest.fn();
    const tree = shallow(
      <BpkPhoneInput {...defaultProps} onChange={onChange} />,
    );
    const evt = { target: { value: '99' } };
    tree.find(BpkInput).simulate('change', evt);
    expect(onChange).toHaveBeenCalledWith(evt);
  });

  it('should call "onDialingCodeChange" when dialing code changes', () => {
    const onDialingCodeChange = jest.fn();
    const tree = shallow(
      <BpkPhoneInput
        {...defaultProps}
        onDialingCodeChange={onDialingCodeChange}
      />,
    );
    const evt = { target: { value: '99' } };
    tree.find(BpkSelect).simulate('change', evt);
    expect(onDialingCodeChange).toHaveBeenCalledWith(evt);
  });

  it('should error if the selected dialing code has no corresponding data', () => {
    expect(() =>
      shallow(<BpkPhoneInput {...defaultProps} dialingCode="00_non" />),
    ).toThrow(
      'BpkPhoneInput: A valid value must be provided for the "dialingCode" prop. The provided value for "dialingCode" (00_non) does not match any definitions in the "dialingCodes" prop',
    );
  });
});
