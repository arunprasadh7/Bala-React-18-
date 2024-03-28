const Footer = () => {
  const year = new Date();
  return (
    <footer>
      <p>&copy; {year.getFullYear()} All Rights Reserved. </p>
    </footer>
  );
};

export default Footer;
