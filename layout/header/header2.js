import React from 'react';
import navLinks from '../../api/NavLinks1';
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
} from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
class Header2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			visible: false,
			loader: false,
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
		const { visible, isMobile } = this.state;
		return (
			<header className='site-header'>
				{this.state.loader == false ? (
					<div id='header-wrap' className={`${visible ? 'fixed-header ' : ''}`}>
						<div className='container'>
							<div className='row'>
								{/*menu start*/}
								<div className='col d-flex align-items-center justify-content-between'>
									<Link
										className='navbar-brand logo text-dark h2 mb-0'
										href='/'
									>
										<a>
											<img
												src={`/assets/images/rebatecube-logo.png`}
												alt='RebateCube-logo'
												width='180'
												height='40'
											/>
										</a>
									</Link>
									<Navbar className='navbar-expand-lg navbar-light ml-auto mr-auto'>
										<NavbarToggler onClick={this.toggle} />
										<Collapse
											isOpen={this.state.isOpen}
											className=' navbar-collapse'
											navbar
										>
											<Nav className='ml-auto' navbar>
												{navLinks.map((navLink, index) =>
													navLink.type && navLink.type === 'subMenu' ? (
														<UncontrolledDropdown nav inNavbar key={index}>
															<DropdownToggle nav caret>
																{navLink.menu_title}
															</DropdownToggle>
															<DropdownMenu
																id={`submenu_${index}`}
																className='childsubmenu'
															>
																{navLink.child_routes &&
																	navLink.child_routes.map((subNavLink, k) =>
																		subNavLink.type &&
																		subNavLink.type === 'childsubMenu' ? (
																			<UncontrolledDropdown
																				nav
																				inNavbar
																				className='dropdown-submenu'
																				key={k}
																			>
																				<DropdownToggle
																					nav
																					caret
																					className='dropdown-item'
																				>
																					{subNavLink.menu_title}
																				</DropdownToggle>
																				<DropdownMenu id={`childsubmenu_${k}`}>
																					{subNavLink.child_routes &&
																						subNavLink.child_routes.map(
																							(ChildsubNavLink, i) => (
																								<DropdownItem
																									key={i}
																									tag={Link}
																									to={ChildsubNavLink.path}
																									onClick={this.handleClick.bind(
																										this,
																									)}
																								>
																									{ChildsubNavLink.menu_title}
																								</DropdownItem>
																							),
																						)}
																				</DropdownMenu>
																			</UncontrolledDropdown>
																		) : (
																			<DropdownItem
																				key={index}
																				tag={Link}
																				to={subNavLink.path}
																			>
																				{subNavLink.menu_title}
																			</DropdownItem>
																		),
																	)}
															</DropdownMenu>
														</UncontrolledDropdown>
													) : (
														<NavItem>
															<NavLink href={navLink.path}>
																{' '}
																{navLink.menu_title}
															</NavLink>
														</NavItem>
													),
												)}
												<a className='pricing'>Pricing</a>
												{/* <AnchorLink href='#Pricing' className='pricing'>
													Pricing
												</AnchorLink> */}
											</Nav>
											<a
												className={
													isMobile
														? 'btn btn-primary ml-1 d-lg-block'
														: 'btn btn-primary ml-10 d-lg-block'
												}
												href='https://seller.rebatecube.com/signup'
											>
												Sign Up
											</a>
										</Collapse>
									</Navbar>
								</div>
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
		);
	}
}

export default Header2;
