import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import CampusServices from '@/components/CampusServices';
import ChatBot from '@/components/ui/chat-bot';
import Footer from '@/components/Footer';

const Index = () => {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  // Show floating chat button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      setShowFloatingButton(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openChatBot = () => setIsChatBotOpen(true);
  const closeChatBot = () => setIsChatBotOpen(false);

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>Mallareddy Deemed To Be University</title>
      <meta 
        name="description" 
        content="AI-powered campus information system for Mallareddy Deemed To Be University. Get instant answers about academic schedules, facilities, dining services, and campus life." 
      />
      <meta 
        name="keywords" 
        content="Mallareddy University, campus information, AI assistant, student services, academic support, university facilities" 
      />

      {/* Hero Section */}
      <HeroSection onOpenChatBot={openChatBot} />

      {/* Campus Services Section */}
      <CampusServices />

      {/* Footer */}
      <Footer />

      {/* Floating Chat Button */}
      {showFloatingButton && !isChatBotOpen && (
        <Button
          onClick={openChatBot}
          className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-primary shadow-glow animate-pulse-glow hover-scale"
          size="icon"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      )}

      {/* Chat Bot */}
      <ChatBot isOpen={isChatBotOpen} onClose={closeChatBot} />
    </div>
  );
};

export default Index;