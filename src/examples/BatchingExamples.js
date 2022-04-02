import {useState} from 'react';
import {flushSync} from "react-dom";

const BatchingExamples = () => {
	const [state, setState] = useState(0);
	const [value, setValue] = useState(0);

	console.log('RENDER');

	//На изменение двух состояний с реакт 17-ого будет происходить
	//один рендер в DOM
	const update = () => {
		setValue(prev => prev + 1)
		setState(prev => prev + 1)
	}
	//В 17-ой версии на выполнение ф-ии с асинхронным кодом внутри
	//произошло бы 2 рендера в DOM
	//18-ый реакт решает эту проблему - теперь 1 рендер.
	// Батчинг работает и с асинхронными событиями
	const asyncUpdate = () => {
		setTimeout(() => {
			setValue(prev => prev + 1)
			setState(prev => prev + 1)
		}, 1000)
	}
	//Чтобы остановить батчинг
	const asyncUpdateWithoutBatching = () => {
		setTimeout(flushSync(() => {
			setValue(prev => prev + 1)
			setState(prev => prev + 1)
		}), 1000)
	}
	return (
			<div>
				<h1>value = {value}</h1>
				<h1>state = {state}</h1>
				<button onClick={update}>UPDATE</button>
			</div>
	);
};

export default BatchingExamples;