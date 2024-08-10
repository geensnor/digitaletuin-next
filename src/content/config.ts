import { z, defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
	recepten: defineCollection({ type: 'content', schema: z.object({
    	title: z.string(),
		recipeYield: z.number().optional(),
		recipeCategory: z.enum(['hoofdgerecht', 'voorgerecht', 'ontbijt']).optional(),
  }), }),
};
