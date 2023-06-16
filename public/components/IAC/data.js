const data = [
    {
      id: 1,
      name: "Prof. Akihiko Terada",
      nation: "JAPAN",
      university: "Tokyo University of Agriculture and Technology",
      image: ""
    },
    {
      id: 2,
      name: "Prof. Anastasia Zabaniotou",
      nation: "GREECE",
      university: "Aristotle University of Thessaloniki",
      image: ""
    },
    {
      id: 3,
      name: "Prof. Anuradha Jabasingh S.",
      nation: "ETHIOPIA",
      university: "Addis Ababa Institute of Technology",
      image: ""
    },
    {
      id: 4,
      name: "Prof. Arunagiri A.",
      nation: "INDIA",
      university: "National Institute of Technology Tiruchirappalli",
      image: ""
    },
    {
      id: 5,
      name: "Prof. Atsushi Suzuki",
      nation: "JAPAN",
      university: "Yokohama National University",
      image: ""
    },
    {
      id: 6,
      name: "Prof. Beteley Tekola Meshesha",
      nation: "ETHIOPIA",
      university: "Addis Ababa Institute of Technology",
      image: ""
    },
    {
      id: 7,
      name: "Mr. Bhaskaran M N",
      nation: "INDIA",
      university: "The Sanmar Group",
      image: ""
    },
    {
      id: 8,
      name: "Prof. Carlo Ingrao",
      nation: "ITALY",
      university: "University of Bari Aldo Moro",
      image: ""
    },
    {
      id: 9,
      name: "Prof. Chi-Wang Li",
      nation: "TAIWAN",
      university: "Tamkang University",
      image: ""
    },
    {
      id: 10,
      name: "Prof. Dhanasekar R.",
      nation: "INDIA",
      university: "Annamalai University",
      image: ""
    },
    {
      id: 11,
      name: "Prof. Gerold Rahmann",
      nation: "GERMANY",
      university: "Johann Heinrich von Thünen Institute",
      image: ""
    },
    {
      id: 12,
      name: "Prof. Hau Thi Nguyen",
      nation: "VIETNAM",
      university: "Dalat University",
      image: ""
    },
    {
      id: 13,
      name: "Prof. Hem Raj Pant",
      nation: "NEPAL",
      university: "Tribhuvan University",
      image: ""
    },
    {
      id: 14,
      name: "Prof. Hideaki Yoshitake",
      nation: "JAPAN",
      university: "Yokohama National University",
      image: ""
    },
    {
      id: 15,
      name: "Prof. I Made Joni",
      nation: "INDONESIA",
      university: "Universitas Padjadjaran",
      image: ""
    },
    {
      id: 16,
      name: "Prof. Jacek Mąkinia",
      nation: "POLAND",
      university: "Gdańsk University of Technology",
      image: ""
    },
    {
      id: 17,
      name: "Dr. Jennifer P. Tamayo",
      nation: "PHILIPPINES",
      university: "Forest Products Research and Development Institute",
      image: ""
    },
    {
      id: 18,
      name: "Prof. Jih-Hsing Chang",
      nation: "TAIWAN",
      university: "Chaoyang University of Technology",
      image: ""
    },
    {
      id: 19,
      name: "Mr. Manikandan Vasudevan",
      nation: "INDIA",
      university: "Hydranautics Inc.",
      image: ""
    },
    {
      id: 20,
      name: "Prof. Md Shafiur Rahman",
      nation: "OMAN",
      university: "Sultan Qaboos University",
      image: ""
    },
    {
      id: 21,
      name: "Prof. Mohammed J.K. Bashir",
      nation: "MALAYSIA",
      university: "Universiti Tunku Abdul Rahman",
      image: ""
    },
    {
      id: 22,
      name: "Prof. Mohammed Shaad Ansari",
      nation: "SWEDEN",
      university: "Linköping University",
      image: ""
    },
    {
      id: 23,
      name: "Prof. Mukesh Upadhyay",
      nation: "IRELAND",
      university: "University of Limerick",
      image: ""
    },
    {
      id: 24,
      name: "Prof. Murugesan Thanabalan",
      nation: "INDIA",
      university: "B. S. Abdur Rahman Crescent Institute of Science and Technology",
      image: ""
    },
    {
      id: 25,
      name: "Prof. Mushtaque Ahmed",
      nation: "OMAN",
      university: "Sultan Qaboos University",
      image: ""
    },
    {
      id: 26,
      name: "Dr. Nandita Dasgupta",
      nation: "SPAIN",
      university: "Universidad de Burgos",
      image: ""
    },
    {
      id: 27,
      name: "Prof. Nguyen Cong Nguyen",
      nation: "VIETNAM",
      university: "Dalat University",
      image: ""
    },
    {
      id: 28,
      name: "Prof. Raghuram Chetty",
      nation: "INDIA",
      university: "Indian Institute of Technology Madras",
      image: ""
    },
    {
      id: 29,
      name: "Dr. Rajan Rathinasabapathy",
      nation: "USA",
      university: "Phillips 66",
      image: ""
    },
    {
      id: 30,
      name: "Prof. Ramachandran K P",
      nation: "OMAN",
      university: "National University of Science & Technology",
      image: ""
    },
    {
      id: 31,
      name: "Prof. Ramani Kannan",
      nation: "MALAYSIA",
      university: "University Teknologi PETRONAS",
      image: ""
    },
    {
      id: 32,
      name: "Dr. Randeep Singh",
      nation: "SOUTH KOREA",
      university: "Yeungnam University",
      image: ""
    },
    {
      id: 33,
      name: "Prof. Reddy Prasad D.M.",
      nation: "BRUNEI",
      university: "Universiti Teknologi Brunei",
      image: ""
    },
    {
      id: 34,
      name: "Dr. Saikat Sinha Ray",
      nation: "SOUTH KOREA",
      university: "Ulsan National Institute of Science Technology",
      image: ""
    },
    {
      id: 35,
      name: "Ir. Ts. Sakthiaswaran Kaliappan",
      nation: "MALAYSIA",
      university: "Jabatan Kerja Raya",
      image: ""
    },
    {
      id: 36,
      name: "Prof. Sean Rigby",
      nation: "UNITED KINGDOM",
      university: "University of Nottingham",
      image: ""
    },
    {
      id: 37,
      name: "Prof. Sekar S. K.",
      nation: "INDIA",
      university: "Vellore Institute of Technology",
      image: ""
    },
    {
      id: 38,
      name: "Prof. Shiao-Shing Chen",
      nation: "TAIWAN",
      university: "National Taipei University of Technology",
      image: ""
    },
    {
      id: 39,
      name: "Prof. Shimelis Kebede Kassahun",
      nation: "ETHIOPIA",
      university: "Addis Ababa Institute of Technology",
      image: ""
    },
    {
      id: 40,
      name: "Prof. Shivendu Ranjan",
      nation: "INDIA",
      university: "Indian Institute of Technology Kharagpur",
      image: ""
    },
    {
      id: 41,
      name: "Mr. Sylvain Usher",
      nation: "CÔTE D’IVOIRE",
      university: "African Water Association",
      image: ""
    },
    {
      id: 42,
      name: "Dr. TSK Sharma",
      nation: "SOUTH KOREA",
      university: "University of Ulsan",
      image: ""
    },
    {
      id: 43,
      name: "Prof. Wan Abd Al Qadr Imad Wan Mohtar",
      nation: "MALAYSIA",
      university: "Universiti Malaya",
      image: ""
    },
    {
      id: 44,
      name: "Prof. Watumesa Agustina Tan",
      nation: "INDONESIA",
      university: "Universitas Katolik Indonesia Atma Jaya",
      image: ""
    }
  ];
  
  
export default data  