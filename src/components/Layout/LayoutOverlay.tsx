/**
 * LayoutOverlay
 */
/* eslint-disable */

import React from 'react';

interface Props {
	maxWidth?: 'standard' | 'narrow';
}

/** A overlay to visulize the layout. */
const LayoutOverlay: React.FC<Props> = ({ maxWidth = 'standard' }) => {
	const mw =
		maxWidth === 'standard' ? 'max-w-screen-2xl' : 'max-w-screen-xl';

	return (
		<div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
			<div
				className={`grid grid-flow-col grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 sm:gap-6 h-full opacity-10 mx-auto ${mw}`}
			>
				{Array.from(Array(12)).map((_item, i: number) => {
					let className = i > 3 ? 'hidden ' : '';
					className += i < 8 ? 'sm:block ' : '';
					return (
						<div
							className={`${className} lg:block h-full col-span-1 bg-red-500`}
						>
							&nbsp;
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LayoutOverlay;
