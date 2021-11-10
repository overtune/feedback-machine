/**
 * ActionButton - test
 */

import React from 'react';
import { render } from '@test-utils/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ActionButton from './ActionButton';
expect.extend(toHaveNoViolations);

describe('ActionButton', () => {
	it('should not have any accessibility issues', async () => {
		const { container } = render(<ActionButton>Test</ActionButton>);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
