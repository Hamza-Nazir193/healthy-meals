import { Check } from 'lucide-react-native';
import { View } from 'react-native';

import { images } from '@/constants/images';
import { pricingPlans } from '@/data/content';

import { AppText, Heading } from '../ui/AppText';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { FoodImage } from '../ui/FoodImage';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';

export function Pricing() {
  return (
    <Section id="plans" className="bg-white">
      <Container className="gap-8 py-14">
        <SectionHeader eyebrow="Growth Plans" title="Find the Perfect Plan for You" linkLabel="View All Plans" />

        <View className="flex-col gap-4 md:flex-row md:flex-wrap lg:flex-nowrap lg:items-stretch">
          {pricingPlans.map(({ name, description, price, features, icon: Icon, popular }) => (
            <View
              key={name}
              className={`overflow-hidden rounded-xl border bg-white md:w-[calc(50%-8px)] lg:w-auto lg:flex-1 ${popular ? 'border-forest-900 shadow-xl lg:-my-3' : 'border-line shadow-sm'}`}>
              {popular ? (
                <View className="items-center bg-forest-900 py-1.5">
                  <AppText className="text-[10px] font-semibold tracking-[1.5px] text-white">MOST POPULAR ★</AppText>
                </View>
              ) : null}
              <View className="gap-3 p-5">
                <View className="flex-row items-start gap-3">
                  <Icon size={22} color="#5a6b30" strokeWidth={1.6} />
                  <View className="flex-1 gap-1">
                    <Heading className="text-[17px] leading-5">{name}</Heading>
                    <AppText className="text-[11px] leading-4">{description}</AppText>
                  </View>
                </View>
                <View className="flex-row items-end gap-1 pt-1">
                  <Heading className="text-[24px] leading-7">{price}</Heading>
                  <AppText className="pb-1 text-[11px]">/ month</AppText>
                </View>
                <View className="gap-2 py-1">
                  {features.map((feature) => (
                    <View key={feature} className="flex-row items-center gap-2">
                      <Check size={14} color="#5a6b30" strokeWidth={2.4} />
                      <AppText className="text-[11px]">{feature}</AppText>
                    </View>
                  ))}
                </View>
                <Button
                  label="Get Started"
                  variant={popular ? 'dark' : 'outline'}
                  className="w-full self-stretch"
                />
              </View>
            </View>
          ))}

          <View className="relative min-h-[260px] overflow-hidden rounded-xl md:w-full lg:w-[24%]">
            <FoodImage source={images.plan} alt="Healthy grain bowl with chicken, avocado and greens" />
            <View className="absolute inset-0 justify-end bg-linear-to-t from-forest-950/70 to-transparent p-5">
              <Heading className="text-[22px] leading-[26px] text-white">Invest in a Healthier You</Heading>
            </View>
          </View>
        </View>
      </Container>
    </Section>
  );
}
