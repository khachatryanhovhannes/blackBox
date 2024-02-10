import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Details, Error404, NigrumArcaDetails, WinningProject, Mediation, Immersion, TheMountA } from "../pages";
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
                    <Route path="meditation-with-four-elements" element={<Mediation />} />
                    <Route path="immersion" element={<Immersion />} />
                    <Route path="the-mount-a" element={<TheMountA />} />
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </Router >
    );
}

export default Routing;
