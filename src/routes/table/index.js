import { h, Component } from 'preact';
import style from './style';

import Trienal from './stages/trienal'

export default class Table extends Component {
	render({ step }) {
		return (
			<div>
				<Trienal />
			</div>
		);
	}
}
