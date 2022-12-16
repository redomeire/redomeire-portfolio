import ResponsiveAppBar from "../AppBar";
import Footer from "../Footer";

const AppLayout = ({ children }) => {
    return (
        <div>
            <ResponsiveAppBar />
            <div style={{ minHeight: '100vh' }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default AppLayout;