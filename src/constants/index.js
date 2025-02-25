import project1 from "../assets/projects/sy2.jpg";
import project2 from "../assets/projects/s4.jpg";
import project3 from "../assets/projects/goldn2.jpg";
import project4 from "../assets/projects/ksolr2.jpg";
import project5 from "../assets/projects/kilime3.png";

export const HERO_CONTENT = `Web developer sa strašću za kodiranjem i dizajniranjem digitalnih rešenja.
Već 4 godine izrađujem web sajtove prema zahtevima klijenta. Sve što Vam je potrebno je ideja i dobijate gotov web sajt u najkraćem roku. Pored toga, nudim usluge održavanja sajtova i SEO optimizacije, kako biste maksimalno iskoristili svoj online potencijal.
Takođe, ako vam je potreban marketing na društvenim mrežama, mogu vam pomoći u promociji vašeg proizvoda ili usluge.

Osnivač sam sopstvenog preduzeća - Alpix Design koje se bavi izradom modernih i funkcionalnih web projekata.`;

export const ABOUT_TEXT = `Već 4 godine bavim se izradom profesionalnih i vizuelno privlačnih web sajtova koristeći WordPress platformu. Kroz rad sa različitim klijentima i industrijama, stekao sam iskustvo u prilagođavanju custom tema, optimizaciji performansi i implementaciji funkcionalnosti prema specifičnim potrebama korisnika. Fokusiram se na kreiranje sajtova koji su brzi, responzivni i optimizovani za pretraživače, kako bi vaša online prisutnost bila što uspešnija.`;

export const EXPERIENCES = [
  {
    year: "2020 - 2024",
    role: "Freelance Wordpress Developer",
    company: "Freelance",
    description: `Razvijao i prilagođavao WordPress sajtove za različite klijente, koristeći custom teme i dodatke za poboljšanje funkcionalnosti i korisničkog iskustva. Pružao usluge održavanja sajtova, optimizacije performansi i SEO-a pomoću alata kao što je Yoast SEO. Sarađivao sa klijentima na definisanju zahteva, kreirajući responzivne i vizuelno atraktivne sajtove.`,
    technologies: ["Wordpress", "Elementor", "Yoast", "SQL"],
  },
  {
    year: "2024 - Danas",
    role: "Osnivač",
    company: "Alpix Design",
    description: `Razvijao i prilagođavao WordPress sajtove za različite klijente kroz preduzeće Alpix, koristeći custom teme i dodatke za poboljšanje funkcionalnosti i korisničkog iskustva. Posao se proširio na izradu prilagođenih web stranica pomoću HTML, CSS i JavaScript tehnologija, omogućavajući veću fleksibilnost u dizajnu i performansama. Pored razvoja sajtova, pružao sam usluge SEO optimizacije (Yoast SEO), redovnog održavanja sajtova i tehničke podrške. Takođe, klijentima sam pomagao u marketingu na društvenim mrežama, kreirajući strategije za promociju njihovih proizvoda i usluga na platformama poput Facebook-a i Instagrama.`,
    technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "React"],
  },
];

export const PROJECTS = [
  {
    title: "SeeYou - proizvođač custom salveta",
    image: project1,
    description:
      "Sajt SeeYou.rs, izrađen kroz Wordpress platformu uz Elementor plugin. Dodati Custom CSS elementi gde je potrebno",
    technologies: ["WordPress", "HTML", "CSS", "Elementor" ],
	link: "https://seeyou.rs",
	
  },
  {
    title: "Smart Home System",
    image: project2,
    description:
      "Sajt smarthomesystem.rs izrađen je pomoću WordPressa, uz korišćenje prilagođene teme i relevantnih pluginova za optimalne performanse i funkcionalnost. Upotrebljen je Custom CSS i Javascript za izradu stranice kategorija proizvoda",
    technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "Elementor", "Woocommerce"],
	link: "https://smarthomesystem.rs/home/",
  },
  {
    title: "GoldN Store",
    image: project3,
    description:
      "Sajt Goldnstore.rs je sajt koji nudi prodaju smart sudopera, izrađen kroz Shopify platformu u skladu sa zahtevima klijenta",
    technologies: ["HTML", "CSS", "Shopify"],
	link: "https://goldnshop.rs",
  },
  {
    title: "Kilim Solar",
    image: project4,
    description:
      "Sajt kilimsolar.rs se bavi prodajom solarnih panela, urađen je sajt uz pomoć Wordpress platforme i oformljen webshop uz Woocommerce",
    technologies: ["HTML", "CSS", "Wordpress", "Elementor", "Woocommerce"],
	link: "https://kilimsolar.rs",
  },
  {
    title: "Kilim E3",
    image: project5,
    description:
      "Sajt kilim-e3.rs se bavi prodajom stolarije, urađen je sajt uz pomoć Wordpress platforme i oformljen webshop uz Woocommerce",
    technologies: ["HTML", "CSS", "Wordpress", "Elementor", "Woocommerce"],
	link: "https://kilim-e3.rs",
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "+381643661470",
  email: "alexaw32@hotmail.com",
};
