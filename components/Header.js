// import Link from 'next/link';
import Logo from '../img/profil.png';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <header>
    <h1>Bonjour TestName</h1>
    <p>Voici toutes les tâches que<br/> vous pouvez réaliser</p>
    <img src={Logo}  alt="logo" />
  </header>
);

export default Header;