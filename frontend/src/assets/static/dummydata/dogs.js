const dogs = [
  {
    id: 1,
    image:
      "https://images.squarespace-cdn.com/content/v1/5c3672dd5cfd795eb2d5b5b9/1628808511835-O784EFW9KXFDS0953SH2/saywoof-photo-frankie0721-1.jpg?format=2500w",
    name: "Buddy",
    age: "2 years",
    breed: "Golden Retriever",
    gender: "Male",
    description:
      "Hi, I am Buddy. I am a playful and loyal Golden Retriever who loves to fetch and swim.",
  },
  {
    id: 2,
    image:
      "https://thattogspot.com/wp-content/uploads/2020/05/1_AlfPipFinnStudioYellow-14-1024x683.jpg",
    name: "Bella",
    age: "3 years",
    breed: "Labrador Retriever",
    gender: "Female",
    description:
      "Hi, I am Bella. I am a gentle and friendly Labrador who loves to be around people.",
  },
  {
    id: 3,
    image:
      "https://images.squarespace-cdn.com/content/v1/5c3672dd5cfd795eb2d5b5b9/1590645070204-81NY0APP2M583G2LS94Z/Chloe_Say+Woof-2.jpg?format=1000w",
    name: "Charlie",
    age: "1 year",
    breed: "Beagle",
    gender: "Male",
    description:
      "Hi, I am Charlie. I am a curious and energetic Beagle who loves to explore new scents.",
  },
  {
    id: 4,
    image:
      "https://images.squarespace-cdn.com/content/v1/5c3672dd5cfd795eb2d5b5b9/1628808866661-QBLVOSE9TEAY0VUVR27J/chloe-1.jpg?format=1000w",
    name: "Lucy",
    age: "4 years",
    breed: "Bulldog",
    gender: "Female",
    description:
      "Hi, I am Lucy. I am a calm and affectionate Bulldog who loves to nap and get belly rubs.",
  },
  {
    id: 5,
    image:
      "https://images.squarespace-cdn.com/content/v1/5c3672dd5cfd795eb2d5b5b9/1551916019902-FN9NMRMIEAU724LMHJXP/_MG_7527-Edit-Edit.jpg?format=1000w",
    name: "Max",
    age: "5 years",
    breed: "Poodle",
    gender: "Male",
    description:
      "Hi, I am Max. I am a smart and active Poodle who loves to learn new tricks and play games.",
  },
  {
    id: 6,
    image:
      "https://images.squarespace-cdn.com/content/v1/5c3672dd5cfd795eb2d5b5b9/1588111862619-84MDDNCC69M86E7QB9HU/KAI.jpg?format=1000w",
    name: "Molly",
    age: "2 years",
    breed: "German Shepherd",
    gender: "Female",
    description: "Hi, I am Molly. I am a very friendly dog who loves walks and cuddles.",
  },
  {
    id: 7,
    image:
      "https://media.istockphoto.com/id/1310068143/video/lovely-small-golden-retriever-dog-reacting-to-noise-suspiciously-looking-around-while-sitting.jpg?s=640x640&k=20&c=eAtC2LF_b5qHhRR1jo0jfbwsPPUGjnKUY2ZI1D60ZUw=",
    name: "Daisy",
    age: "3 years",
    breed: "Shih Tzu",
    gender: "Female",
    description:
      "Hi, I am Daisy. I am a sweet and playful Shih Tzu who loves to snuggle and play with toys.",
  },
  {
    id: 8,
    image: "https://static.showit.co/800/J88O4hTaSXWVf8AIVyHnaA/19320/molly_002.jpg",
    name: "Bailey",
    age: "4 years",
    breed: "Boxer",
    gender: "Male",
    description: "Hi, I am Bailey. I am a loyal and energetic Boxer who loves to run and play.",
  },
  {
    id: 9,
    image:
      "https://static.showit.co/800/vJoCVquGQpG1-xUY3xDy0w/19320/pet-photos-myrtle-beach-1500_090.jpg",
    name: "Coco",
    age: "5 years",
    breed: "Dachshund",
    gender: "Female",
    description: "Hi, I am Coco. I am a brave and curious Dachshund who loves to dig and chase.",
  },
  {
    id: 10,
    image:
      "https://community.thriveglobal.com/wp-content/uploads/2018/09/GettyImages-697553675-2.jpg",
    name: "Rocky",
    age: "1 year",
    breed: "Rottweiler",
    gender: "Male",
    description:
      "Hi, I am Rocky. I am a strong and confident Rottweiler who loves to protect and play.",
  },
  {
    id: 11,
    image:
      "https://www.shutterstock.com/image-photo/studio-headshot-portrait-boston-terrier-600nw-2383793807.jpg",
    name: "Lola",
    age: "4 years",
    breed: "Chihuahua",
    gender: "Female",
    description:
      "Hi, I am Lola. I am a small and sassy Chihuahua who loves to be the center of attention.",
  },
  {
    id: 12,
    image:
      "https://images.squarespace-cdn.com/content/v1/5dcfdfa0da15f732723517b9/1658798470456-BF7OFKABSHIL64KJB2J7/Greg+Murray+Photography+%7C+Cleveland+pet+and+animal+photographer+%7C+studio+portrait+of+corgi+smiling+and+sitting+against+a+yellow+background.jpg?format=2500w",
    name: "Jack",
    age: "2 years",
    breed: "Border Collie",
    gender: "Male",
    description:
      "Hi, I am Jack. I am an intelligent and energetic Border Collie who loves to herd and play.",
  },
  {
    id: 13,
    image:
      "https://www.shutterstock.com/image-photo/studio-headshot-portrait-chocolate-labrador-600nw-2066529956.jpg",
    name: "Toby",
    age: "5 years",
    breed: "Cavalier King Charles Spaniel",
    gender: "Male",
    description:
      "Hi, I am Toby. I am a gentle and affectionate Cavalier King Charles Spaniel who loves to be pampered.",
  },
  {
    id: 14,
    image:
      "https://media.istockphoto.com/id/1410303227/photo/biewer-terrier-puppy-dog-in-lilac-background.jpg?s=612x612&w=0&k=20&c=-x9HpA2o-BvqH81DRypiURWnGYd-IhF6a_Pq6eVdf0U=",
    name: "Zoe",
    age: "3 years",
    breed: "Cocker Spaniel",
    gender: "Female",
    description:
      "Hi, I am Zoe. I am a friendly and playful Cocker Spaniel who loves to fetch and swim.",
  },
];

export default dogs;
