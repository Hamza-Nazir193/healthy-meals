import { ArrowRight } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

import { usePageScroll } from '@/context/page-scroll';
import { mealPlans } from '@/data/content';

import { AppText } from '../ui/AppText';
import { Container } from '../ui/Container';
import { FoodImage } from '../ui/FoodImage';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';

export function MealPlans() {
  const { scrollToSection } = usePageScroll();

  return (
    <Section id="services" className="bg-white">
      <Container className="gap-6 pb-14 pt-4">
        <SectionHeader
          eyebrow="Our Services"
          title="Healthy Meal Plans for Every Lifestyle"
          linkLabel="View All Services"
          onLinkPress={() => scrollToSection('plans')}
        />
        <View className="-mx-2 flex-row flex-wrap">
          {mealPlans.map((plan) => (
            <View key={plan.title} className="w-full p-2 sm:w-1/2 lg:w-1/4">
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={plan.title}
                onPress={() => scrollToSection('plans')}
                className="overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-olive-600">
                <View className="aspect-[4/3] w-full">
                  <FoodImage source={plan.image} alt={plan.alt} />
                </View>
                <View className="gap-1.5 p-3.5">
                  <AppText className="text-[13px] font-semibold text-forest-900">{plan.title}</AppText>
                  <View className="flex-row items-end justify-between gap-3">
                    <AppText className="flex-1 text-[11px] leading-4">{plan.description}</AppText>
                    <View className="h-6 w-6 items-center justify-center rounded-full border border-olive-600/50">
                      <ArrowRight size={12} color="#5a6b30" />
                    </View>
                  </View>
                </View>
              </Pressable>
            </View>
          ))}
        </View>
      </Container>
    </Section>
  );
}
