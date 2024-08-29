"use server"

import { ID } from "appwrite";
import { databases } from "./appwrite";


export async function addTask(task) {
  return databases.createDocument(
    process.env.APPWRITE_DATABASE_ID,
    process.env.APPWRITE_COLLECTION_TASKS_ID,
    ID.unique(),
    task,
  )
}

export async function deleteTask(taskId) {
  return databases.deleteDocument(
    process.env.APPWRITE_DATABASE_ID,
    process.env.APPWRITE_COLLECTION_TASKS_ID,
    taskId,
  )
}

export async function listTasks() {
  return databases.listDocuments(
    process.env.APPWRITE_DATABASE_ID,
    process.env.APPWRITE_COLLECTION_TASKS_ID,
  )
}
