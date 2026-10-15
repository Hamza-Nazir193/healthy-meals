import { View } from 'react-native';

import { AppText, Heading } from './AppText';
import { TextLink } from './TextLink';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  linkLabel?: string;
  onLinkPress?: () => void;
};

export function SectionHeader({ eyebrow, title, linkLabel, onLinkPress }: SectionHeaderProps) {
  return (
    <View className="flex-row items-end justify-between gap-4">
      <View className="flex-1 gap-1.5">
        <AppText className="text-[10px] font-semibold uppercase tracking-[2px] text-olive-600">
          {eyebrow}
        </AppText>
        <Heading className="text-[28px] leading-[34px] md:text-[32px] md:leading-[38px]">{title}</Heading>
      </View>
      {linkLabel ? <TextLink label={linkLabel} onPress={onLinkPress} /> : null}
    </View>
  );
}
