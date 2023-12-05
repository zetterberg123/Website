// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		dates: z.object({
			start: z.string(),
			end: z.string().optional(),
		}),
		media: z.object({
			url: z.string(),
			alt: z.string(),
			isVideo: z.boolean().default(false),
		}),
		icons: z.array(z.string()),
	}),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
	projects: projectsCollection,
};
