
import React, { useState } from 'react';
import { Send, MessageCircle, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  selectedFile: string | null;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ selectedFile }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your security assessment assistant. I can help you analyze reports, answer questions about vulnerabilities, and provide recommendations. How can I assist you today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: inputValue,
          fileId: selectedFile
        }),
      });
    
      const data = await response.json();
    
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.reply || 'Sorry, I couldn’t get a response.',
        isBot: true,
        timestamp: new Date()
      };
    
      setMessages(prev => [...prev, botMessage]);
    } catch (err: unknown) {
      console.error('[Assistant Error]', JSON.stringify(err, null, 2));
    
      res.status(500).json({
        message: 'Failed to get assistant response',
        detail: typeof err === 'object' && err !== null ? (err as any).message : String(err)
      });
    }
    
    // // Simulate bot response
    // setTimeout(() => {
    //   const botMessage: Message = {
    //     id: (Date.now() + 1).toString(),
    //     content: getBotResponse(inputValue, selectedFile),
    //     isBot: true,
    //     timestamp: new Date()
    //   };
      
    //   setMessages(prev => [...prev, botMessage]);
    //   setIsTyping(false);
    // }, 1500);
  };

  const getBotResponse = (userInput: string, fileId: string | null): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('vulnerability') || input.includes('security')) {
      return 'Based on the security assessment reports, I can see several areas that need attention. The most critical vulnerabilities should be addressed immediately. Would you like me to prioritize them by risk level?';
    } else if (input.includes('recommendation') || input.includes('fix')) {
      return 'Here are my top recommendations:\n\n1. Implement multi-factor authentication\n2. Regular security patches and updates\n3. Employee security awareness training\n4. Regular penetration testing\n\nWhich area would you like me to elaborate on?';
    } else if (input.includes('report') && fileId) {
      return 'I can see you have a report selected. This document contains important security findings. Would you like me to summarize the key vulnerabilities or explain any specific section?';
    } else if (input.includes('help')) {
      return 'I can help you with:\n• Analyzing security reports\n• Explaining vulnerabilities\n• Providing remediation steps\n• Risk assessment guidance\n• Compliance requirements\n\nWhat specific area interests you?';
    } else {
      return 'That\'s an interesting question about security assessment. Based on current best practices, I\'d recommend focusing on risk-based approaches. Could you provide more context about what specific aspect you\'d like to explore?';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-slate-800 text-white p-4 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <MessageCircle className="h-5 w-5" />
          <div>
            <h2 className="font-semibold">Security Assistant</h2>
            <p className="text-xs text-slate-300">AI-powered security analysis</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.isBot ? 'bg-cyan-600' : 'bg-slate-600'
                }`}>
                  {message.isBot ? <Bot className="h-4 w-4 text-white" /> : <User className="h-4 w-4 text-white" />}
                </div>
                <div className={`rounded-lg p-3 ${
                  message.isBot 
                    ? 'bg-white border border-slate-200' 
                    : 'bg-cyan-600 text-white'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? 'text-slate-400' : 'text-cyan-100'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="border-t border-slate-200 p-4 flex-shrink-0">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about security assessments..."
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
