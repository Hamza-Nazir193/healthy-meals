import { Star } from 'lucide-react-native';
import { View } from 'react-native';

import { testimonials } from '@/data/content';

import { AppText } from '../ui/AppText';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';

export function Testimonials() {
  return (
    <Section id="stories" className="bg-white">
      <Container className="gap-6 pb-14">
        <SectionHeader eyebrow="Customer Stories" title="What Our Customers Say" linkLabel="View More Reviews" />
        <View className="flex-col gap-4 md:flex-row">
          {testimonials.map(({ quote, name, location }) => (
            <View key={name} className="flex-1 gap-4 rounded-xl border border-line bg-white p-5">
              <AppText className="text-[12px] leading-5">{`“${quote}”`}</AppText>
              <View className="flex-row items-center justify-between gap-3">
                <View className="flex-row items-center gap-2.5">
                  <View className="h-8 w-8 items-center justify-center rounded-full bg-sage-200">
                    <AppText className="text-xs font-semibold text-forest-900">{name.charAt(0)}</AppText>
                  </View>
                  <View>
                    <AppText className="text-[11px] font-semibold text-forest-900">{name}</AppText>
                    <AppText className="text-[10px]">{location}</AppText>
                  </View>
                </View>
                <View accessibilityLabel="Rated 5 out of 5 stars" className="flex-row gap-0.5">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} size={13} color="#f4b400" fill="#f4b400" />
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>
      </Container>
    </Section>
  );
}
