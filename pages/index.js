import Hero from '../sections/Hero';
import About from '../sections/About';
import Contact from '../sections/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Contact />
			<ToastContainer />
		</main>
	);
}
