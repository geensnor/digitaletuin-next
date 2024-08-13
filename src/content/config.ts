import { z, defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
	recepten: defineCollection({ type: 'content', schema: z.object({
    	name: z.string(),
		recipeYield: z.number().optional(),
		recipeCategory: z.enum(['hoofdgerecht', 'voorgerecht', 'ontbijt', 'lunch', 'nagerecht', 'soep']).optional(),
		recipeCuisine: z.string().optional(),
		cookTime: z.string().duration().optional(),
		prepTime: z.string().duration().optional(),
		totalTime: z.string().duration().optional(),
		calories: z.number().optional(),
		author: z.string().optional(),
  }), }),
};
