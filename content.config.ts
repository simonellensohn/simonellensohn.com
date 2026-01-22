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
      source: '**/index.yml',
      schema: z.object({
        role: z.string().nonempty(),
        about: createBaseSchema(),
        experience: createBaseSchema().extend({
          items: z.array(
            z.object({
              date: z.string(),
              position: z.string(),
              company: z.object({
                name: z.string(),
                url: z.string(),
              }).optional(),
            }),
          ),
        }),
      }),
    }),
    services: defineCollection({
      type: 'page',
      source: '**/services.yml',
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
      source: '**/stack.yml',
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
      source: '**/uses.yml',
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
      source: '**/about.yml',
      schema: z.object({
        content: z.object({}),
        images: z.array(createImageSchema()),
      }),
    }),
    cv: defineCollection({
      type: 'page',
      source: '**/cv.yml',
      schema: z.object({
        personal: z.object({
          name: z.string(),
          role: z.string(),
          location: z.object({
            href: z.string(),
            title: z.string(),
            text: z.string(),
            timezone: z.string(),
          }),
          url: z.object({
            title: z.string(),
            href: z.string(),
            text: z.string(),
          }),
          contact: z.array(z.object({
            title: z.string(),
            href: z.string(),
            text: z.string(),
            icon: z.string(),
          })),
        }),
        profile: z.object({
          title: z.string(),
          content: z.string(),
        }),
        core_focus: z.object({
          title: z.string(),
          points: z.array(z.object({
            title: z.string(),
            description: z.string(),
          })),
        }),
        experiences: z.object({
          title: z.string(),
          industry: z.string(),
          team_size: z.string(),
          location: z.string(),
          history: z.array(z.object({
            role: z.string(),
            company: z.object({
              name: z.string(),
              href: z.string(),
            }),
            location: z.string(),
            dates: z.string(),
            industry: z.string().optional(),
            team_size: z.string().optional(),
            stack: z.array(z.string()),
            description: z.array(z.string()),
          })),
        }),
        education: z.object({
          title: z.string(),
          history: z.array(z.object({
            institution: z.string(),
            href: z.string(),
            degree: z.string(),
            year: z.string(),
          })),
        }),
        languages: z.object({
          title: z.string(),
          speaks: z.array(z.object({
            name: z.string(),
            level: z.string(),
          })),
        }),
        interests: z.object({
          title: z.string(),
          topics: z.array(z.string()),
        }),
      }),
    }),
  },
})
