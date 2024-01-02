"use server";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { connectToDatabase } from "../database";
import Customer from "../database/models/user.model";
import { revalidatePath } from "next/cache";

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await Customer.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}

export async function updateCustomer(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();
    const updatedUser = await Customer.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });
    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCustomer(clerkId: string) {
  try {
    await connectToDatabase();
    const deletedUser = await Customer.findOneAndDelete({ clerkId });

    if (!deletedUser) throw new Error("Unable to delete Customer");

    revalidatePath("/");
    return JSON.parse(JSON.stringify(deletedUser));
  } catch (error) {
    console.log(error);
  }
}
