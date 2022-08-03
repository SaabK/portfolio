import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
	return (
		<main className='relative'>
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}

export default Layout;
