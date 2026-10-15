import { ArrowRight } from 'lucide-react-native';
import { Pressable } from 'react-native';

import { AppText } from './AppText';

type TextLinkProps = { label: string; onPress?: () => void };

export function TextLink({ label, onPress }: TextLinkProps) {
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={label}
      onPress={onPress}
      className="flex-row items-center gap-1.5 self-start py-1 focus-visible:outline-2 focus-visible:outline-olive-600">
      <AppText className="text-xs font-medium text-forest-900 hover:text-olive-600">{label}</AppText>
      <ArrowRight size={13} color="#0f2920" strokeWidth={2} />
    </Pressable>
  );
}
