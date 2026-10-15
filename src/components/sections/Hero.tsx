import { Leaf } from 'lucide-react-native';
import { View } from 'react-native';

import { images } from '@/constants/images';
import { usePageScroll } from '@/context/page-scroll';
import { heroBenefits } from '@/data/content';

import { AppText, Heading } from '../ui/AppText';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { FoodImage } from '../ui/FoodImage';
import { Section } from '../ui/Section';

export function Hero() {
  const { scrollToSection } = usePageScroll();

  return (
    <Section id="home" className="overflow-hidden bg-[#f6f5ef]">
      <View className="relative lg:h-[440px]">
        <View className="h-[260px] w-full md:h-[360px] lg:absolute lg:bottom-0 lg:right-0 lg:top-0 lg:h-auto lg:w-[60%]">
          <FoodImage
            source={images.hero}
            alt="Grilled chicken bowl with avocado slices, cherry tomatoes and fresh greens"
          />
          <View className="absolute inset-y-0 left-0 hidden w-[35%] bg-linear-to-r from-[#f6f5ef] to-transparent lg:flex" />
          <AppText className="absolute left-[18%] top-[12%] hidden -rotate-6 font-script text-[22px] leading-6 text-olive-600 lg:flex">
            {'Good Food\nBrighter You'}
          </AppText>
          <View className="absolute bottom-6 right-6 hidden flex-row items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg md:flex">
            <Leaf size={22} color="#5a6b30" fill="#5a6b30" />
            <View>
              <AppText className="text-[11px] font-medium text-forest-900">Nutritious Meals</AppText>
              <AppText className="text-[11px] text-forest-900">A Healthier Tomorrow</AppText>
            </View>
          </View>
        </View>

        <View className="relative z-10 lg:absolute lg:inset-y-0 lg:left-0 lg:right-0 lg:justify-center">
          <Container className="py-10 lg:py-0">
          <View className="gap-4 lg:max-w-[520px]">
            <View>
              <Heading className="text-[40px] leading-[46px] md:text-[52px] md:leading-[56px]">Healthy Meals</Heading>
              <Heading className="text-[40px] leading-[46px] text-olive-600 md:text-[52px] md:leading-[56px]">
                Happier Lives
              </Heading>
            </View>
            <AppText className="text-[17px] font-medium text-forest-900">
              Fresh. Nutritious. Convenient. Delivered to You.
            </AppText>
            <AppText className="max-w-[440px] text-[13px] leading-[22px]">
              At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals, customized plans
              and a commitment to your wellness goals.
            </AppText>
            <View className="flex-row flex-wrap gap-3 pt-1">
              <Button label="Explore Meal Plans" variant="dark" arrow onPress={() => scrollToSection('plans')} />
              <Button label="Learn More" variant="outline" onPress={() => scrollToSection('about')} />
            </View>
            <View className="flex-row flex-wrap gap-x-6 gap-y-2 pt-2">
              {heroBenefits.map(({ label, icon: Icon }) => (
                <View key={label} className="flex-row items-center gap-2">
                  <Icon size={16} color="#5a6b30" strokeWidth={1.8} />
                  <AppText className="text-[11px]">{label}</AppText>
                </View>
              ))}
            </View>
          </View>
          </Container>
        </View>
      </View>
    </Section>
  );
}
