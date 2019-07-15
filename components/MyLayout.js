import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <main style={layoutStyle}>
    <Header />
    {props.children}
  </main>
);

export default Layout;