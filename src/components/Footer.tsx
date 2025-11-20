import './Footer.scss';
import fbIcon from '../assets/sm_icons/fb_icon.svg';
import linkedinIcon from '../assets/sm_icons/in_icon.svg';
import instaIcon from '../assets/sm_icons/Insta_icon.svg';

const SOCIAL_LINKS = [
    {
        id: 'instagram',
        url: 'https://instagram.com',
        label: 'Instagram',
        icon: instaIcon
    },
    {
        id: 'facebook',
        url: 'https://facebook.com',
        label: 'Facebook',
        icon: fbIcon
    },
    {
        id: 'linkedin',
        url: 'https://linkedin.com',
        label: 'LinkedIn',
        icon: linkedinIcon
    },

];

const NAV_ITEMS = [
    { id: 1, text: 'Lorem Ipsum', href: '#' },
    { id: 2, text: 'Lorem ipsum', href: '#' }
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__bottom">
                    <div className="footer__social">
                        {SOCIAL_LINKS.map((social) => (
                            <a
                                key={social.id}
                                href={social.url}
                                className="footer__social-link"
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={social.icon} alt={social.label} />
                            </a>
                        ))}
                    </div>
                    <nav className="footer__links">
                        {NAV_ITEMS.map((item) => (
                            <a key={item.id} href={item.href} className="footer__link">
                                {item.text}
                            </a>
                        ))}
                    </nav>
                    <div className="footer__copyright">© TechwareLab copyrights</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
