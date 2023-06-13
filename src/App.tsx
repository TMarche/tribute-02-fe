import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/generic/Navigation";
import Home from "./components/_Home/_Home";
import Tributes from "./components/_Tributes/_Tributes";
import TributeDetail from "./components/_TributeEdit/_TributeEdit";
import Events from "./components/_Events/_Events";
import Maps from "./components/_Maps/_Maps";
import Items from "./components/_Items/_Items";
import Games from "./components/_Games/_Games";
import GameDetail from "./components/_GameEdit/_GameEdit";
import { useState } from "react";
import { Tribute } from "./models/Tribute";
import { GameEvent } from "./models/GameEvent";
import { BASE_ITEMS_TABLE } from "./models/tables/BaseItems";
import { Item } from "./models/Item";
import { TributeItem } from "./models/mappings/TriibuteItem";
import ItemEdit from "./components/_ItemEdit/_ItemEdit";
import ReduxTest from "./components/_ReduxTest/_ReduxTest";

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
                    <Route path="/" element={<Home />} />
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
                    />
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
                    />
                    <Route path="/events" element={<Events />} />
                    <Route path="/maps" element={<Maps />} />
                    <Route
                        path="/items"
                        element={<Items items={items} setItems={setItems} />}
                    />
                    <Route path="/items/:id" element={<ItemEdit />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/games/:id" element={<GameDetail />} />
                    <Route path="/reduxTest" element={<ReduxTest />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
