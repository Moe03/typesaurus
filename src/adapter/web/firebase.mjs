import { getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firestoreSymbol = Symbol();

export function firestore(options, databaseId) {
  const appName = options?.client?.app || options?.app;
  const app = getApp(appName);
  return getFirestore(app, databaseId || "(default)");
}
