import React, { useState, createContext } from 'react';

const initialState = {
	project: 'Home',
	hero: true,
	selector: false,
	about: false,
	contact: false,
	content: 'none'
};

export const TheContext = createContext(initialState);

const TheProvider = props => {
	const [hero, setHero] = useState(initialState.hero);
	const [selector, setSelector] = useState(initialState.selector);
	const [project, setProject] = useState(initialState.project);
	const [about, setAbout] = useState(initialState.about);
	const [contact, setContact] = useState(initialState.contact);
	const [content, setContent] = useState(initialState.content);

	return (
		<TheContext.Provider
			value={{
				hero,
				selector,
				project,
				about,
				contact,
				content,
				changeHero: () => setHero(!hero),
				toggleSelector: () => setSelector(!selector),
				changeProject: e => setProject(e),
				changeAbout: () => setAbout(!about),
				changeContact: () => setContact(!contact),
				changeContent: e => setContent(e)
			}}
		>
			{props.children}
		</TheContext.Provider>
	);
};

// eslint-disable-next-line react/display-name
export default ({ element }) => <TheProvider>{element}</TheProvider>;
