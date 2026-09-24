import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Box,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Facebook,
  FileCheck,
  Film,
  Hammer,
  HeartHandshake,
  Home,
  Instagram,
  KeyRound,
  Layers,
  LayoutGrid,
  Linkedin,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  MoveHorizontal,
  Palette,
  Pause,
  Phone,
  Play,
  Quote,
  RotateCcw,
  Send,
  Share2,
  ShieldCheck,
  Sliders,
  Sparkles,
  Star,
  Subtitles,
  User,
  Volume2,
  VolumeX,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/interior-hero.jpg";
import residence from "@/assets/interior-residence.jpg";
import villa from "@/assets/interior-villa.jpg";
import loft from "@/assets/interior-loft.jpg";
import workspace from "@/assets/interior-workspace.jpg";
import beforeImage from "@/assets/interior-before.jpg";
import afterImage from "@/assets/interior-after.jpg";
import pool from "@/assets/interior-pool.jpg";
import kitchen from "@/assets/interior-kitchen.jpg";
import bedroom from "@/assets/interior-bedroom.jpg";
import bathroom from "@/assets/interior-bathroom.jpg";

const nav = ["Home", "About", "Services", "Collections", "Process", "Testimonials", "Contact"];

interface ServiceItem {
  title: string;
  description: string;
  icon: typeof Home;
}

const services: ServiceItem[] = [
  {
    title: "Residential Interiors",
    description:
      "Complete home interior design tailored around warmth, lifestyle, and enduring comfort.",
    icon: Home,
  },
  {
    title: "Commercial Interiors",
    description:
      "Functional and distinctive workplaces, boutique studios, and inspiring commercial spaces.",
    icon: Building2,
  },
  {
    title: "Luxury Renovations",
    description:
      "Transform existing spaces with contemporary architecture, warm tones, and premium finishes.",
    icon: Hammer,
  },
  {
    title: "Space Planning",
    description:
      "Strategic layouts that maximize natural light, effortless flow, and spatial harmony.",
    icon: LayoutGrid,
  },
  {
    title: "Furniture & Styling",
    description:
      "Curated artisan furniture, sculptural lighting, warm organic textures, and bespoke décor.",
    icon: Palette,
  },
  {
    title: "Turnkey Projects",
    description:
      "Complete end-to-end design, material sourcing, site coordination, and project handover.",
    icon: KeyRound,
  },
];

interface ProjectItem {
  name: string;
  city: string;
  type: string;
  label: string;
  year: string;
  image: string;
  highlight?: string;
}

const projects: ProjectItem[] = [
  {
    name: "The Azure Horizon Villa",
    city: "Goa",
    type: "Hospitality",
    label: "Private Luxury Pool & Villa",
    year: "2026",
    image: pool,
    highlight: "Infinity Pool & Travertine Sunken Lounge",
  },
  {
    name: "The Alabaster Suite",
    city: "New Delhi",
    type: "Residential",
    label: "Luxury Master Bedroom Suite",
    year: "2026",
    image: bedroom,
    highlight: "Bouclé Bed & Warm Fluted Oak",
  },
  {
    name: "The Travertine Kitchen",
    city: "Mumbai",
    type: "Renovation",
    label: "Architectural Culinary Suite",
    year: "2026",
    image: kitchen,
    highlight: "Waterfall Island & Brass Accents",
  },
  {
    name: "Terracotta Spa Sanctuary",
    city: "Udaipur",
    type: "Residential",
    label: "Bespoke Master Bath & Spa",
    year: "2026",
    image: bathroom,
    highlight: "Limestone Soaking Tub & Zellige Tiles",
  },
  {
    name: "The Ivory Residence",
    city: "Mumbai",
    type: "Residential",
    label: "Outdoor Lounge & Living",
    year: "2026",
    image: residence,
    highlight: "Warm Travertine & Teak",
  },
  {
    name: "Casa Verde Villa",
    city: "Pune",
    type: "Hospitality",
    label: "Modern Villa & Courtyard",
    year: "2025",
    image: villa,
    highlight: "Bespoke Couches & Clay Tones",
  },
  {
    name: "The Urban Loft",
    city: "Bangalore",
    type: "Renovation",
    label: "Contemporary Apartment",
    year: "2025",
    image: loft,
    highlight: "Oak Wood & Terracotta Accents",
  },
  {
    name: "Serene Workspace",
    city: "Hyderabad",
    type: "Commercial",
    label: "Boutique Creative Studio",
    year: "2024",
    image: workspace,
    highlight: "Acoustic Panels & Amber Lighting",
  },
];

interface CollectionCard {
  id: string;
  category: "Residential" | "Commercial" | "Hospitality" | "Renovation";
  badge: string;
  title: string;
  description: string;
  tag: string;
  image: string;
}

const collectionsData: CollectionCard[] = [
  {
    id: "pool-villa",
    category: "Hospitality",
    badge: "Featured Hospitality",
    title: "Azure Horizon Pool & Lounge",
    description: "Infinity waters, warm travertine stone pergolas, and glowing sunset architectural lighting.",
    tag: "Infinity Pool & Deck",
    image: pool,
  },
  {
    id: "living-couches",
    category: "Residential",
    badge: "Living Collection",
    title: "Modern Couches & Sofas",
    description: "Sculptural silhouettes upholstered in organic linen, warm mocha palettes, and oak accents.",
    tag: "Bespoke Couches & Linen",
    image: villa,
  },
  {
    id: "master-bedroom",
    category: "Residential",
    badge: "Bedroom Suite",
    title: "Alabaster Master Bedroom",
    description: "Curved bouclé headboards, ambient backlighting, and textured terracotta natural bedding.",
    tag: "Bouclé Bed & Warm Oak",
    image: bedroom,
  },
  {
    id: "culinary-kitchen",
    category: "Renovation",
    badge: "Kitchen Renovation",
    title: "Travertine & Oak Kitchen",
    description: "Large waterfall travertine island, concealed cabinetry, and satin brass minimalist fixtures.",
    tag: "Waterfall Marble Island",
    image: kitchen,
  },
  {
    id: "spa-bath",
    category: "Residential",
    badge: "Spa & Bathroom",
    title: "Terracotta Spa Sanctuary",
    description: "Freestanding limestone soaking tub, illuminated arched mirrors, and artisanal zellige tiles.",
    tag: "Limestone Soaking Tub",
    image: bathroom,
  },
  {
    id: "workspace-studio",
    category: "Commercial",
    badge: "Creative Workspace",
    title: "Serene Studio & Office",
    description: "Ergonomic spatial planning, acoustic felt wall paneling, and amber task illumination.",
    tag: "Acoustic Panels & Wood",
    image: workspace,
  },
  {
    id: "urban-loft",
    category: "Renovation",
    badge: "Urban Renovation",
    title: "The Urban Loft Apartment",
    description: "Contemporary open-plan transformation with warm oak timber and terracotta touches.",
    tag: "Oak Wood & Terracotta",
    image: loft,
  },
  {
    id: "outdoor-teak",
    category: "Residential",
    badge: "Patio & Living",
    title: "Ivory Residence Terrace",
    description: "Outdoor teak seating, travertine flooring, and curated subtropical landscaping.",
    tag: "Bespoke Seating & Teak",
    image: residence,
  },
  {
    id: "living-lighting",
    category: "Commercial",
    badge: "Lighting & Accents",
    title: "Hanging Pendant Lights",
    description: "Sculptural brass fixtures, ambient warm glass, and bespoke architectural illumination.",
    tag: "Sculptural Lighting",
    image: hero,
  },
];

interface ProcessStep {
  step: string;
  duration: string;
  title: string;
  description: string;
  icon: typeof Compass;
  deliverables: string[];
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    duration: "1 Week",
    title: "Discovery",
    description: "Understanding your space, lifestyle preferences, budget, and vision.",
    icon: Compass,
    deliverables: ["Lifestyle Audit", "Site Survey"],
  },
  {
    step: "02",
    duration: "2 Weeks",
    title: "Concept",
    description: "Mood boards, warm color palettes, spatial layouts, and material directions.",
    icon: Palette,
    deliverables: ["Mood Boards", "Color Palette"],
  },
  {
    step: "03",
    duration: "2 Weeks",
    title: "3D Design",
    description:
      "Detailed 3D visualizations, lighting studies, and precise architectural drawings.",
    icon: Box,
    deliverables: ["Photoreal Renders", "Lighting Study"],
  },
  {
    step: "04",
    duration: "4–8 Weeks",
    title: "Execution",
    description:
      "Bespoke material procurement, craftsman coordination, and rigorous site oversight.",
    icon: Hammer,
    deliverables: ["Artisan Sourcing", "Site Oversight"],
  },
  {
    step: "05",
    duration: "1 Week",
    title: "Styling & Handover",
    description:
      "Artisan furnishing, final touch styling, quality inspection, and seamless delivery.",
    icon: KeyRound,
    deliverables: ["White-Glove Setup", "Turnkey Handover"],
  },
];

const studioValues = [
  {
    title: "Personalized Design",
    desc: "Every project is crafted around your unique daily rituals, aesthetic preferences, and lifestyle.",
    icon: Sliders,
  },
  {
    title: "Thoughtful Spatial Flow",
    desc: "Every inch of space is optimized for natural illumination, intuitive movement, and visual calm.",
    icon: Compass,
  },
  {
    title: "Warm Premium Materials",
    desc: "We work directly with master stonemasons, woodworkers, and textile weavers across India.",
    icon: Layers,
  },
  {
    title: "Complete Execution",
    desc: "From initial concept sketches to full site turnkey handover, we manage every fine detail.",
    icon: ShieldCheck,
  },
];

interface CaptionCue {
  start: number;
  end: number;
  speaker: string;
  text: string;
}

interface Testimonial {
  id: string;
  quote: string;
  detailedFeedback: string;
  author: string;
  role: string;
  project: string;
  city: string;
  year: string;
  image: string;
  videoUrl: string;
  videoDuration: string;
  rating: number;
  highlight: string;
  sqft: string;
  timeline: string;
  scope: string;
  materials: string;
  clientVerified: boolean;
  captions: CaptionCue[];
}

const testimonials: Testimonial[] = [
  {
    id: "ivory-residence-video",
    quote:
      "They understood how we wanted to live, not only how we wanted the home to look. Every room feels warm, considered, calm, and unmistakably ours.",
    detailedFeedback:
      "From the initial space planning to the hand-selected travertine slabs and custom bouclé furniture, Lumina Studio executed everything with meticulous precision and unmatched warmth. The lighting and spatial flow have completely elevated our daily lives.",
    author: "Rhea & Arjun Mehta",
    role: "Homeowners",
    project: "The Ivory Residence",
    city: "Worli, Mumbai",
    year: "2026",
    image: residence,
    videoUrl: "https://assets.mixkit.co/videos/41473/41473-720.mp4",
    videoDuration: "0:10",
    rating: 5,
    highlight: "Turnkey Penthouse Renovation & Teak Terrace",
    sqft: "3,400 sq.ft",
    timeline: "6 Months",
    scope: "Penthouse Renovation",
    materials: "Travertine, Bouclé & Fluted Oak",
    clientVerified: true,
    captions: [
      { start: 0, end: 3.2, speaker: "Rhea", text: "Lumina understood how we wanted to live, not just how it looks." },
      { start: 3.2, end: 6.8, speaker: "Arjun", text: "The travertine slabs and custom lighting elevated our daily routine." },
      { start: 6.8, end: 12, speaker: "Rhea", text: "Every room feels calm, warm, and unmistakably ours." },
    ],
  },
  {
    id: "casa-verde-video",
    quote:
      "The studio brought clarity and warmth to an ambitious brief and delivered with remarkable attention to detail. The result feels effortless and enduring.",
    detailedFeedback:
      "Our 4,500 sq ft villa needed a design that embraced natural illumination and earthy organic textures. Lumina designed custom clay-toned furniture and open courtyards that exceeded our wildest expectations.",
    author: "Mira & Siddharth Shah",
    role: "Villa Owners",
    project: "Casa Verde Villa",
    city: "Koregaon Park, Pune",
    year: "2025",
    image: villa,
    videoUrl: "https://assets.mixkit.co/videos/41474/41474-720.mp4",
    videoDuration: "0:12",
    rating: 5,
    highlight: "Bespoke Clay Couches & Natural Courtyard Flow",
    sqft: "4,500 sq.ft",
    timeline: "8 Months",
    scope: "New Villa Architecture",
    materials: "Clay Plaster, Terrazzo & Teak",
    clientVerified: true,
    captions: [
      { start: 0, end: 3.8, speaker: "Mira", text: "They brought immense clarity to our 4,500 sq ft villa brief." },
      { start: 3.8, end: 7.5, speaker: "Siddharth", text: "Custom clay plaster and courtyard light flow exceeded our dreams." },
      { start: 7.5, end: 14, speaker: "Mira", text: "The finished residence feels effortless, natural, and enduring." },
    ],
  },
  {
    id: "urban-loft-video",
    quote:
      "From the first sketch to the final styling, the process felt transparent, collaborative, and exceptionally well managed.",
    detailedFeedback:
      "Living in our renovated space feels like a daily luxury retreat. The custom lighting layers, acoustic wood paneling, and warm fluted oak have transformed how we work and unwind every single day.",
    author: "Ananya & Kabir Rao",
    role: "Apartment Owners",
    project: "The Urban Loft",
    city: "Indiranagar, Bangalore",
    year: "2025",
    image: loft,
    videoUrl: "https://assets.mixkit.co/videos/41475/41475-720.mp4",
    videoDuration: "0:14",
    rating: 5,
    highlight: "Fluted Oak & Terracotta Accent Renovation",
    sqft: "2,100 sq.ft",
    timeline: "4 Months",
    scope: "Urban Loft Redesign",
    materials: "Natural Oak, Linen & Brass",
    clientVerified: true,
    captions: [
      { start: 0, end: 4.2, speaker: "Ananya", text: "From the first sketch to final styling, everything was seamless." },
      { start: 4.2, end: 8.8, speaker: "Kabir", text: "Acoustic fluted oak and warm ambient lighting transformed our home." },
      { start: 8.8, end: 16, speaker: "Ananya", text: "Our loft now feels like a permanent luxury retreat in Bangalore." },
    ],
  },
  {
    id: "azure-horizon-video",
    quote:
      "Lumina Studio created an architectural sanctuary that blends seamlessly with nature. Guests are consistently wowed by the warmth of every corner.",
    detailedFeedback:
      "Their turnkey execution meant we never had to worry about material procurement or contractor coordination. The sunken lounge, infinity pool deck, and travertine kitchen were delivered to absolute perfection.",
    author: "Vikram & Tanya Singhania",
    role: "Private Villa Owners",
    project: "The Azure Horizon Villa",
    city: "Assagao, Goa",
    year: "2026",
    image: pool,
    videoUrl: "https://assets.mixkit.co/videos/41472/41472-720.mp4",
    videoDuration: "0:11",
    rating: 5,
    highlight: "Infinity Pool, Travertine Lounges & Outdoor Bar",
    sqft: "5,200 sq.ft",
    timeline: "10 Months",
    scope: "Coastal Villa & Landscape",
    materials: "Volcanic Stone, Walnut & Cane",
    clientVerified: true,
    captions: [
      { start: 0, end: 3.5, speaker: "Vikram", text: "Lumina created an architectural coastal sanctuary for us in Goa." },
      { start: 3.5, end: 7.2, speaker: "Tanya", text: "The sunken lounge, travertine island, and pool deck are flawless." },
      { start: 7.2, end: 13, speaker: "Vikram", text: "Turnkey execution with absolute precision and zero stress." },
    ],
  },
];

class LuxuryAmbientEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isRunning = false;
  private intervalId: any = null;
  private volume = 0.5;

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
  }

  play() {
    this.init();
    if (!this.ctx || !this.masterGain) return;
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    if (this.isRunning) return;
    this.isRunning = true;

    // Harmonic warm chords in D major
    const chords = [
      [146.83, 220.0, 277.18, 329.63, 440.0],
      [196.0, 246.94, 293.66, 369.99, 440.0],
      [123.47, 185.0, 246.94, 293.66, 369.99],
      [110.0, 164.81, 220.0, 293.66, 329.63],
    ];

    let chordIdx = 0;

    const tick = () => {
      if (!this.isRunning || !this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;
      const chord = chords[chordIdx % chords.length];
      chordIdx++;
      if (!chord) return;

      chord.forEach((freq, i) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = i === 0 ? "sine" : i % 2 === 0 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(freq, now);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(550 + i * 140, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.035 / (i + 1), now + 1.6);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.9);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 5.0);
      });
    };

    tick();
    this.intervalId = setInterval(tick, 4500);
  }

  setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  stop() {
    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

const luxurySoundEngine = new LuxuryAmbientEngine();

function playVoiceNarration(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.96;
  utter.pitch = 1.02;
  utter.volume = 0.95;
  const voices = window.speechSynthesis.getVoices();
  const chosen = voices.find(
    (v) =>
      v.name.includes("Natural") ||
      v.name.includes("Google") ||
      v.name.includes("Samantha") ||
      v.name.includes("Karen") ||
      v.name.includes("Moira") ||
      v.lang.startsWith("en")
  );
  if (chosen) utter.voice = chosen;
  window.speechSynthesis.speak(utter);
}

function stopVoiceNarration() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function ClientVideoPlayer({
  testimonial,
  isModal = false,
  onOpenModal,
}: {
  testimonial: Testimonial;
  isModal?: boolean;
  onOpenModal?: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState(testimonial.videoDuration);
  const [showCaptions, setShowCaptions] = useState(true);
  const [activeCueIdx, setActiveCueIdx] = useState(0);

  const lastSpokenCueRef = useRef<number>(-1);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));

      // Calculate matching subtitle cue based on exact video second
      const matchingIdx = testimonial.captions.findIndex(
        (c) => current >= c.start && current < c.end
      );
      const cueIdx =
        matchingIdx >= 0
          ? matchingIdx
          : current >= (testimonial.captions[testimonial.captions.length - 1]?.start || 0)
          ? testimonial.captions.length - 1
          : 0;

      setActiveCueIdx(cueIdx);

      // Play exact synchronized voice line when entering new cue
      if (isPlaying && !isMuted && lastSpokenCueRef.current !== cueIdx) {
        lastSpokenCueRef.current = cueIdx;
        const cue = testimonial.captions[cueIdx];
        if (cue) {
          playVoiceNarration(cue.text);
        }
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    const total = videoRef.current.duration;
    if (total > 0 && !isNaN(total)) {
      setDuration(formatTime(total));
    }
  };

  const startAudioPlayback = (cueIndex = 0) => {
    luxurySoundEngine.setVolume(volume);
    luxurySoundEngine.play();
    lastSpokenCueRef.current = cueIndex;
    const cue = testimonial.captions[cueIndex] || testimonial.captions[0];
    if (cue) {
      playVoiceNarration(cue.text);
    }
  };

  const stopAudioPlayback = () => {
    luxurySoundEngine.stop();
    stopVoiceNarration();
    lastSpokenCueRef.current = -1;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          if (!isMuted) {
            startAudioPlayback(activeCueIdx);
          }
        })
        .catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      stopAudioPlayback();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
    if (nextMuted) {
      stopAudioPlayback();
    } else {
      if (isPlaying) {
        startAudioPlayback(activeCueIdx);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (val === 0) {
      setIsMuted(true);
      if (videoRef.current) videoRef.current.muted = true;
      stopAudioPlayback();
    } else {
      if (isMuted) {
        setIsMuted(false);
        if (videoRef.current) videoRef.current.muted = false;
      }
      luxurySoundEngine.setVolume(val);
      if (isPlaying) {
        luxurySoundEngine.play();
      }
    }
  };

  const restartVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    setActiveCueIdx(0);
    lastSpokenCueRef.current = -1;
    videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        if (!isMuted) {
          startAudioPlayback(0);
        }
      })
      .catch(() => {});
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const targetSec = pos * (videoRef.current.duration || 1);
    videoRef.current.currentTime = targetSec;
    setProgress(pos * 100);

    const seekCueIdx = testimonial.captions.findIndex(
      (c) => targetSec >= c.start && targetSec < c.end
    );
    const validIdx = seekCueIdx >= 0 ? seekCueIdx : 0;
    setActiveCueIdx(validIdx);
    if (isPlaying && !isMuted) {
      lastSpokenCueRef.current = validIdx;
      const cue = testimonial.captions[validIdx];
      if (cue) playVoiceNarration(cue.text);
    }
  };

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("0:00");
    setActiveCueIdx(0);
    lastSpokenCueRef.current = -1;
    stopAudioPlayback();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (isModal) {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            if (!isMuted) startAudioPlayback(0);
          })
          .catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
    return () => {
      stopAudioPlayback();
    };
  }, [testimonial, isModal]);

  const activeCaption = testimonial.captions[activeCueIdx] || testimonial.captions[0];

  return (
    <div
      className={`relative bg-black/95 overflow-hidden group select-none ${
        isModal
          ? "w-full h-full min-h-[300px] sm:min-h-[440px] flex items-center justify-center"
          : "aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[280px] sm:min-h-[380px] lg:min-h-[480px] flex items-center justify-center"
      }`}
    >
      <video
        ref={videoRef}
        src={testimonial.videoUrl}
        poster={testimonial.image}
        playsInline
        muted={isMuted}
        loop
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => {
          setIsPlaying(true);
          if (!isMuted) startAudioPlayback(activeCueIdx);
        }}
        onPause={() => {
          setIsPlaying(false);
          stopAudioPlayback();
        }}
        onEnded={() => {
          setIsPlaying(false);
          stopAudioPlayback();
        }}
        className="size-full object-cover"
      />

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/60 pointer-events-none" />

      {/* Top Bar Header */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
        <div className="flex items-center gap-2 bg-[#201108]/90 backdrop-blur-md border border-[#DE7945]/40 px-3 py-1.5 rounded-full shadow-lg">
          <span className="relative flex size-2.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                isPlaying ? "bg-emerald-400 opacity-75" : "bg-amber-400 opacity-75"
              }`}
            />
            <span
              className={`relative inline-flex rounded-full size-2.5 ${
                isPlaying ? "bg-emerald-500" : "bg-amber-500"
              }`}
            />
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-white">
            {isPlaying ? "Live Client Walkthrough" : "Verified Client Story"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1 text-[10px] sm:text-[11px] font-semibold text-white/90 shadow">
            {duration}
          </span>
        </div>
      </div>

      {/* Big Center Play/Pause Overlay */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Video" : "Play Video"}
        className={`absolute z-20 flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer ${
          isPlaying
            ? "opacity-0 group-hover:opacity-100 hover:scale-105"
            : "opacity-100 hover:scale-105"
        }`}
      >
        <div className="flex size-16 sm:size-20 items-center justify-center rounded-full bg-primary text-white shadow-2xl shadow-primary/50 ring-8 ring-primary/20 backdrop-blur-md">
          {isPlaying ? (
            <Pause className="size-7 sm:size-8" />
          ) : (
            <Play className="size-7 sm:size-8 ml-1 fill-white" />
          )}
        </div>
        {!isPlaying && (
          <span className="rounded-full bg-black/80 backdrop-blur-md border border-white/10 px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-lg">
            Watch Homeowner Tour & Listen
          </span>
        )}
      </button>

      {/* Subtitles / Closed Captions - Exact Sync with Video Seconds */}
      {showCaptions && isPlaying && activeCaption && (
        <div className="absolute bottom-16 sm:bottom-20 left-4 right-4 z-20 flex justify-center pointer-events-none transition-all">
          <div className="max-w-md sm:max-w-xl rounded-xl bg-black/90 backdrop-blur-md border border-[#DE7945]/35 px-4 py-2.5 text-center text-xs sm:text-sm text-[#FDF8F5] shadow-2xl animate-fade-in">
            <span className="text-primary font-bold mr-1.5 font-display text-sm sm:text-base">
              [{activeCaption.speaker}]:
            </span>
            “{activeCaption.text}”
          </div>
        </div>
      )}

      {/* Bottom Custom Luxury Controls Bar */}
      <div className="absolute bottom-0 inset-x-0 z-20 p-3 sm:p-4 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col gap-2">
        {/* Progress Timeline Scrubber */}
        <div
          onClick={handleSeek}
          className="relative h-2 w-full bg-white/20 rounded-full overflow-hidden cursor-pointer group/bar transition-all hover:h-3"
        >
          <div
            className="absolute top-0 bottom-0 left-0 bg-primary rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Action Buttons & Time */}
        <div className="flex items-center justify-between gap-2 text-white">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="flex size-7 sm:size-8 items-center justify-center rounded-full bg-white/15 hover:bg-primary text-white transition-colors cursor-pointer"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="size-3.5 sm:size-4" />
              ) : (
                <Play className="size-3.5 sm:size-4 ml-0.5 fill-current" />
              )}
            </button>

            <button
              type="button"
              onClick={restartVideo}
              className="hidden sm:flex size-7 sm:size-8 items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
              aria-label="Restart Video"
              title="Restart Video"
            >
              <RotateCcw className="size-3.5" />
            </button>

            <div className="flex items-center gap-1.5 group/vol">
              <button
                type="button"
                onClick={toggleMute}
                className="flex size-7 sm:size-8 items-center justify-center rounded-full bg-white/15 hover:bg-primary text-white transition-colors cursor-pointer"
                aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted ? (
                  <VolumeX className="size-3.5 sm:size-4" />
                ) : (
                  <Volume2 className="size-3.5 sm:size-4" />
                )}
              </button>

              {/* Interactive Volume Slider */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-14 sm:w-18 h-1 accent-primary bg-white/20 rounded-lg cursor-pointer transition-all"
                aria-label="Volume level"
                title={`Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
              />
            </div>

            {/* Live Audio Equalizer Wave animation when unmuted & playing */}
            {!isMuted && isPlaying && (
              <div className="hidden sm:flex items-end gap-0.5 h-3.5 px-1.5 py-0.5 rounded bg-black/40">
                <span className="w-0.5 bg-primary rounded-full animate-pulse h-full" />
                <span
                  className="w-0.5 bg-primary rounded-full animate-pulse h-2"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-0.5 bg-primary rounded-full animate-pulse h-3"
                  style={{ animationDelay: "300ms" }}
                />
                <span
                  className="w-0.5 bg-primary rounded-full animate-pulse h-1.5"
                  style={{ animationDelay: "450ms" }}
                />
              </div>
            )}

            <span className="text-[10px] sm:text-xs font-mono font-semibold text-white/90 ml-1">
              {currentTime} / {duration}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowCaptions(!showCaptions)}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                showCaptions ? "bg-primary text-white" : "bg-white/15 text-white/70 hover:text-white"
              }`}
              title="Toggle Captions"
            >
              <Subtitles className="size-3" />
              <span className="hidden sm:inline">CC</span>
            </button>

            {!isModal && onOpenModal && (
              <button
                type="button"
                onClick={onOpenModal}
                className="flex items-center gap-1.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-primary px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur transition-all cursor-pointer"
                title="Watch Full Story"
              >
                <Maximize2 className="size-3.5" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface GalleryItem {
  image: string;
  label: string;
  subtitle: string;
}

const gallery: GalleryItem[] = [
  { image: bathroom, label: "Bathrooms", subtitle: "Spa-like terracotta & marble" },
  { image: bedroom, label: "Master Bedroom Suites", subtitle: "Bouclé headboards & ambient alabaster lighting" },
  { image: kitchen, label: "Architectural Kitchens", subtitle: "Travertine waterfall islands & fluted oak" },
  { image: pool, label: "Outdoor Pools & Sunken Lounges", subtitle: "Infinity waters & warm travertine pergolas" },
  { image: hero, label: "Living Rooms", subtitle: "Warm tones & ambient lighting" },
  { image: villa, label: "Dining Spaces", subtitle: "Crafted stone & timber" },
  { image: workspace, label: "Workspaces", subtitle: "Ergonomic & sophisticated" },
];

function SectionTitle({
  label,
  title,
  dark = false,
  highlightWord,
}: {
  label: string;
  title: string;
  dark?: boolean;
  highlightWord?: string;
}) {
  return (
    <div className="reveal-section mb-8 sm:mb-12 md:mb-14">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 mb-3">
        <Sparkles className="size-3 text-primary" />
        <span
          className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] ${
            dark ? "text-studio-champagne" : "text-primary"
          }`}
        >
          {label}
        </span>
      </div>
      <h2
        className={`max-w-4xl font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] ${
          dark ? "text-studio-light" : "text-foreground"
        }`}
      >
        {highlightWord ? (
          <>
            {title.replace(highlightWord, "")}
            <span className="text-primary underline decoration-primary/30 underline-offset-8">
              {highlightWord}
            </span>
          </>
        ) : (
          title
        )}
      </h2>
    </div>
  );
}

function Count({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (!entry || !entry.isIntersecting) return;
        let start = 0;
        const tick = () => {
          start += Math.ceil(value / 35);
          setN(Math.min(start, value));
          if (start < value) requestAnimationFrame(tick);
        };
        tick();
        ob.disconnect();
      },
      { threshold: 0.5 },
    );
    ob.observe(node);
    return () => ob.disconnect();
  }, [value]);

  return <span ref={ref}>{n}+</span>;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [filter, setFilter] = useState("All");
  const [compare, setCompare] = useState(52);
  const [slide, setSlide] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [videoModal, setVideoModal] = useState<Testimonial | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [sent, setSent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll("section[id]");
    const ob = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting && e.target.id) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50%" },
    );
    nodes.forEach((n) => ob.observe(n));
    return () => ob.disconnect();
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal-section");
    const ob = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        }),
      { threshold: 0.1 },
    );
    nodes.forEach((n) => ob.observe(n));
    return () => ob.disconnect();
  }, []);

  useEffect(() => {
    setVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [slide]);

  useEffect(() => {
    document.body.style.overflow = menu || lightbox !== null || videoModal !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, lightbox, videoModal]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
        setVideoModal(null);
        setMenu(false);
      }
      if (lightbox !== null) {
        if (e.key === "ArrowLeft") setLightbox((lightbox - 1 + gallery.length) % gallery.length);
        if (e.key === "ArrowRight") setLightbox((lightbox + 1) % gallery.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setVideoPlaying(false);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setVideoMuted(videoRef.current.muted);
  };

  const go = (name: string) => {
    setMenu(false);
    const target = document.getElementById(name.toLowerCase());
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const visibleProjects = filter === "All" ? projects : projects.filter((p) => p.type === filter);
  const visibleCollections = filter === "All" ? collectionsData : collectionsData.filter((c) => c.category === filter);
  const activeTestimonial = testimonials[slide] ?? testimonials[0]!;
  const activeGallery = lightbox !== null ? (gallery[lightbox] ?? null) : null;

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Header with clean, proper luxury brown styling */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#20120A]/96 py-2.5 sm:py-3 shadow-xl shadow-black/30 backdrop-blur-xl border-b border-[#4A2B18]/70"
            : "bg-[#2C180E]/92 py-3 sm:py-4 shadow-lg shadow-black/15 backdrop-blur-lg border-b border-[#4A2B18]/45"
        }`}
      >
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <button
            onClick={() => go("home")}
            className="group flex items-center gap-2.5 transition-all text-left cursor-pointer shrink-0"
          >
            <span className="flex size-7 sm:size-8 items-center justify-center rounded-xl bg-primary text-white font-sans text-xs font-black shadow-md shadow-primary/30 group-hover:scale-105 transition-transform">
              L
            </span>
            <div>
              <span className="block font-display text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
                LUMINA<span className="text-primary font-normal">STUDIO</span>
              </span>
              <span className="block text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.22em] text-[#D8B69B] mt-0.5">
                Interior Architecture
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden items-center gap-5 lg:gap-7 xl:gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {nav.map((n) => {
              const isCurrent = active === n.toLowerCase();
              return (
                <button
                  key={n}
                  onClick={() => go(n)}
                  className={`relative text-xs font-semibold uppercase tracking-[0.18em] transition-colors py-1 cursor-pointer ${
                    isCurrent
                      ? "text-primary font-bold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                      : "text-[#E6D4C5]/85 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  }`}
                >
                  {n}
                </button>
              );
            })}
          </nav>

          {/* Right Action & Mobile Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go("contact")}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-5 py-2.5 text-xs uppercase tracking-[0.14em] shadow-md shadow-primary/30 hover:scale-105 transition-all whitespace-nowrap cursor-pointer shrink-0"
            >
              <Sparkles className="size-3.5 shrink-0" />
              <span>Book Consultation</span>
            </button>

            <button
              className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-[#52331F] bg-[#381F12] text-[#F3E5D8] hover:bg-[#52331F] hover:text-white lg:hidden focus:ring-2 focus:ring-primary transition-colors cursor-pointer shrink-0"
              onClick={() => setMenu(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {menu && (
        <div className="menu-in fixed inset-0 z-[60] flex flex-col justify-between bg-[#1E0F07]/98 backdrop-blur-2xl p-6 sm:p-8 text-[#F5ECE5] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-white/15 pb-4">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-white font-sans text-xs font-black">
                L
              </span>
              <span className="font-display text-2xl font-bold text-white">
                LUMINA<span className="text-primary font-normal">STUDIO</span>
              </span>
            </div>
            <button
              onClick={() => setMenu(false)}
              aria-label="Close menu"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-4 sm:gap-5 py-6">
            {nav.map((n, i) => (
              <button
                key={n}
                onClick={() => go(n)}
                className={`font-display text-2xl sm:text-3xl transition-transform hover:scale-105 cursor-pointer ${
                  active === n.toLowerCase() ? "text-primary font-bold" : "text-white/90"
                }`}
              >
                <span className="mr-3 font-sans text-xs text-primary font-bold">0{i + 1}</span>
                {n}
              </button>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/15 space-y-3">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-white font-bold py-3 text-sm uppercase tracking-[0.14em] shadow-lg shadow-primary/30 cursor-pointer"
              onClick={() => go("contact")}
            >
              <Sparkles className="size-4" />
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-background pt-24 sm:pt-28 lg:pt-36 pb-10 sm:pb-12 lg:pb-16"
      >
        <img
          src={hero}
          width={1920}
          height={1280}
          alt="Warm modern luxury living room with rich furniture"
          className="hero-zoom absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/88 to-background/30 lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

        <div className="relative z-10 mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="reveal-up inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-md">
              <Sparkles className="size-3.5" />
              <span>Make You Feel Luxury</span>
            </div>

            <h1
              className="reveal-up mt-4 sm:mt-6 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold leading-[1.05] text-foreground tracking-tight"
              style={{ animationDelay: ".12s" }}
            >
              Spaces Designed <br />
              Around The Way <br />
              <em className="font-normal italic text-primary">You Live.</em>
            </h1>

            <p
              className="reveal-up mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-foreground/80"
              style={{ animationDelay: ".24s" }}
            >
              We craft refined, functional and timeless interiors with warm modern materials,
              bespoke craftsmanship, and thoughtful spatial flow.
            </p>

            <div
              className="reveal-up mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
              style={{ animationDelay: ".36s" }}
            >
              <Button variant="studio" size="lg" asChild className="orange-glow justify-center">
                <a href="#collections">
                  Explore Collections <ArrowDown className="size-4 ml-1.5" />
                </a>
              </Button>
              <Button variant="studioOutlineOrange" size="lg" asChild className="justify-center">
                <a href="#contact">
                  Book Consultation <ArrowUpRight className="size-4 ml-1.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl border border-border/80 bg-card/95 p-4 sm:p-6 shadow-xl backdrop-blur-md max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="flex size-9 sm:size-11 items-center justify-center rounded-xl bg-primary/15 text-primary shrink-0">
                  <Award className="size-4 sm:size-5" />
                </div>
                <div>
                  <strong className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    <Count value={12} />
                  </strong>
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Years Experience
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-9 sm:size-11 items-center justify-center rounded-xl bg-primary/15 text-primary shrink-0">
                  <Home className="size-4 sm:size-5" />
                </div>
                <div>
                  <strong className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    <Count value={250} />
                  </strong>
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Completed Projects
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-9 sm:size-11 items-center justify-center rounded-xl bg-primary/15 text-primary shrink-0">
                  <HeartHandshake className="size-4 sm:size-5 text-primary" />
                </div>
                <div>
                  <strong className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    <Count value={180} />
                  </strong>
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Happy Clients
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-9 sm:size-11 items-center justify-center rounded-xl bg-primary/15 text-primary shrink-0">
                  <Zap className="size-4 sm:size-5 text-primary" />
                </div>
                <div>
                  <strong className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    3-Day
                  </strong>
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Concept Turnaround
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Bento Grid */}
      <section
        id="collections"
        className="bg-secondary/40 px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 mb-3">
                <Sparkles className="size-3 text-primary" />
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Curated Catalog
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Our{" "}
                <span className="text-primary underline decoration-primary/30 underline-offset-8">
                  Collections
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["All", "Residential", "Commercial", "Hospitality", "Renovation"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer ${
                    filter === f
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-card border border-border text-foreground/70 hover:text-primary hover:border-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Filtered Collections Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleCollections.map((col) => (
              <article
                key={col.id}
                className="brown-card-gradient border border-[#5A3824]/50 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 flex items-center gap-1.5">
                      <Sparkles className="size-3" />
                      {col.badge}
                    </span>
                    <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                      {col.category}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {col.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                    {col.description}
                  </p>
                </div>

                <div className="relative my-5 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg aspect-[16/10] w-full">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-1">
                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                    {col.tag}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-primary shadow hover:bg-studio-cream hover:scale-105 transition-all"
                  >
                    <span>Explore more</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left Text */}
          <div className="reveal-section order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 mb-3">
              <Sparkles className="size-3 text-primary" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                About Us
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.08] text-foreground">
              Creating spaces with purpose, personality and warm character.
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-foreground/80">
              Lumina Studio is an architecture and interior practice creating deeply personal spaces
              across India. We blend intuition with rigor—uniting spatial clarity, rich mocha
              palettes, warm honest timbers, and exquisite craftsmanship to shape environments that
              grow more inspiring with time.
            </p>

            <div className="my-6 sm:my-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 border-y border-border/80 py-5 sm:py-6">
              {[
                { text: "12+ Years Practice", icon: Award },
                { text: "Award Concepts", icon: Sparkles },
                { text: "Turnkey Handover", icon: KeyRound },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5">
                  <item.icon className="size-4 text-primary shrink-0" />
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <Button variant="studio" size="lg" asChild className="orange-glow">
              <a href="#contact">
                Explore more <ArrowRight className="size-4 ml-1.5" />
              </a>
            </Button>
          </div>

          {/* Right Arched Frame */}
          <div className="reveal-section relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-t-[140px] sm:rounded-t-[180px] rounded-b-3xl border-4 border-primary/20 bg-primary/5 p-2.5 shadow-2xl">
              <img
                src={residence}
                width={1408}
                height={1600}
                loading="lazy"
                alt="Lumina Studio interior with warm sculptural armchair and arched frame"
                className="h-[340px] sm:h-[440px] md:h-[500px] w-full rounded-t-[130px] sm:rounded-t-[170px] rounded-b-2xl object-cover"
              />
              <span className="absolute bottom-5 right-5 rounded-2xl bg-primary px-4 py-3 sm:px-5 sm:py-4 font-display text-xl sm:text-2xl font-bold text-white shadow-xl flex flex-col items-center">
                <span className="flex items-center gap-1">
                  <Award className="size-4" /> 12+
                </span>
                <small className="block font-sans text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.2em] text-white/90">
                  Years of practice
                </small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="bg-secondary/60 px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <SectionTitle label="Our Expertise" title="What We Design" highlightWord="Design" />
          <div className="space-y-3 sm:space-y-4">
            {services.map((service, i) => {
              const ServiceIcon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between rounded-xl sm:rounded-2xl border border-border/80 bg-card p-5 sm:p-6 md:p-7 transition-all duration-300 hover:border-primary hover:shadow-lg hover:scale-[1.01] gap-3 sm:gap-6"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                    <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      <ServiceIcon className="size-5 sm:size-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-xs font-bold text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-1 max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <SectionTitle label="Our Portfolio" title="Selected Architectural Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {visibleProjects.map((p) => (
              <article
                key={p.name}
                className="reveal-section group overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-500 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="relative overflow-hidden aspect-[16/10] w-full">
                  <img
                    src={p.image}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    alt={`${p.name} interior in ${p.city}`}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-4 right-4 rounded-full bg-primary px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow flex items-center gap-1">
                    <Calendar className="size-3" />
                    {p.year}
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 backdrop-blur px-3.5 py-1 text-xs font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <Sparkles className="size-3 text-primary" />
                    {p.highlight ?? p.type}
                  </span>
                </div>

                <div className="p-5 sm:p-7 flex items-end justify-between gap-4 flex-1">
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                      {p.label}
                    </p>
                    <h3 className="mt-1 font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="size-3.5 text-primary" />
                      {p.city}, India
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="flex size-10 sm:size-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110 shrink-0"
                    aria-label={`View ${p.name}`}
                  >
                    <ArrowUpRight className="size-4 sm:size-5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 sm:mt-14 text-center">
            <Button variant="studioOutlineOrange" size="lg" asChild>
              <a href="#contact">
                View All Works & Catalog <ArrowRight className="size-4 ml-1.5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-foreground px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-32 text-studio-light">
        <div className="mx-auto max-w-[1400px]">
          <SectionTitle
            dark
            label="Why Lumina Studio"
            title="Design That Goes Far Beyond Aesthetics."
            highlightWord="Aesthetics"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {studioValues.map((item, i) => {
              const ValueIcon = item.icon;
              return (
                <article
                  key={item.title}
                  className="reveal-section rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7 backdrop-blur-sm transition-all hover:border-primary hover:bg-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-primary">
                      0{i + 1}
                    </span>
                    <div className="size-9 rounded-lg bg-white/10 flex items-center justify-center text-primary">
                      <ValueIcon className="size-5" />
                    </div>
                  </div>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-studio-light/70">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Matching Reference Image */}
      <section
        id="process"
        className="bg-[#FAF3EB] border-y border-[#EBDBCB] px-6 sm:px-10 lg:px-16 py-16 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-[1360px]">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F3CDB1] bg-[#FBEDE1] px-3.5 py-1 mb-4 shadow-2xs">
            <Sparkles className="size-3.5 text-[#DE7945] stroke-[1.75]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DE7945]">
              How We Work
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium text-[#1A1412] leading-[1.15] tracking-tight mb-14 sm:mb-16 lg:mb-20">
            Our 5-Step Design{" "}
            <span className="relative inline-block text-[#DE7945]">
              Process
              <span
                className="absolute left-0 -bottom-1 sm:-bottom-1.5 w-full h-[3.5px] sm:h-[4px] bg-[#F5C7A9] rounded-full pointer-events-none"
                aria-hidden="true"
              />
            </span>
          </h2>

          {/* 5-Step Connected Timeline */}
          <div className="relative">
            {/* Desktop Horizontal Connecting Line running through circle centers */}
            <div
              className="hidden lg:block absolute top-[21px] left-0 right-0 h-[1.5px] bg-[#EBD8C8] -translate-y-1/2 z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-8 lg:gap-6 relative z-10">
              {processSteps.map((step) => (
                <article
                  key={step.title}
                  className="relative flex flex-col items-start group"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex size-10 sm:size-11 items-center justify-center rounded-full border-[1.5px] border-[#DE7945] bg-[#FAF3EB] mb-6 sm:mb-7 shadow-2xs transition-transform duration-300 group-hover:scale-105">
                    <span className="font-display italic text-xs sm:text-[13px] font-semibold text-[#DE7945] tracking-wider">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-display font-medium text-lg sm:text-xl text-[#1A1412] mb-2 sm:mb-2.5 leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#6E6056] font-normal">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Responsive Interactive Section */}
      <section className="bg-secondary/60 px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <SectionTitle
            label="Before & After"
            title="See The Warm Transformation"
            highlightWord="Transformation"
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
            {/* Pixel-perfect responsive slider */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 shadow-2xl select-none">
              <img
                src={beforeImage}
                width={1600}
                height={1008}
                loading="lazy"
                alt="Apartment before renovation"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${compare}%` }}>
                <img
                  src={afterImage}
                  width={1600}
                  height={1008}
                  loading="lazy"
                  alt="Apartment after luxury warm renovation"
                  className="absolute inset-0 size-full max-w-none object-cover"
                />
              </div>

              {/* Slider handle */}
              <div
                className="absolute inset-y-0 w-0.5 sm:w-1 bg-primary shadow-lg"
                style={{ left: `${compare}%` }}
              >
                <span className="absolute left-1/2 top-1/2 flex size-9 sm:size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-2xl">
                  <MoveHorizontal className="size-4 sm:size-5" />
                </span>
              </div>

              <span className="absolute left-3.5 sm:left-5 top-3.5 sm:top-5 rounded-full bg-primary px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow">
                After
              </span>
              <span className="absolute right-3.5 sm:right-5 top-3.5 sm:top-5 rounded-full bg-foreground px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow">
                Before
              </span>

              <input
                className="absolute inset-0 size-full cursor-ew-resize opacity-0"
                aria-label="Drag to compare before and after interior transformation"
                type="range"
                min="0"
                max="100"
                value={compare}
                onChange={(e) => setCompare(Number(e.target.value))}
              />
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-[#B09268] bg-[#C5A880] p-6 sm:p-8 shadow-lg text-[#26160B]">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#3D1E06] flex items-center gap-1.5">
                <MapPin className="size-3" />
                Renovation · Worli, Mumbai
              </span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C0E06]">
                The Alder Apartment
              </h3>
              <p className="mt-3 leading-relaxed text-xs sm:text-sm md:text-base text-[#2E180B]/90">
                A dated apartment reimagined as a warm, light-filled haven. The new open layout
                creates effortless flow while travertine, warm walnut, and mocha textiles bring rich
                sensory depth.
              </p>
              <div className="mt-5 border-t border-[#B09268] pt-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#3D1E06] flex items-center gap-1.5">
                <Clock className="size-3.5" />
                1,850 sq ft · 7 Month Transformation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Video Feedback & Testimonials Section */}
      <section id="testimonials" className="px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 mb-3">
                <Film className="size-3 text-primary" />
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Client Video Feedback & Stories
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Loved By Our{" "}
                <span className="text-primary underline decoration-primary/30 underline-offset-8">
                  Clients
                </span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Watch authentic homeowner video walkthroughs and hear firsthand how our architecture and interior design transformed daily living across India.
            </p>
          </div>

          {/* Featured Video Player & Feedback Card */}
          <div className="rounded-2xl sm:rounded-3xl border border-border/90 bg-card shadow-2xl overflow-hidden mb-8 sm:mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Video Player Column */}
              <div className="lg:col-span-7 relative bg-black flex items-center justify-center overflow-hidden">
                <ClientVideoPlayer
                  testimonial={activeTestimonial}
                  onOpenModal={() => setVideoModal(activeTestimonial)}
                />
              </div>

              {/* Client Review & Details Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-card text-foreground">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-primary">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="size-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="size-3" /> Verified Homeowner
                    </span>
                  </div>

                  <div className="relative mb-4">
                    <Quote className="size-8 text-primary/20 absolute -top-3 -left-2 -z-0" />
                    <blockquote className="relative z-10 font-display text-xl sm:text-2xl lg:text-[26px] font-bold leading-snug text-foreground">
                      “{activeTestimonial.quote}”
                    </blockquote>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                    {activeTestimonial.detailedFeedback}
                  </p>

                  <div className="p-3.5 rounded-xl bg-secondary/70 border border-border/80 mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary mb-1">
                      Project Highlights
                    </p>
                    <p className="text-xs font-medium text-foreground flex items-center gap-1.5">
                      <Sparkles className="size-3.5 text-primary shrink-0" />
                      {activeTestimonial.highlight}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <strong className="block text-sm sm:text-base font-bold text-foreground font-display">
                      {activeTestimonial.author}
                    </strong>
                    <p className="text-[11px] sm:text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin className="size-3 text-primary shrink-0" />
                      {activeTestimonial.city} · {activeTestimonial.year}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Previous testimonial video"
                      className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer shrink-0"
                      onClick={() => setSlide((slide - 1 + testimonials.length) % testimonials.length)}
                    >
                      <ChevronLeft className="size-4 sm:size-5" />
                    </button>
                    <button
                      aria-label="Next testimonial video"
                      className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer shrink-0"
                      onClick={() => setSlide((slide + 1) % testimonials.length)}
                    >
                      <ChevronRight className="size-4 sm:size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Client Video Story Selector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {testimonials.map((t, idx) => {
              const isSelected = slide === idx;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSlide(idx)}
                  className={`text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 flex items-center gap-3.5 cursor-pointer group ${
                    isSelected
                      ? "bg-[#2A170C] border-[#DE7945] text-white shadow-xl scale-[1.02]"
                      : "bg-card border-border/80 hover:border-primary/50 text-foreground hover:bg-secondary/40"
                  }`}
                >
                  <div className="relative size-14 sm:size-16 rounded-lg overflow-hidden shrink-0 shadow-md">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="size-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className={`flex size-6 sm:size-7 items-center justify-center rounded-full ${isSelected ? "bg-primary text-white" : "bg-white/90 text-primary"} shadow`}>
                        <Play className="size-3 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className={`block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${isSelected ? "text-[#DE7945]" : "text-primary"}`}>
                      {t.videoDuration} · {t.city.split(",")[0]}
                    </span>
                    <strong className={`block text-xs sm:text-sm font-bold truncate mt-0.5 ${isSelected ? "text-white" : "text-foreground"}`}>
                      {t.author}
                    </strong>
                    <span className={`block text-[11px] truncate mt-0.5 ${isSelected ? "text-white/70" : "text-muted-foreground"}`}>
                      {t.project}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery & Lightbox Section */}
      <section className="bg-secondary/40 px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <SectionTitle label="A Closer Look" title="Inside Our Spaces" highlightWord="Spaces" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {gallery.map((item, i) => (
              <button
                key={item.label}
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card text-left shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <img
                    src={item.image}
                    width={1600}
                    height={1100}
                    loading="lazy"
                    alt={`${item.label} interior design`}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white transition-opacity">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-1.5 mb-1">
                      <Maximize2 className="size-3 text-primary" />
                      {item.label}
                    </span>
                    <span className="font-display text-lg sm:text-xl font-bold leading-snug text-white">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeGallery && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-md"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 sm:right-6 sm:top-6 text-white hover:text-primary transition-colors p-2 cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="size-6 sm:size-8" />
          </button>
          <button
            onClick={() => setLightbox((lightbox! - 1 + gallery.length) % gallery.length)}
            className="absolute left-3 sm:left-5 text-white hover:text-primary transition-colors p-2 cursor-pointer"
            aria-label="Previous image"
          >
            <ArrowLeft className="size-6 sm:size-8" />
          </button>
          <div className="max-h-[85vh] max-w-[90vw] text-center">
            <img
              src={activeGallery.image}
              alt={`${activeGallery.label} interior`}
              className="max-h-[70vh] sm:max-h-[75vh] max-w-[90vw] rounded-xl sm:rounded-2xl object-contain mx-auto shadow-2xl"
            />
            <p className="mt-3 font-display text-lg sm:text-2xl font-bold text-white">
              {activeGallery.label}
            </p>
          </div>
          <button
            onClick={() => setLightbox((lightbox! + 1) % gallery.length)}
            className="absolute right-3 sm:right-5 text-white hover:text-primary transition-colors p-2 cursor-pointer"
            aria-label="Next image"
          >
            <ArrowRight className="size-6 sm:size-8" />
          </button>
        </div>
      )}

      {/* Client Video Story Fullscreen Modal */}
      {videoModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Client Feedback Video"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-3 sm:p-6 md:p-8 backdrop-blur-xl animate-fade-in"
        >
          <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-[#52331F] bg-[#1E0F07] shadow-2xl text-white">
            {/* Close button */}
            <button
              onClick={() => setVideoModal(null)}
              className="absolute right-4 top-4 z-40 flex size-10 items-center justify-center rounded-full bg-black/80 text-white hover:bg-primary hover:text-white transition-all shadow-xl cursor-pointer"
              aria-label="Close video modal"
            >
              <X className="size-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Video Player Column */}
              <div className="lg:col-span-7 bg-black flex items-center justify-center">
                <ClientVideoPlayer testimonial={videoModal} isModal={true} />
              </div>

              {/* Right Content Panel */}
              <div className="lg:col-span-5 p-6 sm:p-8 md:p-9 flex flex-col justify-between bg-[#261309] border-t lg:border-t-0 lg:border-l border-[#52331F]/70">
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-primary">
                      {[...Array(videoModal.rating)].map((_, i) => (
                        <Star key={i} className="size-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="size-3" /> Verified Client Story
                    </span>
                  </div>

                  {/* Project Title & City */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      Architectural Case Study
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mt-0.5">
                      {videoModal.project}
                    </h3>
                    <p className="text-xs text-white/70 flex items-center gap-1.5 mt-1">
                      <MapPin className="size-3.5 text-primary shrink-0" />
                      {videoModal.city} · Completed {videoModal.year}
                    </p>
                  </div>

                  {/* Client Quote Excerpt */}
                  <div className="p-3.5 rounded-xl bg-[#1A0D06] border border-[#52331F]/80">
                    <p className="text-xs sm:text-sm text-[#F5ECE5] leading-relaxed italic">
                      “{videoModal.detailedFeedback}”
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary mt-2 flex items-center gap-1">
                      <User className="size-3 text-primary" /> {videoModal.author} ({videoModal.role})
                    </p>
                  </div>

                  {/* Project Specs Grid */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary mb-2">
                      Project Specifications
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                        <span className="block text-[9px] uppercase tracking-wider text-white/60">Scope</span>
                        <span className="font-semibold text-white truncate block">{videoModal.scope}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                        <span className="block text-[9px] uppercase tracking-wider text-white/60">Area</span>
                        <span className="font-semibold text-white truncate block">{videoModal.sqft}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                        <span className="block text-[9px] uppercase tracking-wider text-white/60">Timeline</span>
                        <span className="font-semibold text-white truncate block">{videoModal.timeline}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                        <span className="block text-[9px] uppercase tracking-wider text-white/60">Key Finishes</span>
                        <span className="font-semibold text-white truncate block">{videoModal.materials}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Consultation Button */}
                <div className="pt-5 mt-4 border-t border-[#52331F]/80">
                  <Button
                    variant="studio"
                    size="lg"
                    className="w-full justify-center orange-glow cursor-pointer"
                    onClick={() => {
                      setVideoModal(null);
                      go("contact");
                    }}
                  >
                    <Sparkles className="size-4 mr-1.5" />
                    Book Design Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote Banner */}
      <section className="px-4 sm:px-6 lg:px-10 pt-12 sm:pt-20 lg:pt-28">
        <div className="reveal-section mx-auto max-w-[1200px] text-center">
          <Sparkles className="size-6 text-primary mx-auto mb-3" />
          <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            “Great interiors are not simply seen. <br />
            <em className="italic text-primary font-normal">They are experienced.</em>”
          </p>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
            We believe meaningful design lives at the intersection of function and emotion. Light,
            proportion, material warmth and personal character create a home that looks stunning and
            feels instinctively right.
          </p>
        </div>
        <img
          src={villa}
          width={1600}
          height={1104}
          loading="lazy"
          alt="Casa Verde warm architecture opening onto courtyard"
          className="mx-auto mt-8 sm:mt-12 h-[35vh] sm:h-[45vh] min-h-[260px] sm:min-h-[340px] w-full max-w-[1500px] rounded-2xl sm:rounded-3xl object-cover shadow-xl"
        />
      </section>

      {/* Contact & Consultation Section */}
      <section
        id="contact"
        className="bg-secondary/60 px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 mb-3">
              <Sparkles className="size-3 text-primary" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Start A Conversation
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.02] text-foreground">
              Let’s Talk About Your Space.
            </h2>
            <p className="mt-4 text-xs sm:text-sm md:text-base text-foreground/80 leading-relaxed">
              Tell us about your project vision, timeline, and location. Our senior design team will
              prepare a personalized concept proposal.
            </p>

            <div className="mt-6 sm:mt-8 space-y-3.5 text-sm">
              <div className="rounded-xl sm:rounded-2xl border border-border/80 bg-card p-4 flex items-center gap-3.5">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                    Studio Phone
                  </span>
                  <p className="mt-0.5 font-semibold text-foreground text-xs sm:text-sm">
                    +91 22 4108 2026
                  </p>
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-border/80 bg-card p-4 flex items-center gap-3.5">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                    Email Inquiries
                  </span>
                  <p className="mt-0.5 font-semibold text-foreground text-xs sm:text-sm">
                    studio@luminastudio.design
                  </p>
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-border/80 bg-card p-4 flex items-center gap-3.5">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                    Studio Address
                  </span>
                  <p className="mt-0.5 font-semibold text-foreground text-xs sm:text-sm">
                    42, Dr Annie Besant Road, Worli, Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-5 sm:p-8 md:p-10 shadow-xl">
            {sent ? (
              <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
                <div className="flex size-12 sm:size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                  <Check className="size-6 sm:size-7 stroke-[3]" />
                </div>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Thank you.
                </h3>
                <p className="mt-2 max-w-sm text-xs sm:text-sm text-muted-foreground">
                  Your project inquiry has been received. Our studio will be in touch within one
                  business day.
                </p>
                <Button variant="studioGhost" className="mt-5" onClick={() => setSent(false)}>
                  Send another inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {[
                  {
                    label: "Full Name",
                    type: "text",
                    placeholder: "e.g. Priya Sharma",
                    icon: User,
                  },
                  {
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "+91 98765 43210",
                    icon: Phone,
                  },
                  {
                    label: "Email Address",
                    type: "email",
                    placeholder: "priya@example.com",
                    icon: Mail,
                  },
                  {
                    label: "Project Location",
                    type: "text",
                    placeholder: "e.g. Bandra, Mumbai",
                    icon: MapPin,
                  },
                ].map((field) => {
                  const FieldIcon = field.icon;
                  return (
                    <label
                      key={field.label}
                      className="block text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-foreground"
                    >
                      <span className="flex items-center gap-1.5 mb-1.5">
                        <FieldIcon className="size-3.5 text-primary" />
                        {field.label}
                      </span>
                      <input
                        required
                        type={field.type}
                        placeholder={field.placeholder}
                        className="block w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm font-normal normal-case text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </label>
                  );
                })}

                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                  <span className="flex items-center gap-1.5 mb-1.5">
                    <Building2 className="size-3.5 text-primary" />
                    Project Type
                  </span>
                  <select
                    required
                    className="block w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm font-normal normal-case text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select project type</option>
                    <option>Residential Interiors</option>
                    <option>Commercial Interiors</option>
                    <option>Luxury Renovation</option>
                    <option>Turnkey Project</option>
                  </select>
                </label>

                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                  <span className="flex items-center gap-1.5 mb-1.5">
                    <Wallet className="size-3.5 text-primary" />
                    Estimated Budget
                  </span>
                  <select
                    required
                    className="block w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm font-normal normal-case text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select budget range</option>
                    <option>₹25–50 Lakh</option>
                    <option>₹50 Lakh–1 Crore</option>
                    <option>₹1 Crore+</option>
                  </select>
                </label>

                <label className="col-span-full block text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                  <span className="flex items-center gap-1.5 mb-1.5">
                    <FileCheck className="size-3.5 text-primary" />
                    Tell us about your project vision
                  </span>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your space, timeline, and requirements..."
                    className="block w-full resize-none rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm font-normal normal-case text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>

                <div className="col-span-full mt-2">
                  <Button
                    variant="studio"
                    size="lg"
                    type="submit"
                    className="w-full sm:w-auto orange-glow justify-center cursor-pointer"
                  >
                    <span>Submit Project Inquiry</span>
                    <Send className="size-4 ml-1.5" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground px-4 sm:px-6 lg:px-10 pb-8 pt-14 sm:pt-16 text-studio-light">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 border-b border-white/10 pb-12 sm:pb-14">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-white">
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-white font-sans text-xs font-black">
                  L
                </span>
                <span>
                  LUMINA<span className="text-primary font-normal">STUDIO</span>
                </span>
              </div>
              <p className="mt-3.5 max-w-sm text-xs sm:text-sm leading-relaxed text-studio-light/70">
                Crafting warm, timeless, and tactile interiors designed around the way you live.
              </p>
            </div>

            <div>
              <p className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                Navigate
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-studio-light/70">
                {["Home", "About", "Services", "Collections", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={nav.includes(link) ? `#${link.toLowerCase()}` : "#"}
                      className="hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                Services
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-studio-light/70">
                {[
                  { name: "Residential", icon: Home },
                  { name: "Commercial", icon: Building2 },
                  { name: "Renovation", icon: Hammer },
                  { name: "Space Planning", icon: LayoutGrid },
                  { name: "Turnkey Projects", icon: KeyRound },
                ].map((s) => (
                  <li key={s.name}>
                    <a
                      href="#services"
                      className="hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <s.icon className="size-3 text-primary/70" />
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                Connect
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-studio-light/70">
                {[
                  { name: "Instagram", icon: Instagram },
                  { name: "Pinterest", icon: Share2 },
                  { name: "LinkedIn", icon: Linkedin },
                  { name: "Facebook", icon: Facebook },
                ].map((c) => (
                  <li key={c.name}>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <c.icon className="size-3.5 text-primary/70" />
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-6 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-studio-light/50">
            <p>© 2026 Lumina Studio. All Rights Reserved.</p>
            <p className="flex gap-5">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
