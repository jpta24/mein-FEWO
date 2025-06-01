import { useLanguage } from '../../contexts/LanguageContext';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import './Navbar.scss';

const CustomNavbar = () => {
	const { language, setLanguage, t } = useLanguage();

	return (
		<Navbar expand='lg' className='custom-navbar' sticky='top'>
			<Container>
				<Navbar.Brand href='#home' className='logo'>
					meinFeWoWeb
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto align-items-lg-center'>
						<Nav.Link href='#home'>{t.nav.home}</Nav.Link>
						<Nav.Link href='#how'>{t.nav.how}</Nav.Link>
						<Nav.Link href='#plans'>{t.nav.plans}</Nav.Link>
						<Nav.Link href='#examples'>{t.nav.examples}</Nav.Link>
						<Nav.Link href='#reviews'>{t.nav.reviews}</Nav.Link>
						<Nav.Link href='#contact'>{t.nav.contact}</Nav.Link>

						<Button href='#preview' className='preview-btn ms-lg-3'>
							{t.nav.preview}
						</Button>

						<NavDropdown
							title={language.toUpperCase()}
							id='language-selector'
							className='ms-lg-3 '
						>
							<NavDropdown.Item onClick={() => setLanguage('en')}>
								EN{' '}
							</NavDropdown.Item>
							<NavDropdown.Item onClick={() => setLanguage('de')}>
								DE
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;
