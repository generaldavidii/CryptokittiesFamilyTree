import * as React from 'react';
import { Typography } from '@material-ui/core';

export default function Title() {
	const [kittyEmoji, setEmoji] = React.useState('🐱');
	const Emotes = ['😼', '😹', '🙀', '😾', '😿', '😻', '😺', '😸', '😽'];
	return (
		<header>
			<a href="/" style={{ textDecoration: 'none' }}>
				<Typography variant="h2" color="textPrimary">
					CK-Tree
					<span
						role="img"
						aria-label="kitty"
						onMouseOver={() => {
							// set the kitty face to a random one from the array
							let rand = Math.floor(Math.random() * 9) + 1;
							setEmoji(Emotes[rand]);
						}}
						onMouseLeave={() => {
							// return the kitty face to default value
							setEmoji('🐱');
						}}
					>
						{kittyEmoji}
					</span>
					<span role="img" aria-label="tree">
						🌲
					</span>
				</Typography>
			</a>
		</header>
	);
}
