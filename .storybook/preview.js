import { addDecorator } from '@storybook/react';
import React from 'react';
import { GlobalStyle } from '../shared/global';

addDecorator((story) => (
	<>
		<GlobalStyle />
		{story()}
	</>
));
