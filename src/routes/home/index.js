import { h, Component } from 'preact';
import { route } from 'preact-router';
import style from './style';

export default class Home extends Component {
	handleArea = e => route('/' + e.target.value)

	render() {
		return (
			<div class={style.home}>
				<h1>Escolhe a tua área:</h1>
				<select onChange={this.handleArea} class={style.choice} name="area">
					<option value="escolha">--Escolhe aqui--</option>
					<option value="artes">Artes Visuais</option>
					<option value="ciencias">Ciências e Tecnologias</option>
					<option value="economia">Ciências Socioeconómicas</option>
					<option value="humanidades">Línguas e Humanidades</option>
				</select>
			</div>
		);
	}
}
