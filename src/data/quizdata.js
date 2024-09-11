import cardimg1 from "../assets/images/1.webp";
import cardimg2 from "../assets/images/2.webp";
import cardimg3 from "../assets/images/3.webp";
import cardimg4 from "../assets/images/4.webp";
import cardimg5 from "../assets/images/5.webp";
import cardimg6 from "../assets/images/last.webp";

export const quizdata = [
  {
    image: cardimg1,
    satisfactionQuestion: "De 1 à 5, quelle note donneriez-vous à votre satisfaction concernant l'Eau de Parfum Dior Sauvage 200 ml ?",
    ratingLabels: {
      low: "Dommage",
      high: "Très bien"
    },
    usageQuestion: "Quand on pense à Dior Sauvage, quel est le premier mot qui nous vient à l'esprit?",
    options: ["Elegance", "Sophistication"]
  },
  {
    image: cardimg2,
    satisfactionQuestion: "De 1 à 5, quelle note donneriez-vous à votre satisfaction concernant l'Eau de Parfum Dior Sauvage 200 ml ?",
    ratingLabels: {
      low: "Dommage",
      high: "Très bien"
    },
    usageQuestion: "À quelles occasions préférez-vous utiliser l'Eau de Parfum Dior Sauvage",
    options: ["Occasions speciales", "Au jour le jour"]
  },
  {
    image: cardimg3,
    satisfactionQuestion: "De 1 à 5, quelle note donneriez-vous à votre satisfaction concernant l'Eau de Parfum Dior Sauvage 200 ml ?",
    ratingLabels: {
      low: "Dommage",
      high: "Très bien"
    },
    usageQuestion: "À qui aimeriez-vous offrir l'Eau de Parfum Dior Sauvage ?",
    options: ["Famille", "Amis"]
  },
  {
    image: cardimg4,
    satisfactionQuestion: "De 1 à 5, quelle note donneriez-vous à votre satisfaction concernant l'Eau de Parfum Dior Sauvage 200 ml ?",
    ratingLabels: {
      low: "Dommage",
      high: "Très bien"
    },
    usageQuestion: "Quelle expérience avec Dior Sauvage de Parfum souhaiteriez-vous vivre?",
    options: ["Soire speciale", "Usage quotidien"]
  },
  {
    image: cardimg5,
    satisfactionQuestion: "De 1 à 5, quelle note donneriez-vous à votre satisfaction concernant l'Eau de Parfum Dior Sauvage 200 ml ?",
    ratingLabels: {
      low: "Dommage",
      high: "Très bien"
    },
    usageQuestion: "Si vous pouviez créer un nouveau produit pour la ligne Dior Sauvage, ce serait :",
    options: ["Parfum plus intense", "Une version plus legere"]
  },
  {
    title: "FÉLICITATIONS",
    image: cardimg6,
    message: "Vous avez répondu à notre enquête de satisfaction et bénéficié d'une réduction de 90% sur l'Eau de Parfum Dior Sauvage 200 ml! Cliquez sur le bouton ÉCHANGER ci-dessous pour profiter de votre réduction.\n\nCordialement, l'équipe Dior.",
    options: ["SAUVETAGE"]
  },
];

export default quizdata;
