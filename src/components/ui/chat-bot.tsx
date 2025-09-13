import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Bot, User, BookOpen, Calendar, MapPin, Utensils, HelpCircle } from 'lucide-react';
import aiAssistantImage from '@/assets/ai-assistant.jpg';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm MRU Assistant, your friendly campus AI helper! 🎓 I'm here to help you with everything about Mallareddy Deemed To Be University. Ask me about academic schedules, facilities, dining options, library resources, or any campus services!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    { text: "📅 Academic Schedule", icon: Calendar },
    { text: "📚 Library Hours", icon: BookOpen },
    { text: "🍽️ Dining Services", icon: Utensils },
    { text: "🗺️ Campus Map", icon: MapPin },
    { text: "❓ General Help", icon: HelpCircle },
  ];

  const botResponses: { [key: string]: string } = {
    schedule: "📅 **Academic Schedule:**\n\n• **Regular Classes:** Monday-Friday, 9:00 AM - 5:00 PM\n• **Lab Sessions:** Available Monday-Saturday\n• **Library Study Hours:** 7:00 AM - 11:00 PM\n• **Exam Schedules:** Check student portal for updates\n\nWould you like specific department timings?",
    library: "📚 **Library Services:**\n\n• **Main Library:** Open 7:00 AM - 11:00 PM daily\n• **Digital Resources:** 24/7 online access\n• **Study Rooms:** Bookable via library portal\n• **Research Support:** Available 9:00 AM - 6:00 PM\n• **Inter-library Loans:** Contact librarian\n\nNeed help with specific resources?",
    dining: "🍽️ **Dining Options:**\n\n• **Main Cafeteria:** 7:30 AM - 9:00 PM\n• **Food Court:** 11:00 AM - 8:00 PM\n• **Coffee Shop:** 8:00 AM - 6:00 PM\n• **Healthy Options:** Salad bar & juice counter\n\nMeal plans and special dietary options available!",
    map: "🗺️ **Campus Navigation:**\n\n• **Main Academic Block:** Central campus\n• **Library:** North wing, 2nd floor\n• **Administrative Office:** Ground floor, main building\n• **Student Services:** First floor, admin block\n• **Parking:** Available at main entrance\n\nNeed directions to a specific location?",
    help: "❓ **I can help you with:**\n\n• Academic schedules and class timings\n• Library resources and study spaces\n• Dining services and meal plans\n• Campus facilities and directions\n• Administrative procedures\n• Student services and support\n• Events and activities\n\nJust ask me anything about campus life! 😊",
    default: "That's a great question! 🤔 I'm here to help with campus-related queries. You can ask me about:\n\n• Academic schedules\n• Library services\n• Dining options\n• Campus facilities\n• Administrative help\n\nWhat specific information can I help you find?"
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('schedule') || lowerInput.includes('class') || lowerInput.includes('timing')) {
      return botResponses.schedule;
    }
    if (lowerInput.includes('library') || lowerInput.includes('book') || lowerInput.includes('study')) {
      return botResponses.library;
    }
    if (lowerInput.includes('food') || lowerInput.includes('dining') || lowerInput.includes('cafeteria') || lowerInput.includes('eat')) {
      return botResponses.dining;
    }
    if (lowerInput.includes('map') || lowerInput.includes('direction') || lowerInput.includes('location') || lowerInput.includes('where')) {
      return botResponses.map;
    }
    if (lowerInput.includes('help') || lowerInput.includes('support') || lowerInput.includes('assist')) {
      return botResponses.help;
    }
    
    return botResponses.default;
  };

  const handleQuickReply = (text: string) => {
    setInputText(text);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col animate-slide-up shadow-glow">
        {/* Header */}
        <div className="bg-gradient-primary p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 animate-pulse-glow">
                <AvatarImage src={aiAssistantImage} alt="MRU Assistant" />
                <AvatarFallback className="bg-primary-glow">
                  <Bot className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-primary-foreground">MRU Assistant</h3>
                <p className="text-xs text-primary-foreground/80">Your Campus AI Helper</p>
              </div>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-white/20"
            >
              ✕
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={aiAssistantImage} alt="Bot" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${message.isBot
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-gradient-secondary text-secondary-foreground'
                    }`}
                >
                  <div className="text-sm whitespace-pre-line">{message.text}</div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                {!message.isBot && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={aiAssistantImage} alt="Bot" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </ScrollArea>

        {/* Quick Replies */}
        <div className="p-4 border-t">
          <div className="flex flex-wrap gap-2 mb-3">
            {quickReplies.map((reply, index) => (
              <Button
                key={index}
                onClick={() => handleQuickReply(reply.text)}
                variant="outline"
                size="sm"
                className="text-xs hover-lift"
              >
                <reply.icon className="w-3 h-3 mr-1" />
                {reply.text}
              </Button>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask me about campus services..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="bg-gradient-primary hover-scale"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChatBot;