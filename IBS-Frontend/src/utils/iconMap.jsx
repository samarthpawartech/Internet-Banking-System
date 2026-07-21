import {
  PiggyBank, Wallet, WalletMinimal, CreditCard, Landmark, HandCoins, Globe, Gift,
  Building2, Building, Factory, Wheat, Warehouse, Tractor, Leaf, ShieldCheck, ShieldAlert,
  Lock, Smartphone, Wifi, QrCode, Bot, ChartLine, ChartColumn, ChartPie, TrendingUp,
  TrendingDown, Users, Award, Star, CircleCheckBig, Banknote, Receipt, FileText,
  ClipboardList, CircleQuestionMark, Phone, Mail, MapPin, Clock, ChevronRight, ChevronDown,
  ArrowRight, ArrowUpRight, ArrowLeft, ArrowDownRight, Search, Bell, User, Menu, X, Eye,
  EyeOff, KeyRound, Briefcase, GraduationCap, HeartHandshake, Sparkles, Zap, Rocket,
  Layers, Server, Database, Cpu, Headphones, MessageCircle, MessageSquare, Send, Download,
  Calendar, CalendarClock, IndianRupee, BadgeIndianRupee, ReceiptIndianRupee, Percent,
  Coins, Gem, Crown, Plane, House, FileCheck, CircleAlert, Info, ThumbsUp, RefreshCw,
  Activity, Shield, Handshake, Store, ShoppingBag, Truck, PackageCheck, Sprout, Check,
  Timer, BadgeCheck, UserCheck, CircleDollarSign, UserPlus, LogIn, CircleUserRound,
} from 'lucide-react';

export const iconMap = {
  PiggyBank, Wallet, WalletMinimal, CreditCard, Landmark, HandCoins, Globe, Gift,
  Building2, Building, Factory, Wheat, Warehouse, Tractor, Leaf, ShieldCheck, ShieldAlert,
  Lock, Smartphone, Wifi, QrCode, Bot, ChartLine, ChartColumn, ChartPie, TrendingUp,
  TrendingDown, Users, Award, Star, CircleCheckBig, Banknote, Receipt, FileText,
  ClipboardList, CircleQuestionMark, Phone, Mail, MapPin, Clock, ChevronRight, ChevronDown,
  ArrowRight, ArrowUpRight, ArrowLeft, ArrowDownRight, Search, Bell, User, Menu, X, Eye,
  EyeOff, KeyRound, Briefcase, GraduationCap, HeartHandshake, Sparkles, Zap, Rocket,
  Layers, Server, Database, Cpu, Headphones, MessageCircle, MessageSquare, Send, Download,
  Calendar, CalendarClock, IndianRupee, BadgeIndianRupee, ReceiptIndianRupee, Percent,
  Coins, Gem, Crown, Plane, House, FileCheck, CircleAlert, Info, ThumbsUp, RefreshCw,
  Activity, Shield, Handshake, Store, ShoppingBag, Truck, PackageCheck, Sprout, Check,
  Timer, BadgeCheck, UserCheck, CircleDollarSign, UserPlus, LogIn, CircleUserRound,
};

export default function DynamicIcon({ name, size = 20, strokeWidth = 1.8, className = '', ...rest }) {
  const IconComponent = iconMap[name] || CircleDollarSign;
  return <IconComponent size={size} strokeWidth={strokeWidth} className={className} {...rest} />;
}
