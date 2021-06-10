import React, { useState, createContext } from 'react';

const initialState = {
	project: 'Home',
	hero: true
};

export const TheContext = createContext(initialState);

const TheProvider = props => {
	const [project, setProject] = useState(initialState.project);
	const [hero, setHero] = useState(initialState.hero);

	console.log(project, hero);

	return (
		<TheContext.Provider
			value={{
				project,
				hero,
				changeProject: e => setProject(e),
				changeHero: () => setHero(!hero)
			}}
		>
			{props.children}
		</TheContext.Provider>
	);
};

// eslint-disable-next-line react/display-name
export default ({ element }) => <TheProvider>{element}</TheProvider>;
