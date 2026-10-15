import { ScrollView, View } from 'react-native';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { About } from '@/components/sections/About';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Faq } from '@/components/sections/Faq';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { MealPlans } from '@/components/sections/MealPlans';
import { Pricing } from '@/components/sections/Pricing';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { Section } from '@/components/ui/Section';
import { PageScrollProvider, usePageScroll } from '@/context/page-scroll';

function PageContent() {
  const { scrollRef, onScroll } = usePageScroll();

  return (
    <ScrollView ref={scrollRef} onScroll={onScroll} scrollEventThrottle={64} className="flex-1 bg-white">
      <Hero />
      <Stats />
      <About />
      <MealPlans />
      <WhyChoose />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Section id="contact">
        <Footer />
      </Section>
    </ScrollView>
  );
}

export default function Home() {
  return (
    <PageScrollProvider>
      <View className="flex-1 bg-white">
        <Navbar />
        <PageContent />
        <WhatsAppButton />
      </View>
    </PageScrollProvider>
  );
}
