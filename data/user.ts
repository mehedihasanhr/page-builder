import { db } from "@/lib/db";

export const getUserByEmailWithPassword = async (email: string) => {
  try {
    const res = await db.user.findUnique({ where: { email } });
    return res;
  } catch (error) {
    return null;
  }
};
