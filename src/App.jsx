import { useState, useEffect } from "react";
import './App.css';
function App() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [start, setStart] = useState();
    const [goal, setGoal] = useState();
    const [count, setCount] = useState(0);
    const [list, setList] = useState(["startとgoalを決めて"]);
    let url = `https://ja.wikipedia.org/w/api.php?action=query&origin=*&format=json&bltitle=${title}&list=backlinks&bllimit=max`;
    useEffect(() => {
        (async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            // setData(jsonData.query.backlinks);
        })();
        console.log(document.getElementsByTagName("iframe")[0].contentWindow);
        (async () => {
            const res = await fetch(`https://ja.wikipedia.org/w/api.php?format=xml&origin=*&action=query&prop=revisions&titles=%E3%82%A8%E3%83%9E%E3%83%BB%E3%83%AF%E3%83%88%E3%82%BD%E3%83%B3&rvprop=content&rvparse`);
            //  const json = await res.json();
            // console.log(res);
        })();
    }, [title]);
    // console.log(data);
    // const x = document.querySelector("iframe").contentWindow;
    // console.log(x);
    if(title === goal) {
        <h1>CLEAR!</h1>
    }
    return (
        <div>
            <header>
                <h1 style={{ color: 'blue' }}>WikiJump</h1>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    console.log(event.target.elements.start.value);
                    setStart(event.target.elements.start.value);
                    setList([event.target.elements.start.value]);
                    setTitle(start);
                    setGoal(event.target.elements.goal.value);
                }}>
                    <div>
                        {list.map((item) => {
                            return (
                                <span>{item}→</span>
                            )

                        })}
                    </div>
                    <div>
                        <span>ジャンプ数：{count}回</span>
                    </div>
                    <label>
                        STRAT:
                        <input type="text" name="start" />
                    </label>
                    <label>
                        GOAL:
                        <input type="text" name="goal" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    console.log(event.target.elements.title.value);
                    setTitle(event.target.elements.title.value);
                    setList([...list, event.target.elements.title.value]);
                    setCount(count + 1);
                    console.log(list);
                }}>
                    <label>
                        Title:
                        <input type="text" name="title" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </header>
            <main>
                <iframe onSubmit={() => {
                    event.preventDefault();
                    console.log(title);
                }} src={`https://ja.wikipedia.org/wiki/${title}`} width="80%" height="400"></iframe>
            </main>
            <footer>
                {data.map((item, index) => {
                    return (
                        <p key={index}>{item.title},</p>
                    )
                })}
            </footer>
        </div>
    );
}

export default App;