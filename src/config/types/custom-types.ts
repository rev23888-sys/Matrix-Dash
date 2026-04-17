import { z } from 'zod';
import { GuildInfo } from './types';

export type CustomGuildInfo = GuildInfo & {};

export type WelcomeMessageFeature = {
  channel?: string;
  message: string;
};

export type EmptyFeature = {};

export type CustomFeatures = {
  music: EmptyFeature;
  gaming: EmptyFeature;
  'reaction-role': EmptyFeature;
  meme: EmptyFeature;
  'welcome-message': WelcomeMessageFeature;

  moderation: EmptyFeature;
  antinuke: EmptyFeature;
  automod: EmptyFeature;
  levels: EmptyFeature;
  logging: EmptyFeature;
  voicemaster: EmptyFeature;
  tracker: EmptyFeature;
  autoreact: EmptyFeature;
  roles: EmptyFeature;
};

export const memeFeatureSchema = z.object({
  channel: z.string().optional(),
  source: z.enum(['youtube', 'twitter', 'discord']).optional(),
});

export type MemeFeature = z.infer<typeof memeFeatureSchema>;

