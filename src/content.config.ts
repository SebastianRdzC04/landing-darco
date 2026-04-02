import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      excerpt: z.string(),
      category: z.string(),
      year: z.string(),
      location: z.string().optional(),
      client: z.string().optional(),
      coverImage: image(),
      gallery: z.array(image()).optional(),
    }),
});

export const collections = { projects };
