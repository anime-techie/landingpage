import React, { Component } from 'react';
import Layout from '../layout/Layout';
import ContactForm1 from '../widgets/contact/contactform1';
import Pageheading from '../widgets/Pageheading';
import Header3 from '../layout/header/header3';

class Contact1 extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Layout>
				<div className='py-10'>
					{/* <Header3 /> */}
					{/*hero section start*/}
					<section className='position-relative pb-0'>
						<h1 style={{ textAlign: 'center', marginTop: 31 }}>Contact Us</h1>
					</section>
					<div className='page-content'>
						<div className='container'>
							<div className='row text-center'>
								<div className='col-lg-4 col-md-12 mt-10 mt-md-2'>
									<div>
										<svg
											className='feather feather-map-pin'
											xmlns='http://www.w3.org/2000/svg'
											width={50}
											height={50}
											viewBox='0 0 24 24'
											fill='none'
											stroke='#0096db'
											strokeWidth={1}
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
											<circle cx={12} cy={10} r={3} />
										</svg>
										<h4 className='mt-1'>Address:</h4>
										<span className='text-black'>
											Office No. 55, GunPowder Road, Mumbai - 400010
										</span>
									</div>
								</div>
								<div className='col-lg-4 col-md-6 mt-10 mt-md-2'>
									<div>
										<svg
											className='feather feather-mail'
											xmlns='http://www.w3.org/2000/svg'
											width={50}
											height={50}
											viewBox='0 0 24 24'
											fill='none'
											stroke='#0096db'
											strokeWidth={1}
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
											<polyline points='22,6 12,13 2,6' />
										</svg>
										<h4 className='mt-1'>Email Us</h4>
										<a href='mailto:rebatecube@gmail.com'>
											{' '}
											support@rebatecube.com
										</a>
									</div>
								</div>
								<div className='col-lg-4 col-md-6 mt-10 mt-md-2'>
									<div>
										<svg
											className='feather feather-phone-call'
											xmlns='http://www.w3.org/2000/svg'
											width={50}
											height={50}
											viewBox='0 0 24 24'
											fill='none'
											stroke='#0096db'
											strokeWidth={1}
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
										</svg>
										<h4 className='mt-1'>Phone Number</h4>
										<a href='tel:9082009902'> +919082009902</a>
									</div>
								</div>
							</div>
						</div>
						<div className='container'>
							<div className='row justify-content-center mb-1 text-center'>
								<div className='col-12 col-lg-8'>
									<div>
										{' '}
										<span className='badge badge-primary-soft p-2'>
											{/* <i className="la la-bold ic-3x rotation" /> */}
										</span>
										<h2 className='mt-4 mb-0'>Get in Touch</h2>
										<p className='lead mb-0'>
											Get in touch and let us know how we can help. Fill out the
											form and we’ll be in touch as soon as possible.
										</p>
									</div>
								</div>
							</div>
							<ContactForm1 />
						</div>
					</div>
					{/*body content end*/}
				</div>
			</Layout>
		);
	}
}

export default Contact1;
