import React, {useId} from 'react';

const ExampleWithUseId = () => {
	//Возвращает уникальный айдишник
	const id = useId();
	return (
			<>
				<label htmlFor={id}>Label</label>
				<input id={id} type="checkbox" name="name"/>
			</>
	);
};

export default ExampleWithUseId;