import { Menu, X } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, View } from 'react-native';

import { usePageScroll } from '@/context/page-scroll';
import { navLinks, type SectionId } from '@/data/content';

import { AppText } from '../ui/AppText';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

export function Navbar() {
  const { activeSection, scrollToSection } = usePageScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (target: SectionId) => {
    setMenuOpen(false);
    scrollToSection(target);
  };

  return (
    <View className="z-20 border-b border-line bg-white">
      <Container className="h-[68px] flex-row items-center justify-between">
        <Logo onPress={() => go('home')} />

        <View accessibilityRole="menubar" className="hidden flex-row items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = activeSection === link.target;
            return (
              <Pressable
                key={link.label}
                accessibilityRole="link"
                accessibilityState={{ selected: active }}
                onPress={() => go(link.target)}
                className="py-2 focus-visible:outline-2 focus-visible:outline-olive-600">
                <AppText
                  className={`text-xs font-medium hover:text-olive-600 ${active ? 'text-olive-600' : 'text-forest-900'}`}>
                  {link.label}
                </AppText>
              </Pressable>
            );
          })}
        </View>

        <View className="hidden lg:flex">
          <Button label="Get Started" arrow onPress={() => go('plans')} />
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={menuOpen ? 'Close menu' : 'Open menu'}
          accessibilityState={{ expanded: menuOpen }}
          onPress={() => setMenuOpen((open) => !open)}
          className="h-10 w-10 items-center justify-center rounded-full hover:bg-sage-100 lg:hidden">
          {menuOpen ? <X size={22} color="#0f2920" /> : <Menu size={22} color="#0f2920" />}
        </Pressable>
      </Container>

      {menuOpen ? (
        <View className="border-t border-line bg-white pb-4 lg:hidden">
          <Container className="gap-1 pt-2">
            {navLinks.map((link) => (
              <Pressable
                key={link.label}
                accessibilityRole="link"
                onPress={() => go(link.target)}
                className="rounded-lg px-3 py-3 hover:bg-sage-100 active:bg-sage-100">
                <AppText
                  className={`text-sm font-medium ${activeSection === link.target ? 'text-olive-600' : 'text-forest-900'}`}>
                  {link.label}
                </AppText>
              </Pressable>
            ))}
            <View className="pt-3">
              <Button label="Get Started" arrow onPress={() => go('plans')} />
            </View>
          </Container>
        </View>
      ) : null}
    </View>
  );
}
