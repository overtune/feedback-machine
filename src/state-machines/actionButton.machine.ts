import { createMachine } from 'xstate';

type ActionButtonContextType = { showSuccess: boolean };

type ActionButtonEventType =
	| { type: 'LOAD' }
	| { type: 'RESOLVE' }
	| { type: 'REJECT' }
	| { type: 'RETRY' };

export const actionButtonMachine = createMachine<
	ActionButtonContextType,
	ActionButtonEventType
>(
	{
		id: 'loaderButton',
		initial: 'idle',
		context: {
			showSuccess: true,
		},
		states: {
			idle: {
				on: {
					LOAD: 'loading',
				},
			},
			loading: {
				on: {
					RESOLVE: [
						{
							target: 'success',
							cond: 'shouldShowSuccess',
						},
						{ target: 'idle' },
					],
					REJECT: 'failure',
				},
			},
			success: {
				after: {
					2500: 'idle',
				},
			},
			failure: {
				on: {
					RETRY: {
						target: 'loading',
					},
				},
				after: {
					3500: 'idle',
				},
			},
		},
	},
	{
		guards: {
			shouldShowSuccess: context => {
				return context.showSuccess;
			},
		},
	}
);
