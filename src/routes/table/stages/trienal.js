import { h, Component } from 'preact';
import style from './style';

export default class Trienal extends Component {
	render() {
		return (
			<div>
				<div class={style.wrapper}>
          <div class={style.name}>
            Português
          </div>
          <div class={style.inputGroup}>
            <input placeholder="10º" type="number"/>
            <input placeholder="11º" type="number"/>
            <input placeholder="12º" type="number"/>
            <input placeholder="Exame" type="number"/>
          </div>
        </div>
        <div class={style.wrapper}>
          <div class={style.name}>
            <span>Matemática/Desenho/História</span>
          </div>
          <div class={style.inputGroup}>
            <input placeholder="10º" type="number"/>
            <input placeholder="11º" type="number"/>
            <input placeholder="12º" type="number"/>
            <input placeholder="Exame" type="number"/>
          </div>
        </div>
        <div class={style.optionsWrapper}>
          <label class={style.container}>Usar Português como nota de ingresso
            <input type="checkbox" />
            <span class={style.checkmark}></span>
          </label>
          <label class={style.container}>Usar Matemática/Desenho/História como nota de ingresso
            <input type="checkbox" />
            <span class={style.checkmark}></span>
          </label>
        </div>
        <div class={style.buttonWrapper}>
          <button class={style.next}>PRÓXIMO</button>
          <button class={style.next}>PRÓXIMO</button>
        </div>
			</div>
		);
	}
}
