import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Header3 from '../layout/header/header3';
import Link from 'next/link';
import Image from 'next/image';

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
			<Layout>
				<div style={{ marginBottom: '5rem' }}>
					<section
						className='position-relative'
						style={{ padding: '8rem 0 0rem' }}
					>
						<h1
							className='text-center '
							style={{ marginTop: 30, fontSize: '3rem' }}
						>
							How It Works
						</h1>
						<p
							className='text-primary text-center '
							style={{ fontSize: '2rem' }}
						>
							For Buyer
						</p>
					</section>
					{/*hero section start*/}
					{/* <section> */}
					<div className='container'>
						<div className='row align-items-center justify-content-between'>
							<div className='col-12 col-lg-6'>
								{/* <Image
									src='/assets/images/about/how-it-works-buyer-1.png'
									alt='how it works'
									width={4500}
									height={3205}
								/> */}
								<img
									src={`/assets/images/about/how-it-works-buyer-1.png`}
									alt='Image'
									className='img-fluid'
								/>
							</div>
							<div className='col-12 col-lg-6 col-xl-5'>
								<div>
									<h2 className='mt-3'>Shop</h2>
									<p className='lead'>
										Browse through all the products currently available at
										25%-100% off. Select the one you want and just click on Buy
										Product!
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* </section> */}
					{/*  */}
					{/* <section> */}
					<div className='container my-10'>
						<div className='row align-items-center justify-content-between section-reverse'>
							<div
								className='col-12 col-lg-6 col-xl-5'
							>
								<div>
									<h2 className='mt-3'>Confirm your purchase</h2>
									<p className='lead'>
										After you’ve purchased the product from Amazon/Flipkart, you
										need to enter your Order ID to confirm your purchase. Once
										the seller verifies the order, your rebate will be approved
										and cashback will be credited to your account.
									</p>
								</div>
							</div>
							<div className='col-12 col-lg-6 mb-2'>
								<img
									src={`/assets/images/about/how-it-works-buyer-2.png`}
									alt='Image'
									className='img-fluid'
								/>
							</div>
						</div>
					</div>
					{/* </section> */}

					{/*  */}
					{/* <section> */}
					<div className='container'>
						<div className='row align-items-center justify-content-between'>
							<div className='col-12 col-lg-6 mb-2'>
								<img
									src={`/assets/images/about/how-it-works-buyer-3.png`}
									alt='Image'
									className='img-fluid'
								/>
							</div>
							<div className='col-12 col-lg-6 col-xl-5'>
								<div>
									<h2 className='mt-3'>Get Paid</h2>
									<p className='lead'>
										We hold the funds for 35 days to make sure there is no error
										or problem, after which you can withdraw your cashback
										amount using Bank Transfer, UPI or Amazon Pay Gift Card.
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* </section> */}
				</div>
			</Layout>
		);
	}
}

export default HowItWork;
