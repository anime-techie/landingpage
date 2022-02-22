import React, { Component } from 'react';
import Herosection6 from './herosection/herosection6';
import Feature2 from './featurebox/feature';
// import OwlCarousel from 'react-owl-carousel';
import Pricingplan4 from './pricingplan/pricingplan4';
import Worktab from './featuare/worktab';
import Header2 from '../layout/header/header2';
import Footer from '../layout/footer/footer';
import dynamic from 'next/dynamic';
import Layout from '../layout/Layout';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

class Testing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
		this.openModal = this.openModal.bind(this);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		window.fn = OwlCarousel;
	}
	openModal() {
		this.setState({ isOpen: true });
	}
	render() {
		return (
			<Layout>
			<div>
				<section>
					<div className='container'>
						<Herosection6 />
					</div>
				</section>
				{/*body content start*/}
				<div className='page-content'>
					<Feature2 />

					<section>
						<div className='container'>
							<Worktab />
						</div>
					</section>

					<section id='Pricing' style={{ paddingTop: 0 }}>
						<div className='container'>
							<Pricingplan4 />
						</div>
					</section>
					{/*pricing end*/}
				</div>
				{/*body content end*/}
				
			</div>
			</Layout>
		);
	}
}

export default Testing;
