import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Dynamically import components that are not immediately visible
const Services = dynamic(() => import('@/components/Services'));
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const About = dynamic(() => import('@/components/About'));
const Blog = dynamic(() => import('@/components/Blog'));
const Contact = dynamic(() => import('@/components/Contact'));
const ChatWidget = dynamic(() => import('@/components/ChatWidget'));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}