// src/lib/services/user.service.ts

import { db } from "@/lib/db/db"; // Ensure this path is correct

export class UserService {
  // Method to get a user by their Auth0 ID
  static async getUser(id: string) {
    try {
      const userData = await db
        .selectFrom("users")
        .selectAll() // Select the field you need
        .where("users.auth0_id", "=", id)
        .execute();

      if (userData.length === 0) {
        return { error: "User not found", status: 404 };
      }

      return { data: userData, status: 200 };
    } catch (error) {
      console.error("Error in getUser:", error);
      return { error: "Internal Server Error", status: 500 };
    }
  }

  // Method to add a friend
  static async addFriend(userId: number, friendId: number) {
    try {
      // Check if the friendship already exists
      const existingFriendship = await db
        .selectFrom("friendships")
        .where("user_id", "=", userId)
        .where("friend_id", "=", friendId)
        .selectAll()
        .execute();

      if (existingFriendship.length > 0) {
        return { error: "Friendship already exists", status: 409 }; // Conflict
      }

      // Add the friendship
      await db
        .insertInto("friendships")
        .values({ user_id: userId, friend_id: friendId })
        .execute();

      return { message: "Friend added successfully", status: 201 }; // Created
    } catch (error) {
      console.error("Error in addFriend:", error);
      return { error: "Internal Server Error", status: 500 };
    }
  }

  // Method to remove a friend
  static async removeFriend(userId: number, friendId: number) {
    try {
      // Check if the friendship exists
      const existingFriendship = await db
        .selectFrom("friendships")
        .where("user_id", "=", userId)
        .where("friend_id", "=", friendId)
        .selectAll()
        .execute();

      if (existingFriendship.length === 0) {
        return { error: "Friendship not found", status: 404 }; // Not Found
      }

      // Remove the friendship
      await db
        .deleteFrom("friendships")
        .where("user_id", "=", userId)
        .where("friend_id", "=", friendId)
        .execute();

      return { message: "Friend removed successfully", status: 200 }; // OK
    } catch (error) {
      console.error("Error in removeFriend:", error);
      return { error: "Internal Server Error", status: 500 };
    }
  }
}
