import { lazy } from "react";
export const Home = lazy(() => import ("./home/Home.js"))
export const About = lazy(() => import('./about/About'));
export const Erorrpage = lazy(() => import('./erornotfound/Erorrpage.jsx'));
export const Servies = lazy(() => import('./servies/Servies'));
export const OurWork = lazy(() => import('./ourWork/Our-Work.js'));
export const Contact = lazy(() => import('./contact/Contact'));
export const SingleProduct = lazy(() => import('./singleProduct/SingleProduct'))

