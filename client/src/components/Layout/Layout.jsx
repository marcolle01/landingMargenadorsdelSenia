import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='flex-grow mt-32'>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
