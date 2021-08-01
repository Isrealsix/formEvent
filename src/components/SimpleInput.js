import useInput from './hooks/use-input';

const SimpleInput = props => {
	const {
		value: enteredName,
		hasError: nameInputHasError,
		isValid: enteredNameIsValid,
		valueChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput(value => value.trim() !== '');

	let formIsValid = false;

	if (enteredNameIsValid) {
		formIsValid = true;
	}

	const submitFormHandler = ev => {
		ev.preventDefault();
		// setEnteredNameTouched(true);
		if (!enteredNameIsValid) {
			return;
		}
		resetNameInput();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';
	return (
		<form onSubmit={submitFormHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					value={enteredName}
					onChange={valueChangeHandler}
					onBlur={nameBlurHandler}
				/>
			</div>
			{nameInputHasError && (
				<p className="error-text">Name must not be empty</p>
			)}
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
