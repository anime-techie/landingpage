import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { Col, Container, Row } from 'reactstrap';
// import rebate from '/assets/images/rebatecube.png'
import Scrolltop from '../back-to-top';
class Footer extends Component {
	render() {
		return (
			<footer
				className='custom-py-0 pb-0 mb-0 bg-primary position-relative'
				data-bg-img='assets/images/bg/03.png'
				style={{ bottom: 0 }}
			>
				{/* <div className="shape-1" style={{height: '150px', overflow: 'hidden'}}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                </svg>
                </div> */}
				<Container>
					<Row>
						<div className='col-12 col-lg-6 col-xl-5'>
							<Row>
								<Col className='col-12 col-sm-7'>
									<Link className='footer-logo text-white h2 mb-0' href='/'>
										<img
											src={`/assets/images/rebatecube.png`}
											alt='RebateCube-logo'
											width='100%'
											height='auto'
										/>
									</Link>
								</Col>
								<Col className='col-12 col-sm-6 mt-6 mt-sm-0'>
									<ul className='list-inline mb-0 d-flex justify-content-between'>
										<li className='list-inline-item mr-0'>
											<a className='text-light ic-2x'>
												<i className='la la-facebook' />
											</a>
										</li>
										<li className='list-inline-item mr-0'>
											<a
												className='text-light ic-2x'
												href='https://instagram.com/rebatecube?utm_medium=copy_link'
												target='_blank'
												rel='noreferrer'
											>
												<i className='la la-instagram' />
											</a>
										</li>
										<li className='list-inline-item mr-0'>
											<a
												className='text-light ic-2x'
												href='https://youtube.com/channel/UCIvtp3fHj5z0hgyf9PqpPXw'
												target='_blank'
												rel='noreferrer'
											>
												<i className='la la-youtube' />
											</a>
										</li>
										<li className='list-inline-item mr-0'>
											<a
												className='text-light ic-2x'
												href='https://www.linkedin.com/company/rebatecube-technologies'
												target='_blank'
												rel='noreferrer'
											>
												<i className='la la-linkedin' />
											</a>
										</li>
									</ul>
								</Col>
							</Row>
						</div>
						<div className='col-12 col-lg-6 col-xl-7 mt-4 mt-lg-0'>
							<Row>
								<Col className='col-6 col-sm-4 navbar-dark'>
									<h5 className='mb-2 text-white'>Shoppers</h5>
									<ul className='navbar-nav list-unstyled mb-0'>
										<li className='mb-3 nav-item'>
											<Link href='/how-rebates-work'>
												<a className='nav-link'>How it Works</a>
											</Link>
										</li>
										<li className='mb-3 nav-item'>
											<a
												className='nav-link'
												href='https://shopper.rebatecube.com/signin'
											>
												Sign in
											</a>
										</li>
										<li className='mb-3 nav-item'>
											<a
												className='nav-link'
												href='https://shopper.rebatecube.com/signup'
											>
												Sign up
											</a>
										</li>
										<li className='nav-item'>
											<Link href='/shopper-faq'>
												<a className='nav-link'>FAQ</a>
											</Link>
										</li>
									</ul>
								</Col>
								<Col className='col-6 col-sm-4 mt-0 navbar-dark'>
									<h5 className='mb-2 text-white'>Sellers</h5>
									<ul className='navbar-nav list-unstyled mb-0'>
										<li className='mb-3 nav-item'>
											<Link href='/how-it-works'>
												<a className='nav-link'>How it Works</a>
											</Link>
										</li>
										<li className='mb-3 nav-item'>
											<a
												className='nav-link'
												href='https://seller.rebatecube.com/signin'
											>
												Sign in
											</a>
										</li>
										<li className='mb-3 nav-item'>
											<a
												className='nav-link'
												href='https://seller.rebatecube.com/signup'
											>
												Sign up
											</a>
										</li>
										<li className='nav-item'>
											<Link href='/seller-faq'>
												<a className='nav-link'>FAQ</a>
											</Link>
										</li>
									</ul>
								</Col>
								<Col className='col-6 col-sm-4 mt-6 mt-sm-0 navbar-dark'>
									<h5 className='mb-2 text-white'>Help</h5>
									<ul className='navbar-nav list-unstyled mb-0'>
										<li className='mb-3 nav-item'>
											<Link href='/contact-us'>
												<a className='nav-link'>Contact Us</a>
											</Link>
										</li>
										<li className='mb-3 nav-item'>
											<Link href='/about-us'>
												<a className='nav-link'>About Us</a>
											</Link>
										</li>
										<li className='mb-3 nav-item'>
											<Link href='/privacy-policy'>
												<a className='nav-link'>Privacy Policy</a>
											</Link>
										</li>
										<li className='mb-3 nav-item'>
											<Link href='/terms-of-use'>
												<a className='nav-link'>Terms of Use</a>
											</Link>
										</li>
									</ul>
								</Col>
							</Row>
						</div>
					</Row>
				</Container>
				<a style={{ cursor: 'pointer' }}>
					<Scrolltop />
				</a>
			</footer>
		);
	}
}

export default Footer;
