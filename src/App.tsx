import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import Tributes from "./components/pages/Tributes";
import TributeDetail from "./components/pages/TributeDetail";
import Events from "./components/pages/Events";
import Maps from "./components/pages/Maps";
import Items from "./components/pages/Items";
import Games from "./components/pages/Games";
import GameDetail from "./components/pages/GameDetail";
import { useState } from "react";
import { Tribute } from "./models/Tribute";

function App() {
    const [tributes, setTributes] = useState<Tribute[]>([]);
    return (
        <BrowserRouter>
            <div className="flex flex-col sm:flex-row min-h-screen w-auto font-serif">
                <Navigation />
                <div className="sm:w-64 sm:h-screen"></div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/tributes"
                        element={
                            <Tributes
                                tributes={tributes}
                                setTributes={setTributes}
                            />
                        }
                    ></Route>
                    <Route
                        path="/tributes/:id"
                        element={<TributeDetail />}
                    ></Route>
                    <Route path="/events" element={<Events />}></Route>
                    <Route path="/maps" element={<Maps />}></Route>
                    <Route path="/items" element={<Items />}></Route>
                    <Route path="/games" element={<Games />}></Route>
                    <Route path="/games/:id" element={<GameDetail />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
