import { Text, type TextProps } from 'react-native';

type AppTextProps = TextProps & { className?: string };

export function AppText({ className = '', ...props }: AppTextProps) {
  return <Text className={`font-sans text-ink-600 ${className}`} {...props} />;
}

export function Heading({ className = '', ...props }: AppTextProps) {
  return (
    <Text
      accessibilityRole="header"
      className={`font-display font-normal text-forest-900 ${className}`}
      {...props}
    />
  );
}
