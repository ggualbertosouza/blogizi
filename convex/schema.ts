import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    title: v.string(),
    slug: v.string(),
    category: v.string(),
    content: v.string(),
    image: v.optional(v.string()),
    isPublished: v.boolean(),
  }),
});
