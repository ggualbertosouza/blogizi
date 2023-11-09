import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    title: v.string(),
    author: v.id('user'),
    slug: v.string(),
    category: v.string(),
    content: v.string(),
    image: v.optional(v.string()),
    isPublished: v.boolean(),
  }),

  user: defineTable({
    id: v.string(),
    username: v.string(),
    fullName: v.optional(v.string()),
    image: v.string(),
    email: v.string(),
    password: v.string()
  })
});

