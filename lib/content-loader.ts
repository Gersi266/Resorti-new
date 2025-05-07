// Hardcoded content to avoid dynamic import issues
const contentMap: Record<string, Record<string, any>> = {
  home: {
    hero: {
      slides: [
        {
          image: "/images/hero-1.jpg",
          title: "Welcome to Paradise Resort",
          subtitle: "Experience luxury and comfort in our scenic mountain retreat",
        },
        {
          image: "/images/hero-2.jpg",
          title: "Relaxation & Adventure",
          subtitle: "Discover the perfect balance of relaxation and excitement",
        },
        {
          image: "/images/hero-3.jpg",
          title: "Stunning Accommodations",
          subtitle: "Spacious rooms with breathtaking mountain views",
        },
      ],
    },
    welcome: {
      title: "Welcome to Paradise",
      subtitle: "Experience luxury in the mountains",
      description:
        "Nestled in the beautiful mountains of Elbasan, Panorama Resort offers a perfect blend of luxury, comfort, and natural beauty. Our resort is designed to provide you with an unforgettable experience, whether you're looking for a relaxing getaway, a romantic escape, or an adventure-filled vacation. With stunning views, exceptional service, and world-class amenities, we invite you to discover the magic of Panorama Resort.",
      image: "/tropical-resort-poolside.png",
      button: "Explore More",
    },
    features: {
      title: "Resort Features",
      subtitle: "Discover what makes our resort special",
      items: [
        {
          icon: "🏊",
          title: "Swimming Pool",
          description: "Enjoy our outdoor swimming pool with stunning mountain views",
        },
        {
          icon: "🍽️",
          title: "Fine Dining",
          description: "Savor exquisite cuisine prepared by our talented chefs",
        },
        {
          icon: "🧖",
          title: "Spa & Wellness",
          description: "Relax and rejuvenate with our range of spa treatments",
        },
      ],
    },
    roomsSection: {
      title: "Our Accommodations",
      subtitle: "Luxurious rooms and suites for a comfortable stay",
      viewAllText: "View All Rooms",
      rooms: [
        {
          id: 1,
          name: "Deluxe Mountain View Room",
          description: "Spacious room with breathtaking mountain views",
          price: "€120",
          image: "/images/room-1.png",
        },
        {
          id: 2,
          name: "Executive Suite",
          description: "Elegant suite with separate living area",
          price: "€180",
          image: "/images/room-2.png",
        },
        {
          id: 3,
          name: "Family Room",
          description: "Perfect for families with children",
          price: "€150",
          image: "/images/room-3.png",
        },
      ],
    },
    activitiesSection: {
      title: "Resort Activities",
      subtitle: "Explore the many activities available at our resort",
      viewAllText: "View All Activities",
      activities: [
        {
          id: 1,
          title: "Swimming",
          description: "Enjoy our refreshing pool with stunning views",
          image: "/images/activity-1.png",
          duration: "Open daily",
          difficulty: "All levels",
        },
        {
          id: 2,
          title: "Spa & Wellness",
          description: "Relax and rejuvenate with our range of treatments",
          image: "/images/activity-2.png",
          duration: "By appointment",
          difficulty: "All levels",
        },
        {
          id: 3,
          title: "Fitness Center",
          description: "Stay fit during your vacation",
          image: "/images/activity-3.png",
          duration: "24/7 access",
          difficulty: "All levels",
        },
      ],
    },
    menuSection: {
      title: "Dining Experience",
      subtitle: "Savor exquisite cuisine prepared by our talented chefs",
      viewMenuText: "View Full Menu",
      categories: [
        {
          name: "Breakfast",
          description: "Start your day with our delicious breakfast options",
          image: "/images/menu-breakfast.jpg",
        },
        {
          name: "Lunch",
          description: "Enjoy a variety of dishes for your midday meal",
          image: "/images/menu-lunch.jpg",
        },
        {
          name: "Dinner",
          description: "Experience fine dining with our evening menu",
          image: "/images/menu-dinner.jpg",
        },
      ],
    },
    testimonialsSection: {
      title: "Guest Testimonials",
      subtitle: "What our guests say about their experience",
      testimonials: [
        {
          name: "John Smith",
          avatar: "/thoughtful-asian-man.png",
          rating: 5,
          text: "We had an amazing stay at Panorama Resort. The views were breathtaking, the staff was incredibly friendly and attentive, and the food was outstanding.",
        },
        {
          name: "Sarah Johnson",
          avatar: "/woman-brown-hair.png",
          rating: 5,
          text: "The perfect getaway! The room was spacious and comfortable, and the pool area was so relaxing. We'll definitely be coming back.",
        },
        {
          name: "Michael Brown",
          avatar: "/diverse-group.png",
          rating: 4,
          text: "Great resort with excellent amenities. The spa treatments were top-notch, and the mountain views from our room were spectacular.",
        },
      ],
    },
    ctaSection: {
      title: "Ready to Experience Paradise?",
      subtitle: "Book your stay now and enjoy our special offers",
      buttonText: "Book Now",
      buttonLink: "https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan",
      backgroundImage: "/tropical-resort-poolside.png",
    },
  },
  "home-al": {
    hero: {
      slides: [
        {
          image: "/images/hero-1.jpg",
          title: "Mirë se vini në Paradise Resort",
          subtitle: "Përjetoni luksin dhe komoditetin në vendpushimin tonë malor",
        },
        {
          image: "/images/hero-2.jpg",
          title: "Relaksim & Aventurë",
          subtitle: "Zbuloni ekuilibrin perfekt të relaksimit dhe aventurës",
        },
        {
          image: "/images/hero-3.jpg",
          title: "Akomodime Mbresëlënëse",
          subtitle: "Dhoma të gjera me pamje mahnitëse malore",
        },
      ],
    },
    welcome: {
      title: "Mirë se vini në Paradise",
      subtitle: "Përjetoni luksin në male",
      description:
        "I vendosur në malet e bukura të Elbasanit, Panorama Resort ofron një përzierje perfekte të luksit, komoditetit dhe bukurisë natyrore. Resorti ynë është projektuar për t'ju ofruar një përvojë të paharrueshme, qoftë nëse jeni duke kërkuar një pushim relaksues, një arratisje romantike, ose një pushim të mbushur me aventura. Me pamje mahnitëse, shërbim të jashtëzakonshëm dhe komoditete të klasit botëror, ju ftojmë të zbuloni magjinë e Panorama Resort.",
      image: "/tropical-resort-poolside.png",
      button: "Eksploro Më Shumë",
    },
    features: {
      title: "Karakteristikat e Resortit",
      subtitle: "Zbuloni çfarë e bën të veçantë resortin tonë",
      items: [
        {
          icon: "🏊",
          title: "Pishinë",
          description: "Shijoni pishinën tonë të jashtme me pamje mahnitëse malore",
        },
        {
          icon: "🍽️",
          title: "Kuzhinë e Sofistikuar",
          description: "Shijoni ushqimin e shijshëm të përgatitur nga kuzhinierët tanë të talentuar",
        },
        {
          icon: "🧖",
          title: "Spa & Mirëqenie",
          description: "Relaksohuni dhe ringjalluni me gamën tonë të trajtimeve spa",
        },
      ],
    },
    roomsSection: {
      title: "Akomodimet Tona",
      subtitle: "Dhoma dhe suita luksoze për një qëndrim komod",
      viewAllText: "Shikoni Të Gjitha Dhomat",
      rooms: [
        {
          id: 1,
          name: "Dhomë Deluxe me Pamje Malore",
          description: "Dhomë e gjerë me pamje mahnitëse malore",
          price: "€120",
          image: "/images/room-1.png",
        },
        {
          id: 2,
          name: "Suitë Ekzekutive",
          description: "Suitë elegante me zonë të ndarë ndenjeje",
          price: "€180",
          image: "/images/room-2.png",
        },
        {
          id: 3,
          name: "Dhomë Familjare",
          description: "Perfekte për familjet me fëmijë",
          price: "€150",
          image: "/images/room-3.png",
        },
      ],
    },
    activitiesSection: {
      title: "Aktivitetet e Resortit",
      subtitle: "Eksploroni aktivitetet e shumta në dispozicion në resortin tonë",
      viewAllText: "Shikoni Të Gjitha Aktivitetet",
      activities: [
        {
          id: 1,
          title: "Notuesi",
          description: "Shijoni pishinën tonë freskuese me pamje mahnitëse",
          image: "/images/activity-1.png",
          duration: "Hapur çdo ditë",
          difficulty: "Të gjitha nivelet",
        },
        {
          id: 2,
          title: "Spa & Mirëqenie",
          description: "Relaksohuni dhe ringjalluni me gamën tonë të trajtimeve",
          image: "/images/activity-2.png",
          duration: "Me rezervim",
          difficulty: "Të gjitha nivelet",
        },
        {
          id: 3,
          title: "Qendra Fitnesi",
          description: "Qëndroni në formë gjatë pushimeve tuaja",
          image: "/images/activity-3.png",
          duration: "Akses 24/7",
          difficulty: "Të gjitha nivelet",
        },
      ],
    },
    menuSection: {
      title: "Eksperienca Gastronomike",
      subtitle: "Shijoni kuzhinën e shkëlqyer të përgatitur nga kuzhinierët tanë të talentuar",
      viewMenuText: "Shiko Menunë e Plotë",
      categories: [
        {
          name: "Mëngjesi",
          description: "Filloni ditën tuaj me opsionet tona të shijshme të mëngjesit",
          image: "/images/menu-breakfast.jpg",
        },
        {
          name: "Dreka",
          description: "Shijoni një shumëllojshmëri pjatash për vaktin tuaj të mesditës",
          image: "/images/menu-lunch.jpg",
        },
        {
          name: "Darka",
          description: "Përjetoni darkën fine me menunë tonë të mbrëmjes",
          image: "/images/menu-dinner.jpg",
        },
      ],
    },
    testimonialsSection: {
      title: "Dëshmitë e Mysafirëve",
      subtitle: "Çfarë thonë mysafirët tanë për përvojën e tyre",
      testimonials: [
        {
          name: "Jon Smithi",
          avatar: "/thoughtful-asian-man.png",
          rating: 5,
          text: "Patëm një qëndrim të mrekullueshëm në Panorama Resort. Pamjet ishin mahnitëse, stafi ishte jashtëzakonisht miqësor dhe i vëmendshëm, dhe ushqimi ishte i shkëlqyer.",
        },
        {
          name: "Sara Xhonson",
          avatar: "/woman-brown-hair.png",
          rating: 5,
          text: "Pushimi perfekt! Dhoma ishte e gjerë dhe komode, dhe zona e pishinës ishte shumë relaksuese. Padyshim që do të kthehemi.",
        },
        {
          name: "Majkëll Braun",
          avatar: "/diverse-group.png",
          rating: 4,
          text: "Resort i mrekullueshëm me komoditete të shkëlqyera. Trajtimet spa ishin të klasit të parë dhe pamjet malore nga dhoma jonë ishin spektakolare.",
        },
      ],
    },
    ctaSection: {
      title: "Gati të Përjetoni Parajsën?",
      subtitle: "Rezervoni qëndrimin tuaj tani dhe shijoni ofertat tona speciale",
      buttonText: "Rezervo Tani",
      buttonLink: "https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan",
      backgroundImage: "/tropical-resort-poolside.png",
    },
  },
  about: {
    hero: {
      title: "About Panorama Resort",
      subtitle: "Learn about our story, our mission, and our commitment to excellence",
      image: "/images/about-hero.jpg",
    },
    story: {
      title: "Our Story",
      content: [
        "Founded in 2005, Panorama Resort began with a simple vision: to create a sanctuary where guests could experience the perfect harmony of luxury and nature. What started as a small family-owned property has grown into one of the most sought-after destinations in the region.",
        "Our founder, John Smith, discovered this pristine location during his travels and was immediately captivated by its natural beauty. He envisioned a place where travelers could disconnect from the hustle and bustle of everyday life and reconnect with themselves and nature.",
        "Today, Panorama Resort stands as a testament to that vision, offering unparalleled service, luxurious accommodations, and unforgettable experiences to guests from around the world.",
      ],
      image: "/images/about-story.jpg",
    },
    values: {
      title: "Our Values",
      subtitle:
        "At Panorama Resort, our values guide everything we do. They shape our decisions, influence our actions, and define our commitment to providing exceptional experiences for our guests.",
      items: [
        {
          icon: "info",
          title: "Excellence",
          description:
            "We strive for excellence in everything we do, from the quality of our accommodations to the service we provide.",
        },
        {
          icon: "thumbsUp",
          title: "Hospitality",
          description: "We believe in genuine hospitality that makes every guest feel welcome, valued, and cared for.",
        },
        {
          icon: "leaf",
          title: "Sustainability",
          description:
            "We are committed to sustainable practices that preserve the natural beauty of our surroundings for future generations.",
        },
      ],
    },
  },
  "about-al": {
    hero: {
      title: "Rreth Panorama Resort",
      subtitle: "Mësoni për historinë tonë, misionin tonë dhe përkushtimin tonë ndaj përsosmërisë",
      image: "/images/about-hero.jpg",
    },
    story: {
      title: "Historia Jonë",
      content: [
        "I themeluar në vitin 2005, Panorama Resort filloi me një vizion të thjeshtë: të krijojë një strehë ku mysafirët mund të përjetojnë harmoninë e përsosur të luksit dhe natyrës. Ajo që filloi si një pronë e vogël familjare është rritur në një nga destinacionet më të kërkuara në rajon.",
        "Themeluesi ynë, John Smith, e zbuloi këtë vendndodhje të pastër gjatë udhëtimeve të tij dhe u magjeps menjëherë nga bukuria e saj natyrore. Ai imagjinoi një vend ku udhëtarët mund të shkëputeshin nga zhurma e jetës së përditshme dhe të rilidheshin me veten dhe natyrën.",
        "Sot, Panorama Resort qëndron si një dëshmi e atij vizioni, duke ofruar shërbim të pakrahasueshëm, akomodime luksoze dhe përvoja të paharrueshme për mysafirët nga e gjithë bota.",
      ],
      image: "/images/about-story.jpg",
    },
    values: {
      title: "Vlerat Tona",
      subtitle:
        "Në Panorama Resort, vlerat tona udhëheqin gjithçka që bëjmë. Ato formësojnë vendimet tona, ndikojnë në veprimet tona dhe përcaktojnë përkushtimin tonë për të ofruar përvoja të jashtëzakonshme për mysafirët tanë.",
      items: [
        {
          icon: "info",
          title: "Përsosmëri",
          description:
            "Ne përpiqemi për përsosmëri në çdo gjë që bëjmë, nga cilësia e akomodimeve tona deri te shërbimi që ofrojmë.",
        },
        {
          icon: "thumbsUp",
          title: "Mikpritje",
          description:
            "Ne besojmë në mikpritjen e sinqertë që bën çdo mysafir të ndihet i mirëpritur, i vlerësuar dhe i kujdesur.",
        },
        {
          icon: "leaf",
          title: "Qëndrueshmëri",
          description:
            "Ne jemi të përkushtuar ndaj praktikave të qëndrueshme që ruajnë bukurinë natyrore të mjedisit tonë për brezat e ardhshëm.",
        },
      ],
    },
  },
  rooms: {
    title: "Our Rooms & Suites",
    subtitle: "Experience comfort and luxury in our carefully designed accommodations",
    rooms: [
      {
        id: 1,
        name: "Single Room",
        description:
          "Our comfortable Single Rooms are perfect for solo travelers, offering all the essential amenities in a cozy, well-designed space.",
        price: 60,
        mainImage: "/images/room-1.png",
        gallery: ["/images/room-1-alt1.png", "/images/room-1-alt2.png", "/images/room-1-alt3.png"],
        features: ["Private Bathroom", "Work Desk", "Free Wi-Fi", "Breakfast Included", "Air Conditioning", "Flat TV"],
      },
      {
        id: 2,
        name: "Double Room",
        description:
          "Designed for couples or friends traveling together, our Double Rooms provide a perfect balance of comfort and style.",
        price: 67,
        mainImage: "/images/room-2.png",
        gallery: ["/images/room-2-alt1.png", "/images/room-2-alt2.png", "/images/room-2-alt3.png"],
        features: ["Queen Bed", "Private Balcony", "Sitting Area", "Free Wi-Fi", "Mini Bar", "Air Conditioning"],
      },
      {
        id: 3,
        name: "Family Room",
        description:
          "Spacious and thoughtfully designed, our Family Rooms offer the perfect accommodation for families with children.",
        price: 80,
        mainImage: "/images/room-3.png",
        gallery: ["/images/room-3-alt1.png", "/images/room-3-alt2.png", "/images/room-3-alt3.png"],
        features: ["King Bed + Twin Beds", "Living Area", "Dining Area", "Free Wi-Fi", "Mini Bar", "Air Conditioning"],
      },
    ],
    amenities: {
      title: "Room Amenities",
      items: [
        {
          title: "Comfort",
          icon: "bed",
          description: "Premium bedding and linens for a restful sleep",
        },
        {
          title: "Technology",
          icon: "wifi",
          description: "High-speed Wi-Fi and smart TVs in all rooms",
        },
        {
          title: "Refreshments",
          icon: "coffee",
          description: "Complimentary coffee, tea, and mini bar",
        },
      ],
    },
  },
  "rooms-al": {
    title: "Dhomat & Suitat Tona",
    subtitle: "Përjetoni komoditet dhe luks në akomodimet tona të dizajnuara me kujdes",
    rooms: [
      {
        id: 1,
        name: "Dhomë Teke",
        description:
          "Dhomat tona të rehatshme Teke janë perfekte për udhëtarët e vetëm, duke ofruar të gjitha pajisjet thelbësore në një hapësirë të ngrohtë, të dizajnuar mirë.",
        price: 60,
        mainImage: "/images/room-1.png",
        gallery: ["/images/room-1-alt1.png", "/images/room-1-alt2.png", "/images/room-1-alt3.png"],
        features: [
          "Banjo Private",
          "Tavolinë Pune",
          "Wi-Fi Falas",
          "Mëngjes i Përfshirë",
          "Ajër i Kondicionuar",
          "TV i Sheshtë",
        ],
      },
      {
        id: 2,
        name: "Dhomë Dyshe",
        description:
          "Të dizajnuara për çifte ose miq që udhëtojnë së bashku, Dhomat tona Dyshe ofrojnë një ekuilibër perfekt të komoditetit dhe stilit.",
        price: 67,
        mainImage: "/images/room-2.png",
        gallery: ["/images/room-2-alt1.png", "/images/room-2-alt2.png", "/images/room-2-alt3.png"],
        features: ["Krevat Queen", "Ballkon Privat", "Zonë Ndenjeje", "Wi-Fi Falas", "Mini Bar", "Ajër i Kondicionuar"],
      },
      {
        id: 3,
        name: "Dhomë Familjare",
        description:
          "Të gjera dhe të dizajnuara me kujdes, Dhomat tona Familjare ofrojnë akomodimin perfekt për familjet me fëmijë.",
        price: 80,
        mainImage: "/images/room-3.png",
        gallery: ["/images/room-3-alt1.png", "/images/room-3-alt2.png", "/images/room-3-alt3.png"],
        features: [
          "Krevat King + Krevate Dyshe",
          "Zonë Ndenjeje",
          "Zonë Ngrënieje",
          "Wi-Fi Falas",
          "Mini Bar",
          "Ajër i Kondicionuar",
        ],
      },
    ],
    amenities: {
      title: "Pajisjet e Dhomës",
      items: [
        {
          title: "Komoditet",
          icon: "bed",
          description: "Shtretër dhe çarçafë premium për një gjumë të qetë",
        },
        {
          title: "Teknologji",
          icon: "wifi",
          description: "Wi-Fi me shpejtësi të lartë dhe TV inteligjent në të gjitha dhomat",
        },
        {
          title: "Freskime",
          icon: "coffee",
          description: "Kafe, çaj dhe mini bar falas",
        },
      ],
    },
  },
  activities: {
    hero: {
      title: "Resort Activities",
      subtitle: "Discover a world of relaxation, adventure, and entertainment at Panorama Resort",
      image: "/images/activities-hero.png",
    },
    activitiesSection: {
      title: "Explore Our Activities",
      subtitle: "From relaxation to adventure, we offer a variety of activities to make your stay memorable.",
      activities: [
        {
          id: 1,
          title: "Mountain Hiking",
          description:
            "Explore the beautiful mountain trails surrounding our resort with guided hiking tours suitable for all experience levels.",
          longDescription:
            "Embark on an unforgettable journey through the pristine mountain landscapes surrounding Panorama Resort. Our guided hiking tours are designed for all experience levels, from beginners to seasoned hikers. Discover hidden viewpoints, learn about local flora and fauna, and breathe in the fresh mountain air as you explore the natural beauty of the region. Our experienced guides ensure a safe and enjoyable experience for everyone.",
          image: "/images/activity-1.png",
          duration: "2-4 hours",
          difficulty: "Easy to Moderate",
          hours: "Daily, 8:00 AM - 4:00 PM",
          location: "Resort Grounds & Surrounding Trails",
          price: "€25 per person",
        },
        {
          id: 2,
          title: "Spa & Wellness",
          description:
            "Indulge in our comprehensive spa services, including massages, facials, and body treatments designed to rejuvenate your body and mind.",
          longDescription:
            "Escape to our tranquil spa sanctuary where skilled therapists offer a range of treatments designed to relax, rejuvenate, and restore. Choose from various massage techniques, revitalizing facials, and holistic body treatments that use premium natural products. Our spa facilities include a steam room, sauna, and relaxation areas where you can unwind before or after your treatment. Each experience is personalized to meet your specific needs and preferences.",
          image: "/images/activity-2.png",
          duration: "30 minutes - 2 hours",
          difficulty: "Relaxation",
          hours: "Daily, 9:00 AM - 8:00 PM",
          location: "Spa & Wellness Center",
          price: "Starting at €40",
        },
        {
          id: 3,
          title: "Culinary Workshops",
          description:
            "Learn the secrets of traditional Albanian cuisine with our expert chefs in interactive cooking classes featuring local ingredients and techniques.",
          longDescription:
            "Immerse yourself in the rich culinary traditions of Albania with our hands-on cooking workshops. Under the guidance of our expert chefs, you'll learn to prepare authentic dishes using fresh, local ingredients and traditional techniques. From savory main courses to delectable desserts, these interactive sessions provide insight into the region's food culture and history. At the end of each workshop, enjoy the fruits of your labor with a communal dining experience. All skill levels are welcome!",
          image: "/images/activity-3.png",
          duration: "2-3 hours",
          difficulty: "All levels",
          hours: "Tuesday, Thursday, Saturday, 11:00 AM - 2:00 PM",
          location: "Resort Kitchen",
          price: "€45 per person",
        },
        {
          id: 4,
          title: "Wine Tasting",
          description:
            "Sample a selection of fine local and international wines guided by our sommelier who will explain the characteristics and production methods.",
          longDescription:
            "Embark on a sensory journey through Albania's emerging wine scene and international classics with our expert sommelier. Our wine tasting sessions feature carefully curated selections that showcase different varieties, regions, and production methods. Learn about proper tasting techniques, food pairing suggestions, and the fascinating history behind each bottle. Whether you're a wine enthusiast or a curious beginner, this experience offers something for everyone in an elegant and relaxed setting.",
          image: "/images/activity-4.png",
          duration: "1-2 hours",
          difficulty: "All levels",
          hours: "Wednesday, Friday, Sunday, 5:00 PM - 7:00 PM",
          location: "Wine Cellar",
          price: "€35 per person",
        },
        {
          id: 5,
          title: "Yoga & Meditation",
          description:
            "Find your inner balance with our yoga and meditation sessions, suitable for beginners and experienced practitioners alike.",
          longDescription:
            "Reconnect with yourself through our mindful yoga and meditation sessions led by certified instructors. Classes are held in serene settings, including our garden pavilion and indoor studio with mountain views. We offer various styles to suit different preferences and experience levels, from gentle Hatha and restorative practices to more dynamic Vinyasa flows. Regular meditation sessions help cultivate mindfulness and inner peace. All necessary equipment is provided, allowing you to focus solely on your practice and well-being.",
          image: "/images/activity-5.png",
          duration: "60-90 minutes",
          difficulty: "All levels",
          hours: "Daily, 7:00 AM - 8:30 AM and 5:00 PM - 6:30 PM",
          location: "Yoga Pavilion or Indoor Studio",
          price: "€15 per session",
        },
        {
          id: 6,
          title: "Cultural Excursions",
          description:
            "Discover the rich history and culture of Albania with guided tours to nearby historical sites, museums, and local villages.",
          longDescription:
            "Immerse yourself in Albania's fascinating heritage with our curated cultural excursions. Visit ancient archaeological sites, historic castles, and traditional villages that showcase the country's diverse influences and rich traditions. Our knowledgeable local guides provide insightful commentary on the historical significance and cultural context of each location. These half-day and full-day tours offer authentic experiences that connect you with the heart and soul of Albania, from architectural wonders to interactions with local artisans and community members.",
          image: "/images/activity-6.png",
          duration: "Half-day or Full-day",
          difficulty: "Easy",
          hours: "Monday, Wednesday, Friday, 9:00 AM - 4:00 PM",
          location: "Various locations (transportation provided)",
          price: "€50-€90 per person",
        },
      ],
    },
    customActivities: {
      title: "Custom Activity Packages",
      description:
        "Looking for something special? We can create personalized activity packages tailored to your interests and preferences.",
      features: [
        "Customized itineraries based on your interests",
        "Private guides and instructors",
        "Special arrangements for celebrations",
        "Family-friendly options available",
        "Exclusive experiences not available to the general public",
      ],
      buttonText: "Inquire Now",
      image: "/images/custom-activity.png",
    },
  },
  "activities-al": {
    hero: {
      title: "Aktivitetet e Resortit",
      subtitle: "Zbuloni një botë relaksimi, aventure dhe argëtimi në Panorama Resort",
      image: "/images/activities-hero.png",
    },
    activitiesSection: {
      title: "Eksploroni Aktivitetet Tona",
      subtitle:
        "Nga relaksimi tek aventura, ne ofrojmë një shumëllojshmëri aktivitetesh për ta bërë qëndrimin tuaj të paharrueshëm.",
      activities: [
        {
          id: 1,
          title: "Hiking në Mal",
          description:
            "Eksploroni shtigjet e bukura malore që rrethojnë resortin tonë me ture hiking të udhëhequra të përshtatshme për të gjitha nivelet e përvojës.",
          longDescription:
            "Nisuni në një udhëtim të paharrueshëm përmes peizazheve malore të paprekura që rrethojnë Panorama Resort. Turet tona të hiking të udhëhequra janë të dizajnuara për të gjitha nivelet e përvojës, nga fillestarët deri tek hikerat me përvojë. Zbuloni pikëpamje të fshehura, mësoni për florën dhe faunën lokale, dhe merrni frymë ajrin e pastër malor ndërsa eksploroni bukurinë natyrore të rajonit. Udhërrëfyesit tanë me përvojë sigurojnë një përvojë të sigurt dhe të këndshme për të gjithë.",
          image: "/images/activity-1.png",
          duration: "2-4 orë",
          difficulty: "E lehtë deri në Mesatare",
          hours: "Çdo ditë, 8:00 - 16:00",
          location: "Terrenet e Resortit & Shtigjet Përreth",
          price: "€25 për person",
        },
        {
          id: 2,
          title: "Spa & Mirëqenie",
          description:
            "Shijoni shërbimet tona gjithëpërfshirëse të spa, duke përfshirë masazhe, trajtime fytyre dhe trupi të dizajnuara për të rigjallëruar trupin dhe mendjen tuaj.",
          longDescription:
            "Arratisuni në shenjtëroren tonë të qetë spa ku terapistët e aftë ofrojnë një gamë trajtimesh të dizajnuara për t'ju relaksuar, rigjallëruar dhe rivendosur. Zgjidhni nga teknika të ndryshme masazhi, trajtime rivitalizuese të fytyrës dhe trajtime holistike të trupit që përdorin produkte premium natyrore. Ambientet tona spa përfshijnë një dhomë avulli, sauna dhe zona relaksi ku mund të çlodheni para ose pas trajtimit tuaj. Çdo përvojë është e personalizuar për të përmbushur nevojat dhe preferencat tuaja specifike.",
          image: "/images/activity-2.png",
          duration: "30 minuta - 2 orë",
          difficulty: "Relaksim",
          hours: "Çdo ditë, 9:00 - 20:00",
          location: "Qendra Spa & Mirëqenie",
          price: "Duke filluar nga €40",
        },
        {
          id: 3,
          title: "Workshope Kulinarie",
          description:
            "Mësoni sekretet e kuzhinës tradicionale shqiptare me kuzhinierët tanë ekspertë në klasa gatimi interaktive që përfshijnë përbërës dhe teknika lokale.",
          longDescription:
            "Zhytuni në traditat e pasura kulinare të Shqipërisë me workshopet tona praktike të gatimit. Nën udhëheqjen e kuzhinierëve tanë ekspertë, do të mësoni të përgatisni pjata autentike duke përdorur përbërës të freskët, lokalë dhe teknika tradicionale. Nga pjatat kryesore të shijshme tek ëmbëlsirat e shijshme, këto seanca interaktive ofrojnë njohuri mbi kulturën dhe historinë ushqimore të rajonit. Në fund të çdo workshopi, shijoni frytet e punës suaj me një përvojë ngrënieje komunale. Të gjitha nivelet e aftësive janë të mirëpritura!",
          image: "/images/activity-3.png",
          duration: "2-3 orë",
          difficulty: "Të gjitha nivelet",
          hours: "E martë, E enjte, E shtunë, 11:00 - 14:00",
          location: "Kuzhina e Resortit",
          price: "€45 për person",
        },
        {
          id: 4,
          title: "Degustim Vere",
          description:
            "Provoni një përzgjedhje të verërave të mira lokale dhe ndërkombëtare të udhëhequra nga sommelier ynë i cili do t'ju shpjegojë karakteristikat dhe metodat e prodhimit.",
          longDescription:
            "Nisuni në një udhëtim shqisor përmes skenës së verës në zhvillim të Shqipërisë dhe klasikëve ndërkombëtarë me sommelier tonë ekspert. Seancat tona të degustimit të verës përfshijnë përzgjedhje të kuratuara me kujdes që tregojnë varietete, rajone dhe metoda prodhimi të ndryshme. Mësoni për teknikat e duhura të degustimit, sugjerime për çiftimin e ushqimit dhe historinë magjepsëse pas çdo shishe. Pavarësisht nëse jeni një entuziast i verës apo një fillestar kurioz, kjo përvojë ofron diçka për të gjithë në një ambient elegant dhe të relaksuar.",
          image: "/images/activity-4.png",
          duration: "1-2 orë",
          difficulty: "Të gjitha nivelet",
          hours: "E mërkurë, E premte, E diel, 17:00 - 19:00",
          location: "Bodrumi i Verës",
          price: "€35 për person",
        },
        {
          id: 5,
          title: "Yoga & Meditim",
          description:
            "Gjeni ekuilibrin tuaj të brendshëm me seancat tona të yogas dhe meditimit, të përshtatshme për fillestarët dhe praktikuesit me përvojë.",
          longDescription:
            "Rilidhuni me veten përmes seancave tona të yogas dhe meditimit të ndërgjegjshëm të drejtuara nga instruktorë të certifikuar. Klasat mbahen në ambiente të qeta, duke përfshirë pavilionin tonë të kopshtit dhe studion e brendshme me pamje malore. Ne ofrojmë stile të ndryshme për t'iu përshtatur preferencave dhe niveleve të ndryshme të përvojës, nga praktikat e buta Hatha dhe rigjeneruese deri tek rrjedhjet më dinamike Vinyasa. Seancat e rregullta të meditimit ndihmojnë në kultivimin e ndërgjegjësimit dhe paqes së brendshme. Të gjitha pajisjet e nevojshme janë të siguruara, duke ju lejuar të përqendroheni vetëm në praktikën dhe mirëqenien tuaj.",
          image: "/images/activity-5.png",
          duration: "60-90 minuta",
          difficulty: "Të gjitha nivelet",
          hours: "Çdo ditë, 7:00 - 8:30 dhe 17:00 - 18:30",
          location: "Pavilioni i Yogas ose Studio e Brendshme",
          price: "€15 për seancë",
        },
        {
          id: 6,
          title: "Ekskursione Kulturore",
          description:
            "Zbuloni historinë dhe kulturën e pasur të Shqipërisë me ture të udhëhequra në vendet historike, muzetë dhe fshatrat lokale në afërsi.",
          longDescription:
            "Zhytuni në trashëgiminë magjepsëse të Shqipërisë me ekskursionet tona kulturore të kuratuara. Vizitoni vendet e lashta arkeologjike, kështjellat historike dhe fshatrat tradicionalë që tregojnë ndikimet e ndryshme dhe traditat e pasura të vendit. Udhërrëfyesit tanë lokalë të ditur ofrojnë komente të thella mbi rëndësinë historike dhe kontekstin kulturor të çdo vendndodhje. Këto ture gjysmë-ditore dhe ditë të plota ofrojnë përvoja autentike që ju lidhin me zemrën dhe shpirtin e Shqipërisë, nga mrekullitë arkitektonike tek ndërveprimet me artizanët lokalë dhe anëtarët e komunitetit.",
          image: "/images/activity-6.png",
          duration: "Gjysmë-ditë ose Ditë e plotë",
          difficulty: "E lehtë",
          hours: "E hënë, E mërkurë, E premte, 9:00 - 16:00",
          location: "Vendndodhje të ndryshme (transporti i siguruar)",
          price: "€50-€90 për person",
        },
      ],
    },
    customActivities: {
      title: "Paketa Aktivitetesh të Personalizuara",
      description:
        "Kërkoni diçka të veçantë? Ne mund të krijojmë paketa aktivitetesh të personalizuara sipas interesave dhe preferencave tuaja.",
      features: [
        "Itinerare të personalizuara bazuar në interesat tuaja",
        "Udhërrëfyes dhe instruktorë privatë",
        "Aranzhime të veçanta për festime",
        "Opsione miqësore për familjen të disponueshme",
        "Përvoja ekskluzive që nuk janë të disponueshme për publikun e gjerë",
      ],
      buttonText: "Pyesni Tani",
      image: "/images/custom-activity.png",
    },
  },
  menu: {
    hero: {
      title: "Dining Experience",
      subtitle: "Savor exquisite cuisine prepared by our talented chefs",
      image: "/images/menu-hero.jpg",
    },
    disclaimer: {
      title: "Please Note:",
      text: "The photos are illustrative. We do not accept off-menu orders. Please let us know if you have any food allergies!",
    },
    overview: {
      title: "Culinary Excellence",
      description:
        "At Paradise Resort, we pride ourselves on offering exceptional dining experiences. Our talented chefs use only the freshest local ingredients to create memorable culinary delights that will satisfy even the most discerning palates.",
    },
    dining: {
      options: [
        {
          icon: "🍽️",
          title: "Main Restaurant",
          description:
            "Our main restaurant offers a diverse menu featuring international cuisine and local specialties.",
        },
        {
          icon: "🏖️",
          title: "Beach Bar & Grill",
          description: "Enjoy casual dining with ocean views at our beachfront bar and grill.",
        },
        {
          icon: "✨",
          title: "Fine Dining",
          description: "Experience gourmet cuisine at our signature fine dining restaurant.",
        },
      ],
    },
    categoryNav: {
      title: "Menu Categories",
      allText: "All",
    },
    privateDining: {
      title: "Private Dining Experience",
      description:
        "For special occasions, we offer exclusive private dining experiences. From romantic dinners on the beach to family celebrations in our private dining room, our team will create a memorable culinary journey tailored to your preferences.",
      buttonText: "Inquire Now",
      image: "/images/private-dining.jpg",
    },
    categories: [
      {
        id: "salads",
        name: "Salads",
        description: "Fresh, crisp salads prepared with locally sourced ingredients.",
        image: "/images/menu-salads.png",
        items: [
          {
            name: "Village Salad",
            description: "Tomatoes, cucumbers, peppers, onions, olives",
            price: 300,
            image: "/images/menu/village-salad.png",
          },
          {
            name: "Arugula Salad",
            description: "Arugula, grana, tomatoes",
            price: 450,
            image: "/images/menu/arugula-salad.png",
          },
          {
            name: "Boiled/Grilled Vegetable",
            description: "Eggplant, pumpkin, tomato, onion, carrot",
            price: 400,
            image: "/images/menu/grilled-vegetables.png",
          },
          {
            name: "Caesar Salad",
            description: "Mozzarella, tomatoes, arugula, eggs, bacon",
            price: 450,
            image: "/images/menu/caesar-salad.png",
          },
          {
            name: "Panorama Salad",
            description: "Red/white lettuce, carrots, corn, S. green, arugula, cucumber, tomatoes",
            price: 450,
            image: "/images/menu/panorama-salad.png",
          },
          {
            name: "Pickled Salad",
            description: "Assorted pickled vegetables",
            price: 200,
            image: "/images/menu/pickled-salad.png",
          },
          {
            name: "Olive Salad",
            description: "Assorted olives with herbs and seasonings",
            price: 200,
            image: "/images/menu/olive-salad.png",
          },
          {
            name: "Stuffed Baked Vegetables",
            description: "Seasonal vegetables stuffed with aromatic herbs and rice",
            price: 400,
            image: "/images/menu/stuffed-vegetables.png",
          },
        ],
      },
      {
        id: "appetizers",
        name: "Appetizers",
        description: "Delicious starters to begin your culinary journey.",
        image: "/images/menu-appetizers.png",
        items: [
          {
            name: "Italian Antipasto",
            description: "Mix ham & cheese",
            price: 1200,
            image: "/images/menu/italian-antipasto.png",
          },
          {
            name: "Mix of Cheeses",
            description: "Selection of local and imported cheeses",
            price: 700,
            image: "/images/menu/cheese-platter.png",
          },
          {
            name: "Sauteed Spinach",
            description: "Fresh spinach sautéed with garlic and olive oil",
            price: 300,
            image: "/images/menu/sauteed-spinach.png",
          },
          {
            name: "Fresh Mushrooms",
            description: "Fried or grilled mushrooms with herbs",
            price: 400,
            image: "/images/menu/mushrooms.png",
          },
          {
            name: "Bruschetta Mix",
            description: "Assorted bruschetta with various toppings",
            price: 250,
            image: "/images/menu/bruschetta.png",
          },
        ],
      },
      {
        id: "soup",
        name: "Soup",
        description: "Hearty and flavorful soups made fresh daily.",
        image: "/images/menu-soup.png",
        items: [
          {
            name: "Chicken Soup",
            description: "Traditional chicken soup with vegetables",
            price: 300,
            image: "/images/menu/chicken-soup.png",
          },
          {
            name: "Vegetable Soup",
            description: "Fresh seasonal vegetables in a light broth",
            price: 250,
            image: "/images/menu/vegetable-soup.png",
          },
          {
            name: "Fish Soup",
            description: "Flavorful soup with fresh local fish",
            price: 300,
            image: "/images/menu/fish-soup.png",
          },
        ],
      },
      {
        id: "pasta-risotto",
        name: "Pasta & Risotto",
        description: "Authentic Italian pasta and creamy risotto dishes.",
        image: "/images/menu-pasta-risotto.png",
        items: [
          {
            name: "Ravioli with Shrimp & Truffle",
            description: "Handmade ravioli filled with shrimp and truffle",
            price: 700,
            image: "/images/menu/shrimp-ravioli.png",
          },
          {
            name: "Tagliatelle with Shrimp",
            description: "Tagliatelle with shrimp, pumpkin, and tomato",
            price: 700,
            image: "/images/menu/tagliatelle-shrimp.png",
          },
          {
            name: "Seafood Spaghetti",
            description: "Spaghetti with mixed seafood in a light sauce",
            price: 600,
            image: "/images/menu/seafood-spaghetti.png",
          },
          {
            name: "Spaghetti Carbonara",
            description: "Classic carbonara with eggs, cheese, and pancetta",
            price: 600,
            image: "/images/menu/carbonara.png",
          },
          {
            name: "Penne Arrabiata",
            description: "Penne pasta in a spicy tomato sauce",
            price: 600,
            image: "/images/menu/penne-arrabiata.png",
          },
          {
            name: "Risotto with Shrimp & Pumpkin",
            description: "Creamy risotto with shrimp and pumpkin",
            price: 600,
            image: "/images/menu/shrimp-pumpkin-risotto.png",
          },
          {
            name: "Seafood Risotto",
            description: "Risotto with mixed seafood and saffron",
            price: 600,
            image: "/images/menu/seafood-risotto.png",
          },
        ],
      },
      {
        id: "fish",
        name: "Fish",
        description: "Fresh seafood prepared with Mediterranean influences.",
        image: "/images/menu-fish.png",
        items: [
          {
            name: "Sea Bream Grilled",
            description: "Fresh sea bream grilled to perfection",
            price: 1000,
            image: "/images/menu/sea-bream.png",
          },
          {
            name: "Sea Bass Grilled",
            description: "Grilled sea bass with herbs and lemon",
            price: 1000,
            image: "/images/menu/sea-bass.png",
          },
          {
            name: "Shrimp Grilled/Crudi",
            description: "Grilled or raw shrimp with dipping sauce",
            price: 1200,
            image: "/images/menu/grilled-shrimp.png",
          },
          {
            name: "Baked Sea Bass with Vegetables",
            description: "Sea bass baked with seasonal vegetables",
            price: 1400,
            image: "/images/menu/baked-sea-bass.png",
          },
        ],
      },
      {
        id: "meat",
        name: "Meat",
        description: "Premium cuts of meat prepared to perfection.",
        image: "/images/menu-meat.png",
        items: [
          {
            name: "Grilled Goat Meat",
            description: "500 gr of tender goat meat, grilled",
            price: 1500,
            image: "/images/menu/goat-meat.png",
          },
          {
            name: "Lamb Meat",
            description: "500 gr - grilled, wood sac, or ribs",
            price: 1400,
            image: "/images/menu/lamb-meat.png",
          },
          {
            name: "Beef Meat",
            description: "500 gr - steak or ribs",
            price: 1300,
            image: "/images/menu/beef-steak.png",
          },
          {
            name: "Pork Meat",
            description: "500 gr - steak or ribs",
            price: 1000,
            image: "/images/menu/pork-meat.png",
          },
          {
            name: "Tomahawk Steak",
            description: "1 kg premium cut steak",
            price: 4000,
            image: "/images/menu/tomahawk-steak.png",
          },
          {
            name: "Sticky Pork",
            description: "Tender pork with a sweet and savory glaze",
            price: 1200,
            image: "/images/menu/sticky-pork.png",
          },
          {
            name: "Chicken Fillet",
            description: "Grilled chicken breast fillet",
            price: 900,
            image: "/images/menu/chicken-fillet.png",
          },
        ],
      },
      {
        id: "traditional",
        name: "Traditional Cooking",
        description: "Local specialties showcasing regional flavors and traditions.",
        image: "/images/menu-traditional.png",
        items: [
          {
            name: "Homemade Meatball Grilled",
            description: "Traditional grilled meatballs with herbs and spices",
            price: 600,
            image: "/images/menu/meatballs.png",
          },
          {
            name: "Liver, Heart, Spleen",
            description: "Traditional preparation of organ meats",
            price: 700,
            image: "/images/menu/organ-meats.png",
          },
          {
            name: "Traditional Casserole",
            description: "Slow-cooked meat and vegetables in a clay pot",
            price: 600,
            image: "/images/menu/traditional-casserole.png",
          },
          {
            name: "Rice Casserole",
            description: "Baked rice with herbs and spices",
            price: 600,
            image: "/images/menu/rice-casserole.png",
          },
          {
            name: "Porridge Casserole with Nuts",
            description: "Traditional porridge baked with nuts",
            price: 600,
            image: "/images/menu/porridge-casserole.png",
          },
          {
            name: "Pasta Jufka Casserole",
            description: "Traditional pasta baked with local ingredients",
            price: 600,
            image: "/images/menu/pasta-casserole.png",
          },
          {
            name: "Lamb Yogurt Casserole",
            description: "Tender lamb cooked with yogurt sauce",
            price: 600,
            image: "/images/menu/lamb-yogurt.png",
          },
          {
            name: "Fergese Elbasani",
            description: "Traditional Albanian dish with peppers and tomatoes",
            price: 350,
            image: "/images/menu/fergese.png",
          },
          {
            name: "Barbecue Roasted Chicken Bird",
            description: "Whole chicken roasted on barbecue",
            price: 1800,
            image: "/images/menu/roasted-chicken.png",
          },
        ],
      },
      {
        id: "specials",
        name: "Specials",
        description: "Chef's special creations featuring seasonal ingredients and game meats.",
        image: "/images/menu-specials.png",
        items: [
          {
            name: "Roe Deer Meat",
            description: "500 gr of premium roe deer meat",
            price: 2500,
            image: "/images/menu/roe-deer.png",
          },
          {
            name: "Wild Boar Meat",
            description: "500 gr of wild boar prepared to perfection",
            price: 1200,
            image: "/images/menu/wild-boar.png",
          },
          {
            name: "Wild Rabbit Meat",
            description: "2-3 kg of wild rabbit meat",
            price: 6500,
            image: "/images/menu/wild-rabbit.png",
          },
          {
            name: "Pheasant Meat",
            description: "Roasted pheasant with herbs",
            price: 3500,
            image: "/images/menu/pheasant.png",
          },
          {
            name: "Turkey Gobbler Meat",
            description: "1 kg of turkey meat prepared traditionally",
            price: 2000,
            image: "/images/menu/turkey.png",
          },
        ],
      },
      {
        id: "pizza",
        name: "Pizza",
        description: "Authentic wood-fired pizzas with traditional and creative toppings.",
        image: "/images/menu-pizza.png",
        items: [
          {
            name: "Pizza Margarita",
            description: "Sauce, mozzarella, oregano",
            price: 350,
            image: "/images/menu/margherita.png",
          },
          {
            name: "Mushroom Pizza",
            description: "Sauce, mozzarella, fresh mushrooms",
            price: 450,
            image: "/images/menu/mushroom-pizza.png",
          },
          {
            name: "Pizza Milanese",
            description: "Sauce, mozzarella, sardines, oregano",
            price: 500,
            image: "/images/menu/milanese-pizza.png",
          },
          {
            name: "Pizza Diavola",
            description: "Sauce, mozzarella, spicy salami, tabasco",
            price: 500,
            image: "/images/menu/diavola-pizza.png",
          },
          {
            name: "Pizza Ham & Mushrooms",
            description: "Sauce, mozzarella, prosciutto, mushrooms",
            price: 550,
            image: "/images/menu/ham-mushroom-pizza.png",
          },
          {
            name: "Pizza 4-Seasons",
            description: "Sauce, mozzarella, bacon, mushrooms, olives, sausage",
            price: 550,
            image: "/images/menu/four-seasons-pizza.png",
          },
          {
            name: "Vegetarian Pizza",
            description: "Sauce, mozzarella, olives, pumpkins, mushrooms, tomatoes",
            price: 500,
            image: "/images/menu/vegetarian-pizza.png",
          },
          {
            name: "Tuna Pizza",
            description: "Sauce, mozzarella, tuna, red onion",
            price: 550,
            image: "/images/menu/tuna-pizza.png",
          },
          {
            name: "Pizza 4-Cheeses",
            description: "Sauce, mozzarella, white cheese, yellow cheese, gorgonzola",
            price: 550,
            image: "/images/menu/four-cheese-pizza.png",
          },
          {
            name: "Capricciosa Pizza",
            description: "Sauce, mozzarella, prosciutto, peppers, mushrooms, olives",
            price: 550,
            image: "/images/menu/capricciosa-pizza.png",
          },
          {
            name: "Panorama Pizza",
            description: "Sauce, mozzarella, olives, mushrooms, crudo, parmigiano, tuna",
            price: 700,
            image: "/images/menu/panorama-pizza.png",
          },
          {
            name: "Focace",
            description: "Olive oil, oregano, white cheese",
            price: 200,
            image: "/images/menu/focaccia.png",
          },
          {
            name: "Sandwich",
            description: "Mayonnaise, bacon, mozzarella, tomato",
            price: 200,
            image: "/images/menu/sandwich.png",
          },
        ],
      },
      {
        id: "dessert",
        name: "Dessert",
        description: "Sweet endings to complete your dining experience.",
        image: "/images/menu-dessert.png",
        items: [
          {
            name: "Fresh Ice Cream",
            description: "Homemade ice cream in various flavors",
            price: 250,
            image: "/images/menu/ice-cream.png",
          },
          {
            name: "Fresh Ice Cream with Cornet",
            description: "Ice cream served in a waffle cone",
            price: 200,
            image: "/images/menu/ice-cream-cone.png",
          },
          {
            name: "Fruit with Honey & Nuts",
            description: "Fresh seasonal fruits drizzled with honey and topped with nuts",
            price: 300,
            image: "/images/menu/fruit-honey.png",
          },
          {
            name: "Candy Cream",
            description: "Sweet cream dessert with caramel",
            price: 200,
            image: "/images/menu/candy-cream.png",
          },
          {
            name: "Panna Cotta",
            description: "Italian cream dessert with berry sauce",
            price: 200,
            image: "/images/menu/panna-cotta.png",
          },
          {
            name: "Crepe with Chocolate Cream & Banana",
            description: "Thin pancake filled with chocolate and banana",
            price: 150,
            image: "/images/menu/chocolate-crepe.png",
          },
          {
            name: "Crepe with Cream & Strawberries",
            description: "Thin pancake filled with cream and fresh strawberries",
            price: 150,
            image: "/images/menu/strawberry-crepe.png",
          },
          {
            name: "Orange Cake",
            description: "Moist cake with orange flavor",
            price: 200,
            image: "/images/menu/orange-cake.png",
          },
          {
            name: "Tiramisu",
            description: "Classic Italian coffee-flavored dessert",
            price: 300,
            image: "/images/menu/tiramisu.png",
          },
          {
            name: "Trilece",
            description: "Traditional three-milk cake",
            price: 200,
            image: "/images/menu/trilece.png",
          },
          {
            name: "Chocolate Souffle",
            description: "Warm chocolate cake with a molten center",
            price: 300,
            image: "/images/menu/chocolate-souffle.png",
          },
          {
            name: "Homemade Sweet Milk",
            description: "Traditional sweet milk dessert",
            price: 400,
            image: "/images/menu/sweet-milk.png",
          },
        ],
      },
      {
        id: "cafeteria",
        name: "Cafeteria",
        description: "Premium coffee and tea selections.",
        image: "/images/menu-cafeteria.png",
        items: [
          {
            name: "Turkish Coffee",
            description: "Traditional Turkish coffee",
            price: 70,
            image: "/images/menu/turkish-coffee.png",
          },
          {
            name: "Espresso Coffee",
            description: "Single shot of rich espresso",
            price: 80,
            image: "/images/menu/espresso.png",
          },
          {
            name: "Macchiato",
            description: "Espresso with a dash of milk",
            price: 80,
            image: "/images/menu/macchiato.png",
          },
          {
            name: "Cappuccino",
            description: "Espresso with steamed milk and foam",
            price: 150,
            image: "/images/menu/cappuccino.png",
          },
          {
            name: "Correto Coffee",
            description: "Espresso with a shot of liquor",
            price: 150,
            image: "/images/menu/correto.png",
          },
          {
            name: "Hot Tea",
            description: "Various tea selections",
            price: 70,
            image: "/images/menu/hot-tea.png",
          },
          {
            name: "Organic Tea",
            description: "Premium organic tea varieties",
            price: 150,
            image: "/images/menu/organic-tea.png",
          },
          {
            name: "Milk",
            description: "Fresh milk served hot or cold",
            price: 70,
            image: "/images/menu/milk.png",
          },
          {
            name: "Salep",
            description: "Traditional hot drink made from orchid flour",
            price: 150,
            image: "/images/menu/salep.png",
          },
          {
            name: "Hot Chocolate",
            description: "Rich and creamy hot chocolate",
            price: 150,
            image: "/images/menu/hot-chocolate.png",
          },
          {
            name: "Nescaffe",
            description: "Instant coffee preparation",
            price: 180,
            image: "/images/menu/nescafe.png",
          },
        ],
      },
      {
        id: "fresh-drinks",
        name: "Fresh Drinks",
        description: "Refreshing non-alcoholic beverages and fresh juices.",
        image: "/images/menu-fresh-drinks.png",
        items: [
          {
            name: "Bravo",
            description: "Fruit juice drink",
            price: 150,
            image: "/images/menu/bravo-juice.png",
          },
          {
            name: "Cold Tea",
            description: "Refreshing iced tea",
            price: 150,
            image: "/images/menu/iced-tea.png",
          },
          {
            name: "Coca Cola",
            description: "Classic cola beverage",
            price: 150,
            image: "/images/menu/coca-cola.png",
          },
          {
            name: "Fanta",
            description: "Orange flavored soft drink",
            price: 150,
            image: "/images/menu/fanta.png",
          },
          {
            name: "Sprite",
            description: "Lemon-lime flavored soft drink",
            price: 150,
            image: "/images/menu/sprite.png",
          },
          {
            name: "Soda Limon",
            description: "Sparkling water with lemon",
            price: 150,
            image: "/images/menu/soda-limon.png",
          },
          {
            name: "Fresh Fruit Juices",
            description: "Variety of freshly squeezed fruit juices",
            price: 200,
            image: "/images/menu/fresh-juice.png",
          },
          {
            name: "Nescaffe",
            description: "Cold instant coffee preparation",
            price: 150,
            image: "/images/menu/cold-nescafe.png",
          },
          {
            name: "Suko",
            description: "Fruit juice drink",
            price: 70,
            image: "/images/menu/suko.png",
          },
          {
            name: "Bitter",
            description: "Non-alcoholic bitter aperitif",
            price: 100,
            image: "/images/menu/bitter.png",
          },
          {
            name: "Schweeppes",
            description: "Tonic water or bitter lemon",
            price: 150,
            image: "/images/menu/schweppes.png",
          },
          {
            name: "Crodino",
            description: "Non-alcoholic bitter aperitif",
            price: 120,
            image: "/images/menu/crodino.png",
          },
          {
            name: "B52",
            description: "Energy drink",
            price: 150,
            image: "/images/menu/b52.png",
          },
          {
            name: "RedBull",
            description: "Energy drink",
            price: 300,
            image: "/images/menu/redbull.png",
          },
          {
            name: "Water 0.5 L",
            description: "Still mineral water",
            price: 60,
            image: "/images/menu/water-bottle.png",
          },
          {
            name: "Water Bottle 0.75 L",
            description: "Premium still or sparkling water",
            price: 200,
            image: "/images/menu/premium-water.png",
          },
          {
            name: "Fredo Latte",
            description: "Cold coffee with milk",
            price: 200,
            image: "/images/menu/fredo-latte.png",
          },
          {
            name: "Cappuccino Fredo",
            description: "Cold cappuccino",
            price: 200,
            image: "/images/menu/cappuccino-fredo.png",
          },
          {
            name: "Chocolate Fredo",
            description: "Cold chocolate drink",
            price: 200,
            image: "/images/menu/chocolate-fredo.png",
          },
        ],
      },
      {
        id: "beer",
        name: "Beer",
        description: "Selection of local and international beers.",
        image: "/images/menu-beer.png",
        items: [
          {
            name: "Little Draft Beer",
            description: "Small glass of draft beer",
            price: 100,
            image: "/images/menu/small-draft-beer.png",
          },
          {
            name: "Large Draft Beer",
            description: "Large glass of draft beer",
            price: 200,
            image: "/images/menu/large-draft-beer.png",
          },
          {
            name: "Strong Beer 0.33 L",
            description: "Bottled strong beer",
            price: 200,
            image: "/images/menu/strong-beer.png",
          },
          {
            name: "Amstel",
            description: "Dutch pale lager",
            price: 200,
            image: "/images/menu/amstel.png",
          },
          {
            name: "Heineken",
            description: "Dutch pale lager",
            price: 250,
            image: "/images/menu/heineken.png",
          },
          {
            name: "Paulaner",
            description: "German wheat beer",
            price: 350,
            image: "/images/menu/paulaner.png",
          },
          {
            name: "Chek Pilsen 0.33 L",
            description: "Czech pilsner beer",
            price: 150,
            image: "/images/menu/czech-pilsner.png",
          },
          {
            name: "Corona",
            description: "Mexican pale lager",
            price: 350,
            image: "/images/menu/corona.png",
          },
          {
            name: "Draft Beer Tower",
            description: "Large serving of draft beer for sharing",
            price: 700,
            image: "/images/menu/beer-tower.png",
          },
        ],
      },
      {
        id: "alcohol",
        name: "Alcohol",
        description: "Premium spirits and signature cocktails.",
        image: "/images/menu-alcohol.png",
        items: [
          {
            name: "Johnnie Walker Blue",
            description: "Premium blended Scotch whisky",
            price: 2500,
            image: "/images/menu/johnnie-walker-blue.png",
          },
          {
            name: "Amaro Disarono",
            description: "Italian herbal liqueur",
            price: 250,
            image: "/images/menu/disaronno.png",
          },
          {
            name: "Amaro Lucano",
            description: "Italian herbal liqueur",
            price: 250,
            image: "/images/menu/amaro-lucano.png",
          },
          {
            name: "Amaro Montenegro",
            description: "Italian herbal liqueur",
            price: 250,
            image: "/images/menu/montenegro.png",
          },
          {
            name: "Amaro Ramazotti",
            description: "Italian herbal liqueur",
            price: 250,
            image: "/images/menu/ramazotti.png",
          },
          {
            name: "Vechia Romagna",
            description: "Italian brandy",
            price: 250,
            image: "/images/menu/vecchia-romagna.png",
          },
          {
            name: "Fernet Branca",
            description: "Italian herbal liqueur",
            price: 250,
            image: "/images/menu/fernet-branca.png",
          },
          {
            name: "Bacardi",
            description: "White rum",
            price: 250,
            image: "/images/menu/bacardi.png",
          },
          {
            name: "Baileys",
            description: "Irish cream liqueur",
            price: 250,
            image: "/images/menu/baileys.png",
          },
          {
            name: "Ballantines",
            description: "Blended Scotch whisky",
            price: 250,
            image: "/images/menu/ballantines.png",
          },
          {
            name: "Campari",
            description: "Italian bitter aperitif",
            price: 200,
            image: "/images/menu/campari.png",
          },
          {
            name: "Cardinal",
            description: "Premium spirit",
            price: 350,
            image: "/images/menu/cardinal.png",
          },
          {
            name: "Chivas Regal",
            description: "Blended Scotch whisky",
            price: 350,
            image: "/images/menu/chivas-regal.png",
          },
          {
            name: "Cutty Sark",
            description: "Blended Scotch whisky",
            price: 250,
            image: "/images/menu/cutty-sark.png",
          },
          {
            name: "Dimple",
            description: "Blended Scotch whisky",
            price: 350,
            image: "/images/menu/dimple.png",
          },
          {
            name: "Glengrand",
            description: "Single malt Scotch whisky",
            price: 300,
            image: "/images/menu/glengrand.png",
          },
          {
            name: "Haig Gold Label",
            description: "Blended Scotch whisky",
            price: 350,
            image: "/images/menu/haig-gold.png",
          },
          {
            name: "J & B",
            description: "Blended Scotch whisky",
            price: 250,
            image: "/images/menu/j-and-b.png",
          },
          {
            name: "Jack Daniels",
            description: "Tennessee whiskey",
            price: 300,
            image: "/images/menu/jack-daniels.png",
          },
          {
            name: "Johnny Walker",
            description: "Blended Scotch whisky",
            price: 250,
            image: "/images/menu/johnnie-walker.png",
          },
          {
            name: "Johnny Black",
            description: "Blended Scotch whisky",
            price: 350,
            image: "/images/menu/johnnie-black.png",
          },
        ],
      },
      {
        id: "wine",
        name: "Wine",
        description: "Curated selection of local and international wines.",
        image: "/images/menu-wine.png",
        items: [
          {
            name: "Wine Glasses",
            description: "Selection of wines by the glass",
            price: 200,
            image: "/images/menu/wine-glass.png",
          },
          {
            name: "House Wine 0.5 L",
            description: "Red or white house wine",
            price: 500,
            image: "/images/menu/house-wine.png",
          },
          {
            name: "Handcrafted Wine 0.75 L",
            description: "Premium local wine",
            price: 1200,
            image: "/images/menu/premium-wine.png",
          },
        ],
      },
    ],
  },
  "menu-al": {
    hero: {
      title: "Eksperienca Gastronomike",
      subtitle: "Shijoni kuzhinën e shkëlqyer të përgatitur nga kuzhinierët tanë të talentuar",
      image: "/images/menu-hero.jpg",
    },
    disclaimer: {
      title: "Ju lutemi vini re:",
      text: "Fotot janë ilustruese. Ne nuk pranojmë porosi jashtë menusë. Ju lutemi na informoni nëse keni ndonjë alergji ushqimore!",
    },
    overview: {
      title: "Përsosmëri Kulinare",
      description:
        "Në Paradise Resort, ne krenohemi me ofrimin e përvojave të jashtëzakonshme gastronomike. Kuzhinierët tanë të talentuar përdorin vetëm përbërësit më të freskët lokalë për të krijuar kënaqësi kulinare të paharrueshme që do të kënaqin edhe shijet më të sofistikuara.",
    },
    dining: {
      options: [
        {
          icon: "🍽️",
          title: "Restoranti Kryesor",
          description:
            "Restoranti ynë kryesor ofron një menu të larmishme me kuzhinë ndërkombëtare dhe specialitete lokale.",
        },
        {
          icon: "🏖️",
          title: "Bar & Grill në Plazh",
          description: "Shijoni ushqime të rastësishme me pamje nga oqeani në barin dhe grillin tonë në plazh.",
        },
        {
          icon: "✨",
          title: "Darkë Fine",
          description: "Përjetoni kuzhinën gourmet në restorantin tonë të darkës fine.",
        },
      ],
    },
    categoryNav: {
      title: "Kategoritë e Menusë",
      allText: "Të Gjitha",
    },
    privateDining: {
      title: "Eksperiencë Private Darke",
      description:
        "Për raste të veçanta, ne ofrojmë përvoja ekskluzive të darkës private. Nga darkat romantike në plazh deri te festimet familjare në dhomën tonë private të ngrënies, ekipi ynë do të krijojë një udhëtim kulinar të paharrueshëm të përshtatur sipas preferencave tuaja.",
      buttonText: "Pyesni Tani",
      image: "/images/private-dining.jpg",
    },
    categories: [
      {
        id: "salads",
        name: "Sallatat",
        description: "Sallata të freskëta, kërcitëse të përgatitura me përbërës me origjinë lokale.",
        image: "/images/menu-salads.png",
        items: [
          {
            name: "Sallatë Fshati",
            description: "Domate, kastravecë, speca, qepë, ullinj",
            price: 300,
            image: "/images/menu/village-salad.png",
          },
          {
            name: "Sallatë Rukola",
            description: "Rukola, grana, domate",
            price: 450,
            image: "/images/menu/arugula-salad.png",
          },
          {
            name: "Perime të Ziera/Skuqura",
            description: "Patëllxhan, kungull, domate, qepë, karrotë",
            price: 400,
            image: "/images/menu/grilled-vegetables.png",
          },
          {
            name: "Sallatë Cezar",
            description: "Mozzarella, domate, rukola, vezë, proshutë",
            price: 450,
            image: "/images/menu/caesar-salad.png",
          },
          {
            name: "Sallatë Panorama",
            description: "Marule e kuqe/e bardhë, karota, misër, S. jeshil, rukola, kastravec, domate",
            price: 450,
            image: "/images/menu/panorama-salad.png",
          },
          {
            name: "Sallatë Turshi",
            description: "Perime të ndryshme turshi",
            price: 200,
            image: "/images/menu/pickled-salad.png",
          },
          {
            name: "Sallatë Ullinj",
            description: "Ullinj të ndryshëm me erëza dhe barishte",
            price: 200,
            image: "/images/menu/olive-salad.png",
          },
          {
            name: "Perime të Mbushura të Pjekura",
            description: "Perime sezonale të mbushura me barishte aromatike dhe oriz",
            price: 400,
            image: "/images/menu/stuffed-vegetables.png",
          },
        ],
      },
      // Additional Albanian menu categories would continue here...
    ],
  },
  // Add other content sections as needed
}

// Content cache for better performance
const contentCache = new Map<string, any>()

/**
 * Load content for a specific page with language support
 */
export async function loadContent(page: string, language = "en") {
  try {
    // Create a cache key based on page and language
    const cacheKey = `${page}-${language}`

    // Return cached content if available
    if (contentCache.has(cacheKey)) {
      return contentCache.get(cacheKey)
    }

    // Determine the content key based on language
    const contentKey = language === "al" ? `${page}-al` : page

    // Get content from our hardcoded map
    const content = contentMap[contentKey]

    if (!content) {
      // If language-specific content doesn't exist, try to fall back to English
      if (language === "al") {
        console.warn(`Content for ${contentKey} not found, falling back to English`)
        const fallbackContent = contentMap[page]
        if (fallbackContent) {
          contentCache.set(cacheKey, fallbackContent)
          return fallbackContent
        }
      }
      throw new Error(`Content for ${page} not found`)
    }

    // Cache the content for future use
    contentCache.set(cacheKey, content)
    return content
  } catch (error) {
    console.error(`Error loading content for ${page}:`, error)
    throw error
  }
}

/**
 * Get page content with language support
 */
export async function getPageContent(page: string, language = "en") {
  return loadContent(page, language)
}

/**
 * Get a specific section from a page's content with language support
 */
export async function getContentSection(page: string, section: string, language = "en") {
  try {
    const content = await loadContent(page, language)
    if (content && content[section]) {
      return content[section]
    }
    console.warn(`Section "${section}" not found in content for page "${page}"`)
    return null
  } catch (error) {
    console.error(`Error getting content section ${section} for page ${page}:`, error)
    return null
  }
}
