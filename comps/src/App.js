import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from './pages/CounterPage';
import CounterFormPage from './pages/CounterPageForm';

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
            <Route path="/modal">
                <ModalPage />
            </Route>
            <Route path="/table">
                <TablePage />
            </Route>
            <Route path="/counter">
                <CounterPage initialCount={10} />
            </Route>
            <Route path="/counter-form">
                <CounterFormPage initialCount={10} />
            </Route>
        </div>
    </div>;
}

export default App;