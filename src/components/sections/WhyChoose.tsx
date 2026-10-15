import { View } from 'react-native';

import { usePageScroll } from '@/context/page-scroll';
import { advantages } from '@/data/content';

import { AppText, Heading } from '../ui/AppText';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

export function WhyChoose() {
  const { scrollToSection } = usePageScroll();

  return (
    <Section id="advantages" className="bg-sage-100">
      <Container className="flex-col gap-8 py-12 lg:flex-row lg:items-center lg:gap-10">
        <View className="gap-3 lg:w-[34%]">
          <AppText className="text-[10px] font-semibold uppercase tracking-[2px] text-olive-600">
            Our Advantages
          </AppText>
          <Heading className="text-[30px] leading-[36px]">Why Choose Healthify</Heading>
          <AppText className="max-w-[320px] text-[13px] leading-[21px]">
            More than just meals — we deliver a healthier, happier you with benefits that fit your lifestyle.
          </AppText>
          <Button label="Discover All Advantages" variant="dark" arrow onPress={() => scrollToSection('plans')} />
        </View>

        <View className="-mx-1.5 flex-1 flex-row flex-wrap">
          {advantages.map(({ title, description, icon: Icon }) => (
            <View key={title} className="w-1/2 p-1.5 md:w-1/4">
              <View className="h-full items-center gap-2 rounded-xl bg-white px-3 py-6">
                <Icon size={28} color="#5a6b30" strokeWidth={1.4} />
                <AppText className="text-center text-xs font-semibold text-forest-900">{title}</AppText>
                <AppText className="text-center text-[10px] leading-[14px]">{description}</AppText>
              </View>
            </View>
          ))}
        </View>
      </Container>
    </Section>
  );
}
