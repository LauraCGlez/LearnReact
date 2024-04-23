import Button from "../Elements/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import RaccoonLogo from "../../assets/icons/RaccoonLogo.tsx";

const Address = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/home");
    }

    return (
        <div>
            <h1>Welcome to Address</h1>
            <Button
                id="counter-btn"
                text={"Go back"}
                color={"dark"}
                rounded
                action={goBack}
            />
            <div style={{fontSize: "10rem"}}>
                <RaccoonLogo/>
            </div>
        </div>
    );
};

export default Address;