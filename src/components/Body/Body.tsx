import Button from "../Elements/Button/Button.tsx";
import './Body.css';
import { useNavigate } from "react-router-dom";

const Body = () => {
    const buttons = [
        {id: 1, text: "Go to Caselapinga"},
        {id: 2, text: "Second Button"},
        {id: 3, text: "Third Button"},
    ];
    const navigate = useNavigate();

    const goToYoutube = () => {
        navigate("/address");
    }

    return (
        <div>
            <h1>Welcome to Raccoon Games</h1>
            <div className="counter-section">
                <Button
                    id="counter-btn"
                    text={buttons[0].text}
                    color={"dark"}
                    rounded
                    action={goToYoutube}
                />
            </div>
        </div>
    );
};

export default Body;