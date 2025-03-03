import project1 from "../assets/projects/sy2.jpg";
import project2 from "../assets/projects/s4.jpg";
import project3 from "../assets/projects/goldn2.jpg";
import project4 from "../assets/projects/ksolr2.jpg";
import project5 from "../assets/projects/kilime3.png";
import project6 from "../assets/projects/drone1.jpg";


export const HERO_CONTENT = {
  
  sr: `Web developer sa strašću za kodiranjem i dizajniranjem digitalnih rešenja.
Već 4 godine izrađujem web sajtove prema zahtevima klijenta. Sve što Vam je potrebno je ideja i dobijate gotov web sajt u najkraćem roku. Pored toga, nudim usluge održavanja sajtova i SEO optimizacije, kako biste maksimalno iskoristili svoj online potencijal.
Takođe, ako vam je potreban marketing na društvenim mrežama, mogu vam pomoći u promociji vašeg proizvoda ili usluge.
Osnivač sam sopstvenog preduzeća - Alpix Design koje se bavi izradom modernih i funkcionalnih web projekata.`,
  en: `Web developer with a passion for coding and designing digital solutions. 
For 4 years, I have been creating websites based on client requirements. All you need is an idea, and you will get a complete website in no time. Additionally, I offer website maintenance and SEO optimization services to help you maximize your online potential.
If you need social media marketing, I can assist in promoting your products or services.
I am also the founder of my own company, Alpix Design, which specializes in creating modern and functional web projects.`,

};
export const TECH = {
  
  sr: `Tehnologije`,
  en: `Technologies`,

};
export const ABOUT_TEXT = {

  sr: `Već 4 godine bavim se izradom profesionalnih i vizuelno privlačnih web sajtova koristeći WordPress platformu. Kroz rad sa različitim klijentima i industrijama, stekao sam iskustvo u prilagođavanju custom tema, optimizaciji performansi i implementaciji funkcionalnosti prema specifičnim potrebama korisnika. Fokusiram se na kreiranje sajtova koji su brzi, responzivni i optimizovani za pretraživače, kako bi vaša online prisutnost bila što uspešnija.`,

  en: `For 4 years, I have been creating professional and visually appealing websites using the WordPress platform.
Through collaboration with different clients and industries, I have gained experience in customizing themes, optimizing performance, and implementing functionalities based on specific user needs. I focus on developing websites that are fast, responsive, and search engine optimized to ensure the best possible online presence for my clients.
`,
  omeni: {
    sr: "O Meni",
    en: "About Me",
  },

};

export const EXPERIENCES = [
  {
    naslov: {
      sr: "Iskustvo",
      en: "Experience",
    },
    year: {
      sr: "2020 - 2024",
      en: "2020 - 2024",
    },
    role: "Freelance Wordpress Developer",
    company: "Freelance",
    description: {
      sr: `Razvijao i prilagođavao WordPress sajtove za različite klijente, koristeći custom teme i dodatke za poboljšanje funkcionalnosti i korisničkog iskustva. Pružao usluge održavanja sajtova, optimizacije performansi i SEO-a pomoću alata kao što je Yoast SEO. Sarađivao sa klijentima na definisanju zahteva, kreirajući responzivne i vizuelno atraktivne sajtove.`,
      en: `I have developed and customized WordPress websites for various clients, using custom themes and plugins to enhance functionality and user experience. I have provided website maintenance services, performance optimization, and SEO using tools like Yoast SEO. I have worked closely with clients to define requirements and create responsive, visually appealing websites.`,
    },

    technologies: ["Wordpress", "Elementor", "Yoast", "SQL"],
  },
  {
    naslov: {
      
    },
    year: {
      sr: "2024 - Danas",
      en: "2024 - Today",
    },
    role: {
      sr: "Osnivač",
      en: "Founder",
    },
    company: "Alpix Design",
    description: {
      sr: `Razvijao i prilagođavao WordPress sajtove za različite klijente kroz preduzeće Alpix, koristeći custom teme i dodatke za poboljšanje funkcionalnosti i korisničkog iskustva. Posao se proširio na izradu prilagođenih web stranica pomoću HTML, CSS i JavaScript tehnologija, omogućavajući veću fleksibilnost u dizajnu i performansama. Pored razvoja sajtova, pružao sam usluge SEO optimizacije (Yoast SEO), redovnog održavanja sajtova i tehničke podrške. Takođe, klijentima sam pomagao u marketingu na društvenim mrežama, kreirajući strategije za promociju njihovih proizvoda i usluga na platformama poput Facebook-a i Instagrama.`,
      en: `Developed and customized WordPress websites for various clients through the company Alpix, using custom themes and plugins to enhance functionality and user experience. The work expanded to creating custom web pages using HTML, CSS, and JavaScript technologies, allowing for greater flexibility in design and performance. In addition to website development, I provided SEO optimization services (Yoast SEO), regular site maintenance, and technical support. Additionally, I assisted clients with social media marketing, creating strategies to promote their products and services on platforms such as Facebook and Instagram.`,
    },
    technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "React"],
  },
];

export const PROJECTS_TITLE = 
  {
    ptitle: {
      sr: "Projekti",
      en: "Projects",
    }, 
  }


export const PROJECTS = [
  {
    title: "SeeYou",
    image: project1,
    description: {
      sr: "Sajt SeeYou.rs, izrađen kroz Wordpress platformu uz Elementor plugin. Dodati su Custom CSS elementi gde je potrebno",
      en: "Website created using WordPress and the Elementor plugin. Custom CSS was used where needed."
      
    },
    technologies: ["WordPress", "HTML", "CSS", "Elementor" ],
	  link: "https://seeyou.rs",
	
  },
  {
    title: "Kilim E3",
    image: project5,
    description: {
      sr: "Sajt kilim-e3.rs se bavi prodajom stolarije, urađen je sajt uz pomoć Wordpress platforme i oformljen webshop uz Woocommerce",
      en: "Kilim-e3.rs website focuses on selling windows and doors. The website was created using the WordPress platform, with an integrated webshop via WooCommerce.",
    },
    technologies: ["HTML", "CSS", "Wordpress", "Elementor", "Woocommerce"],
	  link: "https://kilim-e3.rs",
  },
  {
    title: "GoldN Store",
    image: project3,
    description: {
      sr: "Sajt Goldnstore.rs je sajt koji nudi prodaju smart sudopera, izrađen kroz Shopify platformu u skladu sa zahtevima klijenta",
      en: "GoldnStore.rs website is an e-commerce platform selling smart sinks, built using Shopify according to the client’s requirements.",
    },
    technologies: ["HTML", "CSS", "Shopify"],
	  link: "https://goldnshop.rs",
  },
  {
    title: "Kilim Solar",
    image: project4,
    description: {
      sr: "Sajt kilimsolar.rs se bavi prodajom solarnih panela, urađen je sajt uz pomoć Wordpress platforme i oformljen webshop uz Woocommerce",
      en: "KilimSolar.rs website specializes in selling solar panels. The website was developed using the WordPress platform, with a webshop implemented through WooCommerce.",
    },
    technologies: ["HTML", "CSS", "Wordpress", "Elementor", "Woocommerce"],
	  link: "https://kilimsolar.rs",
  },
  {
    title: "Smart Home System",
    image: project2,
    description: {
      sr: "Sajt smarthomesystem.rs izrađen je pomoću WordPressa, uz korišćenje prilagođene teme i relevantnih pluginova za optimalne performanse i funkcionalnost. Upotrebljen je Custom CSS i Javascript za izradu stranice kategorija proizvoda",
      en: "SmartHomeSystem.rs website was created using WordPress, with a custom theme and relevant plugins for optimal performance and functionality. Custom CSS and JavaScript were used for the product category page development."
    },
    technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "Elementor", "Woocommerce"],
	  link: "https://smarthomesystem.rs/home/",
  },
  {
    title: "Drone - Landing Page",
    image: project6,
    description: {
      sr: "Landing Page koji sadrži 3d elemente, izrađen uz pomoc HTML, CSS, Vanilla JS i ThreeJS 3d biblioteke za JavaScript.",
      en: "Landing page containing 3D elements, created using HTML, CSS, Vanilla JS, and the Three.js 3D library for JavaScript."
    },
    technologies: ["HTML", "CSS", "JavaScript", "ThreeJS"],
	  link: "https://drone1.vercel.app/",
  },
];

export const CONTACT = {
  stupite: {
    sr: "Stupite u kontakt",
    en: "Get in contact",
  },
  address: "",
  phoneNo: "+381643661470",
  email: "alexaw32@hotmail.com",
};
