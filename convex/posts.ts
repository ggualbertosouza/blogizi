import { mutation, query } from "./_generated/server";

export const create = mutation({
  handler: async (ctx, args) => {
    const post = await ctx.db.insert("posts", {
      title: args.title as string,
      category: args.category as string,
      slug: args.slug as string,
      content: args.slug as string,
      isPublished: false,
    });

    return post
  },
});

export const get = query({
  handler: async (ctx) => {
    const posts = await ctx.db.query('posts').collect()

    return posts
  }
})
