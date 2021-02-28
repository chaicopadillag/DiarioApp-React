import { useState } from 'react';

const useForm = (values = {}) => {
	const [formValues, setFormValues] = useState(values);

	const handleChange = ({ target }) => {
		setFormValues({ ...formValues, [target.name]: target.value });
	};

	const reset = (newValuesForm = values) => {
		setFormValues(newValuesForm);
	};
	return [formValues, handleChange, reset];
};

export default useForm;
