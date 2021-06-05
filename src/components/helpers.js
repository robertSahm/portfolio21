export const makePageTitle = pageData => {
	if (pageData.props.path === '/') {
		return 'Home';
	} else if (pageData.props.path === '/tcs/') {
		return 'Terrapin Care Station';
	}
};
