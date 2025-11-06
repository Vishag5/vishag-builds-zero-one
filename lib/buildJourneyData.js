// lib/buildJourneyData.js
export const buildJourney = [
  {
    day: 9,
    date: "2025-10-22",
    title: "Day 9 – PWA to IOS Migration",
    description: null,
    assetEmbed: "https://www.linkedin.com/posts/vishagt_buildinpublic-adhdapp-rhythmapp-activity-7386863593222430723-zpwF?utm_source=share&utm_medium=member_desktop&rcm=ACoAACDs0h0BveGQZrGBlsHQ_U2oSFfYYCxkrNU",
    assetType: "link",
    assetUpload: null,
    isEditable: true,
    mediaAssets: [
      {
        id: "day9-feedback-1",
        type: "image",
        url: "/timeline/Day9.JPG",
        caption: "User feedback on Reset functionality and RAIN method"
      }
    ]
  },
  {
    day: 8,
    date: "2025-10-21",
    title: "Day 8 – Feature Prioritization",
    description: `// placeholder description…`,
    assetEmbed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7386494321312612352?collapsed=1" height="872" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    assetType: "iframe",
    assetUpload: null,
    isEditable: true,
    mediaAssets: []
  },
  {
    day: 7,
    date: "2025-10-20",
    title: "Day 7 – Beta Testing",
    description: null,
    assetEmbed: "https://www.linkedin.com/posts/vishagt_buildinpublic-adhdapp-womenintech-activity-7386137454707146752-nhDl?utm_source=share&utm_medium=member_desktop&rcm=ACoAACDs0h0BveGQZrGBlsHQ_U2oSFfYYCxkrNU",
    assetType: "link",
    assetUpload: null,
    isEditable: true,
    mediaAssets: [
      {
        id: "day7-image-1",
        type: "image",
        url: "/timeline/day 7.JPG",
        caption: "Beta testing feedback from target users"
      }
    ]
  },
  {
    day: 6,
    date: "2025-10-19",
    title: "Day 6 – Meet \"RHYTHM\"",
    description: ``,
    assetEmbed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7385762369311817728?collapsed=1" height="541" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    assetType: "iframe",
    assetUpload: null,
    isEditable: true,
    mediaAssets: []
  },
  {
    day: 5,
    date: "2025-10-18",
    title: "Day 5 – Shipped MVP at ADHD Community Event",
    description: null,
    assetEmbed: "https://www.linkedin.com/posts/vishagt_deltaresidency-buildinpublic-adhd-activity-7385413005569638400-pVlM?utm_source=share&utm_medium=member_desktop&rcm=ACoAACDs0h0BveGQZrGBlsHQ_U2oSFfYYCxkrNU",
    assetType: "link",
    assetUpload: null,
    isEditable: true,
    mediaAssets: [
      {
        id: "day5-image-1",
        type: "image",
        url: "/timeline/Day 5.JPG",
        caption: "MVP 1 testing at ADHD Koottuthaalam"
      }
    ]
  },
  {
    day: 4,
    date: "2025-10-17",
    title: "Day 4 – Early users on waitlist",
    description: null,
    assetEmbed: "https://www.linkedin.com/posts/vishagt_buildinpublic-adhd-deltaresidency-activity-7385022481595809792-tM1i?utm_source=share&utm_medium=member_desktop&rcm=ACoAACDs0h0BveGQZrGBlsHQ_U2oSFfYYCxkrNU",
    assetType: "link",
    assetUpload: null,
    isEditable: true,
    mediaAssets: [
      {
        id: "day4-image-1",
        type: "image",
        url: "/timeline/Day 4.JPG",
        caption: "Building the MVP - Early user feedback and feature planning"
      }
    ]
  },
  {
    day: 3,
    date: "2025-10-16",
    title: "Day 3 – Created Landing page ",
    description: ``,
    assetEmbed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7384672881252896768?collapsed=1" height="495" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    assetType: "iframe",
    assetUpload: null,
    isEditable: true,
    mediaAssets: []
  },
  {
    day: 2,
    date: "2025-10-15",
    title: "Day 2 – Market Research + Competitor Landscaping",
    description: `  
Spent the day analyzing existing ADHD apps and habit-building tools.  
Key findings:  
• Most apps are too rigid for neurodivergent users  
• Need for more personalized approaches  
• Opportunity in gentle, supportive UX design  
The market gap is clear.`,
    assetEmbed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7384218136725807105?collapsed=1" height="266" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    assetType: "iframe",
    assetUpload: null,
    isEditable: true,
    mediaAssets: []
  },
  {
    day: 1,
    date: "2025-10-14",
    title: "Day 1 – Delta Residency Kickoff",
    description: `Day 1 — Delta Residency Challenge 🚀  
Accepted into Sam Altman-backed Delta Residency program.  
Committed to building Rhythm in public over 21 days.  
The journey begins with a simple mission: help ADHD users build consistent habits through gentle, supportive technology.  
Excited to share this journey with you all!`,
    assetEmbed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7383566971826597888?collapsed=1" height="673" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    assetType: "iframe",
    assetUpload: null,
    isEditable: true,
    mediaAssets: []
  }
];

// --- Adding capability to extend:
export const addBuildJourneyEntry = (entry) => {
  buildJourney.push(entry);
};

// --- Helper functions for media management:
export const addMediaAsset = (day, mediaAsset) => {
  const entry = buildJourney.find(item => item.day === day);
  if (entry) {
    entry.mediaAssets.push(mediaAsset);
  }
};

export const removeMediaAsset = (day, assetId) => {
  const entry = buildJourney.find(item => item.day === day);
  if (entry) {
    entry.mediaAssets = entry.mediaAssets.filter(asset => asset.id !== assetId);
  }
};

export const updateDescription = (day, newDescription) => {
  const entry = buildJourney.find(item => item.day === day);
  if (entry && entry.isEditable) {
    entry.description = newDescription;
  }
};