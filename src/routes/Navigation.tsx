import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { FormikBasicPage, FormikComponents, FormikYupPage, FormikAbstraction, RegisterPage } from '../03forms/pages'

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
								to='/register'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}
							>
								Register
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
					</ul>
				</nav>
				<Routes>
					<Route path='/' element={<h1>Home</h1>} />
					<Route path='register' element={<RegisterPage/>} />
					<Route path='formik-basic' element={<FormikBasicPage/>} />
					<Route path='formik-yup' element={<FormikYupPage/>} />
					<Route path='formik-components' element={<FormikComponents/>} />
					<Route path='formik-abstraction' element={<FormikAbstraction/>} />

					<Route path='/*' element={<Navigate to='/' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
