import Choices from 'choices.js';

export const choicesController = () => {
	const options = {
		searchEnabled: false,
		shouldSort: false,
		itemSelectText: '',
	};
	new Choices('.form__select_category', {
		...options,
		classNames: {
			containerOuter: 'choices form__select_category',
		},
	});
	new Choices('.form__select_price', {
		...options,
		classNames: {
			containerOuter: 'choices form__select_price',
		},
	});
};
