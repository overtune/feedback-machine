/**
 * ActionButton - stories
 */

import React from 'react';
import ActionButton from './ActionButton';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	title: '3. Components/ActionButton',
	component: ActionButton,
};

const resolveAfterXSeconds = () => {
	return new Promise((resolve, _) => {
		setTimeout(() => {
			resolve('resolved');
		}, 2500);
	});
};
const resolveFast = () => {
	return new Promise((resolve, _) => {
		setTimeout(() => {
			resolve('resolved');
		}, 200);
	});
};

const rejectAfterXSeconds = () => {
	return new Promise((_, reject) => {
		setTimeout(() => {
			reject('error');
		}, 2500);
	});
};

const onSuccess = () => {
	console.log('Success');
};

const onError = (err: any) => {
	console.log('Error', err);
};

export const Default = () => {
	const title = 'ActionButton';
	return (
		<ActionButton
			onClick={resolveAfterXSeconds}
			onSuccess={onSuccess}
			onError={onError}
		>
			{title}
		</ActionButton>
	);
};
Default.story = { parameters: { docs: { disable: true } } };

export const SuccessfullActionButton = () => {
	return (
		<ActionButton
			onClick={resolveAfterXSeconds}
			onSuccess={onSuccess}
			onError={onError}
		>
			Add to basket
		</ActionButton>
	);
};

export const SuccessfullFastActionButton = () => {
	return (
		<ActionButton
			onClick={resolveFast}
			onSuccess={onSuccess}
			onError={onError}
		>
			Add to basket
		</ActionButton>
	);
};

export const UnsuccessfullActionButton = () => {
	return (
		<ActionButton
			onClick={rejectAfterXSeconds}
			onSuccess={onSuccess}
			onError={onError}
		>
			Add to basket
		</ActionButton>
	);
};
