import { Minus, Plus } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, View } from 'react-native';

import { faqs } from '@/data/content';

import { AppText, Heading } from '../ui/AppText';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-sage-50">
      <Container className="flex-col gap-8 py-14 lg:flex-row lg:gap-16">
        <View className="gap-3 lg:w-[38%]">
          <AppText className="text-[10px] font-semibold uppercase tracking-[2px] text-olive-600">
            Frequently Asked Questions
          </AppText>
          <Heading className="text-[30px] leading-[36px]">Have Questions? We’ve Got Answers.</Heading>
          <AppText className="max-w-[320px] text-[13px] leading-[21px]">
            Find quick answers to common questions about our meal plans, delivery, and more.
          </AppText>
          <Button label="View All FAQs" variant="dark" arrow />
        </View>

        <View accessibilityRole="list" className="flex-1">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <View key={faq.question} className="border-b border-line">
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ expanded: open }}
                  onPress={() => setOpenIndex(open ? null : index)}
                  className="flex-row items-center justify-between gap-4 py-4 focus-visible:outline-2 focus-visible:outline-olive-600">
                  <AppText className="flex-1 text-[13px] font-medium text-forest-900">{faq.question}</AppText>
                  {open ? <Minus size={16} color="#0f2920" /> : <Plus size={16} color="#0f2920" />}
                </Pressable>
                {open ? <AppText className="pb-4 pr-8 text-xs leading-5">{faq.answer}</AppText> : null}
              </View>
            );
          })}
        </View>
      </Container>
    </Section>
  );
}
