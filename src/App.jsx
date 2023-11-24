import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState();
    let url = `https://ja.wikipedia.org/w/api.php?action=query&origin=*&format=json&bltitle=${title}&list=backlinks&bllimit=max`;
    useEffect(() => {
        (async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData.query.backlinks);
        })();
    }, [title]);
    console.log(data);
    return (
        <div>
            <header>
                <h1 style={{ color: 'blue' }}>WikiJump</h1>
                <form onSubmit={async (event) => {
                    event.preventDefault();
                    console.log(event.target.elements.title.value);
                    setTitle(event.target.elements.title.value)
                }}>
                    <label>
                        Title:
                        <input type="text" name="title" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </header>
            <main>
                <iframe src={`https://ja.wikipedia.org/wiki/${title}`} width="80%" height="400"></iframe>
            </main>
            <footer>
                {data.map((item, index) => {
                    return (
                        <text key={index}>{item.title},</text>
                    )
                })}
            </footer>
        </div>
    );
}

export default App;