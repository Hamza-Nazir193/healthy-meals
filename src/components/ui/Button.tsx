import { ArrowRight } from 'lucide-react-native';
import { Pressable } from 'react-native';

import { AppText } from './AppText';

type Variant = 'solid' | 'dark' | 'outline' | 'white';

type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

const containerStyles: Record<Variant, string> = {
  solid: 'bg-olive-700 border-olive-700 hover:bg-olive-600 active:bg-olive-600',
  dark: 'bg-forest-900 border-forest-900 hover:bg-forest-800 active:bg-forest-800',
  outline: 'bg-transparent border-olive-600/50 hover:bg-sage-100 active:bg-sage-100',
  white: 'bg-white border-white hover:bg-sage-100 active:bg-sage-100',
};

const labelStyles: Record<Variant, string> = {
  solid: 'text-white',
  dark: 'text-white',
  outline: 'text-forest-900',
  white: 'text-forest-900',
};

const arrowColors: Record<Variant, string> = {
  solid: '#ffffff',
  dark: '#ffffff',
  outline: '#0f2920',
  white: '#0f2920',
};

export function Button({ label, onPress, variant = 'solid', arrow = false, className = '' }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      className={`flex-row items-center justify-center gap-2 self-start rounded-full border px-5 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive-600 ${containerStyles[variant]} ${className}`}>
      <AppText className={`text-[13px] font-medium ${labelStyles[variant]}`}>{label}</AppText>
      {arrow ? <ArrowRight size={15} color={arrowColors[variant]} strokeWidth={2} /> : null}
    </Pressable>
  );
}
