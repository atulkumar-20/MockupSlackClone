

const BrandLogos: React.FC = () => {
  const logos = [
    { src: "https://images.ctfassets.net/8j5aqoy0ts8s/3JEz6rZg2OnRTMXDpAqv0E/7ac38c0c4a255d552a289fad18a73650/logo-shadow-dont.png", alt: "atlassian" },
    { src: "https://img.freepik.com/premium-vector/google-logo-icon-set-google-icon-searching-icons-vector_981536-453.jpg?semt=ais_hybrid", alt: "Lonely Planet" },
    { src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/0af17216851061.562b230c40530.png", alt: "Zoho" },
    { src: "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg", alt: "Amazon" },
    { src: "https://c8.alamy.com/comp/2R9EN32/intuit-logo-2R9EN32.jpg", alt: "Intuit" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQzWQMrD8sZjvxdEvDKycpjMusB_VAsK0mg&s", alt: "Walmart" },
    { src: "https://c8.alamy.com/comp/DGY33C/target-logo-on-the-side-of-a-store-in-posner-park-near-haines-city-DGY33C.jpg", alt: "Target" },
  ];

  const doubledLogos = [...logos, ...logos];

  return (
    <div className="px-4 md:px-12 py-8 overflow-hidden bg-white">
      <div className="relative w-full">
        <div className="flex animate-scroll">
          {doubledLogos.map((logo, index) => (
            <img 
              key={index} 
              src={logo.src} 
              alt={logo.alt} 
              className="h-12 md:h-16 opacity-90 mx-8 flex-shrink-0 filter brightness-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;
