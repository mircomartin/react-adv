import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { FormikBasicPage, FormikComponents, FormikYupPage, FormikAbstraction, RegisterFormikPage, DynamicFormPage } from '../03forms/pages'

import logo from '../logo.svg';

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className='main-layout'>
				<nav>
					<img src={logo} alt='React Logo' />
					<ul>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/register-formik-page'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}
							>
								Register Formik Page
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-basic'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}
							>
								Formik Basic
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-yup'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}
							>
								Formik Yup
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-components'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}
							>
								Formik Components
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-abstraction'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}
							>
								Formik Abstraction
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/dynamic-form'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}
							>
								Dynamic Form
							</NavLink>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path='/' element={<h1>Home</h1>} />
					<Route path='register-formik-page' element={<RegisterFormikPage/>} />
					<Route path='formik-basic' element={<FormikBasicPage/>} />
					<Route path='formik-yup' element={<FormikYupPage/>} />
					<Route path='formik-components' element={<FormikComponents/>} />
					<Route path='formik-abstraction' element={<FormikAbstraction/>} />
					<Route path='dynamic-form' element={<DynamicFormPage/>} />

					<Route path='/*' element={<Navigate to='/' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
