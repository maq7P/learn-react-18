import BatchingExamples from "./examples/BatchingExamples";
import ExampleWithUseTransition from "./examples/Concurrent/ExampleWithUseTransition";

import './App.css';

function App() {
	return (
			<div className="App">
				{/*<BatchingExamples />*/}
				<ExampleWithUseTransition />
			</div>
	);
}

export default App;
