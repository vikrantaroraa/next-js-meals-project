import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 6000));
  return db.prepare("SELECT * FROM meals").all();
}

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};
