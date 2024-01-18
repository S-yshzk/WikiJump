import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const From = () => {
    return (
        <div>
            {/* <form onSubmit={(event) => {
                event.preventDefault();
                setStart(event.target.elements.start.value);
                setList([event.target.elements.start.value]);
                console.log(event.target.elements.start.value);
                setTitle(start);
                setGoal(event.target.elements.goal.value);
            }}></form> */}
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email"/>
                    <FontAwesomeIcon icon={faLocationDot} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                </p>
            </div>
        </div>
    )
}

export default From;