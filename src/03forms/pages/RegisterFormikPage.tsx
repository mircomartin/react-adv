import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import './../styles/styles.css';

export const RegisterFormikPage = () => {

	return (
		<div>
			<h1>Register Formik Page</h1>

			<Formik
				initialValues={{
					name: '',
					email: '',
					password1: '',
					password2: ''
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
								.min(2, 'Debe tener al menos 2 caracteres o más')
								.max(15, 'Debe tener 15 caracteres o menos')
								.required('Requerido'),
					password1: Yup.string()
									.min(5, 'Debe tener al menos 2 caracteres o más')
									.required('Requerido'),
					password2: Yup.string()
									.oneOf([Yup.ref('password1'), null], 'Los password no coinciden')
									.required('Requerido'),
					email: Yup.string()
								.email('Debe ser un Email valido')
								.required('Requerido'),
				})}
			>
				{(formik) => (
					<Form>
						<label htmlFor="name">Name</label>
						<Field name="name" type="text"/>
						<ErrorMessage name="name" component="span" />

						<label htmlFor="email">Email Address</label>
						<Field name="email" type="email"/>
						<ErrorMessage name="email" component="span" />

						<label htmlFor="password1">Password</label>
						<Field name="password1" type="password"/>
						<ErrorMessage name="password1" component="span" />

						<label htmlFor="password2">Repeat Password</label>
						<Field name="password2" type="password"/>
						<ErrorMessage name="password2" component="span" />

						<button type="submit">Submit</button>
						<button onClick={formik.handleReset}>Reset</button>

					</Form>
				)}
			</Formik>
		</div>
	);
};
