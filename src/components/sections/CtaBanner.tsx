import { View } from 'react-native';

import { images } from '@/constants/images';
import { usePageScroll } from '@/context/page-scroll';

import { AppText, Heading } from '../ui/AppText';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { FoodImage } from '../ui/FoodImage';

export function CtaBanner() {
  const { scrollToSection } = usePageScroll();

  return (
    <View className="relative overflow-hidden bg-forest-800">
      <View className="absolute inset-0 opacity-60">
        <FoodImage source={images.cta} alt="" />
      </View>
      <Container className="relative flex-col gap-5 py-10 md:flex-row md:items-center md:justify-between">
        <View className="gap-1.5 md:flex-1">
          <AppText className="text-[10px] font-semibold uppercase tracking-[2px] text-white/80">
            Ready to start?
          </AppText>
          <Heading className="text-[26px] leading-[32px] text-white md:text-[30px]">
            Transform Your Health, One Meal At A Time
          </Heading>
          <AppText className="text-xs text-white/80">
            Fresh. Nutritious. Convenient. Join thousands of happy customers today.
          </AppText>
        </View>
        <Button label="Get Started Today" variant="white" arrow onPress={() => scrollToSection('plans')} />
      </Container>
    </View>
  );
}
