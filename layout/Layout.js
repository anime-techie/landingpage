import React from 'react';
import Head from 'next/head';
import Header3 from '../layout/header/header3';
import Footer from './footer/footer';
import Scrolltop from './back-to-top';

const Layout = ({ children, title = 'RebateCube' }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet='utf-8' />
				{/* <meta name='viewport' content='initial-scale=1.0, width=device-width' /> */}
				<meta
					name='viewport'
					content='width=device-width,height=device-height,initial-scale=1.0'
				></meta>
			</Head>

			<Header3 />

			{children}
			<Footer />
			{/* <Scrolltop /> */}
		</>
	);
};

export default Layout;
