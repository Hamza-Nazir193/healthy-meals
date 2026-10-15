import { ArrowRight } from 'lucide-react-native';
import { Fragment } from 'react';
import { View } from 'react-native';

import { usePageScroll } from '@/context/page-scroll';
import { steps } from '@/data/content';

import { AppText } from '../ui/AppText';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

export function HowItWorks() {
  const { scrollToSection } = usePageScroll();

  return (
    <View className="bg-white">
      <Container className="gap-6 pb-14">
        <SectionHeader
          eyebrow="Our Process"
          title="Healthy Eating in 3 Simple Steps"
          linkLabel="It's Easy to Get Started"
          onLinkPress={() => scrollToSection('plans')}
        />
        <View className="flex-col gap-6 md:flex-row md:items-start md:gap-4">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <Fragment key={title}>
              <View className="flex-1 flex-row items-center gap-3">
                <View className="h-8 w-8 items-center justify-center rounded-full border border-olive-600/40 bg-sage-100">
                  <AppText className="text-[13px] font-semibold text-forest-900">{index + 1}</AppText>
                </View>
                <Icon size={26} color="#5a6b30" strokeWidth={1.4} />
                <View className="flex-1">
                  <AppText className="text-[13px] font-semibold text-forest-900">{title}</AppText>
                  <AppText className="text-[11px] leading-4">{description}</AppText>
                </View>
              </View>
              {index < steps.length - 1 ? (
                <View className="hidden self-center md:flex">
                  <ArrowRight size={18} color="#6d7a72" />
                </View>
              ) : null}
            </Fragment>
          ))}
        </View>
      </Container>
    </View>
  );
}
