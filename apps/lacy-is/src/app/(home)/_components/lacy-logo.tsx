"use client";

import {
  Caveat,
  Fugaz_One,
  Grechen_Fuemen,
  Knewave,
  Rock_3D,
  Rubik_Glitch,
  Slackside_One,
  Vujahday_Script,
  Yuji_Boku,
} from "next/font/google";
import { EnhancedText } from "@/components/ui/enhanced-text";
import { cn } from "@/lib/utils";

const knewave = Knewave({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const grechen = Grechen_Fuemen({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const fugaz = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const vug = Vujahday_Script({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const slackside = Slackside_One({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const yuji = Yuji_Boku({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const rock = Rock_3D({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const glitch = Rubik_Glitch({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const logos = [
  <h1 className={cn(rock.className, "text-[5rem]")} key="lacy-1">
    Lacy
  </h1>,
  <EnhancedText
    text="Lacy"
    className={cn(slackside.className, "text-[5rem]")}
    key="lacy-3"
  />,
  <EnhancedText
    text="Lacy"
    className={cn(knewave.className, "text-[5rem]")}
    key="lacy-4"
  />,
  <EnhancedText
    text="Lacy"
    className={cn(grechen.className, "text-[5rem]")}
    key="lacy-5"
  />,
  <EnhancedText
    text="Lacy"
    className={cn(yuji.className, "text-[5rem]")}
    key="lacy-6"
  />,
];

export const LacyLogo = () => {
  const logo = logos.sort(() => Math.random() - 0.5)[0];
  return (
    <div className="m-20">
      <div className="flex flex-col items-center justify-center">{logo}</div>
    </div>
  );
};
