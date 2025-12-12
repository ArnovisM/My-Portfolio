import { Link } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { type: 'system', text: 'Welcome! Send me a message.' }
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        if (message.trim()) {
            setChatHistory([...chatHistory, { type: 'player', text: message }]);
            setMessage('');

            // Simulate response
            setTimeout(() => {
                setChatHistory(prev => [...prev, {
                    type: 'system',
                    text: 'Thanks for your message! Please send me a message on WhatsApp: +57 3146544539 or click the email icon below.'
                }]);
            }, 1000);
        }
    };

    return (
        <div className="screen-container contact-screen">
            <Link to="/" className="back-button">
                <ArrowLeft size={24} />
            </Link>

            <h1 className="page-title">Chat & Contact</h1>

            <div className="chat-container">
                <div className="chat-window">
                    {chatHistory.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.type}`}>
                            <span className="message-prefix">
                                {msg.type === 'system' ? '[Server]' : '[You]'}
                            </span>
                            {' '}
                            {msg.text}
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSend} className="chat-input-container">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="chat-input"
                        maxLength={100}
                    />
                    <button type="submit" className="send-button">
                        <Send size={20} />
                    </button>
                </form>
            </div>

            <div className="contact-links">
                <a href="mailto:arnovisua@gmail.com" className="mc-button small">
                    📧 Email
                </a>
                <a href="https://github.com/ArnovisM" target="_blank" rel="noopener noreferrer" className="mc-button small">
                    🐙 GitHub
                </a>
                <a href="https://www.linkedin.com/in/arnovis-montero-312223233" target="_blank" rel="noopener noreferrer" className="mc-button small">
                    💼 LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Contact;
