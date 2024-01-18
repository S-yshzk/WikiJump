import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
async function getWikiId(title) {
    const url = `https://ja.wikipedia.org/w/api.php?&origin=*&action=query&format=json&titles=${title}`;
    const res = await fetch(url);
    const json = await res.json();
    if(Number(Object.keys(json.query.pages)[0]) === -1) {
        alert("存在しないタイトルです")
        throw new Error("Invalid input: Page does not exist.");
    }
    const pageId = Object.keys(json.query.pages)[0]; // 一番最初のキーを取得
    return { name: title, id: pageId }
}

const setPage = ({ start, setStart, setGoal, setList, setTitle, setCount }) => {
    const navigate = useNavigate();
    return (
        <main>
            <div className="columns is-centered hero is-primary hero-body">
                <p className="title column has-text-centered">WikiJump</p>
            </div>
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    if (!event.target.elements.start.value || !event.target.elements.goal.value) {
                        alert("スタート地点とゴール地点は必須です。");
                        return;
                    }
                    if (event.target.elements.start.value === event.target.elements.goal.value) {
                        alert("スタート地点とゴール地点は異なる値を入力してください。");
                        return;
                    }
                    const startValue = await getWikiId(event.target.elements.start.value);
                    setStart(startValue);
                    setList([event.target.elements.start.value]);
                    setTitle(startValue.name);
                    const goalValue = await getWikiId(event.target.elements.goal.value);
                    setGoal(goalValue);
                    setCount(0);
                    navigate("/game");
                }}
            >
                <div className="columns is-centered field is-horizontal">
                    <div className="column is-half">
                        <label className="label">スタート地点</label>
                        <p className="control has-icons-left">
                            <input className="input" type="text" name="start" placeholder="start" required />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                                <FontAwesomeIcon icon={faFlagCheckered} />
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="columns is-centered field is-horizontal">
                    <div className="column is-half">
                        <label className="label">ゴール地点</label>
                        <p className="control has-icons-left">
                            <input className="input" type="text" name="goal" placeholder="goal" required />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                        </p>
                    </div>
                </div>
                <div className="columns is-centered control">
                    <button className="button is-link">セットしてゲームを始める</button>
                </div>
            </form>
        </main>
    )
}

export default setPage;