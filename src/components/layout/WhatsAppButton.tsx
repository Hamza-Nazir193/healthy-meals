import { MessageCircle } from 'lucide-react-native';
import { Linking, Pressable } from 'react-native';

import { contactDetails } from '@/data/content';

export function WhatsAppButton() {
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel="Chat with us on WhatsApp"
      onPress={() => Linking.openURL(contactDetails.whatsapp)}
      className="absolute bottom-5 right-5 z-30 h-12 w-12 items-center justify-center rounded-full bg-[#25d366] shadow-lg hover:scale-105 active:scale-95">
      <MessageCircle size={24} color="#ffffff" fill="#ffffff" />
    </Pressable>
  );
}
