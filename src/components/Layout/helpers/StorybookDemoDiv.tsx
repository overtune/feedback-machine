/**
 * Storybook demo div
 */

import React from 'react';
import clsx from 'clsx';

type Height = 'small' | 'medium' | 'large' | 'ultra';

interface Props {
	height?: Height;
}

const getHeight = (height: Height) => {
	switch(height) {
		case 'small':
			return 'h-32';
		case 'large':
			return 'h-96';
		case 'ultra':
			return 'h-[1024px]';
		case 'medium':
		default:
			return 'h-64';
	}
}

const Div: React.FC<Props> = ({ children, height = 'medium' }) => (
	<div
		className={clsx(
			'p-4 rounded bg-grey mb-1 focus:outline-black',
			getHeight(height)
		)}
		tabIndex={0}
	>
		{children}
	</div>
);

export default Div;
