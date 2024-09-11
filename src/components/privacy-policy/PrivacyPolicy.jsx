import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Politique de Confidentialité</h1>
      <p className="text-sm text-gray-500 mb-4">Date d'entrée en vigueur : 2024</p>
      
      <p className="mb-4">
        Votre vie privée est importante pour nous. Cette Politique de Confidentialité explique comment nous recueillons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web Dior. Veuillez lire cette politique attentivement pour comprendre nos pratiques concernant vos informations personnelles.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Collecte d'informations</h2>
      <p className="mb-4">
        Nous recueillons des informations de différentes manières pour fournir et améliorer nos services, notamment :
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <strong>Informations que vous nous fournissez :</strong> Nous recueillons des informations personnelles que vous nous fournissez directement, telles que votre nom, adresse e-mail, numéro de téléphone et autres informations de contact lorsque vous vous inscrivez sur notre site, vous abonnez à nos bulletins, participez à des enquêtes ou nous contactez pour obtenir de l'assistance.
        </li>
        <li>
          <strong>Informations collectées automatiquement :</strong> Lorsque vous visitez notre site, nous pouvons collecter automatiquement certaines informations concernant votre appareil et votre utilisation du site, telles que l'adresse IP, le type de navigateur, les pages visitées, le temps passé sur le site et d'autres données analytiques.
        </li>
        <li>
          <strong>Cookies et technologies similaires :</strong> Nous utilisons des cookies et d'autres technologies de suivi pour améliorer votre expérience sur notre site, analyser le trafic et comprendre le comportement des utilisateurs. Vous pouvez ajuster les paramètres de votre navigateur pour refuser les cookies, mais cela peut limiter votre capacité à utiliser certaines parties de notre site.
        </li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Utilisation des informations</h2>
      <p className="mb-4">
        Les informations que nous recueillons sont utilisées pour :
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Exploiter et maintenir notre site ;</li>
        <li>Améliorer votre expérience de navigation ;</li>
        <li>Envoyer des communications, des bulletins et d'autres informations qui peuvent vous intéresser ;</li>
        <li>Répondre à vos questions et fournir un support client ;</li>
        <li>Surveiller et analyser les tendances et l'utilisation du site ;</li>
        <li>Respecter les obligations légales et réglementaires.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Partage des informations</h2>
      <p className="mb-4">
        Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec :
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <strong>Fournisseurs de services :</strong> Des tiers qui nous aident à exploiter notre site, mener nos affaires ou vous servir, à condition que ces tiers s'engagent à maintenir vos informations confidentielles.
        </li>
        <li>
          <strong>Obligation légale :</strong> Lorsque nous croyons que la divulgation est nécessaire pour se conformer à la loi, à une réglementation ou à une procédure légale, ou pour protéger nos droits, propriété ou sécurité, ou ceux des autres.
        </li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Sécurité des données</h2>
      <p className="mb-4">
        Nous prenons des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès, altération, divulgation ou destruction non autorisés. Cependant, aucune transmission de données sur Internet ou système de stockage électronique n'est 100% sécurisée, et nous ne pouvons garantir une sécurité absolue.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Vos droits en matière de confidentialité</h2>
      <p className="mb-4">
        En fonction de votre emplacement, vous pouvez avoir certains droits concernant vos informations personnelles, y compris le droit d'accéder, de corriger, de mettre à jour ou de demander la suppression de vos informations. Pour exercer ces droits, veuillez nous contacter en utilisant les informations fournies ci-dessous.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Liens vers d'autres sites</h2>
      <p className="mb-4">
        Notre site peut contenir des liens vers d'autres sites qui ne sont pas exploités par nous. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites tiers. Nous vous recommandons de consulter la politique de confidentialité de chaque site que vous visitez.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Modifications de cette politique de confidentialité</h2>
      <p className="mb-4">
        Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre pour refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur notre site et en mettant à jour la date d'entrée en vigueur.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact</h2>
      <p className="mb-4">
        Si vous avez des questions ou des préoccupations concernant cette Politique de Confidentialité ou nos pratiques de confidentialité, veuillez nous contacter par e-mail à <a href="mailto:service@dior.com" className="text-blue-500">service@dior.com</a> ou écrire à :
      </p>
      <address>
        Dior<br />
        123 Avenue des Champs-Élysées<br />
        75008 Paris<br />
        France
      </address>
    </div>
  );
};

export default PrivacyPolicy;
