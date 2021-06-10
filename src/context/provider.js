import React, { useState, createContext, useContext } from 'react';

const initialState = {
	project: 'Home',
	header: false
};

export const TheContext = createContext(initialState);

const TheProvider = props => {
	const [project, setProject] = useState(initialState.project);
	const [header, setHeader] = useState(initialState.header);

	console.log(project, header);

	return (
		<TheContext.Provider
			value={{
				project,
				header,
				changeProject: e => setProject(e),
				changeHeader: () => setHeader(!header)
			}}
		>
			{props.children}
		</TheContext.Provider>
	);
};

// eslint-disable-next-line react/display-name
export default ({ element }) => <TheProvider>{element}</TheProvider>;
