import { action } from '@storybook/addon-actions';
import {
	select,
	withKnobs,
} from '@storybook/addon-knobs';
import { Button } from '@storybook/react/demo';
import React from 'react';
export default {
	title: 'Button',
	component: Button,
};

export const Text = () => (
	<Button onClick={action('clicked')}>
		Hello Button
	</Button>
);

export const Emoji = () => (
	<Button onClick={action('clicked')}>
		<span
			role="img"
			aria-label="so cool">
			😀 😎 👍 💯
		</span>
	</Button>
);
export const knobs = () => (
	<Button onClick={action('clicked')}>
		<span
			role="img"
			aria-label="so cool">
			{select('emoji', [
				'😀',
				'😎',
				'👍',
				'💯',
			])}
		</span>
	</Button>
);
knobs.story = {
	decorators: [withKnobs],
};
