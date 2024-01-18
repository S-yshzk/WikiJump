import "../App.css"
import Header from "../componens/Header";
const ClearPage = ({count, list}) => {
    
    return (
        <div>
            <Header/>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Result</h2>
            <p>ジャンプ回数: {count}</p>
            {list.map((item, index) => {
                return(
                    <tt key={index}><span style={{color:"blue"}}>{item}</span>{index < list.length - 1 && <span style={{ color: "red" }}>→</span>}</tt>
                )
            })}
        </div>
        </div>
    );
};

export default ClearPage;