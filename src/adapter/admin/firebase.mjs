import { getApp } from "firebase-admin/app";
import { getFirestore, initializeFirestore } from "firebase-admin/firestore";

export const firestoreSymbol = Symbol();

export function firestore(options, databaseId) {
  const appName = options?.server?.app || options?.app;
  const app = getApp(appName);

  if (options?.server?.preferRest) {
    return initializeFirestore(app, {
      preferRest: options?.server?.preferRest,
    }, databaseId || "(default)");
  } else {
    return getFirestore(app, databaseId || "(default)");
  }
}
