export const navbarStyle = {
  background: 'linear-gradient(90deg, rgba(51, 51, 51, 1) 0%, rgba(26, 26, 26, 1) 100%)',
  padding: '15px 30px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between', // Alineamos los elementos
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: '0',
  zIndex: '100',
  paddingRight: '20px',
  boxSizing: 'border-box', // Asegura que no haya desbordes
};

export const menuStyle = {
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  flex: 1,
  justifyContent: 'center',
};

export const dropdownMenuStyle = {
  position: 'absolute',
  top: '60px', // Ajustar la posición del menú
  right: '0',
  backgroundColor: '#333',
  padding: '10px',
  display: 'none',
  listStyleType: 'none',
};

export const dropdownMenuOpenStyle = {
  ...dropdownMenuStyle,
  display: 'block', // Mostrar el menú cuando se abre
};

export const dropdownLinkStyle = {
  color: '#e0e0e0',
  textDecoration: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  transition: 'background-color 0.3s, color 0.3s',
};

export const hamburgerStyle = {
  color: '#fff',
  background: 'transparent',
  border: 'none',
  fontSize: '30px',
  cursor: 'pointer',
  display: 'none', // Ocultamos el botón hamburguesa en pantallas grandes
};

export const linkStyle = {
  color: '#e0e0e0',
  textDecoration: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  transition: 'background-color 0.3s, color 0.3s',
};

export const spanStyle = {
  color: '#fff',
  fontSize: '18px',
  marginRight: '80px',
};

export const containerStyle = {
  padding: '20px',
  width: '100%',
  maxWidth: '100%',
  margin: '0 auto',
  boxSizing: 'border-box',
};

export const formContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '0px',
  justifyItems: 'center',
  alignItems: 'center',
  marginTop: '20px',
  maxWidth: '100%',
};

export const inputStyle = {
  padding: '10px',
  margin: '10px 0',
  width: '100%',
  maxWidth: '400px',
  gridColumn: 'span 2',
};

export const selectStyle = {
  padding: '10px',
  margin: '10px 0',
  width: '100%',
  maxWidth: '200px',
};

export const charactersContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
  maxWidth:'100%',
};

export const characterCardStyle = {
  width: '322px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  marginBottom: '20px',
};

export const characterCardHoverStyle = {
  transform: 'scale(1.05)',
};

export const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '5px 0',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  bottom: '0',
  zIndex: '10',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
};

export const footerTextStyle = {
  margin: '5px 0',
  fontSize: '14px',
};

export const errorStyle = {
  color: '#ff0000',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '10px',
  border: '1px solid #ff0000',
  borderRadius: '5px',
  backgroundColor: '#ffe6e6',
  margin: '10px 0',
  textAlign: 'center',
};

export const detailsContainerStyle = {
  backgroundColor: '#1e1e1e',
  padding: '50px',
  borderRadius: '8px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
  maxWidth: '600px',
  width: '90%',
  minHeight: '400px',
  textAlign: 'left',
  fontSize: '18px',
  lineHeight: '1.6',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '40px auto',
};

export const detailsHeaderStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#f1f1f1',
};

export const detailsTextStyle = {
  marginBottom: '15px',
  color: '#ccc',
};

export const characterImageStyle = {
  width: '100%',
  maxWidth: '300px',
  borderRadius: '8px',
  marginBottom: '20px',
};

export const pageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#121212',
  maxWidth:'100%'
};