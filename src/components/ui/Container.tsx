import { View, type ViewProps } from 'react-native';

type ContainerProps = ViewProps & { className?: string };

export function Container({ className = '', ...props }: ContainerProps) {
  return <View className={`w-full max-w-[1180px] self-center px-5 md:px-8 ${className}`} {...props} />;
}
