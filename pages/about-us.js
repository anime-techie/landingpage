import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Memberaboutus from '../widgets/aboutus/aboutus';
import FeatureServices from '../widgets/featurebox/services';
import Testimonial1 from '../widgets/testimonial/testimonial1';
import Blog4 from '../widgets/blog/blog4';
import Pageheading from '../widgets/Pageheading';
import Header3 from '../layout/header/header3';

class Aboutus extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Layout>
				<div className='py-10'>
					{/* <Header3 /> */}
					<div className='page-content'>
						<div className='container'>
							<Memberaboutus />
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Aboutus;
