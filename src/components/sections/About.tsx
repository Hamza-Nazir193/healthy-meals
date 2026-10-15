import { Leaf } from 'lucide-react-native';
import { View } from 'react-native';

import { images } from '@/constants/images';
import { aboutHighlights } from '@/data/content';

import { AppText, Heading } from '../ui/AppText';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { FoodImage } from '../ui/FoodImage';
import { Section } from '../ui/Section';

export function About() {
  return (
    <Section id="about" className="bg-white">
      <Container className="flex-col gap-10 py-14 lg:flex-row lg:items-center lg:gap-16 lg:py-16">
        <View className="relative pb-10 lg:w-[48%]">
          <View className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <FoodImage
              source={images.about}
              alt="Colourful rainbow salad bowl with avocado, tomatoes and grains"
            />
          </View>
          <View className="absolute bottom-0 left-4 h-[120px] w-[150px] overflow-hidden rounded-xl border-4 border-white shadow-md md:left-[-20px]">
            <FoodImage source={images.aboutInset} alt="Chef plating a fresh salmon meal" />
          </View>
          <View className="absolute bottom-3 left-[180px] flex-row items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg md:left-[150px]">
            <Leaf size={18} color="#5a6b30" />
            <View>
              <AppText className="text-[11px] font-medium text-forest-900">Nourishing</AppText>
              <AppText className="text-[11px] font-medium text-forest-900">Lives Daily</AppText>
            </View>
          </View>
        </View>

        <View className="gap-4 lg:flex-1">
          <AppText className="text-[10px] font-semibold uppercase tracking-[2px] text-olive-600">
            About Healthify
          </AppText>
          <Heading className="max-w-[380px] text-[30px] leading-[36px] md:text-[34px] md:leading-[40px]">
            Your Trusted Healthy Food Partner
          </Heading>
          <AppText className="max-w-[460px] text-[13px] leading-[22px]">
            At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable. Based in
            Dubai, we prepare fresh, balanced meals using high-quality ingredients to help individuals and
            families achieve their health goals without sacrificing taste.
          </AppText>
          <View className="flex-row flex-wrap gap-x-6 gap-y-3 py-1">
            {aboutHighlights.map(({ label, icon: Icon }) => (
              <View key={label} className="flex-row items-center gap-2">
                <Icon size={18} color="#5a6b30" strokeWidth={1.6} />
                <AppText className="text-[11px] font-medium text-forest-900">{label}</AppText>
              </View>
            ))}
          </View>
          <Button label="More About Us" variant="dark" arrow />
        </View>
      </Container>
    </Section>
  );
}
