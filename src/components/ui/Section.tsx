import type { PropsWithChildren } from 'react';
import { View } from 'react-native';

import { usePageScroll } from '@/context/page-scroll';
import type { SectionId } from '@/data/content';

type SectionProps = PropsWithChildren<{ id: SectionId; className?: string }>;

export function Section({ id, className = '', children }: SectionProps) {
  const { registerSection } = usePageScroll();
  return (
    <View
      nativeID={id}
      className={className}
      onLayout={(event) => registerSection(id, event.nativeEvent.layout.y)}>
      {children}
    </View>
  );
}
