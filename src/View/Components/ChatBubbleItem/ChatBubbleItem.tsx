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
                    borderColor: isOpen ? 'rgba(0,216,255,0.25)' : undefined,
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#1a2540';
                    e.currentTarget.style.borderColor = 'rgba(0,216,255,0.2)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#111828';
                    e.currentTarget.style.borderColor = isOpen ? 'rgba(0,216,255,0.25)' : 'rgba(255,255,255,0.07)';
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