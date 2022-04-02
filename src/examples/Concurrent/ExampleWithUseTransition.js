import {useMemo, useState,
	useTransition // Позволяет сделать отложенный рендер
} from 'react';

import List from './components/List';
import {filterItems} from "./defaultItems";

const ExampleWithUseTransition = () => {
	const [filterVal, setFilterVal] = useState();
	//isPending - сообщает, готовится ли отложенный рендеринг
	//startTransition - запускает отложенный рендеринг
	const [isPending,startTransition] = useTransition();

	const items = useMemo(
			() => filterItems(filterVal)
			, [filterVal]
	);

	const changeHandler = e =>
		startTransition(() => setFilterVal(e.target.value))


	return (
			<>
				<input type="text" onChange={changeHandler}/>
				{isPending
						? <h3>Загрузка...</h3>
						: <List items={items}/>
				}
			</>
	);
};

export default ExampleWithUseTransition;