import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from 'reactstrap';
// import rebate from '/assets/images/rebatecube.png'
import { BsBag, BsGift } from 'react-icons/bs';

class Header3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			visible: false,
			loader: false,
			// headername:window.location.pathname,
			headername: '/index2',
			ismodal: false,
			ismodalSignIn: false,
			isMobile: false,
		};
		this.toggle = this.toggle.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	handleClick(event) {
		var elems = document.querySelectorAll('.childsubmenu');
		[].forEach.call(elems, function (el) {
			el.classList.remove('show');
		});
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		if (window.innerWidth < 720) {
			this.setState({ isMobile: true });
		} else {
			this.setState({ isMobile: false });
		}
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		var scrollTop =
			(document.documentElement && document.documentElement.scrollTop) ||
			document.body.scrollTop;
		if (scrollTop > 100) {
			this.setState({
				visible: true,
			});
		} else {
			this.setState({
				visible: false,
			});
		}
	}
	render() {
		const { visible, headername, ismodal, ismodalSignIn, isMobile } =
			this.state;
		// console.log('okay', headername);
		const toggle = () => this.setState({ ismodal: !ismodal });
		const toggleSignIn = () => this.setState({ ismodalSignIn: !ismodalSignIn });
		return (
			<>
				<Modal isOpen={ismodal} toggle={toggle} size='lg'>
					<ModalHeader toggle={toggle}>
						What would you like to do in RebateCube?
					</ModalHeader>
					<ModalBody>
						<div className='row'>
							<div className='col-md-6 align-items-center justify-content-center p-5'>
								<p
									style={{
										color: '#0096db',
										textAlign: 'center',
										marginBottom: 30,
									}}
								>
									<BsBag size={99} />
								</p>{' '}
								<p
									style={{
										color: '#0096db',
										textAlign: 'center',
										marginBottom: 30,
									}}
								>
									I am a shopper <br />I want to access great deals
								</p>{' '}
								<div className='d-flex align-items-center justify-content-center'>
									<Button
										color='primary'
										href='https://shopper.rebatecube.com/signup'
									>
										Signup as Shopper
									</Button>{' '}
								</div>
							</div>
							<div className='col-md-6 align-items-center justify-content-center p-5'>
								<p style={{ textAlign: 'center', marginBottom: 30 }}>
									<BsGift size={99} style={{ color: '#1d1d33' }} />
								</p>{' '}
								<p
									style={{
										color: '#1d1d33',
										textAlign: 'center',
										marginBottom: 30,
									}}
								>
									I am an Amazon / Flipkart Seller <br />I want to offer rebates
									on my products
								</p>{' '}
								<div className='d-flex align-items-center justify-content-center'>
									<Button
										color='secondary'
										href='https://seller.rebatecube.com/signup'
									>
										Signup as Seller
									</Button>{' '}
								</div>
							</div>
						</div>
					</ModalBody>
				</Modal>
				<Modal isOpen={ismodalSignIn} toggle={toggleSignIn} size='lg'>
					<ModalHeader toggle={toggleSignIn}>
						What would you like to do in RebateCube?
					</ModalHeader>
					<ModalBody>
						<div className='row'>
							<div className='col-md-6 align-items-center justify-content-center p-5'>
								<p
									style={{
										color: '#0096db',
										textAlign: 'center',
										marginBottom: 30,
									}}
								>
									<BsBag size={99} />
								</p>{' '}
								<p
									style={{
										color: '#0096db',
										textAlign: 'center',
										marginBottom: 30,
									}}
								>
									I am a shopper <br />I want to access great deals
								</p>{' '}
								<div className='d-flex align-items-center justify-content-center'>
									<Button
										color='primary'
										href='https://shopper.rebatecube.com/signin'
									>
										Signin as Shopper
									</Button>{' '}
								</div>
							</div>
							<div className='col-md-6 align-items-center justify-content-center p-5'>
								<p style={{ textAlign: 'center', marginBottom: 30 }}>
									<BsGift size={99} style={{ color: '#1d1d33' }} />
								</p>{' '}
								<p
									style={{
										color: '#1d1d33',
										textAlign: 'center',
										marginBottom: 30,
									}}
								>
									I am an Amazon / Flipkart Seller <br />I want to offer rebates
									on my products
								</p>{' '}
								<div className='d-flex align-items-center justify-content-center'>
									<Button
										color='secondary'
										href='https://seller.rebatecube.com/signin'
									>
										Signin as Seller
									</Button>{' '}
								</div>
							</div>
						</div>
					</ModalBody>
				</Modal>
				<header
					className={` ${
						headername == '/index2'
							? 'site-header  bg-dark navbar-dark'
							: 'site-header  navbar-dark'
					}`}
				>
					{this.state.loader == false ? (
						<div
							id='header-wrap'
							className={` ${
								headername == '/index2'
									? 'position-absolute w-100 z-index-1'
									: 'position-absolute w-100 z-index-1'
							} ${visible ? 'fixed-header ' : ''}`}
							style={{ backgroundColor: '#0096db' }}
						>
							<div className='container'>
								<div className='row'>
									{/*menu start*/}
									<div className='col d-flex align-items-center justify-content-between'>
										<Link href='/'>
											{/* Boots<span className="font-weight-bold">Land.</span> */}
											<a className='navbar-brand logo text-white  h2 mb-0'>
												<img
													// src={require("assets/images/rebatecube.png")}
													src={`assets/images/rebatecube.png`}
													// className="img-fluid"
													alt='site-logo'
													width='200'
													height='50'
												/>
											</a>
										</Link>
										<Navbar className='navbar-expand-lg navbar-light ml-auto'>
											<NavbarToggler onClick={this.toggle} />
											<Collapse
												isOpen={this.state.isOpen}
												className='navbar-collapse'
												navbar
											>
												<Nav className='ml-auto text-center' navbar>
													<UncontrolledDropdown
														nav
														inNavbar
														style={{ paddingTop: '0.6vh' }}
													>
														<DropdownToggle nav caret>
															Why RebateCube?
														</DropdownToggle>

														<DropdownMenu
															id='menu'
															className='childsubmenu text-center '
														>
															<Link href='/how-rebates-work'>
																<a className='dropdown-item '>
																	How it Works for Shoppers
																</a>
															</Link>
															<Link href='/how-it-works'>
																<a className='dropdown-item'>
																	How it Works for Sellers
																</a>
															</Link>
														</DropdownMenu>
													</UncontrolledDropdown>
													<UncontrolledDropdown
														nav
														inNavbar
														style={{ paddingTop: '0.6vh' }}
													>
														<DropdownToggle nav caret>
															FAQS
														</DropdownToggle>

														<DropdownMenu
															id='menu'
															className='text-center childsubmenu'
														>
															<Link href='/shopper-faq'>
																<a className='dropdown-item'>For Shoppers</a>
															</Link>
															<Link href='/seller-faq'>
																<a className='dropdown-item'>For Sellers</a>
															</Link>
														</DropdownMenu>
													</UncontrolledDropdown>

													{/* <DropdownMenu id='menu' className='childsubmenu'>
														<a
															href='https://shopper.rebatecube.com/signin'
															className='dropdown-item'
														>
															Sign In
														</a>
													</DropdownMenu> */}

													{/* </UncontrolledDropdown>  */}
													{/* <DropdownMenu id={`submenu_${index}`} className="childsubmenu"> */}
													{/* <Nav className="ml-auto" navbar>
                                                {navLinks.map((navLink, index) => (

                                                    (navLink.type && navLink.type === 'subMenu') ?
                                                        <UncontrolledDropdown nav inNavbar key={index}>
                                                            <DropdownToggle nav caret >
                                                                {navLink.menu_title}
                                                            </DropdownToggle>
                                                            <DropdownMenu id={`submenu_${index}`} className="childsubmenu">
                                                                {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                                                    (subNavLink.type && subNavLink.type === 'childsubMenu') ?
                                                                        <UncontrolledDropdown nav inNavbar className="dropdown-submenu" key={index}>
                                                                            <DropdownToggle nav caret className="dropdown-item" >
                                                                                {subNavLink.menu_title}
                                                                            </DropdownToggle>
                                                                            <DropdownMenu id={`childsubmenu_${index}`}>
                                                                                {subNavLink.child_routes && subNavLink.child_routes.map((ChildsubNavLink, i) =>
                                                                                     <DropdownItem key={i} tag={Link} to={ChildsubNavLink.path}  onClick={this.handleClick.bind(this)} >{ChildsubNavLink.menu_title}
                                                                                     </DropdownItem>
                                                                                )}
                                                                            </DropdownMenu>
                                                                        </UncontrolledDropdown>
                                                                        :
                                                                        <DropdownItem key={index} tag={Link} to={subNavLink.path}>{subNavLink.menu_title}
                                                                        </DropdownItem>
                                                                ))}
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                        :
                                                        <NavItem>
                                                            <NavLink href={navLink.path}> {navLink.menu_title}</NavLink>
                                                        </NavItem>
                                                ))}

                                            </Nav> */}

													<a
														className={
															isMobile
																? 'btn btn-light ml-1 mb-1 d-lg-block '
																: 'btn btn-light ml-8 d-lg-block button-height '
														}
														onClick={() =>
															this.setState({ ismodalSignIn: true })
														}
													>
														Sign In
													</a>
													<br />
													<a
														className={
															isMobile
																? 'btn btn-light ml-1 mb-1 d-lg-block'
																: 'btn btn-light ml-8 d-lg-block button-height'
														}
														onClick={() => this.setState({ ismodal: true })}
													>
														Sign Up
													</a>
													<br />
													<Link href='/seller-product-launch'>
														<a
															className={
																isMobile
																	? 'btn btn-light ml-1 mb-1 d-lg-block'
																	: 'btn btn-light ml-8 d-lg-block'
															}
														>
															{' '}
															RebateCube for Seller{' '}
														</a>
													</Link>
												</Nav>
											</Collapse>
										</Navbar>
									</div>
									{/*menu end*/}
								</div>
							</div>
						</div>
					) : (
						<div id='ht-preloader'>
							<div className='loader clear-loader'>
								<span />
								<p>BootsLand</p>
							</div>
						</div>
					)}
				</header>
			</>
		);
	}
}

export default Header3;
