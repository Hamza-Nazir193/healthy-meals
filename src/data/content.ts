import type { LucideIcon } from 'lucide-react-native';
import {
  BadgeCheck,
  Gem,
  Heart,
  Leaf,
  MapPin,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Soup,
  Star,
  Truck,
  Users,
} from 'lucide-react-native';

import { images } from '@/constants/images';

export type SectionId =
  | 'home'
  | 'about'
  | 'services'
  | 'advantages'
  | 'plans'
  | 'stories'
  | 'faq'
  | 'contact';

export const navLinks: { label: string; target: SectionId }[] = [
  { label: 'Home', target: 'home' },
  { label: 'About Us', target: 'about' },
  { label: 'Our Services', target: 'services' },
  { label: 'Advantages', target: 'advantages' },
  { label: 'Growth Plans', target: 'plans' },
  { label: 'Blogs', target: 'stories' },
  { label: 'Contact Us', target: 'contact' },
];

export const heroBenefits: { label: string; icon: LucideIcon }[] = [
  { label: 'Fresh Ingredients', icon: BadgeCheck },
  { label: 'Nutritionist Approved', icon: ShieldCheck },
  { label: 'Delivered to Your Door', icon: Truck },
];

export const stats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: '1M+', label: 'Meals Delivered', icon: PackageCheck },
  { value: '30K+', label: 'Happy Customers', icon: Leaf },
  { value: '4.8/5', label: 'Customer Satisfaction', icon: Star },
  { value: '550+', label: 'Corporate Clients', icon: Users },
];

export const aboutHighlights: { label: string; icon: LucideIcon }[] = [
  { label: 'Freshly Prepared Daily', icon: Soup },
  { label: 'Balanced Nutrition', icon: Leaf },
  { label: 'Great Taste', icon: Heart },
];

export const mealPlans = [
  {
    title: 'Healthy Ready-To-Eat Meals',
    description: 'Fresh, balanced meals prepared daily and ready to enjoy.',
    image: images.mealReady,
    alt: 'Colourful grain bowl with avocado, tomatoes and roasted vegetables',
  },
  {
    title: 'Customized Meal Plans',
    description: 'Personalized nutrition plans designed for your goals.',
    image: images.mealCustom,
    alt: 'Salmon fillets with fresh greens and cherry tomatoes in a bowl',
  },
  {
    title: 'Weight Management Plans',
    description: 'Delicious meals to support your weight loss or maintenance journey.',
    image: images.mealWeight,
    alt: 'Portion-controlled meal prep container with three compartments',
  },
  {
    title: 'High-Protein Meal Plans',
    description: 'Nutrient-rich meals for active lifestyles and fitness goals.',
    image: images.mealProtein,
    alt: 'Grilled chicken with greens and tomatoes on a bed of grains',
  },
];

export const advantages: { title: string; description: string; icon: LucideIcon }[] = [
  { title: 'Premium Quality', description: 'High-quality, fresh ingredients', icon: Gem },
  { title: 'Health Focused', description: 'Nutritionist designed meals', icon: Heart },
  { title: 'Convenient Delivery', description: 'To your home or office', icon: Truck },
  { title: 'Flexible Plans', description: 'Options for every dietary need', icon: RefreshCw },
];

export const pricingPlans = [
  {
    name: 'Essential Plan',
    description: 'Great for individuals starting their healthy journey.',
    price: 'AED 299',
    features: ['Fresh daily meals', 'Balanced nutrition', 'Flexible delivery'],
    icon: Leaf,
    popular: false,
  },
  {
    name: 'Balanced Plan',
    description: 'Our best value plan for a healthier lifestyle.',
    price: 'AED 499',
    features: [
      'Customized meal options',
      'Wide variety of meals',
      'Nutritionist support',
      'Flexible delivery',
    ],
    icon: Star,
    popular: true,
  },
  {
    name: 'Performance Plan',
    description: 'For fitness enthusiasts and active lifestyles.',
    price: 'AED 699',
    features: [
      'High-protein meals',
      'Performance-focused nutrition',
      'Personalized plans',
      'Priority support',
    ],
    icon: Gem,
    popular: false,
  },
];

export const steps: { title: string; description: string; icon: LucideIcon }[] = [
  { title: 'Choose Your Plan', description: 'Select the meal plan that fits your goals.', icon: MapPin },
  { title: 'We Prepare Fresh Meals', description: 'Our chefs prepare nutritious meals with care.', icon: Soup },
  { title: 'Enjoy Convenient Delivery', description: 'Receive your meals and enjoy a healthier you.', icon: Truck },
];

export const testimonials = [
  {
    quote:
      'Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!',
    name: 'Sara M.',
    location: 'Dubai, UAE',
  },
  {
    quote:
      'Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle.',
    name: 'Ahmed R.',
    location: 'Dubai, UAE',
  },
  {
    quote:
      'Great quality, variety, and customer service. I feel healthier and more energized every day.',
    name: 'Fatima K.',
    location: 'Dubai, UAE',
  },
];

export const faqs = [
  {
    question: 'What are your meal plans?',
    answer:
      'We offer Essential, Balanced and Performance plans, plus ready-to-eat, weight management and high-protein options. Every plan is designed with nutritionists.',
  },
  {
    question: 'How does delivery work?',
    answer:
      'Meals are prepared fresh each day and delivered to your home or office across Dubai in insulated packaging. You choose the delivery days that suit you.',
  },
  {
    question: 'Can I customize my meals?',
    answer:
      'Yes. Tell us about your goals, allergies and preferences and we will tailor your menu. You can change your selections before each weekly cut-off.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards, Apple Pay and bank transfer for corporate accounts.',
  },
  {
    question: 'Do you have a mobile app?',
    answer:
      'Our mobile app is coming soon. For now you can manage your plan from this website or through our customer support team.',
  },
];

export const footerLinks = {
  quick: navLinks,
  services: [
    'Healthy ready-to-eat meals',
    'Customized meal plans',
    'Weight management meals',
    'High-protein meal solutions',
    'Corporate meal solutions',
    'Fitness and wellness nutrition',
    'Healthy snacks and beverages',
    'Delivery and pickup services',
  ],
};

export const contactDetails = {
  address: 'Dubai, UAE',
  phone: '+971 50 123 4567',
  email: 'info@healthify.ae',
  whatsapp: 'https://wa.me/971501234567',
};
