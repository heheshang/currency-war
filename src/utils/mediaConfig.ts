export interface MediaResource {
  id: string;
  type: "image" | "video";
  src: string;
  alt?: string;
  source?: string;
  license?: string;
}

export interface KenBurnsConfig {
  panDirection?: "left" | "right" | "up" | "down" | "zoom-in" | "zoom-out";
  duration?: number;
  intensity?: "subtle" | "moderate" | "dramatic";
}

export interface LayerConfig {
  opacity?: number;
  blendMode?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten";
  filter?: "none" | "grayscale" | "sepia" | "vintage" | "dramatic";
}

export const IMAGE_BASE = "/assets/images";
export const VIDEO_BASE = "/assets/videos";

export const mediaResources: Record<string, MediaResource> = {
  // Episode 01: 序言 - 中国经济航母
  "ep01-gold-ancient": {
    id: "ep01-gold-ancient",
    type: "image",
    src: `${IMAGE_BASE}/ep01/gold-ancient.jpg`,
    alt: "Ancient gold coins and marketplace",
  },
  "ep01-china-rise": {
    id: "ep01-china-rise",
    type: "image",
    src: `${IMAGE_BASE}/ep01/china-economic-rise.jpg`,
    alt: "China's economic rise visualization",
  },
  "ep01-currency-war": {
    id: "ep01-currency-war",
    type: "image",
    src: `${IMAGE_BASE}/ep01/financial-war.jpg`,
    alt: "Financial warfare concept",
  },
  "ep01-inflation": {
    id: "ep01-inflation",
    type: "image",
    src: `${IMAGE_BASE}/ep01/inflation-graph.jpg`,
    alt: "Inflation timeline graph",
  },

  // Episode 02: 罗斯柴尔德家族
  "ep02-rothschild-portrait": {
    id: "ep02-rothschild-portrait",
    type: "image",
    src: `${IMAGE_BASE}/ep02/ep02-rothschild-portrait.jpg`,
    alt: "Rothschild family portrait",
  },
  "ep02-waterloo-battle": {
    id: "ep02-waterloo-battle",
    type: "image",
    src: `${IMAGE_BASE}/ep02/ep02-waterloo-battle.jpg`,
    alt: "Battle of Waterloo painting",
  },
  "ep02-london-exchange": {
    id: "ep02-london-exchange",
    type: "image",
    src: `${IMAGE_BASE}/ep02/ep02-london-exchange.jpg`,
    alt: "19th century London Stock Exchange",
  },
  "ep02-europe-map": {
    id: "ep02-europe-map",
    type: "image",
    src: `${IMAGE_BASE}/ep02/ep02-europe-map.jpg`,
    alt: "19th century Europe map",
  },

  // Episode 03: 美国独立战争与银行
  "ep03-colonial-america": {
    id: "ep03-colonial-america",
    type: "image",
    src: `${IMAGE_BASE}/ep03/ep03-colonial-america.jpg`,
    alt: "Colonial America",
  },
  "ep03-lincoln-portrait": {
    id: "ep03-lincoln-portrait",
    type: "image",
    src: `${IMAGE_BASE}/ep03/ep03-lincoln-portrait.jpg`,
    alt: "Abraham Lincoln portrait",
  },
  "ep03-civil-war": {
    id: "ep03-civil-war",
    type: "image",
    src: `${IMAGE_BASE}/ep03/ep03-civil-war.jpg`,
    alt: "American Civil War",
  },

  // Episode 04: 美联储的诞生
  "ep04-jekyll-island": {
    id: "ep04-jekyll-island",
    type: "image",
    src: `${IMAGE_BASE}/ep04/ep04-jekyll-island.jpg`,
    alt: "Jekyll Island Club",
  },
  "ep04-fed-building": {
    id: "ep04-fed-building",
    type: "image",
    src: `${IMAGE_BASE}/ep04/ep04-fed-building.jpg`,
    alt: "Federal Reserve Building",
  },
  "ep04-wilson-portrait": {
    id: "ep04-wilson-portrait",
    type: "image",
    src: `${IMAGE_BASE}/ep04/ep04-wilson-portrait.jpg`,
    alt: "Woodrow Wilson portrait",
  },

  // Episode 05: 一战与大萧条
  "ep05-ww1": {
    id: "ep05-ww1",
    type: "image",
    src: `${IMAGE_BASE}/ep05/ep05-ww1.jpg`,
    alt: "World War I",
  },
  "ep05-crash-1929": {
    id: "ep05-crash-1929",
    type: "image",
    src: `${IMAGE_BASE}/ep05/ep05-crash-1929.jpg`,
    alt: "1929 Stock Market Crash",
  },
  "ep05-great-depression": {
    id: "ep05-great-depression",
    type: "image",
    src: `${IMAGE_BASE}/ep05/ep05-great-depression.jpg`,
    alt: "Great Depression",
  },

  // Episode 06: 国际银行家组织
  "ep06-bis-building": {
    id: "ep06-bis-building",
    type: "image",
    src: `${IMAGE_BASE}/ep06/ep06-bis-building.jpg`,
    alt: "Bank for International Settlements",
  },
  "ep06-imf": {
    id: "ep06-imf",
    type: "image",
    src: `${IMAGE_BASE}/ep06/ep06-imf.jpg`,
    alt: "IMF Headquarters",
  },
  "ep06-bilderberg": {
    id: "ep06-bilderberg",
    type: "image",
    src: `${IMAGE_BASE}/ep06/ep06-bilderberg.jpg`,
    alt: "Bilderberg Conference",
  },
  "ep06-cfr": {
    id: "ep06-cfr",
    type: "image",
    src: `${IMAGE_BASE}/ep06/ep06-cfr.jpg`,
    alt: "Council on Foreign Relations",
  },
  "ep06-trilateral": {
    id: "ep06-trilateral",
    type: "image",
    src: `${IMAGE_BASE}/ep06/ep06-trilateral.jpg`,
    alt: "Trilateral Commission",
  },

  // Episode 07: 二战与金融
  "ep07-ww2": {
    id: "ep07-ww2",
    type: "image",
    src: `${IMAGE_BASE}/ep07/ep07-ww2.jpg`,
    alt: "World War II",
  },
  "ep07-bretton-woods": {
    id: "ep07-bretton-woods",
    type: "image",
    src: `${IMAGE_BASE}/ep07/ep07-bretton-woods.jpg`,
    alt: "Bretton Woods Conference 1944",
  },
  "ep07-war-bonds": {
    id: "ep07-war-bonds",
    type: "image",
    src: `${IMAGE_BASE}/ep07/ep07-war-bonds.jpg`,
    alt: "War Bonds Poster",
  },
  "ep07-elite-meeting": {
    id: "ep07-elite-meeting",
    type: "image",
    src: `${IMAGE_BASE}/ep07/ep07-elite-meeting.jpg`,
    alt: "Elite Meeting",
  },

  // Episode 08: 布雷顿森林体系
  "ep08-bretton-woods": {
    id: "ep08-bretton-woods",
    type: "image",
    src: `${IMAGE_BASE}/ep08/ep08-bretton-woods.jpg`,
    alt: "Bretton Woods Conference",
  },
  "ep08-nixon": {
    id: "ep08-nixon",
    type: "image",
    src: `${IMAGE_BASE}/ep08/ep08-nixon.jpg`,
    alt: "Nixon 1971 Gold Shock",
  },
  "ep08-gold-standard": {
    id: "ep08-gold-standard",
    type: "image",
    src: `${IMAGE_BASE}/ep08/ep08-gold-standard.jpg`,
    alt: "Gold Standard",
  },
  "ep08-kennedy": {
    id: "ep08-kennedy",
    type: "image",
    src: `${IMAGE_BASE}/ep08/ep08-kennedy.jpg`,
    alt: "JFK and Silver Certificates",
  },
  "ep08-petrodollar": {
    id: "ep08-petrodollar",
    type: "image",
    src: `${IMAGE_BASE}/ep08/ep08-petrodollar.jpg`,
    alt: "Petrodollar System",
  },
  "ep08-silver": {
    id: "ep08-silver",
    type: "image",
    src: `${IMAGE_BASE}/ep08/ep08-silver.jpg`,
    alt: "Silver Certificates",
  },

  // Episode 09: 亚洲金融风暴
  "ep09-asian-crisis": {
    id: "ep09-asian-crisis",
    type: "image",
    src: `${IMAGE_BASE}/ep09/ep09-asian-crisis.jpg`,
    alt: "1997 Asian Financial Crisis",
  },
  "ep09-soros": {
    id: "ep09-soros",
    type: "image",
    src: `${IMAGE_BASE}/ep09/ep09-soros.jpg`,
    alt: "George Soros",
  },
  "ep09-oil-crisis": {
    id: "ep09-oil-crisis",
    type: "image",
    src: `${IMAGE_BASE}/ep09/ep09-oil-crisis.jpg`,
    alt: "1973 Oil Crisis",
  },
  "ep09-japan-bubble": {
    id: "ep09-japan-bubble",
    type: "image",
    src: `${IMAGE_BASE}/ep09/ep09-japan-bubble.jpg`,
    alt: "Japan Bubble Economy 1980s",
  },
  "ep09-volcker": {
    id: "ep09-volcker",
    type: "image",
    src: `${IMAGE_BASE}/ep09/ep09-volcker.jpg`,
    alt: "Paul Volcker",
  },
  "ep09-hong-kong": {
    id: "ep09-hong-kong",
    type: "image",
    src: `${IMAGE_BASE}/ep09/ep09-hong-kong.jpg`,
    alt: "Hong Kong 1997",
  },

  // Episode 10: 2008金融危机
  "ep10-financial-crisis-2008": {
    id: "ep10-financial-crisis-2008",
    type: "image",
    src: `${IMAGE_BASE}/ep10/ep10-financial-crisis-2008.jpg`,
    alt: "2008 Financial Crisis",
  },
  "ep10-lehman": {
    id: "ep10-lehman",
    type: "image",
    src: `${IMAGE_BASE}/ep10/ep10-lehman.jpg`,
    alt: "Lehman Brothers Collapse",
  },
  "ep10-housing-bubble": {
    id: "ep10-housing-bubble",
    type: "image",
    src: `${IMAGE_BASE}/ep10/ep10-housing-bubble.jpg`,
    alt: "Housing Bubble",
  },
  "ep10-derivatives": {
    id: "ep10-derivatives",
    type: "image",
    src: `${IMAGE_BASE}/ep10/ep10-derivatives.jpg`,
    alt: "Derivatives Market",
  },
  "ep10-gold-price": {
    id: "ep10-gold-price",
    type: "image",
    src: `${IMAGE_BASE}/ep10/ep10-gold-price.jpg`,
    alt: "Gold Price Chart",
  },
  "ep10-debt": {
    id: "ep10-debt",
    type: "image",
    src: `${IMAGE_BASE}/ep10/ep10-debt.jpg`,
    alt: "US Debt",
  },

  // Episode 11: 未来货币
  "ep11-future": {
    id: "ep11-future",
    type: "image",
    src: `${IMAGE_BASE}/ep11/ep11-future.jpg`,
    alt: "Digital currency future",
  },
  "ep11-cbdc": {
    id: "ep11-cbdc",
    type: "image",
    src: `${IMAGE_BASE}/ep11/ep11-cbdc.jpg`,
    alt: "Central Bank Digital Currency",
  },
  "ep11-gold-silver": {
    id: "ep11-gold-silver",
    type: "image",
    src: `${IMAGE_BASE}/ep11/ep11-gold-silver.jpg`,
    alt: "Gold and Silver",
  },
  "ep11-world-reserve": {
    id: "ep11-world-reserve",
    type: "image",
    src: `${IMAGE_BASE}/ep11/ep11-world-reserve.jpg`,
    alt: "World Reserve Currency",
  },
  "ep11-financial-war": {
    id: "ep11-financial-war",
    type: "image",
    src: `${IMAGE_BASE}/ep11/ep11-financial-war.jpg`,
    alt: "Financial Warfare",
  },
};

export function getMediaResource(id: string): MediaResource | undefined {
  return mediaResources[id];
}

export function getMediaResourcesByEpisode(episode: string): MediaResource[] {
  const prefix = `ep${episode.padStart(2, "0")}`;
  return Object.values(mediaResources).filter((r) => r.id.startsWith(prefix));
}
