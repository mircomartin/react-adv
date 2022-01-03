import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
import { ShoppingPage } from '../02-components-pattern/pages/ShoppingPage';

type JSXComponent = () => JSX.Element

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

const LazyLayout = lazy( () => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));
//const Lazy2 = lazy( () => import( /* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
//const Lazy3 = lazy( () => import( /* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
	/* {
		path: '/lazyload/*',
		to: '/lazyload/',
		Component: LazyLayout,
		name: 'Dashboard',
	},
	{
		to: '/lazy2',
		path: 'lazy2',
		Component: Lazy2,
		name: 'Lazy-2',
	},
	{
		to: '/lazy3',
		path: 'lazy3',
		Component: Lazy3,
		name: 'Lazy-3',
	}, 
	{
		to: '/no-lazy',
		path: 'no-lazy',
		Component: NoLazy,
		name: 'No-Lazy',
	},*/

	/*Aca arranca Components Pattern*/
	{
		to: '/',
		path: '/',
		Component: ShoppingPage,
		name: 'Shoping',
	}
];
