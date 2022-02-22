import React, { Component } from 'react';

class Feature extends Component {
    render() {
        return (
            <section className="text-center p-0">
            <div className="container">
            <h1 className="text-center">The basics of a rebate campaign</h1>

                <div className="row align-items-center">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="px-4 py-7 rounded hover-translate bg-primary-soft">
                    <div>
                        <svg width={80} height={80} viewBox="0 0 24 24" fill="none" stroke="#f94f15" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                            <rect x={3} y={3} width={7} height={7} />
                            <rect x={14} y={3} width={7} height={7} />
                            <rect x={14} y={14} width={7} height={7} />
                            <rect x={3} y={14} width={7} height={7} />
                        </svg>
                    </div>
                    <h5 className="mt-4 mb-3">Create a campaign</h5>
                    <p className="mb-0" style={{height:200}}>Enter some basic information about your product including your product title, description, price and the cashback value you are offering.</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="px-4 py-7 rounded hover-translate">
                    <div>
                        <svg width={80} height={80} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square">
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                    </div>
                    <h5 className="mt-4 mb-3">Link to your listing</h5>
                    <p className="mb-0" style={{height:200}}>Include a direct link to your Amazon / Flipkart listing so buyers can purchase your product. For even better results use our Super URL or Search, Find, Buy option (details below).</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                    <div className="px-4 py-7 rounded hover-translate">
                    <div>
                        <svg width={80} height={80} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-wifi">
                        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                        <line x1={12} y1={20} x2={12} y2={20} />
                        </svg>
                    </div>
                    <h5 className="mt-4 mb-3">Fund & Launch</h5>
                    <p className="mb-0" style={{height:200}}>Fund your campaign using various payment methods offered and your promotion goes live on RebateCube.</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="px-4 py-7 rounded hover-translate">
                    <div>
                    <svg className="feather feather-move bg-primary p-2 rounded" width={80} height={80} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><polyline points="5 9 2 12 5 15" /><polyline points="9 5 12 2 15 5" /><polyline points="15 19 12 22 9 19" /><polyline points="19 9 22 12 19 15" /><line x1={2} y1={12} x2={22} y2={12} /><line x1={12} y1={2} x2={12} y2={22} /></svg>
                    </div>
                    <h5 className="mt-4 mb-3">Full Priced Sales</h5>
                    <p className="mb-0" style={{height:200}}>Shoppers buy your product at full price, then return to RebateCube to confirm their order. We send their cashback amounts for you.</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        );
    }
}

export default Feature;