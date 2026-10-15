import { Leaf } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

import { AppText } from './AppText';

type LogoProps = { light?: boolean; onPress?: () => void };

export function Logo({ light = false, onPress }: LogoProps) {
  const tone = light ? 'text-white' : 'text-forest-900';
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel="Healthify home"
      onPress={onPress}
      className="flex-row items-center gap-2 self-start">
      <View className="h-8 w-8 items-center justify-center rounded-full bg-olive-600">
        <Leaf size={17} color="#ffffff" strokeWidth={2} />
      </View>
      <AppText className={`text-[17px] font-semibold tracking-[2px] ${tone}`}>HEALTHIFY</AppText>
    </Pressable>
  );
}
