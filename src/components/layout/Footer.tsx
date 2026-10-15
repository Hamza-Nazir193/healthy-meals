import { Mail, MapPin, Phone } from 'lucide-react-native';
import { Linking, Pressable, View } from 'react-native';

import { usePageScroll } from '@/context/page-scroll';
import { contactDetails, footerLinks } from '@/data/content';

import { AppText } from '../ui/AppText';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

const socials = [
  { label: 'Facebook', glyph: 'f', url: 'https://facebook.com' },
  { label: 'X (Twitter)', glyph: 'X', url: 'https://x.com' },
  { label: 'Instagram', glyph: 'ig', url: 'https://instagram.com' },
  { label: 'YouTube', glyph: '▶', url: 'https://youtube.com' },
];

function ColumnTitle({ children }: { children: string }) {
  return <AppText className="mb-3 text-[13px] font-semibold text-white">{children}</AppText>;
}

export function Footer() {
  const { scrollToSection } = usePageScroll();

  return (
    <View className="bg-forest-900">
      <Container className="flex-col gap-10 pb-8 pt-12 md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-8">
        <View className="gap-4 md:w-[45%] lg:w-[28%]">
          <Logo light onPress={() => scrollToSection('home')} />
          <AppText className="max-w-[240px] text-xs leading-5 text-white/70">
            Healthify delivers fresh, balanced and delicious meals that help you eat well and live better.
          </AppText>
          <View className="flex-row gap-2">
            {socials.map((social) => (
              <Pressable
                key={social.label}
                accessibilityRole="link"
                accessibilityLabel={social.label}
                onPress={() => Linking.openURL(social.url)}
                className="h-8 w-8 items-center justify-center rounded-full border border-white/40 hover:bg-white/10">
                <AppText className="text-[11px] font-semibold text-white">{social.glyph}</AppText>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="md:w-[45%] lg:w-[16%]">
          <ColumnTitle>Quick Links</ColumnTitle>
          <View className="gap-2">
            {footerLinks.quick.map((link) => (
              <Pressable key={link.label} accessibilityRole="link" onPress={() => scrollToSection(link.target)}>
                <AppText className="text-xs text-white/70 hover:text-white">{link.label}</AppText>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="md:w-[45%] lg:w-[28%]">
          <ColumnTitle>Our Services</ColumnTitle>
          <View className="gap-2">
            {footerLinks.services.map((service) => (
              <Pressable key={service} accessibilityRole="link" onPress={() => scrollToSection('services')}>
                <AppText className="text-xs text-white/70 hover:text-white">{service}</AppText>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="gap-3 md:w-[45%] lg:w-[22%]">
          <ColumnTitle>Get In Touch</ColumnTitle>
          <View className="flex-row items-center gap-2">
            <MapPin size={14} color="#cfe0b5" />
            <AppText className="text-xs text-white/70">{contactDetails.address}</AppText>
          </View>
          <Pressable
            accessibilityRole="link"
            onPress={() => Linking.openURL(`tel:${contactDetails.phone.replace(/\s/g, '')}`)}
            className="flex-row items-center gap-2">
            <Phone size={14} color="#cfe0b5" />
            <AppText className="text-xs text-white/70 hover:text-white">{contactDetails.phone}</AppText>
          </Pressable>
          <Pressable
            accessibilityRole="link"
            onPress={() => Linking.openURL(`mailto:${contactDetails.email}`)}
            className="flex-row items-center gap-2">
            <Mail size={14} color="#cfe0b5" />
            <AppText className="text-xs text-white/70 hover:text-white">{contactDetails.email}</AppText>
          </Pressable>
        </View>
      </Container>

      <View className="border-t border-white/15">
        <Container className="flex-col items-start justify-between gap-2 py-4 md:flex-row md:items-center">
          <AppText className="text-[11px] text-white/60">© 2026 Healthify. All Rights Reserved.</AppText>
          <View className="flex-row gap-5">
            <AppText className="text-[11px] text-white/60 hover:text-white">Privacy Policy</AppText>
            <AppText className="text-[11px] text-white/60 hover:text-white">Terms of Service</AppText>
          </View>
        </Container>
      </View>
    </View>
  );
}
