import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Header3 from '../layout/header/header3';
import Herosection2 from '../widgets/herosection/herosection2';
import Product from '../Products';
import Footer from '../layout/footer/footer';

class Index3 extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Layout>
				{/* <Header3 /> */}
				<Herosection2 />
				<Product />
				{/* <Footer /> */}
			</Layout>
		);
	}
}

export default Index3;
