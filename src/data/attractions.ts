// To update this content later, edit this file.
// Add, remove, or edit attractions and categories here.
// DO NOT add: Red Caboose Winery, any winery, or wine references.
// NOTE: The Bosque County Courthouse is in Meridian, TX (the county seat) — NOT in Clifton.

export interface AttractionPlace {
  name: string;
  description: string;
  featured?: boolean;
}

export interface AttractionGroup {
  category: string;
  places: AttractionPlace[];
}

export const attractionGroups: AttractionGroup[] = [
  {
    category: "History, Heritage & Culture",
    places: [
      {
        name: "Bosque Museum",
        description:
          "Explore the history of Bosque County and the region's Scandinavian heritage at the Bosque Museum in Clifton. A great introduction to the Norwegian roots that give Clifton its nickname — the Norwegian Capital of Texas. Velkommen Inn is a convenient hotel near the Bosque Museum.",
        featured: true,
      },
      {
        name: "Historic Norse Community",
        description:
          "Just a short drive from Clifton, the Norse community is one of the earliest Norwegian settlements in Texas. Explore this historic area to connect with the Scandinavian heritage that defines the region.",
        featured: false,
      },
      {
        name: "Our Savior's Lutheran Church at Norse",
        description:
          "A historic church serving the Norse community near Clifton since the 1800s. A meaningful stop for anyone exploring the Norwegian heritage of Central Texas.",
        featured: false,
      },
    ],
  },
  {
    category: "Arts, Galleries & Entertainment",
    places: [
      {
        name: "Bosque Arts Center",
        description:
          "A cultural hub in Clifton featuring rotating exhibits, local artwork, and community events throughout the year. Velkommen Inn is your home base as a hotel near the Bosque Arts Center.",
        featured: true,
      },
      {
        name: "L A Thompson Gallery of Fine Art",
        description:
          "A fine art gallery in the Clifton area showcasing works by talented regional artists. Worth a visit for art enthusiasts exploring the Bosque County area.",
        featured: false,
      },
      {
        name: "Riverplace Gallery",
        description:
          "A local gallery featuring original artwork and handcrafted items from regional artists. A great stop while exploring downtown Clifton.",
        featured: false,
      },
      {
        name: "CLIFTEX Theatre",
        description:
          "The historic CLIFTEX Theatre is a beloved Clifton landmark. Check local listings for current showings and community events.",
        featured: false,
      },
    ],
  },
  {
    category: "Classic Cars, Shopping & Local Finds",
    places: [
      {
        name: "Clifton Classic Chassis Auto Museum",
        description:
          "A treat for car enthusiasts — this museum showcases a collection of classic automobiles right in downtown Clifton.",
        featured: true,
      },
      {
        name: "Bosque County Emporium",
        description:
          "A local shopping destination in Clifton offering unique finds, gifts, and items that reflect the character of Bosque County.",
        featured: false,
      },
      {
        name: "Downtown Clifton",
        description:
          "Stroll through the charming streets of downtown Clifton, where you'll find shops, restaurants, and the welcoming small-town atmosphere that makes Clifton unique. The town's Norwegian heritage is evident throughout — a true reflection of the Norwegian Capital of Texas.",
        featured: true,
      },
    ],
  },
  {
    category: "Outdoor Recreation & Scenic Day Trips",
    places: [
      {
        name: "Clifton Whipple Truss Bridge",
        description:
          "A historic iron truss bridge that stands as a piece of Texas engineering history. Worth a stop for history buffs and photographers.",
        featured: true,
      },
      {
        name: "Lake Whitney State Park",
        description:
          "Located on the shores of Lake Whitney, this state park offers swimming, fishing, camping, hiking, and water recreation. A popular destination for families and outdoor enthusiasts. Velkommen Inn is a convenient hotel near Lake Whitney for visitors exploring the park.",
        featured: true,
      },
      {
        name: "Whitney Lake Dam and Powerhouse",
        description:
          "The Whitney Dam on the Brazos River is an impressive structure and a scenic stop for visitors to the Lake Whitney area.",
        featured: false,
      },
      {
        name: "Meridian State Park",
        description:
          "A scenic gem in Bosque County featuring hiking trails, a spring-fed lake, picnicking, and camping in a beautiful natural setting. Velkommen Inn serves as a hotel near Meridian State Park for guests exploring this destination.",
        featured: false,
      },
      {
        name: "Bosque River",
        description:
          "The Bosque River winds through Bosque County, offering scenic views, fishing spots, and peaceful natural surroundings.",
        featured: false,
      },
    ],
  },
  {
    category: "Events & Family Activities",
    places: [
      {
        name: "Clifton Civic Center",
        description:
          "The Clifton Civic Center hosts community events, gatherings, and activities throughout the year. Check local listings for upcoming events during your stay.",
        featured: false,
      },
      {
        name: "Olsen Park Pool",
        description:
          "A community pool in Clifton offering a fun outdoor option for families visiting during the warmer months.",
        featured: false,
      },
    ],
  },
];

// Homepage attraction preview — exactly 6 featured items
export const homepageAttractionPreview = [
  "Bosque Museum",
  "Bosque Arts Center",
  "Clifton Whipple Truss Bridge",
  "Clifton Classic Chassis Auto Museum",
  "Lake Whitney State Park",
  "Downtown Clifton",
];
