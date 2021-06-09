import React, { useState } from 'react';

export const ProjectContext = React.createContext({
	project: 'none',
	setProject: () => {}
});

const Provider = props => {
	const [project, setProject] = useState('none');
	const value = { project, setProject };

	return <ProjectContext.Provider value={value}>{props.children}</ProjectContext.Provider>;
};

// eslint-disable-next-line react/display-name
export default ({ element }) => <Provider>{element}</Provider>;
