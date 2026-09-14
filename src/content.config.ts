import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    category: z.string(),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
