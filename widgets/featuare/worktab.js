import React, { Component } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

class Worktab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			SelectedTab: '1',
		};
		this.toggle = this.toggle.bind(this);
	}
	toggle(tab) {
		if (this.state.SelectedTab !== tab) {
			this.setState({
				SelectedTab: tab,
			});
		}
	}
	render() {
		return (
			<div className='row mb-0'>
				<div className='col-12'>
					<Nav tabs className='d-flex justify-content-center border-0'>
						<NavItem active>
							<NavLink
								className={
									`border-0 ` +
									classnames({ active: this.state.SelectedTab === '1' })
								}
								onClick={() => {
									this.toggle('1');
								}}
							>
								Url
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={
									`border-0 ` +
									classnames({ active: this.state.SelectedTab === '2' })
								}
								onClick={() => {
									this.toggle('2');
								}}
							>
								Super Url
							</NavLink>
						</NavItem>
						<NavItem disabled>
							<NavLink
								className={
									`border-0 ` +
									classnames({ active: this.state.SelectedTab === '3' })
								}
								onClick={() => {
									this.toggle('3');
								}}
							>
								Search Find By
							</NavLink>
						</NavItem>
					</Nav>
					<TabContent activeTab={this.state.SelectedTab} className='mt-8'>
						<TabPane tabId='1' className='fade show' active>
							<div className='row align-items-center justify-content-between mb-10'>
								<div className='col-12 col-lg-6 mb-6 mb-lg-0'>
									<img
										src={`/assets/images/svg/09.svg`}
										alt='Image'
										className='img-fluid'
									/>
								</div>
								<div className='col-12 col-lg-6 col-xl-5'>
									<div>
										<h4 className='mt-3'>Login Account</h4>
										<p className='lead'>
											Bootsland latest technologies it voluptatem accusantium
											doloremque laudantium, totam rem aperiam.
										</p>
										<p className='mb-0'>
											We use the latest technologies it voluptatem accusantium
											doloremque laudantium, totam rem aperiam.
										</p>
									</div>
								</div>
							</div>
						</TabPane>
						<TabPane tabId='2' className='fade show'>
							<div className='row align-items-center justify-content-between mb-10'>
								<div className='col-12 col-lg-6 mb-6 mb-lg-0'>
									<img
										src={`/assets/images/svg/10.svg`}
										alt='Image'
										className='img-fluid'
									/>
								</div>
								<div className='col-12 col-lg-6 col-xl-5'>
									<div>
										<h4 className='mt-3'>Open Application</h4>
										<p className='lead'>
											Bootsland latest technologies it voluptatem accusantium
											doloremque laudantium, totam rem aperiam.
										</p>
										<p className='mb-0'>
											We use the latest technologies it voluptatem accusantium
											doloremque laudantium, totam rem aperiam.
										</p>
									</div>
								</div>
							</div>
						</TabPane>
						<TabPane tabId='3' className='fade show'>
							<div className='row align-items-center justify-content-between mb-0'>
								<div className='col-12 col-lg-6 mb-6 mb-lg-0'>
									<img
										src={`/assets/images/svg/11.svg`}
										alt='Image'
										className='img-fluid'
									/>
								</div>
								<div className='col-12 col-lg-6 col-xl-5'>
									<div>
										<h4 className='mt-3'>Start Chatting</h4>
										<p className='lead'>
											Bootsland latest technologies it voluptatem accusantium
											doloremque laudantium, totam rem aperiam.
										</p>
										<p className='mb-0'>
											We use the latest technologies it voluptatem accusantium
											doloremque laudantium, totam rem aperiam.
										</p>
									</div>
								</div>
							</div>
						</TabPane>
					</TabContent>
				</div>
			</div>
		);
	}
}

export default Worktab;
