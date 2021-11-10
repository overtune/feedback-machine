import { createMachine, assign } from 'xstate';

type FeedbackValue = 'POSITIVE' | 'NEGATIVE';

interface FeedbackMachineContextType {
	feedbackValue: FeedbackValue | null;
	error: any;
}

type SendFeedbackEvent = { type: 'FEEDBACK'; value: FeedbackValue };
type RetryFeedbackEvent = { type: 'RETRY' };

type FeedbackMachineEventType =
	| SendFeedbackEvent
	| RetryFeedbackEvent;

const sendFeedback = (value: FeedbackValue) => {
	return fetch(`/api/feedback?valuetype=${value}`);
};


export const feedbackMachine = createMachine<
	FeedbackMachineContextType,
	FeedbackMachineEventType
>(
	{
		id: 'feedbackMachine',
		initial: 'idle',
		context: {
			feedbackValue: null,
			error: null,
		},
		states: {
			idle: {
				on: {
					FEEDBACK: {
						target: 'loading',
						actions: assign({
							feedbackValue: (_context, event) => event.value,
						}),
					},
				},
			},

			loading: {
				invoke: {
					id: 'sendFeedback',
					src: (context, _event) =>
						sendFeedback(context.feedbackValue || 'POSITIVE'),
					onDone: { target: 'success' },
					onError: {
						target: 'error',
						actions: assign({
							error: (_context, event) => event.data.error,
						}),
					},
				},
			},

			error: {
				on: {
					RETRY: 'loading',
				},
			},

			success: {
				id: 'success',
				initial: 'idle',
				states: {
					idle: {
						always: [
							{
								target: 'successPositive',
								cond: 'hasPositiveFeedback',
							},
							{
								target: 'successNegative',
								cond: 'hasNegativeFeedback',
							},
						],
					},
					successPositive: { type: 'final' },
					successNegative: { type: 'final' },
				},
			},
		},
	},
	{
		guards: {
			hasPositiveFeedback: context => {
				return context.feedbackValue === 'POSITIVE';
			},
			hasNegativeFeedback: context => {
				return context.feedbackValue === 'NEGATIVE';
			},
		},
	}
);
