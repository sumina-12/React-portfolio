import { useState } from 'react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! I'm Sumina's virtual assistant. How can I help you today?", 
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')

  const quickReplies = [
    "Tell me about Sumina's skills",
    "What projects has she worked on?",
    "How can I contact her?",
    "What is her educational background?"
  ]

  const botResponses = {
    "tell me about sumina's skills": "Sumina is skilled in HTML, CSS, JavaScript, React, Node.js, Figma, and various other web technologies. She's particularly strong in frontend development and UI/UX design.",
    "what projects has she worked on": "Sumina has worked on several projects including her portfolio website, mobile app UI designs, e-commerce sites, and game development using C++. You can check out her Projects section for more details!",
    "how can i contact her": "You can reach Sumina at suminashrestha1113@gmail.com or through her social media profiles. There's also a contact form in the Contact section of this website.",
    "what is her educational background": "Sumina has passed her 10 SEE with a GPA of 3.17 and is currently studying at Adarsha Secondary School, Sanothimi, Bhaktapur.",
    "default": "That's an interesting question! For specific information about Sumina's work and background, please feel free to explore the different sections of her portfolio or contact her directly."
  }

  const handleSendMessage = () => {
    if (inputText.trim() === '') return

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Generate bot response
    setTimeout(() => {
      const lowercaseInput = inputText.toLowerCase()
      let botResponse = botResponses.default

      // Check for keyword matches
      for (const key in botResponses) {
        if (lowercaseInput.includes(key.toLowerCase()) || key.toLowerCase().includes(lowercaseInput)) {
          botResponse = botResponses[key]
          break
        }
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    }, 1000)

    setInputText('')
  }

  const handleQuickReply = (reply) => {
    setInputText(reply)
    handleSendMessage()
  }

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className={`chatbot-toggle ${isOpen ? 'active' : ''}`} onClick={toggleChatbot}>
        <span className="chatbot-icon">{isOpen ? '×' : '💬'}</span>
      </div>

      {/* Chatbot Window */}
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-profile">
            <img src="/attached_assets/20250612_134619_1756450641705.jpg" alt="Sumina's Assistant" />
            <div>
              <h4>Sumina's Assistant</h4>
              <span className="status">Online</span>
            </div>
          </div>
          <button className="chatbot-close" onClick={toggleChatbot}>×</button>
        </div>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-bubble">
                <p>{message.text}</p>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
        </div>

        {messages.length <= 1 && (
          <div className="quick-replies">
            <p>Quick questions:</p>
            {quickReplies.map((reply, index) => (
              <button 
                key={index} 
                className="quick-reply-btn"
                onClick={() => handleQuickReply(reply)}
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        <div className="chatbot-input">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage} className="send-btn">
            <span>📤</span>
          </button>
        </div>
      </div>
    </>
  )
}