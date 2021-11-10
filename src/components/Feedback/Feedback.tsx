/**
 * Feedback
 */

import React from 'react';
import clsx from 'clsx';
import { useMachine } from '@xstate/react';
import { feedbackMachine } from '@state-machines/feedback.machine';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { CgSmileNeutral, CgSmileMouthOpen, CgSmileSad } from 'react-icons/cg';

/** A Feedback component. */
const Feedback: React.FC = () => {
	const [current, send] = useMachine(feedbackMachine, {
		context: {},
		devTools: true,
	});

	return (
		<div>
			<div className="flex items-center space-x-2">
				{current.matches('success.successPositive') && (
					<CgSmileMouthOpen className="text-3xl text-gray-700" />
				)}
				{current.matches('success.successNegative') && (
					<CgSmileSad className="text-3xl text-gray-700" />
				)}
				{!current.matches('success') && (
						<CgSmileNeutral
							className={clsx(
								'text-3xl text-gray-400',
								current.matches('loading') && 'animate-spin'
							)}
						/>
					)}

				<button
					disabled={current.matches('success')}
					className={clsx(
						current.matches('success') &&
							'opacity-50 pointer-events-none'
					)}
					onClick={() => {
						send('FEEDBACK', { value: 'POSITIVE' });
					}}
				>
					<FaThumbsUp className="text-2xl text-green-600" />
				</button>

				<button
					disabled={current.matches('success')}
					className={clsx(
						current.matches('success') &&
							'opacity-50 pointer-events-none'
					)}
					onClick={() => {
						send('FEEDBACK', { value: 'NEGATIVE' });
					}}
				>
					<FaThumbsDown className="mt-3 text-2xl text-red-600" />
				</button>
			</div>
		</div>
	);
};

export default Feedback;
