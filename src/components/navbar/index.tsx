
import { Link, useLocation } from 'react-router-dom';
import classes from './navbar.module.css';

interface INavbarProps {
    handleShowNavbar: () => void;
}

const Navbar = ({ handleShowNavbar }: INavbarProps) => {
    const location = useLocation();

    const handleChackActive = (href: string) => {
        return location.pathname === href;
    };

    const linkItems = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Program Details',
            href: '/program-details'
        },
        {
            name: 'First Initiative Details: Nigrum Arca',
            href: '/nigrum-arca-details'
        },
        {
            name: 'Winning Project of the "Nigrum Arca"',
            href: '/winning-project'
        },
        {
            name: 'Collaborators',
            href: '/collaborators'
        },
        {
            name: 'Participant Portal',
            href: '/participant-portal'
        },
        {
            name: 'Events and Activities',
            href: '/events-activities'
        },
        {
            name: 'Blog/News Section',
            href: '/blog-news'
        },
        {
            name: 'Contact and Support',
            href: '/contact-support'
        }
    ];

    return (
        <div
            className={classes.navbarContainer}
            onClick={handleShowNavbar}
        >
            <nav className={`${classes.navbar} ${classes.visible}`} 
                    onClick={e => {
                        e.stopPropagation()
                    }}>
                <div className={classes.closeNavbar}>
                    <button onClick={handleShowNavbar}>&#10006;</button>
                </div>
                <div className={classes.links}>
                    {linkItems.map((link) => (
                        <Link
                            onClick={handleShowNavbar}
                            to={link.href}
                            key={link.name}
                            className={
                                handleChackActive(link.href)
                                    ? classes.activeLink
                                    : classes.link
                            }
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
