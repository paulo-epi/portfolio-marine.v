export const links = [
  {
    name: "Accueil",
    hash: "/",
  },
  {
    name: "À propos",
    hash: "about",
  },
  {
    name: "Mes créations",
    hash: "projects",
  },
  {
    name: "Expériences",
    hash: "experiences",
  },
  {
    name: "Contactez moi",
    hash: "contact",
  },
] as const;

export const texts = [
  "Community Manager",
  "Chargée de Communication",
  "Créative et passionnée",
  "Toujours prête à relever de nouveaux défis !",
];

export const experiences = [
  {
    date: "01/09/23 au 31/08/24",
    title: "Alternance au sein de l'association Amicale à la Métropole du Grand Nancy",
    role: "Chargée de communication"
  },
  {
    date: "Juillet et août 2022 et 2023",
    title: "Restaurant 4 Vingt 5 en Vendée",
    role: "Serveuse"
  },
  {
    date: "Mai à juin 2023",
    title: "Auto-école ECF à Vandoeuvre",
    role: "Secrétariat"
  },
  {
    date: "Janvier à février 2023",
    title: "Agence événementielle Lorents, stage de 7 semaines",
    role: "Community Manager"
  },
  {
    date: "Mai à juin 2022",
    title: "Auto-école ECF à Vandoeuvre, stage de 7 semaines",
    role: "Gestion clientèle"
  },
  {
    date: "Juillet et août 2020 et 2021",
    title: "Parc d'attractions Fraispertuis",
    role: "Gestion des attractions et vente de billets"
  }
] as const;

export const creations = [
  {
    title: "Création d'affiche",
    images: ["/assets/affiche1.png", "/assets/affiche2.png", "/assets/affiche3.png"],
    description: "Des affiches créatives et impactantes pour différents événements et promotions."
  },
  {
    title: "Création de carte de visite",
    images: ["/assets/carte-visite.png"],
    description: "Cartes de visite personnalisées qui reflètent l'identité de chaque client."
  },
  {
    title: "Création de vidéo",
    videos: ["/assets/anim-logo.MOV", "/assets/pub.mp4"],
    description: "Vidéos engageantes et professionnelles pour divers besoins de communication."
  },
  {
    title: "Animation de logo",
    videos: ["/assets/anim-logo.MOV"],
    description: "Animations de logos pour donner vie à l'identité visuelle de votre marque."
  },
  {
    title: "Contenu Instagram",
    images: ["/assets/insta1.png", "/assets/insta2.png", "/assets/insta3.png", "/assets/insta5.png", "/assets/insta6.png"],
    pdf: "/assets/insta4.pdf",
    description: "Contenu visuel et créatif pour booster votre présence sur Instagram."
  },
  {
    title: "Catalogue",
    images: ["/assets/catalogue1.png", "/assets/catalogue2.png", "/assets/catalogue3.png"],
    pdf: "/assets/catalogue.pdf",
    description: "Catalogues détaillés et attrayants pour présenter vos produits ou services."
  },
  {
    title: "Mood Board",
    images: ["/assets/mood-board.png"],
    description: "Mood boards inspirants pour visualiser l'ambiance et le style de vos projets."
  }
];

export const starterPack = [
  { name: "Illustrator", logo: "/logo/illustrator.png" },
  { name: "InDesign", logo: "/logo/indesign.png" },
  { name: "Premiere Pro", logo: "/logo/premiere-pro.png" },
  { name: "After Effects", logo: "/logo/after-effects.png" },
  { name: "Canva", logo: "/logo/canva.png" }
] as const;
