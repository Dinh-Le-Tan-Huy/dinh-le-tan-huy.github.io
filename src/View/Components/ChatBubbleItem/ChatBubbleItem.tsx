import { styles } from "./ChatBubbleItemTyle";

interface ChatBubbleItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const ChatBubbleItem = ({ question, answer, isOpen, onToggle }: ChatBubbleItemProps) => {

    return (
        <div style={styles.container}>
            {/* Question button */}
            <button
                onClick={onToggle}
                style={{
                    ...styles.questionButton,
                    borderColor: isOpen ? 'oklch(52% 0.18 265 / 0.30)' : undefined,
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'oklch(96.5% 0.008 250)';
                    e.currentTarget.style.borderColor = 'oklch(52% 0.18 265 / 0.25)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'oklch(100% 0 0)';
                    e.currentTarget.style.borderColor = isOpen ? 'oklch(52% 0.18 265 / 0.30)' : 'oklch(90% 0.01 250)';
                }}
            >
                <span>{question}</span>
                {/* + icon rotates to × when open */}
                <span style={styles.iconWrapper(isOpen)}>
                    +
                </span>
            </button>

            {/* Answer bubble — always rendered for CSS animation */}
            <div style={styles.answerWrapper(isOpen)}>
                <div style={styles.answerBubble}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default ChatBubbleItem;