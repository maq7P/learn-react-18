import {
	useMemo, useState,
	useDeferredValue //ф-ия, похожая на debounce
	// только с отложенной перерисовкой
} from 'react';

import List from './components/List';
import {filterItems} from "./defaultItems";

const ExampleWithUseTransition = () => {
	const [value, setValue] = useState();

	const deferredValue = useDeferredValue(value);

	const items = useMemo(
			() => filterItems(value)
			, [deferredValue]
	);

	const changeHandler = e =>
			setValue(e.target.value)


	return (
			<>
				<input type="text" onChange={changeHandler}/>
				<List items={items}/>
			</>
	);
};

export default ExampleWithUseTransition;