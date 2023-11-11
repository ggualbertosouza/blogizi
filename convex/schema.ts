import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    title: v.string(),
    slug: v.string(),
    description: v.string(),
    content: v.string(),
    date: v.string()
  }).index("by_category", ["slug"]),
});
