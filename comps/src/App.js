import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";

const App = () => {
    return <div className="flex flex-wrap gap-4 min-h-screen">
        <Sidebar />

        <div className="flex-1">
            <Route path="/accordion">
                <AccordionPage />
            </Route>
            <Route path="/">
                <DropdownPage />
            </Route>
            <Route path="/button">
                <ButtonPage />
            </Route>
        </div>
    </div>;
}

export default App;