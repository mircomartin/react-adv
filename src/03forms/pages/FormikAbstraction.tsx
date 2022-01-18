import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelectInput, MyTextInput } from '../components';

export const FormikAbstraction = () => {
	return (
		<div>
			<h1>Formik Abstraction</h1>

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: ''
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
									.max(15, 'Debe tener 15 caracteres o menos')
									.required('Requerido'),
					lastName: Yup.string()
									.max(15, 'Debe tener 15 caracteres o menos')
									.required('Requerido'),
					email: Yup.string()
								.email('Debe ser un Email valido')
								.required('Requerido'),
					terms: Yup.boolean()
								.oneOf([true], 'Debe de aceptar las condiciones'),
					jobType: Yup.string()
								.notOneOf(['it-jr'], 'Esta opcion no esta permitida')
								.required('Requerido')
				})}
			>
				{(formik) => (
					<Form>

						<MyTextInput label="First Name" name="firstName" placeholder="Mirco" />

						<MyTextInput label="Last Name" name="lastName" placeholder="Martin"/>

						<MyTextInput label="Email Address" name="email" placeholder="mirco@martin.com" />

						<MySelectInput label="Job Type" name="jobType">
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">IT Senior</option>
							<option value="it-jr">IT Junior</option>
						</MySelectInput>

						<MyCheckbox label="Terms and Conditions" name="terms" />

						<button type="submit">Submit</button>

					</Form>
				)}
			</Formik>
		</div>
	);
};
