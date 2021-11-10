/**
 * Layout2Area_4_7 - stories
 */

import React from 'react';
import { LayoutContainer } from '../LayoutContainer';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import Div from '../helpers/StorybookDemoDiv';
import { Layout2Area_4_7, LayoutArea1, LayoutArea2 } from './index';
 
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	title: '3. Components/Layout/2 areas - size 4+7',
	parameters: {
		viewport: {
			viewports: MINIMAL_VIEWPORTS,
		},
		layout: 'fullscreen',
	},
};

const LayoutDemo = () => (
	<LayoutContainer overlay={true} className="pt-4">
		<Layout2Area_4_7>
			<LayoutArea1>
				<Div>[AREA_1]</Div>
			</LayoutArea1>
			<LayoutArea2>
				<Div>[AREA_2]</Div>
			</LayoutArea2>
		</Layout2Area_4_7>
	</LayoutContainer>
);

export const Desktop = () => <LayoutDemo />;
export const Tablet = () => <LayoutDemo />;
export const Mobile = () => <LayoutDemo />;

Tablet.parameters = {
	viewport: {
		defaultViewport: 'tablet',
	},
};
Mobile.parameters = {
	viewport: {
		defaultViewport: 'mobile1',
	},
};
