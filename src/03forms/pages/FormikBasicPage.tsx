import { useFormik } from 'formik';

export const FormikBasicPage = () => {
	const { handleChange, values, handleSubmit } = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		onSubmit: (value) => {
			console.log(value);
		},
	});

	return (
		<div>
			<h1>Formik Basic Tutorial</h1>

			<form onSubmit={handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					name="firstName"
					onChange={handleChange}
					value={values.firstName}
				/>
				<span>First name is required</span>

				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					name="lastName"
					value={values.lastName}
					onChange={handleChange}
				/>
				<span>Last name is required</span>

				<label htmlFor="email">Email Address</label>
				<input
					type="email"
					name="email"
					value={values.email}
					onChange={handleChange}
				/>
				<span>Email format is not valid</span>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
