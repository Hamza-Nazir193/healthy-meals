import { View } from 'react-native';

import { stats } from '@/data/content';

import { AppText, Heading } from '../ui/AppText';
import { Container } from '../ui/Container';

export function Stats() {
  return (
    <View className="border-y border-line bg-sage-50">
      <Container className="flex-row flex-wrap py-6">
        {stats.map(({ value, label, icon: Icon }, index) => (
          <View
            key={label}
            className={`w-1/2 flex-row items-center justify-center gap-3 py-3 lg:w-1/4 ${index > 0 ? 'lg:border-l lg:border-line' : ''}`}>
            <Icon size={30} color="#5a6b30" strokeWidth={1.4} />
            <View>
              <Heading className="text-[22px] leading-7">{value}</Heading>
              <AppText className="text-[11px] text-forest-900">{label}</AppText>
            </View>
          </View>
        ))}
      </Container>
    </View>
  );
}
