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
import { GameEvent } from "./models/GameEvent";
import { BASE_ITEMS_TABLE } from "./models/tables/BaseItems";
import { Item } from "./models/Item";
import { TributeItem } from "./models/mappings/TriibuteItem";

function App() {
    const [tributes, setTributes] = useState<Tribute[]>([]);
    const [items, setItems] = useState<Item[]>(BASE_ITEMS_TABLE);
    const [tributesItems, setTributesItems] = useState<TributeItem[]>([]);
    const [events, setEvents] = useState<GameEvent[]>([]);
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
                                items={items}
                                tributesItems={tributesItems}
                                setTributes={setTributes}
                                setTributesItems={setTributesItems}
                            />
                        }
                    ></Route>
                    <Route
                        path="/tributes/:id"
                        element={
                            <TributeDetail
                                tributes={tributes}
                                items={items}
                                tributesItems={tributesItems}
                                setTributes={setTributes}
                            />
                        }
                    ></Route>
                    <Route path="/events" element={<Events />}></Route>
                    <Route path="/maps" element={<Maps />}></Route>
                    <Route
                        path="/items"
                        element={<Items items={items} setItems={setItems} />}
                    ></Route>
                    <Route path="/games" element={<Games />}></Route>
                    <Route path="/games/:id" element={<GameDetail />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
