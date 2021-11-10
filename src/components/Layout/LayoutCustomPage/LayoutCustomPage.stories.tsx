/**
 * LayoutCustomPage - stories
 */

import React from 'react';
import { LayoutContainer } from '../LayoutContainer';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import Div from '../helpers/StorybookDemoDiv';
import {
	LayoutCustomPage,
	LayoutGroup1,
	LayoutGroup2,
	LayoutArea1,
	LayoutArea2,
	LayoutArea3,
	LayoutArea4,
	LayoutArea5,
	LayoutArea6,
	LayoutArea7,
	LayoutArea8,
} from './index';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	title: '3. Components/Layout/Custom page',
	parameters: {
		viewport: {
			viewports: MINIMAL_VIEWPORTS,
		},
		layout: 'fullscreen',
	},
};

const LayoutDemo = () => (
	<LayoutContainer overlay={true} className="pt-4">
		<LayoutCustomPage>
			<LayoutArea1>
				<Div height="small">[AREA_1]</Div>
			</LayoutArea1>
			<LayoutArea2>
				<Div>[AREA_2]</Div>
			</LayoutArea2>
			<LayoutGroup1>
				<LayoutArea3>
					<Div height="small">[AREA_3]</Div>
				</LayoutArea3>
				<LayoutArea4>
					<Div height="small">[AREA_4]</Div>
				</LayoutArea4>
				<LayoutArea5>
					<Div>[AREA_5]</Div>
				</LayoutArea5>
			</LayoutGroup1>
			<LayoutGroup2>
				<LayoutArea6>
					<Div height="small">[AREA_6]</Div>
				</LayoutArea6>
				<LayoutArea7>
					<Div height="small">[AREA_7]</Div>
				</LayoutArea7>
			</LayoutGroup2>
			<LayoutArea8>
				<Div>[AREA_8]</Div>
			</LayoutArea8>
		</LayoutCustomPage>
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
