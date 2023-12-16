import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    github: z.string(),
    website: z.string(),
  }),
});

export const collections = { posts: postsCollection };
