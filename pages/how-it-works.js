import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Header3 from '../layout/header/header2';
import Footer from '../layout/footer/footer';
import Featureskill from '../widgets/featurebox/featureskill';

class HowItWork extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			// <Layout title='How Rebatecube Works'>
			<Layout>
				<div>
					<section className='position-relative' style={{ padding: '8rem 0 0rem' }}>
						<h1 className='text-center'>
							How It Works
						</h1>
						<p className='text-primary text-center'>For Seller</p>
					</section>
					<section className='text-center pt-0 pb-8 px-2'>
						<div className='container'>
							<h1 className='text-center'>The RebateCube Process</h1>
							<p className='text-mute'>
								The bigger the rebate, the more claims you will have!
							</p>

							<div className='row align-items-center'>
								<div className='col-xl-3 col-lg-4 col-sm-6'>
									<div className='px-4 py-7 rounded hover-translate bg-primary-soft'>
										<div>
											<svg
												width={80}
												height={80}
												viewBox='0 0 24 24'
												fill='none'
												stroke='#f94f15'
												strokeWidth={1}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-grid'
											>
												<rect x={3} y={3} width={7} height={7} />
												<rect x={14} y={3} width={7} height={7} />
												<rect x={14} y={14} width={7} height={7} />
												<rect x={3} y={14} width={7} height={7} />
											</svg>
										</div>
										<h5 className='mt-4 mb-3'>You Create!</h5>
										<p className='mb-0' style={{ height: 200 }}>
											Set your offer discount and quantity, add pictures and
											descriptions, add link to your marketplace, and publish!
										</p>
									</div>
								</div>
								<div className='col-xl-3 col-lg-4 col-sm-6'>
									<div className='px-4 py-7 rounded hover-translate'>
										<div>
											<svg
												width={80}
												height={80}
												viewBox='0 0 24 24'
												fill='none'
												stroke='#1360ef'
												strokeWidth={1}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-check-square'
											>
												<polyline points='9 11 12 14 22 4' />
												<path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' />
											</svg>
										</div>
										<h5 className='mt-4 mb-3'>We Promote!</h5>
										<p className='mb-0' style={{ height: 200 }}>
											Buyers select your products, purchase directly on Amazon /
											Flipkart and then claim the cash back using their order ID.
										</p>
									</div>
								</div>
								<div className='col-xl-3 col-lg-4 col-sm-6 mt-6 mt-sm-0'>
									<div className='px-4 py-7 rounded hover-translate'>
										<div>
											<svg
												width={80}
												height={80}
												viewBox='0 0 24 24'
												fill='none'
												stroke='#1360ef'
												strokeWidth={1}
												strokeLinecap='round'
												strokeLinejoin='round'
												className='feather feather-wifi'
											>
												<path d='M5 12.55a11 11 0 0 1 14.08 0' />
												<path d='M1.42 9a16 16 0 0 1 21.16 0' />
												<path d='M8.53 16.11a6 6 0 0 1 6.95 0' />
												<line x1={12} y1={20} x2={12} y2={20} />
											</svg>
										</div>
										<h5 className='mt-4 mb-3'>You Approve!</h5>
										<p className='mb-0' style={{ height: 200 }}>
											Orders are automatically pre-approved and held for 35 days
											and sellers are given 5 days to approve the order to ensure
											there were no returns or non-purchases.
										</p>
									</div>
								</div>
								<div className='col-xl-3 col-lg-4 col-sm-6'>
									<div className='px-4 py-7 rounded hover-translate'>
										<div>
											<svg
												className='feather feather-move bg-primary p-2 rounded'
												width={80}
												height={80}
												viewBox='0 0 24 24'
												fill='none'
												stroke='#ffffff'
												strokeWidth={1}
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<polyline points='5 9 2 12 5 15' />
												<polyline points='9 5 12 2 15 5' />
												<polyline points='15 19 12 22 9 19' />
												<polyline points='19 9 22 12 19 15' />
												<line x1={2} y1={12} x2={22} y2={12} />
												<line x1={12} y1={2} x2={12} y2={22} />
											</svg>
										</div>
										<h5 className='mt-4 mb-3'>We Deliver!</h5>
										<p className='mb-0' style={{ height: 200 }}>
											35 days later, shoppers can withdraw their cashback amount.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className='p-0'>
						<div className='container'>
							<div className='row justify-content-center text-center'>
								<div className='col-12 col-md-12 col-lg-8 mb-8'>
									<div>
										<h2 className='mt-3'>How RebateCube Helps Sellers:</h2>
										<p className='lead mb-0'>
											All types of businesses need access to development
											resources, so we give you the option to decide how much you
											need to use.
										</p>
									</div>
								</div>
							</div>
							<Featureskill />
						</div>
					</section>
				</div>
			</Layout>
		);
	}
}

export default HowItWork;
