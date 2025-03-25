import { footerStyle, footerTextStyle } from '../assets/Styles/styles';
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={footerTextStyle}>
        Desarrollado por{' '}
        <span>Enzo Zúñiga</span>{' '}
        y{' '}
        <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>
          Chat GPT
        </a>
      </p>
      <p style={footerTextStyle}>
        Email: <a href="mailto:ez.nyves@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>ez.nyves@gmail.com</a>
      </p>
    </footer>
  );
};

export default Footer;