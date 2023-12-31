"use server";

import { CreateUserParams } from "@/types";
import { connectToDatabase } from "../database";
import Customer from "../database/models/user.model";

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await Customer.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
