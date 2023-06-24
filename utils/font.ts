import { Edu_QLD_Beginner, Edu_SA_Beginner, Fuzzy_Bubbles, Homemade_Apple } from "next/font/google";

export const edu = Edu_QLD_Beginner({
    subsets: ['latin'],
    variable: '--font-edu',
    display: 'swap',
    weight: '400',
});
  
export const edu_sa = Edu_SA_Beginner({
    subsets: ['latin'],
    variable: '--font-edu_sa',
    display: 'swap',
    weight: '600',
}) 

export const fuzzy_bubbles = Fuzzy_Bubbles({
    subsets:['latin'],
    variable: '--font-apple',
    display: 'swap',
    weight: ['400','700'],
})