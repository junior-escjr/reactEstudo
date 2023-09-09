import Link from "./components/Link";
import Route from "./components/Route";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";

const App = () => {
    return <div>
        <Link to="/accordion">Accordion</Link>
        <Link to="/dropdown">Dropdown</Link>

        <Route path="/accordion">
            <AccordionPage />
        </Route>
        <Route path="/dropdown">
            <DropdownPage />
        </Route>
    </div>;
}

export default App;