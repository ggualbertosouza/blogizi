import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create a new task with the given text
export const create = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    description: v.string(),
    content: v.string(),
    date: v.string()
  },

  handler: async (ctx, args) => {
    const newTaskId = await ctx.db.insert("posts", {
      title: args.title,
      slug: args.slug,
      description: args.description,
      content: args.content,
      date: args.date
    });

    return newTaskId;
  },
});

export const get = query({
  handler: async (ctx) => {
    const posts = await ctx.db
    .query("posts")
    .collect();

    return posts;
  },
});

export const getBestPost = query({
  handler: async (ctx) => {
    const posts = await ctx.db
      .query("posts")
      .withIndex('by_creation_time')
      .take(3)

      return posts
  },
});

export const getCsharpPost = query({
  handler: async (ctx) => {
    const posts = await ctx.db
    .query('posts')
    .withIndex('by_category')
    .take(1)

    return posts
  }
})

export const getByCategory = query({
  args: {slug: v.string()},
  handler: async(ctx, args) => {
      const posts = await ctx.db
      .query('posts')
      .withIndex('by_category', (q) => q.eq('slug', args.slug))

      return posts
    }
})

export const getById = query({
  args: {id: v.id('posts')},
  handler: async (ctx, args) => {
      const post = ctx.db
      .query('posts')
      .filter((q) => q.eq(q.field('_id'), args.id))
      .collect()

      return post
  },
})
