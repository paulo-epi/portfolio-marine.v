import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import "./globals.css";
import { Great_Vibes, Courgette } from "next/font/google";

const great_vibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
});

const courgette = Courgette({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-courgette',
});

export const metadata: Metadata = {
  title: 'Marine Villaume',
  description: 'Marine Villaume | Community Manager et Chargée de Communication au sein du Grand Est et des Vosges (Nancy (54), Epinal (88))',
  verification: {google: "google-site-verification=-rN5u2mmMYyd67xyrN8abCM9okHGXEauIEA0XUvuLFg"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${great_vibes.variable} ${courgette.variable}`}>
      <body
        className={`${courgette.className} bg-[#f2e5d9d7] text-gray-950 relative pt-30 sm:pt-40 dark:bg-white-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-gradient-to-b from-[#fae385c3] to-[#ed7998af] absolute top-[-6rem] -z-10 right-[8rem] h-full w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] blurPB"></div>
        <div className="bg-gradient-to-b from-[#fae385b7] to-[#ed7998b7] absolute top-[-1rem] -z-20 left-[-35rem] h-full w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] blurPB"></div>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
