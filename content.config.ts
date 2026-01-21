import { defineCollection, defineContentConfig, z } from '@nuxt/content'

function createBaseSchema() {
  return z.object({
    title: z.string(),
    description: z.string(),
  })
}

function createImageSchema() {
  return z.object({
    src: z.string().editor({ input: 'media' }),
    alt: z.string(),
  })
}

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: z.object({
        role: z.string().nonempty(),
        about: createBaseSchema(),
        experience: createBaseSchema().extend({
          items: z.array(
            z.object({
              date: z.date(),
              position: z.string(),
              company: z.object({
                name: z.string(),
                url: z.string(),
              }),
            }),
          ),
        }),
      }),
    }),
    services: defineCollection({
      type: 'page',
      source: 'services.yml',
      schema: z.object({
        services: z.array(
          z.object({
            icon: z.string().nonempty(),
            title: z.string().nonempty(),
            description: z.string().nonempty(),
          }),
        ),
      }),
    }),
    stack: defineCollection({
      type: 'page',
      source: 'stack.yml',
      schema: z.object({
        categories: z.array(
          z.object({
            name: z.string().nonempty(),
            technologies: z.array(
              z.object({
                name: z.string().nonempty(),
                icon: z.string().nonempty(),
                url: z.string().nonempty(),
              }),
            ),
          }),
        ),
      }),
    }),
    uses: defineCollection({
      type: 'page',
      source: 'uses.yml',
      schema: z.object({
        categories: z.array(
          z.object({
            name: z.string().nonempty(),
            items: z.array(
              z.object({
                name: z.string().nonempty(),
                description: z.string().nonempty(),
                url: z.string().nonempty(),
              }),
            ),
          }),
        ),
      }),
    }),
    about: defineCollection({
      type: 'page',
      source: 'about.yml',
      schema: z.object({
        content: z.object({}),
        images: z.array(createImageSchema()),
      }),
    }),
  },
})
