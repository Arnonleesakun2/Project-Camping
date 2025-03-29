import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(5, "Title must be more than 5 charactor"),
  price: z.coerce.number(),
  description: z
    .string()
    .min(100, "Description must be more than 100 charactor")
    .max(1000, "Description must be less than 1000 charactor"),
  category: z.string().min(1, "Please select a category."),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
  image: z
    .any()
    .refine(
      (val) =>
        val !== undefined &&
        val.public_id !== undefined &&
        val.public_id.trim() !== "",
      {
        message: "Please enter a valid picture.",
      }
    ),
});

export const profileSchema = z.object({
  firstname: z
    .string()
    .min(2, "firstname must be more than 2 charactor")
    .max(30, "firstname must be less than 30 charactor"),
  lastname: z
    .string()
    .min(2, "lastname must be more than 2 charactor")
    .max(30, "lastname must be less than 30 charactor"),
});
