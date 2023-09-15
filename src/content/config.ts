import { array } from "astro/zod";
import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

const publicationSchema = z.object({
    title: z.string(),
    authors: z.string(),
    abstract: z.string(),
    abstractShort: z.string().optional(),
    pubDate: z.coerce.date(),
    year: z.string(),
    publication: z.string(),
    publication_short: z.string().optional(),
    publisher: z.string().optional(),
    doi: z.string().optional(),
    url_preprint: z.string().optional(),
    url_pdf: z.string().optional(),
    url_publisher: z.string().optional(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional()
})

const newsSchema = z.object({
    description: z.string(),
    pubDate: z.coerce.date(),
    url: z.string().optional()
})

const projectSchema = z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    funder: z.string().optional(),
    reference: z.string().optional(),
    summary: z.string().optional(),
    image: z.string().optional(),
    image_preview: z.string().optional(),
    external_link: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    outcomes: z.array(z.string().optional()).optional()
})


export type BlogSchema = z.infer<typeof blogSchema>;
export type PublicationSchema = z.infer<typeof publicationSchema>;
export type NewsSchema = z.infer<typeof newsSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const publicationCollection = defineCollection({ schema: publicationSchema });
const newsCollection = defineCollection( {schema: newsSchema });
const projectCollection = defineCollection( {schema: projectSchema });

export const collections = {
    'blog': blogCollection,
    'publications': publicationCollection,
    'news': newsCollection,
    'projects': projectCollection
}