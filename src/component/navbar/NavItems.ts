
export const navItems = [
    {
      name: "Home",
      href: "/",
      subChild:false,
    },
   
    {
      name: "Services",
      href: "/services",
      subItems:null,
    },
    {
      name:"About Us",
      href:"/about-us",
      subItems:[
        {name:"The Team", href:"/team"}
      ]
    },
    {
      name: "Industry Specialisations",
      href: "/industry",
      subItems: [
        { name: "Agriculture / Farming Yarra Vallet", href: "/industry-specialisation/agriculture-farming" },
        { name: "Machines and Motor Trimming", href: "/industry-specialisation/machines-motors" },
        { name: "Beauty Industry", href: "/industry-specialisation/beauty-industry" },
        { name: "Hair dressers and Barber's", href: "/industry-specialisation/hair-dressers" },
        { name: "Hospitality,Bars,Cafe and Hotels", href: "/industry-specialisation/hospitality-bars" },
        { name: "It Industry ", href: "/industry-specialisation/information-technology" },
        { name: "Manufacturing and Construction ", href: "/industry-specialisation/manufacturing-construction" },
        { name: "Medical ", href: "/industry-specialisation/medical" },
        { name: "NDIS ", href: "/industry-specialisation/ndis" },
        { name: "Personal Trainers and Gyms ", href: "/industry-specialisation/personal-trainers" },
        { name: "It Industry ", href: "/industry-specialisation/information-technology" },
        { name: "Real Estate ", href: "/industry-specialisation/real-estate" },
        { name: "Tradies ", href: "/industry-specialisation/tradies" },

      ],
    },
    {
      name: "Resources",
      href: "/resources",
      subItems: [
        {
          name: "FAQs",
          href: "/resources/faqs",
          subItems: [
            { name: "General Questions", href: "/resources/faqs/general" },
            { name: "Technical Support", href: "/resources/faqs/tech-support" }
          ]
        },
        { name: "Business Links", href: "/resources/business-links" },
        { name: "Tax Checklist", href: "/services/tax-checklist" },
      ],
    },
    
    {
      name: "Newsletter",
      href: "/newsletter",
      subChild:false,

      
     
    },
    {
      name: "Blog",
      href: "/blog",
      subChild:false,

     
    },
    {
      name: "Contact Us",
      href: "/contact",
      subChild:false,

    },
  ];


  