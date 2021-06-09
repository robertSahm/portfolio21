import React, { useState } from 'react';

export const myContext = React.createContext();

const Provider = props => {
	const [project, setProject] = useState(false);

	return (
		<myContext.Provider
			value={{
				project,
				changeProject: () => setProject('nhhhh')
			}}
		>
			{props.children}
		</myContext.Provider>
	);
};

// eslint-disable-next-line react/display-name
export default ({ element }) => <Provider>{element}</Provider>;
