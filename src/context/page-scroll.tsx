import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
  type RefObject,
} from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';

import { navLinks, type SectionId } from '@/data/content';

type PageScrollValue = {
  scrollRef: RefObject<ScrollView | null>;
  activeSection: SectionId;
  registerSection: (id: SectionId, y: number) => void;
  scrollToSection: (id: SectionId) => void;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const PageScrollContext = createContext<PageScrollValue | null>(null);

const ACTIVE_OFFSET = 140;

export function PageScrollProvider({ children }: PropsWithChildren) {
  const scrollRef = useRef<ScrollView>(null);
  const positions = useRef<Partial<Record<SectionId, number>>>({});
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const registerSection = useCallback((id: SectionId, y: number) => {
    positions.current[id] = y;
  }, []);

  const scrollToSection = useCallback((id: SectionId) => {
    const y = positions.current[id] ?? 0;
    scrollRef.current?.scrollTo({ y, animated: true });
  }, []);

  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = event.nativeEvent.contentOffset.y + ACTIVE_OFFSET;
    let current: SectionId = 'home';
    for (const link of navLinks) {
      const y = positions.current[link.target];
      if (y !== undefined && y <= offset) current = link.target;
    }
    setActiveSection(current);
  }, []);

  const value = useMemo(
    () => ({ scrollRef, activeSection, registerSection, scrollToSection, onScroll }),
    [activeSection, registerSection, scrollToSection, onScroll],
  );

  return <PageScrollContext.Provider value={value}>{children}</PageScrollContext.Provider>;
}

export function usePageScroll() {
  const value = useContext(PageScrollContext);
  if (!value) throw new Error('usePageScroll must be used inside PageScrollProvider');
  return value;
}
