import "../App.css";

const Log = ({count, list, goal}) => {
    return (
        <div className="log box has-background-primary-light" style={{maxWidth:"50vw"}}>
            {list.map((item, index) => {
                return(
                    <tt key={index}>{item}→</tt>
                )
            })}
            <p>ジャンプ数：{count}</p>
            <p>goal:{goal.name}</p>
        </div>
    )
}

export default Log;