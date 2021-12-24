import classes from "./Friends.module.css";
import andreyAvatar from "../andreiAvatar.jpg"
import avatar2 from "../avatar2.jpg"
import avatar3 from "../avatar3.jpg"

const Friends = () => {
    return (<div className={classes.nav}>
            <nav><img src={andreyAvatar}/>Andrey</nav>

            <nav><img src={avatar2}/>Rengar</nav>

            <nav><img src={avatar3}/>Woody</nav>
        </div>

    )
}
export default Friends;









