import * as C from './styles';

interface ButtonProps {
    Text: string;
    onClick: () => void;
}

export const Button = ({Text, onClick} : ButtonProps) => {
    return (
        <C.Button onClick={onClick}>
            {Text}
        </C.Button>
    )
}