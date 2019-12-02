export const formChange = (event, setState, state) => {
	setState({
		[event.target.name]: event.target.value,
		...state
	});
};

export const formSubmit = (event, postForm, form) => {
	event.preventDefault();
	postForm(form);
};
