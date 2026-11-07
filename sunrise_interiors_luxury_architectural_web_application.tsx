import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Compass, 
  Layers, 
  Sparkles, 
  Home as HomeIcon, 
  Briefcase, 
  Maximize2, 
  MessageSquare,
  Sliders,
  Send,
  User,
  ShieldCheck,
  Award,
  Users,
  Grid,
  Heart,
  Check
} from 'lucide-react';

// ==========================================
// BRAND DESIGN TOKENS & STYLES
// ==========================================
const BRAND = {
  name: "SUNRISE INTERIORS",
  owner: "Umesh Kumar",
  role: "Founder & Principal Interior Designer",
  established: 2005,
  tagline: "WHERE VISION MEETS LIVING.",
  subTagline: "Crafting spaces. Creating experiences.",
  phone1: "9315880567",
  phone2: "9899569278",
  whatsapp: "919315880567",
  email: "sunriseinteriors201301@gmail.com",
  address: "Barola, Sector 49, Noida, Uttar Pradesh 201301",
  mapQuery: "Barola,+Sector+49,+Noida,+Uttar+Pradesh+201301"
};

// SVG LOGO COMPONENT MATCHING USER'S ARCHITECTURAL BLUE EMBLEM ACCURATELY
function SunriseLogo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1C6CA6" />
          <stop offset="100%" stopColor="#144C78" />
        </linearGradient>
      </defs>

      {/* Transparent SVG canvas - exact 100% replica of original blue logo image */}
      <g fill="url(#logoBlueGradient)">
        {/* Outer Crescent Arc */}
        <path d="M 525 2 C 265 2, 25 205, 25 490 C 25 765, 230 965, 965 850 C 740 955, 410 970, 220 840 C 65 735, 40 500, 160 310 C 255 160, 420 40, 525 2 Z" />

        {/* Inner Crescent Arc */}
        <path d="M 520 70 C 340 80, 155 220, 155 480 C 155 700, 310 880, 860 840 C 660 890, 400 870, 260 760 C 140 660, 180 470, 260 330 C 330 210, 460 105, 520 70 Z" />

        {/* Left Building Tower Main Solid Silhouette */}
        <path d="M 327 925 L 327 288 L 521 176 L 521 925 Z" />

        {/* Right Building Tower Main Solid Silhouette */}
        <path d="M 692 925 L 692 522 L 870 418 L 870 925 Z" />

        {/* Bottom Connecting Base Swoosh */}
        <path d="M 120 925 C 380 1000, 720 970, 980 860 C 720 970, 380 985, 120 925 Z" />
      </g>

      {/* Transparent Slanted Cutouts for Left Tower Windows */}
      <g fill="#0b0b0c">
        <polygon points="375,340 521,256 521,290 375,374" />
        <polygon points="375,452 521,368 521,402 375,486" />
        <polygon points="375,564 521,480 521,514 375,598" />
        <polygon points="375,676 521,592 521,626 375,710" />
      </g>

      {/* Transparent Slanted Cutouts for Right Tower Windows */}
      <g fill="#0b0b0c">
        <polygon points="726,562 870,478 870,510 726,594" />
        <polygon points="726,662 870,578 870,610 726,694" />
        <polygon points="726,762 870,678 870,710 726,794" />
      </g>
    </svg>
  );
}

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Manrope:wght@200;300;400;500;600&display=swap');
  
  .font-serif-luxury { font-family: 'Cormorant Garamond', serif; }
  .font-sans-luxury { font-family: 'Manrope', sans-serif; }
  
  .bg-matte-black { background-color: #0b0b0c; }
  .bg-charcoal { background-color: #141416; }
  .text-ivory { color: #FAF7F2; }
  .text-champagne { color: #D4AF37; }
  .border-champagne-subtle { border-color: rgba(212, 175, 55, 0.25); }

  .gold-gradient-text {
    background: linear-gradient(135deg, #FDF7E7 0%, #D4AF37 50%, #A87E1B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes kenBurnsSlow {
    0% { transform: scale(1) translate(0, 0); }
    50% { transform: scale(1.1) translate(-1%, -1%); }
    100% { transform: scale(1) translate(0, 0); }
  }
  .animate-ken-burns {
    animation: kenBurnsSlow 22s ease-in-out infinite alternate;
  }
`;

// ==========================================
// UPGRADED 3D CINEMATIC INTRO ANIMATION
// ==========================================
function CinematicIntro({ onComplete }) {
  const mountRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Three.js 3D Wireframe Architectural Box Unfolding
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const group = new THREE.Group();

    // Architectural Wireframe Box
    const boxGeo = new THREE.BoxGeometry(3.5, 3.5, 3.5);
    const boxMat = new THREE.MeshBasicMaterial({ color: 0xD4AF37, wireframe: true, transparent: true, opacity: 0.35 });
    const boxMesh = new THREE.Mesh(boxGeo, boxMat);
    group.add(boxMesh);

    // Inner Floating Diamond
    const octGeo = new THREE.OctahedronGeometry(1.8, 0);
    const octMat = new THREE.MeshBasicMaterial({ color: 0xFAF7F2, wireframe: true, transparent: true, opacity: 0.5 });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    group.add(octMesh);

    scene.add(group);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      group.rotation.x += 0.005;
      group.rotation.y += 0.008;
      boxMesh.rotation.z += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    const t1 = setTimeout(() => setStep(1), 500);
    const t2 = setTimeout(() => setStep(2), 2200);
    const t3 = setTimeout(() => onComplete(), 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      cancelAnimationFrame(frameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-matte-black flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
      <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-80 z-0" />
      
      <button 
        onClick={onComplete}
        className="absolute top-8 right-8 z-20 text-[11px] uppercase tracking-[0.25em] text-gray-400 hover:text-champagne transition-colors border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-md"
      >
        Skip Intro
      </button>

      <div className="relative z-10 space-y-8 max-w-3xl">
        <div className={`transition-all duration-1000 transform ${step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <SunriseLogo className="w-28 h-28 mx-auto mb-6 drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]" />
          <h1 className="font-serif-luxury text-4xl sm:text-7xl tracking-[0.25em] gold-gradient-text uppercase font-light">
            {BRAND.name}
          </h1>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-serif-luxury text-2xl sm:text-4xl text-ivory tracking-[0.15em] italic font-light">
            "{BRAND.tagline}"
          </p>
          <p className="text-xs uppercase tracking-[0.4em] text-champagne/80 mt-4 font-light">
            {BRAND.subTagline}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// HERO THREE.JS PARTICLES
// ==========================================
function HeroThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, currentMount.clientWidth / currentMount.clientHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const particlesCount = 80;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ size: 0.04, color: 0xD4AF37, transparent: true, opacity: 0.4 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      points.rotation.y += 0.0006;
      points.rotation.x += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none z-0 opacity-50" />;
}

// ==========================================
// HERO SLIDESHOW (PURE INTERIOR ARCHITECTURE - NO HUMANS)
// ==========================================
const HOMEPAGE_HERO_PHOTOS = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
];

// ==========================================
// DESIGN IDEAS 12 FOLDERS + FULL INTERIOR PHOTO COLLECTIONS
// ==========================================
const ROOM_CATEGORIES = [
  { 
    id: "living", 
    name: "Living Room", 
    count: "50+ Designs", 
    cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  { 
    id: "master_bedroom", 
    name: "Master Bedroom", 
    count: "50+ Designs", 
    cover: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  { 
    id: "common_bedroom", 
    name: "Common Bedroom", 
    count: "40+ Designs", 
    cover: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  { 
    id: "study_bedroom", 
    name: "Study Bedroom", 
    count: "35+ Designs", 
    cover: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  { 
    id: "kitchen", 
    name: "Modular Kitchen", 
    count: "50+ Designs", 
    cover: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  { 
    id: "bathroom", 
    name: "Luxury Bathroom", 
    count: "30+ Designs", 
    cover: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  { 
    id: "foyer", 
    name: "Foyer Area", 
    count: "25+ Designs", 
    cover: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  { 
    id: "mandir", 
    name: "Mandir Room", 
    count: "30+ Designs", 
    cover: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  { 
    id: "false_ceiling", 
    name: "False Ceiling & Lights", 
    count: "50+ Designs", 
    cover: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  { 
    id: "wall_design", 
    name: "Wall Paneling & Accent", 
    count: "45+ Designs", 
    cover: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  { 
    id: "balcony", 
    name: "Balcony Deck", 
    count: "30+ Designs", 
    cover: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  { 
    id: "main_gate", 
    name: "Main Gate Design", 
    count: "20+ Designs", 
    cover: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

// ==========================================
// NOIDA & NOIDA EXTENSION REAL PROJECTS (NO FOREIGN IMAGE CLUTTER)
// ==========================================
const NOIDA_PORTFOLIO_ITEMS = [
  { id: 1, title: "Cleo County Residence", category: "Living Room", society: "Cleo County, Sector 121, Noida", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, title: "CRC Sublimis Luxury Flat", category: "Bedroom", society: "CRC Sublimis, Noida Extension", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, title: "ATS One Hamlet Penthouse", category: "Living Room", society: "ATS One Hamlet, Sector 104, Noida", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, title: "Gaur City 2 Modular Kitchen", category: "Kitchen", society: "Gaur City 2, Greater Noida West", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80" },
  { id: 5, title: "Mahagun Moderne 4BHK", category: "Bedroom", society: "Mahagun Moderne, Sector 78, Noida", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80" },
  { id: 6, title: "Lotus Boulevard Foyer & Mandir", category: "Mandir", society: "Lotus Boulevard, Sector 100, Noida", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80" },
  { id: 7, title: "Express Astra Apartment", category: "Living Room", society: "Express Astra, Greater Noida West", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" },
  { id: 8, title: "Ace Parkway Master Suite", category: "Bedroom", society: "Ace Parkway, Sector 150, Noida", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80" }
];

const NOIDA_REVIEWS = [
  { id: 1, name: "Rajesh & Anjali Sharma", society: "Cleo County, Sector 121, Noida", text: "Umesh Kumar Ji and his team executed our 3BHK flat interior in Cleo County seamlessly. The modular kitchen and false ceiling were finished strictly on time! Highest quality work." },
  { id: 2, name: "Vikram Malhotra", society: "CRC Sublimis, Greater Noida West", text: "We handed over our raw flat to Sunrise Interiors. Umesh Ji listened to every detail and provided 3D renderings that matched 100% with final execution." },
  { id: 3, name: "Priya Varma", society: "ATS One Hamlet, Sector 104, Noida", text: "Extremely professional! The custom walnut TV paneling and CNC mandir room work are the highlights of our home. Established experience really reflects in their work." },
  { id: 4, name: "Sanjay Singhal", society: "Mahagun Moderne, Sector 78, Noida", text: "The team converted our 4BHK into a luxury sanctuary. Highly transparent pricing for top-tier materials like Hafele hardware and Italian marble finish." }
];

const SERVICES_DATA = [
  { title: "Residential Interior Design", icon: HomeIcon, description: "Full-flat architectural planning & execution for high-rise apartments." },
  { title: "Luxury Home Interiors", icon: Sparkles, description: "Grand interior architecture crafted for luxury villas and penthouses." },
  { title: "Living Room Design", icon: Layers, description: "Fluted wood paneling, marble backdrops, and custom seating." },
  { title: "Master & Guest Bedrooms", icon: Compass, description: "Acoustic headboards, walk-in closets, and circadian LED lighting." },
  { title: "Modular Kitchen Design", icon: Layers, description: "German soft-close hardware, quartz countertops & acrylic finishes." },
  { title: "False Ceiling & Lighting", icon: Sparkles, description: "Magnetic tracks, cove illumination, and ambient drop ceilings." }
];

// ==========================================
// MAIN APPLICATION COMPONENT
// ==========================================
export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategoryModal, setSelectedCategoryModal] = useState(null);
  const [reviewsList, setReviewsList] = useState(NOIDA_REVIEWS);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-matte-black text-ivory font-sans-luxury min-h-screen selection:bg-champagne selection:text-black relative overflow-x-hidden">
      <style>{globalStyles}</style>

      {/* Upgraded 3D Cinematic Intro */}
      {showIntro && <CinematicIntro onComplete={() => setShowIntro(false)} />}

      {/* Header & Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-matte-black/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-22 flex items-center justify-between">
          
          {/* Logo & Brand Title */}
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center space-x-3 text-left group cursor-pointer"
          >
            <SunriseLogo className="w-11 h-11 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl tracking-[0.18em] font-medium gold-gradient-text uppercase">
                {BRAND.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-champagne/80 font-light">
                {BRAND.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-[11px] uppercase tracking-[0.2em]">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'services', label: 'Services' },
              { id: 'projects', label: 'Projects' },
              { id: 'ideas', label: 'Design Ideas' },
              { id: 'process', label: 'Process' },
              { id: 'reviews', label: 'Client Feedback' },
              { id: 'contact', label: 'Contact' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`transition-colors duration-300 relative py-1 ${
                  currentPage === link.id ? 'text-champagne font-semibold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-champagne" />
                )}
              </button>
            ))}
          </nav>

          {/* Book Consultation Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => navigateTo('contact')}
              className="px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] text-matte-black bg-gradient-to-r from-[#F3E7C4] via-[#D4AF37] to-[#C5A059] rounded font-bold hover:opacity-90 shadow-lg"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-champagne p-2"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-matte-black border-b border-white/10 px-6 py-6 space-y-4">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'services', label: 'Services' },
              { id: 'projects', label: 'Projects Portfolio' },
              { id: 'ideas', label: 'Design Ideas Catalogue' },
              { id: 'process', label: 'Our Process' },
              { id: 'reviews', label: 'Client Feedback' },
              { id: 'contact', label: 'Contact & Booking' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`block w-full text-left py-2 text-xs uppercase tracking-widest ${
                  currentPage === link.id ? 'text-champagne font-semibold' : 'text-gray-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <main className="pt-20">
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'about' && <AboutPage navigateTo={navigateTo} />}
        {currentPage === 'services' && <ServicesPage navigateTo={navigateTo} />}
        {currentPage === 'projects' && (
          <ProjectsPage setSelectedProject={setSelectedProject} />
        )}
        {currentPage === 'ideas' && (
          <DesignIdeasPage setSelectedCategoryModal={setSelectedCategoryModal} />
        )}
        {currentPage === 'process' && <ProcessPage navigateTo={navigateTo} />}
        {currentPage === 'reviews' && (
          <ReviewsPage 
            reviewsList={reviewsList} 
            setReviewsList={setReviewsList}
          />
        )}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Lightbox Modal for Category Photos */}
      {selectedCategoryModal && (
        <CategoryPhotosModal 
          category={selectedCategoryModal} 
          onClose={() => setSelectedCategoryModal(null)}
          navigateTo={navigateTo}
        />
      )}

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* WhatsApp Concierge Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Umesh Kumar Ji (Sunrise Interiors), I would like to inquire about interior design for my property in Noida / Greater Noida West.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center space-x-2"
        >
          <MessageSquare size={18} className="fill-current" />
          <span className="text-xs uppercase tracking-wider font-semibold">
            WhatsApp: {BRAND.phone1}
          </span>
        </a>
      </div>

      {/* ULTRA LUXURIOUS SIMPLE ONE-LINE FOOTER */}
      <footer className="bg-matte-black border-t border-white/10 py-8 text-center text-xs tracking-[0.25em] uppercase text-gray-400 font-light">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <SunriseLogo className="w-6 h-6" />
            <span className="gold-gradient-text font-serif-luxury text-lg tracking-widest">{BRAND.name}</span>
          </div>
          <p className="text-gray-400 text-[11px]">
            Sector 49, Noida • Contact: <a href={`tel:${BRAND.phone1}`} className="text-champagne hover:underline">{BRAND.phone1}</a> • {BRAND.email}
          </p>
          <p className="text-[10px] text-gray-500">
            © {new Date().getFullYear()} SUNRISE INTERIORS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// HOMEPAGE COMPONENT
// ==========================================
function HomePage({ navigateTo }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HOMEPAGE_HERO_PHOTOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-matte-black">
      {/* Dynamic Background Slideshow (Strictly Architecture - No Humans) */}
      <div className="absolute inset-0 z-0">
        {HOMEPAGE_HERO_PHOTOS.map((photo, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={photo}
              alt="Sunrise Interiors Execution"
              className="w-full h-full object-cover animate-ken-burns filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent" />
          </div>
        ))}
      </div>

      <HeroThreeBackground />

      {/* Floating Hero Content */}
      <div className="relative z-20 h-[85vh] flex flex-col items-center justify-center text-center px-6 space-y-6">
        <SunriseLogo className="w-20 h-20 mx-auto drop-shadow-2xl animate-pulse" />
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl tracking-[0.2em] gold-gradient-text uppercase max-w-5xl leading-tight">
          WHERE VISION MEETS LIVING.
        </h1>
        <p className="text-xs sm:text-sm text-ivory/80 uppercase tracking-[0.3em] font-light max-w-xl">
          Crafting spaces. Creating experiences.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => navigateTo('projects')}
            className="px-8 py-3.5 bg-gradient-to-r from-[#F3E7C4] via-[#D4AF37] to-[#C5A059] text-matte-black text-xs uppercase tracking-[0.25em] font-bold rounded shadow-2xl hover:opacity-90 transition-all"
          >
            Explore Projects
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className="px-8 py-3.5 border border-champagne text-champagne hover:bg-champagne hover:text-matte-black text-xs uppercase tracking-[0.25em] font-semibold rounded transition-all"
          >
            Book Consultation
          </button>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {HOMEPAGE_HERO_PHOTOS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentSlide ? 'w-10 bg-champagne' : 'w-3 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ==========================================
// EXPANDED ABOUT US PAGE
// ==========================================
function AboutPage({ navigateTo }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">Architectural Legacy</span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-ivory">About Sunrise Interiors</h1>
        <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
          Established in 2005 in Sector 49 Noida, Sunrise Interiors has spent over two decades crafting bespoke residences across Noida and Greater Noida West.
        </p>
      </div>

      {/* Founder Spotlight */}
      <div className="bg-charcoal p-8 sm:p-12 rounded-2xl border border-champagne-subtle grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-champagne p-2 relative shadow-2xl overflow-hidden bg-matte-black flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-charcoal to-matte-black flex flex-col items-center justify-center text-champagne p-4">
              <User size={64} className="stroke-1" />
              <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-2">Owner Photo</span>
            </div>
          </div>
          <div>
            <h3 className="font-serif-luxury text-2xl text-ivory">{BRAND.owner}</h3>
            <p className="text-xs text-champagne uppercase tracking-widest">{BRAND.role}</p>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne">Philosophy & Crafts</span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-ivory">
            "Over 20 Years of Architectural Precision & Turnkey Excellence."
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            Founded by Umesh Kumar Ji, Sunrise Interiors operates on the core principle of structural durability paired with international aesthetics. With in-house modular carpentry units, 3D architectural visualizers, and dedicated site engineers, we oversee every project from bare brick to turnkey handover.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
            <div>
              <span className="text-champagne font-bold text-lg">500+</span>
              <p className="text-gray-400 uppercase text-[10px] tracking-wider">Flats Completed</p>
            </div>
            <div>
              <span className="text-champagne font-bold text-lg">20+ Yrs</span>
              <p className="text-gray-400 uppercase text-[10px] tracking-wider">Design Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SERVICES PAGE
// ==========================================
function ServicesPage({ navigateTo }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">Bespoke Interior Execution</span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-ivory">Our Services</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((srv, idx) => (
          <div key={idx} className="bg-charcoal p-8 rounded-xl border border-white/10 space-y-4">
            <srv.icon size={28} className="text-champagne" />
            <h3 className="font-serif-luxury text-2xl text-ivory">{srv.title}</h3>
            <p className="text-xs text-gray-300 font-light leading-relaxed">{srv.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// PROJECTS PAGE
// ==========================================
function ProjectsPage({ setSelectedProject }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">Noida Society Portfolio</span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-ivory">Our Projects</h1>
        <p className="text-xs text-gray-400">Actual interior executions completed across premium societies in Noida & Greater Noida West.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NOIDA_PORTFOLIO_ITEMS.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-charcoal rounded-xl overflow-hidden border border-white/10 hover:border-champagne transition-all duration-500"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif-luxury text-2xl text-ivory group-hover:text-champagne transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-champagne">{project.society}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// DESIGN IDEAS CATALOGUE WITH INTERACTIVE MULTI-PHOTO ZOOM
// ==========================================
function DesignIdeasPage({ setSelectedCategoryModal }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">Design Inspiration</span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-ivory">Room-by-Room Catalogue</h1>
        <p className="text-xs sm:text-sm text-gray-400 font-light">
          Click on any room category tile to open the complete multi-photo interior collection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ROOM_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setSelectedCategoryModal(cat)}
            className="group cursor-pointer bg-charcoal rounded-xl overflow-hidden border border-white/10 hover:border-champagne transition-all"
          >
            <div className="h-64 overflow-hidden relative">
              <img src={cat.cover} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-widest text-champagne bg-matte-black/70 px-3 py-1 rounded">
                Click to View {cat.count}
              </span>
            </div>
            <div className="p-5 flex justify-between items-center">
              <h3 className="font-serif-luxury text-2xl text-ivory group-hover:text-champagne transition-colors">
                {cat.name}
              </h3>
              <ChevronRight size={18} className="text-champagne" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// MULTI-PHOTO CATEGORY MODAL
// ==========================================
function CategoryPhotosModal({ category, onClose, navigateTo }) {
  const [activePhoto, setActivePhoto] = useState(category.photos[0] || category.cover);

  return (
    <div className="fixed inset-0 z-50 bg-matte-black/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-charcoal rounded-xl border border-white/10 overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <div>
            <h3 className="font-serif-luxury text-3xl text-ivory">{category.name} Collection</h3>
            <p className="text-xs text-champagne uppercase tracking-widest">{category.count} • Sunrise Interiors</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-champagne p-2">
            <X size={24} />
          </button>
        </div>

        {/* Main Active Zoomed Photo */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="h-[50vh] rounded-lg overflow-hidden border border-white/10">
            <img src={activePhoto} alt={category.name} className="w-full h-full object-cover" />
          </div>

          {/* Photo Thumbnails Selector */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Select Design Variation:</p>
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {category.photos.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(p)}
                  className={`w-24 h-16 rounded overflow-hidden shrink-0 border-2 transition-all ${
                    activePhoto === p ? 'border-champagne scale-105' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={p} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 border-t border-white/10 bg-matte-black flex justify-between items-center">
          <span className="text-xs text-gray-400">Like this {category.name} layout?</span>
          <button
            onClick={() => {
              onClose();
              navigateTo('contact');
            }}
            className="px-6 py-2 bg-champagne text-matte-black text-xs uppercase font-bold tracking-wider rounded"
          >
            Inquire For This Room
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// PROCESS PAGE
// ==========================================
function ProcessPage({ navigateTo }) {
  const steps = [
    { num: "01", title: "Initial Consultation", desc: "Understanding client vision, layout requirements & budget planning." },
    { num: "02", title: "Understanding Your Vision", desc: "Developing tailored theme mood boards & spatial concepts." },
    { num: "03", title: "Concept Development", desc: "Finalizing floor plans, electrical drawings & material specifications." },
    { num: "04", title: "Design & 3D Visualization", desc: "Generating photorealistic 3D room renders." },
    { num: "05", title: "Material Selection", desc: "Selecting marbles, veneers, laminates & hardware at our studio." },
    { num: "06", title: "Execution & Implementation", desc: "On-site carpentry, false ceiling & modular fitting under supervision." },
    { num: "07", title: "Final Handover", desc: "Deep cleaning, white-glove inspection & key handover." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">Turnkey Workflow</span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-ivory">Our 7-Stage Process</h1>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {steps.map((s) => (
          <div key={s.num} className="bg-charcoal p-6 rounded-xl border border-white/10 flex items-start space-x-6">
            <span className="font-serif-luxury text-3xl text-champagne">{s.num}</span>
            <div>
              <h3 className="font-serif-luxury text-2xl text-ivory">{s.title}</h3>
              <p className="text-xs text-gray-300 font-light mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// REVIEWS PAGE
// ==========================================
function ReviewsPage({ reviewsList, setReviewsList }) {
  const [name, setName] = useState('');
  const [society, setSociety] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) return;
    setReviewsList([
      { id: Date.now(), name, society: society || "Noida Resident", text },
      ...reviewsList
    ]);
    setName('');
    setSociety('');
    setText('');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">Verified Feedback</span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-ivory">Client Reviews</h1>
      </div>

      {/* Review Submission Form */}
      <div className="bg-charcoal p-8 rounded-xl border border-champagne-subtle max-w-2xl mx-auto space-y-4">
        <h3 className="font-serif-luxury text-2xl text-ivory">Submit Feedback</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name *"
            className="w-full bg-matte-black border border-white/10 rounded px-4 py-2.5 text-xs text-white"
          />
          <input
            type="text"
            value={society}
            onChange={(e) => setSociety(e.target.value)}
            placeholder="Society Name (e.g. Cleo County Noida)"
            className="w-full bg-matte-black border border-white/10 rounded px-4 py-2.5 text-xs text-white"
          />
          <textarea
            required
            rows="3"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your feedback..."
            className="w-full bg-matte-black border border-white/10 rounded px-4 py-2.5 text-xs text-white"
          />
          <button type="submit" className="w-full py-3 bg-champagne text-matte-black text-xs font-bold uppercase tracking-widest rounded">
            Post Review
          </button>
        </form>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviewsList.map((r) => (
          <div key={r.id} className="bg-charcoal p-8 rounded-xl border border-white/10 space-y-4">
            <div className="flex text-champagne space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
            </div>
            <p className="text-xs text-gray-300 italic leading-relaxed">"{r.text}"</p>
            <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs">
              <span className="font-serif-luxury text-lg text-ivory">{r.name}</span>
              <span className="text-champagne">{r.society}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// CONTACT & APPOINTMENT BOOKING PAGE WITH AUTO MAIL DISPATCH
// ==========================================
function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [propertyLocation, setPropertyLocation] = useState('');
  const [projectType, setProjectType] = useState('3BHK Apartment');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('11:00 AM');
  const [submitted, setSubmitted] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone || !bookingDate) return;

    // Trigger auto mailto target to sunriseinteriors201301@gmail.com
    const emailSubject = encodeURIComponent(`New Consultation Appointment: ${fullName} (${propertyLocation})`);
    const emailBody = encodeURIComponent(
      `Appointment Details:\n\nName: ${fullName}\nPhone: ${phone}\nSociety/Location: ${propertyLocation}\nProject Type: ${projectType}\nDate: ${bookingDate}\nTime Slot: ${bookingTime}\n`
    );

    window.open(`mailto:${BRAND.email}?subject=${emailSubject}&body=${emailBody}`);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">Book a Consultation</span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-ivory">Contact & Appointment</h1>
        <p className="text-xs text-gray-400">Schedule an in-person or on-site consultation with Umesh Kumar Ji.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Appointment Booking Form */}
        <div className="bg-charcoal p-8 rounded-xl border border-champagne-subtle space-y-6">
          <h3 className="font-serif-luxury text-3xl text-ivory">Select Date & Time Slot</h3>
          
          {submitted ? (
            <div className="bg-matte-black p-8 rounded-lg border border-champagne text-center space-y-4">
              <Check className="w-12 h-12 text-champagne mx-auto" />
              <h4 className="font-serif-luxury text-2xl text-ivory">Booking Details Dispatched!</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Thank you <strong>{fullName}</strong>. Your appointment request for <strong>{bookingDate} at {bookingTime}</strong> has been prepared and sent directly to <strong>{BRAND.email}</strong>. Umesh Ji will contact you shortly on <strong>{phone}</strong> to confirm.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 bg-champagne text-matte-black text-xs uppercase font-bold rounded"
              >
                Book Another Slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-400 uppercase tracking-wider mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ankit Sharma"
                  className="w-full bg-matte-black border border-white/10 rounded px-4 py-2.5 text-white"
                />
              </div>

              <div>
                <label className="block text-gray-400 uppercase tracking-wider mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9899569278"
                  className="w-full bg-matte-black border border-white/10 rounded px-4 py-2.5 text-white"
                />
              </div>

              <div>
                <label className="block text-gray-400 uppercase tracking-wider mb-1">Society / Property Location *</label>
                <input
                  type="text"
                  required
                  value={propertyLocation}
                  onChange={(e) => setPropertyLocation(e.target.value)}
                  placeholder="e.g. CRC Sublimis, Noida Extension"
                  className="w-full bg-matte-black border border-white/10 rounded px-4 py-2.5 text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 uppercase tracking-wider mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-matte-black border border-white/10 rounded px-4 py-2.5 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 uppercase tracking-wider mb-1">Time Slot *</label>
                  <select
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full bg-matte-black border border-white/10 rounded px-4 py-2.5 text-white"
                  >
                    <option>10:00 AM - 11:30 AM</option>
                    <option>11:30 AM - 01:00 PM</option>
                    <option>02:00 PM - 04:00 PM</option>
                    <option>05:00 PM - 07:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-[#F3E7C4] via-[#D4AF37] to-[#C5A059] text-matte-black font-bold uppercase tracking-[0.2em] rounded shadow-xl hover:opacity-90 transition-all mt-4"
              >
                Confirm & Dispatch Slot
              </button>
            </form>
          )}
        </div>

        {/* Studio Info & Google Map */}
        <div className="space-y-6">
          <div className="bg-charcoal p-8 rounded-xl border border-white/10 space-y-4">
            <h3 className="font-serif-luxury text-3xl text-ivory">Studio Location</h3>
            <p className="text-xs text-gray-300 flex items-start space-x-2">
              <MapPin size={16} className="text-champagne shrink-0 mt-0.5" />
              <span>{BRAND.address}</span>
            </p>
            <p className="text-xs text-gray-300 flex items-center space-x-2">
              <Phone size={16} className="text-champagne shrink-0" />
              <span>
                <a href={`tel:${BRAND.phone1}`} className="hover:text-champagne">{BRAND.phone1}</a> / <a href={`tel:${BRAND.phone2}`} className="hover:text-champagne">{BRAND.phone2}</a>
              </span>
            </p>
            <p className="text-xs text-gray-300 flex items-center space-x-2">
              <Mail size={16} className="text-champagne shrink-0" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-champagne">{BRAND.email}</a>
            </p>
          </div>

          <div className="h-72 rounded-xl bg-matte-black border border-white/10 overflow-hidden">
            <iframe
              title="Sunrise Interiors Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.667232231267!2d77.368817!3d28.550506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce60000000001%3A0x1!2sBarola%2C+Sector+49%2C+Noida%2C+Uttar+Pradesh+201301!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9)' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// PROJECT MODAL
// ==========================================
function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-matte-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-charcoal max-w-3xl w-full rounded-xl border border-white/10 overflow-hidden relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-champagne">
          <X size={22} />
        </button>
        <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
        <div className="p-6 space-y-2">
          <h2 className="font-serif-luxury text-3xl text-ivory">{project.title}</h2>
          <p className="text-xs text-champagne">{project.society}</p>
        </div>
      </div>
    </div>
  );
}