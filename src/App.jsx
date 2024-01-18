import { useState, useEffect } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import Header from "./componens/Header";
import SetPage from "./pages/SetPage";
import 'bulma/css/bulma.css';
import From from "./componens/From";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GamePage from "./pages/GamePage";
import ClearPage from "./pages/ClearPage";
function App() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState(null);
    const [start, setStart] = useState({ name: "", pageid: "" });
    const [goal, setGoal] = useState({ name: "", pageid: "" });
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            {isLoading&& 
            <div className="loading-overlay">
            <h1>LOADING...</h1>
            <p>クリックしないでください</p>
            </div>}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SetPage start={start} setStart={setStart} setGoal={setGoal} setList={setList} setTitle={setTitle} setIsLoadingisLoading={setIsLoading} setCount={setCount}/>}></Route>
                    <Route path="/game" element={<GamePage title={title} list={list} goal={goal} count={count} setCount={setCount} setTitle={setTitle} setList={setList} setIsLoading={setIsLoading} />}></Route>
                    <Route path="/clear" element={<ClearPage count={count} list={list}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;