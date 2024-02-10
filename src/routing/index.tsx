import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Details, Error404, NigrumArcaDetails, WinningProject } from "../pages";
import { Header } from "../components";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="program-details" element={<Details />} />
                    <Route path="nigrum-arca-details" element={<NigrumArcaDetails />} />
                    <Route path="winning-project" element={<WinningProject />} />
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </Router >
    );
}

export default Routing;
