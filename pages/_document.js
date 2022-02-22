import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='icon' href='/favicon-new.ico' />
					{/* <link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico" /> */}
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/assets/images/apple-touch-icon.png'
					/>

					<link rel='manifest' href='/site.webmanifest' />
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
					<meta name='msapplication-TileColor' content='#da532c' />

					<link rel='stylesheet' href='assets/css/index.css' />
					<link rel='stylesheet' href='assets/css/bootstrap.min.css' />
					<link rel='stylesheet' href='assets/css/animate.css' />
					<link rel='stylesheet' href='assets/css/jquery-ui.css' />
					<link rel='stylesheet' href='assets/css/lightslider.min.css' />
					<link rel='stylesheet' href='assets/css/line-awesome.min.css' />
					<link rel='stylesheet' href='assets/css/magnific-popup.css' />
					<link rel='stylesheet' href='assets/css/owl.carousel.css' />
					<link rel='stylesheet' href='assets/css/spacing.css' />
					<link rel='stylesheet' href='assets/css/theme.min.css' />
					<link rel='stylesheet' href='assets/css/themify-icons.css' />
				</Head>
				<body>
					<Main />
					<NextScript />

					{/* <script src='Scripts/js/jquery-ui.js'></script> */}

					{/* <script src='assets/js/bootstrap.min.js'></script> */}
				</body>
			</Html>
		);
	}
}

export default MyDocument;
