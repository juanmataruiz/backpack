/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2022 Skyscanner Ltd
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

import { storiesOf } from '@storybook/react';

import {
  VisualTestExample,
  DefaultExample,
  CenterAlignedExample,
  RightAlignedExample,
  InvertedPortraitExample,
  MinimalisticExample,
  NonSponsoredExample,
  NoStyleExample,
} from './examples';

storiesOf('bpk-component-graphic-promotion', module)
  .add('Default no background image', NoStyleExample)
  .add('Default with background image', DefaultExample)
  .add('Center Aligned', CenterAlignedExample)
  .add('Right Aligned', RightAlignedExample)
  .add('Inverted Portrait Mode', InvertedPortraitExample)
  .add('Minimalistic', MinimalisticExample)
  .add('Non-Sponsored', NonSponsoredExample)
  .add('Visual test', VisualTestExample);
