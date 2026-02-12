/**
 * Audio Configuration for Currency Wars Documentary
 *
 * Centralized audio management for background music (BGM) and sound effects (SFX)
 * across all episodes and scenes.
 */

export type AudioAsset = {
  src: string;
  volume?: number; // 0.0 to 1.0
  loop?: boolean;
};

export type EpisodeAudioConfig = {
  bgm?: AudioAsset; // Background music for entire episode
  scenes?: {
    [sceneName: string]: {
      bgm?: AudioAsset; // Scene-specific BGM
      sfx?: AudioAsset[]; // Scene-specific sound effects
    };
  };
};

/**
 * Full audio configuration for all episodes
 */
export const AUDIO_CONFIG: Record<string, EpisodeAudioConfig> = {
  Episode01: {
    bgm: {
      src: "/assets/audio/bgm/mysterious-01.mp3",
      volume: 0.15,
      loop: true,
    },
    scenes: {
      AncientMarketScene: {
        bgm: {
          src: "/assets/audio/bgm/tension-crisis.mp3",
          volume: 0.2,
          loop: true,
        },
      },
      CoinMintingMontage: {
        sfx: [
          {
            src: "/assets/audio/sfx/coins-clinking.mp3",
            volume: 0.3,
          },
        ],
      },
    },
  },

  Episode02: {
    bgm: {
      src: "/assets/audio/bgm/suspense-dark.mp3",
      volume: 0.12,
      loop: true,
    },
    scenes: {
      BankOfEnglandScene: {
        bgm: {
          src: "/assets/audio/bgm/mysterious-01.mp3",
          volume: 0.15,
          loop: true,
        },
      },
      NapoleonWarRoom: {
        bgm: {
          src: "/assets/audio/bgm/dramatic-trailer.mp3",
          volume: 0.18,
          loop: true,
        },
      },
    },
  },

  Episode03: {
    bgm: {
      src: "/assets/audio/bgm/mysterious-01.mp3",
      volume: 0.15,
      loop: true,
    },
    scenes: {
      FedCreationScene: {
        bgm: {
          src: "/assets/audio/bgm/suspense-dark.mp3",
          volume: 0.12,
          loop: true,
        },
      },
      JekyllIslandMeeting: {
        bgm: {
          src: "/assets/audio/bgm/mysterious-01.mp3",
          volume: 0.12,
          loop: true,
        },
      },
    },
  },

  Episode04: {
    bgm: {
      src: "/assets/audio/bgm/tension-crisis.mp3",
      volume: 0.15,
      loop: true,
    },
    scenes: {
      WeimarInflationScene: {
        bgm: {
          src: "/assets/audio/bgm/suspense-dark.mp3",
          volume: 0.18,
          loop: true,
        },
      },
      MoneyPrintingPress: {
        sfx: [
          {
            src: "/assets/audio/sfx/coins-clinking.mp3",
            volume: 0.25,
          },
        ],
      },
    },
  },

  Episode05: {
    bgm: {
      src: "/assets/audio/bgm/dramatic-trailer.mp3",
      volume: 0.12,
      loop: true,
    },
    scenes: {
      StrongWartimeFedScene: {
        bgm: {
          src: "/assets/audio/bgm/dramatic-01.mp3",
          volume: 0.15,
          loop: true,
        },
      },
      GoldConfiscationScene: {
        bgm: {
          src: "/assets/audio/bgm/suspense-dark.mp3",
          volume: 0.12,
          loop: true,
        },
      },
      BrettonWoodsScene: {
        bgm: {
          src: "/assets/audio/bgm/mysterious-01.mp3",
          volume: 0.15,
          loop: true,
        },
      },
    },
  },

  Episode06: {
    bgm: {
      src: "/assets/audio/bgm/tension-crisis.mp3",
      volume: 0.12,
      loop: true,
    },
    scenes: {
      NixonShockScene: {
        bgm: {
          src: "/assets/audio/bgm/dramatic-trailer.mp3",
          volume: 0.15,
          loop: true,
        },
      },
      PetrodollarBirth: {
        bgm: {
          src: "/assets/audio/bgm/suspense-dark.mp3",
          volume: 0.12,
          loop: true,
        },
      },
    },
  },

  Episode07: {
    bgm: {
      src: "/assets/audio/bgm/tension-crisis.mp3",
      volume: 0.15,
      loop: true,
    },
    scenes: {
      DebtSpiralScene: {
        bgm: {
          src: "/assets/audio/bgm/dramatic-trailer.mp3",
          volume: 0.18,
          loop: true,
        },
      },
    },
  },

  Episode08: {
    bgm: {
      src: "/assets/audio/bgm/tension-crisis.mp3",
      volume: 0.12,
      loop: true,
    },
    scenes: {
      FinancialCrisis2008: {
        bgm: {
          src: "/assets/audio/bgm/dramatic-trailer.mp3",
          volume: 0.15,
          loop: true,
        },
      },
    },
  },

  Episode09: {
    bgm: {
      src: "/assets/audio/bgm/mysterious-01.mp3",
      volume: 0.15,
      loop: true,
    },
    scenes: {
      DigitalCurrencyScene: {
        bgm: {
          src: "/assets/audio/bgm/suspense-dark.mp3",
          volume: 0.12,
          loop: true,
        },
      },
    },
  },

  Episode10: {
    bgm: {
      src: "/assets/audio/bgm/dramatic-trailer.mp3",
      volume: 0.15,
      loop: true,
    },
    scenes: {
      FinaleScene: {
        bgm: {
          src: "/assets/audio/bgm/mysterious-01.mp3",
          volume: 0.18,
          loop: true,
        },
      },
    },
  },
};

/**
 * Get audio configuration for a specific episode and scene
 */
export function getAudioConfig(
  episodeName: string,
  sceneName?: string,
): EpisodeAudioConfig {
  const episodeConfig = AUDIO_CONFIG[episodeName] || {};

  if (sceneName && episodeConfig.scenes && episodeConfig.scenes[sceneName]) {
    return {
      bgm: episodeConfig.bgm,
      scenes: {
        [sceneName]: episodeConfig.scenes[sceneName],
      },
    };
  }

  return episodeConfig;
}

/**
 * Get background music for an episode
 */
export function getEpisodeBGM(episodeName: string): AudioAsset | undefined {
  return AUDIO_CONFIG[episodeName]?.bgm;
}

/**
 * Get scene-specific audio configuration
 */
export function getSceneAudio(
  episodeName: string,
  sceneName: string,
):
  | {
      bgm?: AudioAsset;
      sfx?: AudioAsset[];
    }
  | undefined {
  return AUDIO_CONFIG[episodeName]?.scenes?.[sceneName];
}
