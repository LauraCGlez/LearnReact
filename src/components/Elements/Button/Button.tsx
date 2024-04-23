import './Button.css';

interface ButtonProps {
    id?: string,
    text: string,
    color?: 'light' | 'medium' | 'dark',
    rounded?: boolean,
    action?(): void,
}

const Button = ({
    id,
    text,
    color,
    rounded,
    action
}: ButtonProps) => {
    const defaultName = "button";

    const getColorModifiers = () => {
        return color ? `${defaultName}--${color} ` : "";
    }

    const getShapeModifiers = () => {
        return `${defaultName}--shape--${rounded ? "round" : "default"} `;
    }

    const modifiers = `${getColorModifiers()} ${getShapeModifiers()}`;

    return (
        <button
            id={id}
            className={`${defaultName} ${modifiers}`}
            onClick={action}
        >
            <span className={`${defaultName}__text`}>{text}</span>
        </button>
    );
};

export default Button;