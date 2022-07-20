
import { BrowserRouter } from "react-router-dom";
import HomePage from " ./pages/HomePage";
import ErrorPage from " ./pages/ErrorPage";
import TripDetails from " ./pages/TripDetails";

function App( ) {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <route path={"/"} element={<HomePage />} />
                <route path={"/TripDetails"} element={<TripDetailsPage />} />
                <route path={"*"} element={<ErrorPage />}  />
                <Route path={"/product/:id"} element={<ProductPage />} /> 
                </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;