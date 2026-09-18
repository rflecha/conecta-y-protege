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
    type: z.enum(['article', 'technical']).default('article'),
    series: z.string().optional(),
    order: z.number().optional(),
    relatedArticle: z.number().optional(),
    level: z.string().optional(),
  }),
});

export const collections = { posts };
