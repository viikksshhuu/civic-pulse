// CivicPulse Mock Data

export type IssueStatus = "open" | "acknowledged" | "in_progress" | "resolved" | "rejected";
export type IssueSeverity = "low" | "medium" | "high" | "emergency";

export interface Issue {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryIcon: string;
  status: IssueStatus;
  severity: IssueSeverity;
  location: string;
  ward: string;
  city: string;
  lat: number;
  lng: number;
  upvotes: number;
  comments: number;
  reportedAt: string;
  reportedBy: string;
  imageUrl: string;
  timeline: TimelineEvent[];
}

export interface TimelineEvent {
  status: string;
  label: string;
  timestamp: string;
  department?: string;
  completed: boolean;
  current?: boolean;
}

export const mockIssues: Issue[] = [
  {
    id: "CR-20263847",
    title: "Large pothole on MG Road near Indiranagar 12th Main junction",
    description:
      "A large pothole approximately 2 feet wide and 6 inches deep has formed at the junction of MG Road and 12th Main, Indiranagar. It has been causing damage to vehicles and creating a safety hazard for two-wheelers especially during night hours.",
    category: "Potholes & Road Damage",
    categoryIcon: "🕳️",
    status: "in_progress",
    severity: "high",
    location: "MG Road, Indiranagar",
    ward: "Ward 81 - Indiranagar",
    city: "Bengaluru",
    lat: 12.9716,
    lng: 77.5946,
    upvotes: 47,
    comments: 12,
    reportedAt: "2026-04-03T09:14:00",
    reportedBy: "Citizen #4821",
    imageUrl: "/images/issues/indiranagar-pothole.png",
    timeline: [
      { status: "reported", label: "Reported", timestamp: "April 3, 2026 at 9:14 AM", completed: true },
      { status: "acknowledged", label: "Acknowledged", timestamp: "April 4, 2026 at 11:32 AM", department: "BBMP Roads Dept.", completed: true },
      { status: "in_progress", label: "In Progress", timestamp: "April 7, 2026 at 2:00 PM", completed: true, current: true },
      { status: "resolved", label: "Resolved", timestamp: "Pending", completed: false },
    ],
  },
  {
    id: "CR-20263901",
    title: "Street light outage on 5th Cross, Koramangala — dark for 3 weeks",
    description:
      "The street light at the corner of 5th Cross and 80 Feet Road, Koramangala has been non-functional for over three weeks. The area becomes extremely unsafe at night for pedestrians and residents.",
    category: "Street Light Outages",
    categoryIcon: "💡",
    status: "resolved",
    severity: "medium",
    location: "5th Cross, Koramangala",
    ward: "Ward 68 - Koramangala",
    city: "Bengaluru",
    lat: 12.9352,
    lng: 77.6245,
    upvotes: 23,
    comments: 5,
    reportedAt: "2026-03-20T14:22:00",
    reportedBy: "Citizen #2903",
    imageUrl: "https://images.unsplash.com/photo-1565117804671-b0dd29ed1965?w=800&q=80",
    timeline: [
      { status: "reported", label: "Reported", timestamp: "March 20, 2026 at 2:22 PM", completed: true },
      { status: "acknowledged", label: "Acknowledged", timestamp: "March 21, 2026 at 10:15 AM", department: "BESCOM", completed: true },
      { status: "in_progress", label: "In Progress", timestamp: "March 23, 2026 at 9:00 AM", completed: true },
      { status: "resolved", label: "Resolved", timestamp: "March 24, 2026 at 4:30 PM", completed: true },
    ],
  },
  {
    id: "CR-20264012",
    title: "Illegal garbage dump near Whitefield Main Road school",
    description:
      "An illegal garbage dump has formed on the side of Whitefield Main Road near the government school. The dump contains construction debris, household waste, and plastic. It is a public health hazard and children pass by this area every day.",
    category: "Illegal Dumping & Waste",
    categoryIcon: "🗑️",
    status: "acknowledged",
    severity: "high",
    location: "Whitefield Main Road",
    ward: "Ward 84 - Whitefield",
    city: "Bengaluru",
    lat: 12.9698,
    lng: 77.7500,
    upvotes: 89,
    comments: 24,
    reportedAt: "2026-04-01T08:45:00",
    reportedBy: "Citizen #1047",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    timeline: [
      { status: "reported", label: "Reported", timestamp: "April 1, 2026 at 8:45 AM", completed: true },
      { status: "acknowledged", label: "Acknowledged", timestamp: "April 2, 2026 at 3:00 PM", department: "BBMP Solid Waste", completed: true, current: true },
      { status: "in_progress", label: "In Progress", timestamp: "Pending", completed: false },
      { status: "resolved", label: "Resolved", timestamp: "Pending", completed: false },
    ],
  },
  {
    id: "CR-20264078",
    title: "Severe waterlogging at HSR Layout Sector 2 after rainfall",
    description:
      "The drainage system near Sector 2 main road is completely blocked. After every rain, water stands for 2–3 days making the road impassable. Multiple vehicles have broken down.",
    category: "Waterlogging & Drainage",
    categoryIcon: "🌊",
    status: "open",
    severity: "emergency",
    location: "HSR Layout Sector 2",
    ward: "Ward 75 - HSR Layout",
    city: "Bengaluru",
    lat: 12.9116,
    lng: 77.6389,
    upvotes: 134,
    comments: 42,
    reportedAt: "2026-04-08T07:30:00",
    reportedBy: "Citizen #6632",
    imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    timeline: [
      { status: "reported", label: "Reported", timestamp: "April 8, 2026 at 7:30 AM", completed: true, current: true },
      { status: "acknowledged", label: "Acknowledged", timestamp: "Pending", completed: false },
      { status: "in_progress", label: "In Progress", timestamp: "Pending", completed: false },
      { status: "resolved", label: "Resolved", timestamp: "Pending", completed: false },
    ],
  },
  {
    id: "CR-20263799",
    title: "Fallen tree blocking JP Nagar 6th Phase main road",
    description:
      "A large tree has fallen across the main road in JP Nagar 6th Phase near the park. The road is completely blocked and emergency vehicles cannot pass. Immediate clearance required.",
    category: "Fallen Trees & Debris",
    categoryIcon: "🌳",
    status: "resolved",
    severity: "emergency",
    location: "JP Nagar 6th Phase",
    ward: "Ward 64 - JP Nagar",
    city: "Bengaluru",
    lat: 12.9010,
    lng: 77.5900,
    upvotes: 67,
    comments: 18,
    reportedAt: "2026-04-06T06:15:00",
    reportedBy: "Citizen #3391",
    imageUrl: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80",
    timeline: [
      { status: "reported", label: "Reported", timestamp: "April 6, 2026 at 6:15 AM", completed: true },
      { status: "acknowledged", label: "Acknowledged", timestamp: "April 6, 2026 at 7:45 AM", department: "BBMP Parks Dept.", completed: true },
      { status: "in_progress", label: "In Progress", timestamp: "April 6, 2026 at 9:00 AM", completed: true },
      { status: "resolved", label: "Resolved", timestamp: "April 6, 2026 at 11:30 AM", completed: true },
    ],
  },
  {
    id: "CR-20263654",
    title: "Broken and missing tiles on footpath — Jayanagar 4th Block",
    description:
      "The footpath on the main road through Jayanagar 4th Block has extensive damage — missing tiles, exposed rebar, and uneven surfaces making it dangerous for elderly citizens and children.",
    category: "Broken Pavements",
    categoryIcon: "🚧",
    status: "in_progress",
    severity: "medium",
    location: "Jayanagar 4th Block",
    ward: "Ward 60 - Jayanagar",
    city: "Bengaluru",
    lat: 12.9250,
    lng: 77.5938,
    upvotes: 34,
    comments: 8,
    reportedAt: "2026-03-28T10:00:00",
    reportedBy: "Citizen #5518",
    imageUrl: "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=800&q=80",
    timeline: [
      { status: "reported", label: "Reported", timestamp: "March 28, 2026 at 10:00 AM", completed: true },
      { status: "acknowledged", label: "Acknowledged", timestamp: "March 29, 2026 at 2:15 PM", department: "BBMP Roads", completed: true },
      { status: "in_progress", label: "In Progress", timestamp: "April 4, 2026 at 8:00 AM", completed: true, current: true },
      { status: "resolved", label: "Resolved", timestamp: "Pending", completed: false },
    ],
  },
  {
    id: "CR-20264100",
    title: "Burst water pipe — Rajajinagar 3rd Block, water wasting for days",
    description:
      "A BWSSB water supply pipe has burst on the main road of Rajajinagar 3rd Block. Water has been flowing continuously for 4 days. Significant water wastage and road damage.",
    category: "Water Supply Issues",
    categoryIcon: "🚰",
    status: "acknowledged",
    severity: "high",
    location: "Rajajinagar 3rd Block",
    ward: "Ward 24 - Rajajinagar",
    city: "Bengaluru",
    lat: 13.0002,
    lng: 77.5558,
    upvotes: 58,
    comments: 15,
    reportedAt: "2026-04-05T11:20:00",
    reportedBy: "Citizen #7723",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    timeline: [
      { status: "reported", label: "Reported", timestamp: "April 5, 2026 at 11:20 AM", completed: true },
      { status: "acknowledged", label: "Acknowledged", timestamp: "April 5, 2026 at 4:45 PM", department: "BWSSB", completed: true, current: true },
      { status: "in_progress", label: "In Progress", timestamp: "Pending", completed: false },
      { status: "resolved", label: "Resolved", timestamp: "Pending", completed: false },
    ],
  },
  {
    id: "CR-20263500",
    title: "Stray dog pack near St. Mary's School, Malleswaram",
    description:
      "A pack of 8–10 aggressive stray dogs is reported near St. Mary's School on 11th Cross, Malleswaram. Multiple children have been chased. Immediate animal control intervention required.",
    category: "Stray Animal Hazards",
    categoryIcon: "🐕",
    status: "resolved",
    severity: "high",
    location: "11th Cross, Malleswaram",
    ward: "Ward 28 - Malleswaram",
    city: "Bengaluru",
    lat: 13.0035,
    lng: 77.5660,
    upvotes: 112,
    comments: 31,
    reportedAt: "2026-03-25T08:00:00",
    reportedBy: "Citizen #2211",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    timeline: [
      { status: "reported", label: "Reported", timestamp: "March 25, 2026 at 8:00 AM", completed: true },
      { status: "acknowledged", label: "Acknowledged", timestamp: "March 25, 2026 at 10:30 AM", department: "BBMP Animal Welfare", completed: true },
      { status: "in_progress", label: "In Progress", timestamp: "March 26, 2026 at 9:00 AM", completed: true },
      { status: "resolved", label: "Resolved", timestamp: "March 26, 2026 at 3:00 PM", completed: true },
    ],
  },
  {
    id: "CR-20263888",
    title: "Vandalism and graffiti on heritage wall — Shivajinagar",
    description:
      "The heritage compound wall adjacent to the Shivajinagar clock tower has been defaced with large spray-painted graffiti. This wall is a listed heritage structure and needs immediate restoration.",
    category: "Graffiti & Vandalism",
    categoryIcon: "🎨",
    status: "open",
    severity: "low",
    location: "Shivajinagar Clock Tower",
    ward: "Ward 36 - Shivajinagar",
    city: "Bengaluru",
    lat: 12.9850,
    lng: 77.6006,
    upvotes: 19,
    comments: 3,
    reportedAt: "2026-04-07T16:30:00",
    reportedBy: "Citizen #8844",
    imageUrl: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?w=800&q=80",
    timeline: [
      { status: "reported", label: "Reported", timestamp: "April 7, 2026 at 4:30 PM", completed: true, current: true },
      { status: "acknowledged", label: "Acknowledged", timestamp: "Pending", completed: false },
      { status: "in_progress", label: "In Progress", timestamp: "Pending", completed: false },
      { status: "resolved", label: "Resolved", timestamp: "Pending", completed: false },
    ],
  },
  {
    id: "CR-20264200",
    title: "Broken playground equipment in Cubbon Park children's area",
    description:
      "Three swings and a climbing frame in the children's play area of Cubbon Park have broken structural components. A child was injured last week. Equipment needs repair or replacement urgently.",
    category: "Parks & Public Spaces",
    categoryIcon: "🌿",
    status: "in_progress",
    severity: "high",
    location: "Cubbon Park, Children's Area",
    ward: "Ward 37 - Cubbon Park",
    city: "Bengaluru",
    lat: 12.9763,
    lng: 77.5929,
    upvotes: 76,
    comments: 22,
    reportedAt: "2026-03-31T11:00:00",
    reportedBy: "Citizen #3394",
    imageUrl: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800&q=80",
    timeline: [
      { status: "reported", label: "Reported", timestamp: "March 31, 2026 at 11:00 AM", completed: true },
      { status: "acknowledged", label: "Acknowledged", timestamp: "April 1, 2026 at 9:00 AM", department: "BBMP Parks & Gardens", completed: true },
      { status: "in_progress", label: "In Progress", timestamp: "April 5, 2026 at 10:00 AM", completed: true, current: true },
      { status: "resolved", label: "Resolved", timestamp: "Pending", completed: false },
    ],
  },
  {
    id: "CR-20264311",
    title: "Bus shelter roof collapsed at Majestic Bus Stand stop 12",
    description:
      "The roof of bus shelter #12 at Majestic Bus Stand has partially collapsed. Commuters are exposed to sun and rain. The metal structure is sharp and poses an injury risk.",
    category: "Public Transit Problems",
    categoryIcon: "🚌",
    status: "open",
    severity: "medium",
    location: "Majestic Bus Stand, Stop 12",
    ward: "Ward 54 - Majestic",
    city: "Bengaluru",
    lat: 12.9773,
    lng: 77.5713,
    upvotes: 45,
    comments: 9,
    reportedAt: "2026-04-08T08:20:00",
    reportedBy: "Citizen #1293",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    timeline: [
      { status: "reported", label: "Reported", timestamp: "April 8, 2026 at 8:20 AM", completed: true, current: true },
      { status: "acknowledged", label: "Acknowledged", timestamp: "Pending", completed: false },
      { status: "in_progress", label: "In Progress", timestamp: "Pending", completed: false },
      { status: "resolved", label: "Resolved", timestamp: "Pending", completed: false },
    ],
  },
  {
    id: "CR-20264089",
    title: "Encroachment on footpath — Commercial Street marketplace",
    description:
      "Vendors have illegally encroached on the entire footpath along Commercial Street, forcing pedestrians onto the road. The encroachment has been ongoing for 6 months.",
    category: "Encroachment & Illegal Structures",
    categoryIcon: "🏚️",
    status: "acknowledged",
    severity: "medium",
    location: "Commercial Street",
    ward: "Ward 40 - Shivajinagar",
    city: "Bengaluru",
    lat: 12.9810,
    lng: 77.6074,
    upvotes: 88,
    comments: 33,
    reportedAt: "2026-04-02T09:00:00",
    reportedBy: "Citizen #4420",
    imageUrl: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&q=80",
    timeline: [
      { status: "reported", label: "Reported", timestamp: "April 2, 2026 at 9:00 AM", completed: true },
      { status: "acknowledged", label: "Acknowledged", timestamp: "April 3, 2026 at 11:00 AM", department: "BBMP Enforcement", completed: true, current: true },
      { status: "in_progress", label: "In Progress", timestamp: "Pending", completed: false },
      { status: "resolved", label: "Resolved", timestamp: "Pending", completed: false },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Kavitha Nair",
    city: "Bengaluru, Karnataka",
    rating: 5,
    service: "Potholes & Road Damage",
    quote:
      "The pothole outside my apartment had been there for eight months. I reported it on CivicPulse on a Tuesday. By the following Friday, the road crew had filled it. I couldn't believe it actually worked.",
    avatar: "KN",
  },
  {
    id: 2,
    name: "Ramesh Gupta",
    city: "Pune, Maharashtra",
    rating: 5,
    service: "Street Light Outages",
    quote:
      "Our lane had been dark for weeks after the monsoon. Within 4 days of my report, the MSEDCL team came and replaced the fitting. The status updates were really reassuring.",
    avatar: "RG",
  },
  {
    id: 3,
    name: "Ananya Srivastava",
    city: "Hyderabad, Telangana",
    rating: 4,
    service: "Waterlogging & Drainage",
    quote:
      "The drain near my colony floods every single monsoon. This time with CivicPulse, there were 47 upvotes on my report. It finally got escalated.",
    avatar: "AS",
  },
  {
    id: 4,
    name: "Suresh Balakrishnan",
    city: "Chennai, Tamil Nadu",
    rating: 5,
    service: "Fallen Trees & Debris",
    quote:
      "After the cyclone, a huge tree fell across our road and no one responded to our calls to the municipality. I raised a report with photos on CivicPulse and they cleared it the next morning.",
    avatar: "SB",
  },
  {
    id: 5,
    name: "Deepa Menon",
    city: "Kochi, Kerala",
    rating: 5,
    service: "Broken Pavements",
    quote:
      "My mother is elderly and uses a walker. The cracked footpath near our home was genuinely dangerous. I reported it with a photo. Two weeks later, the tiles were replaced.",
    avatar: "DM",
  },
  {
    id: 6,
    name: "Vikram Chowdhury",
    city: "Kolkata, West Bengal",
    rating: 4,
    service: "Illegal Dumping & Waste",
    quote:
      "There was an illegal garbage dump growing next to a school. 23 neighbours upvoted the same issue. The KMDA cleared it within 10 days. The upvote feature is brilliant.",
    avatar: "VC",
  },
];

export const categories = [
  { icon: "🕳️", name: "Potholes & Road Damage", description: "Cracked asphalt, dangerous potholes, road cave-ins.", avgDays: "7–14 days", badge: "Most Reported", badgeColor: "amber" },
  { icon: "💡", name: "Street Light Outages", description: "Non-functional public lighting on roads, parks, and alleys.", avgDays: "3–7 days", badge: "Quick Fix", badgeColor: "green" },
  { icon: "🗑️", name: "Illegal Dumping & Waste", description: "Unauthorised garbage disposal at public spaces.", avgDays: "5–10 days", badge: "High Impact", badgeColor: "red" },
  { icon: "🌊", name: "Waterlogging & Drainage", description: "Blocked drains, standing water after rain.", avgDays: "10–21 days", badge: "Monsoon Alert", badgeColor: "blue" },
  { icon: "🌳", name: "Fallen Trees & Debris", description: "Storm-damaged trees blocking roads or posing injury risk.", avgDays: "1–3 days", badge: "Urgent", badgeColor: "red" },
  { icon: "🚧", name: "Broken Pavements", description: "Damaged footpaths, missing tiles, exposed rebar.", avgDays: "14–30 days", badge: "Pedestrian Safety", badgeColor: "amber" },
  { icon: "🚰", name: "Water Supply Issues", description: "Burst pipes, water leakage, supply disruptions.", avgDays: "3–10 days", badge: "Utility", badgeColor: "blue" },
  { icon: "🏚️", name: "Encroachment", description: "Unauthorised construction or encroachment on public land.", avgDays: "21–45 days", badge: "Legal Review", badgeColor: "slate" },
  { icon: "🐕", name: "Stray Animal Hazards", description: "Dangerous stray animal sightings near schools, hospitals.", avgDays: "2–5 days", badge: "Safety", badgeColor: "red" },
  { icon: "🎨", name: "Graffiti & Vandalism", description: "Defacement of public property and monuments.", avgDays: "7–14 days", badge: "Appearance", badgeColor: "slate" },
  { icon: "🚌", name: "Public Transit Problems", description: "Bus shelter damage, missing timetables, unsafe stops.", avgDays: "5–10 days", badge: "Commuter", badgeColor: "blue" },
  { icon: "🌿", name: "Parks & Public Spaces", description: "Broken benches, damaged playground equipment.", avgDays: "10–20 days", badge: "Community", badgeColor: "green" },
];

export const stats = {
  totalResolved: 12847,
  citiesActive: 3,
  totalReports: 18293,
  avgResolutionDays: 8.4,
  subscribers: 18400,
};
