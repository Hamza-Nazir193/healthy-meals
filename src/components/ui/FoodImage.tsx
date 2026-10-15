import { Image, type ImageSource } from 'expo-image';

type FoodImageProps = {
  source: ImageSource;
  alt: string;
  position?: 'center' | 'left' | 'right';
};

export function FoodImage({ source, alt, position = 'center' }: FoodImageProps) {
  return (
    <Image
      source={source}
      alt={alt}
      accessibilityLabel={alt}
      contentFit="cover"
      contentPosition={position}
      transition={150}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
