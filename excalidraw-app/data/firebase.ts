// KAIR0S_ESLINT_CLEANUP: Removing most Firebase-specific imports and types
// import { reconcileElements } from "@excalidraw/excalidraw"; // KAIR0S_ESLINT_CLEANUP - Unused
// import { MIME_TYPES } from "@excalidraw/common"; // KAIR0S_ESLINT_CLEANUP - Unused
// import { decompressData } from "@excalidraw/excalidraw/data/encode"; // KAIR0S_ESLINT_CLEANUP - Unused
// import { // KAIR0S_ESLINT_CLEANUP - Unused
//   encryptData,
//   decryptData,
// } from "@excalidraw/excalidraw/data/encryption";
// import { restoreElements } from "@excalidraw/excalidraw/data/restore"; // KAIR0S_ESLINT_CLEANUP - Unused
// import { getSceneVersion } from "@excalidraw/element"; // KAIR0S_ESLINT_CLEANUP - Unused
// import { initializeApp } from "firebase/app"; // KAIR0S_ESLINT_CLEANUP - Unused
// import { // KAIR0S_ESLINT_CLEANUP - Unused
//   getFirestore,
//   doc,
//   getDoc,
//   runTransaction,
//   Bytes,
// } from "firebase/firestore";
// import { getStorage, ref, uploadBytes } from "firebase/storage"; // KAIR0S_ESLINT_CLEANUP - Unused

// import type { RemoteExcalidrawElement } from "@excalidraw/excalidraw/data/reconcile"; // KAIR0S_ESLINT_CLEANUP - Unused
import type {
  // ExcalidrawElement, // KAIR0S_ESLINT_CLEANUP - Unused
  FileId,
  // OrderedExcalidrawElement, // KAIR0S_ESLINT_CLEANUP - Unused
} from "@excalidraw/element/types";
import type {
  AppState,
  // BinaryFileData, // KAIR0S_ESLINT_CLEANUP - Unused
  // BinaryFileMetadata, // KAIR0S_ESLINT_CLEANUP - Unused
  // DataURL, // KAIR0S_ESLINT_CLEANUP - Unused
} from "@excalidraw/excalidraw/types";

// import { FILE_CACHE_MAX_AGE_SEC } from "../app_constants"; // KAIR0S_ESLINT_CLEANUP - Unused

// import { getSyncableElements } from "."; // KAIR0S_ESLINT_CLEANUP - Unused

import type { SyncableExcalidrawElement } from "."; // KAIR0S_ESLINT_CLEANUP - Potentially unused if saveToFirebase is fully removed
import type Portal from "../collab/Portal"; // KAIR0S_ESLINT_CLEANUP - Potentially unused if isSavedToFirebase and saveToFirebase are fully removed
// import type { Socket } from "socket.io-client"; // KAIR0S_ESLINT_CLEANUP - Unused

// private
// -----------------------------------------------------------------------------

// KAIR0S_ESLINT_CLEANUP - FIREBASE_CONFIG is unused as all firebase initialization is commented out
// let FIREBASE_CONFIG: Record<string, any>;
// try {
//   FIREBASE_CONFIG = JSON.parse(import.meta.env.VITE_APP_FIREBASE_CONFIG);
// } catch (error: any) {
//   console.warn(
//     `Error JSON parsing firebase config. Supplied value: ${
//       import.meta.env.VITE_APP_FIREBASE_CONFIG
//     }`,
//   );
//   FIREBASE_CONFIG = {};
// }

// KAIR0S_FIREBASE_NEUTRALIZED
// let firebaseApp: ReturnType<typeof initializeApp> | null = null;
// let firestore: ReturnType<typeof getFirestore> | null = null;
// let firebaseStorage: ReturnType<typeof getStorage> | null = null;

// const _initializeFirebase = () => {
//   if (!firebaseApp) {
//     firebaseApp = initializeApp(FIREBASE_CONFIG);
//   }
//   return firebaseApp;
// };

// const _getFirestore = () => {
//   if (!firestore) {
//     firestore = getFirestore(_initializeFirebase());
//   }
//   return firestore;
// };

// const _getStorage = () => {
//   if (!firebaseStorage) {
//     firebaseStorage = getStorage(_initializeFirebase());
//   }
//   return firebaseStorage;
// };

// -----------------------------------------------------------------------------

export const loadFirebaseStorage = async () => {
  // KAIR0S_FIREBASE_NEUTRALIZED
  console.warn("KAIR0S: loadFirebaseStorage has been neutralized.");
  return null;
  // return _getStorage();
};

// KAIR0S_ESLINT_CLEANUP - Types and functions below are unused due to Firebase neutralization
// type FirebaseStoredScene = {
//   sceneVersion: number;
//   iv: Bytes;
//   ciphertext: Bytes;
// };

// const encryptElements = async (
//   key: string,
//   elements: readonly ExcalidrawElement[],
// ): Promise<{ ciphertext: ArrayBuffer; iv: Uint8Array }> => {
//   const json = JSON.stringify(elements);
//   const encoded = new TextEncoder().encode(json);
//   const { encryptedBuffer, iv } = await encryptData(key, encoded);

//   return { ciphertext: encryptedBuffer, iv };
// };

// const decryptElements = async (
//   data: FirebaseStoredScene,
//   roomKey: string,
// ): Promise<readonly ExcalidrawElement[]> => {
//   const ciphertext = data.ciphertext.toUint8Array();
//   const iv = data.iv.toUint8Array();

//   const decrypted = await decryptData(iv, ciphertext, roomKey);
//   const decodedData = new TextDecoder("utf-8").decode(
//     new Uint8Array(decrypted),
//   );
//   return JSON.parse(decodedData);
// };

// class FirebaseSceneVersionCache {
//   private static cache = new WeakMap<Socket, number>();
//   static get = (socket: Socket) => {
//     return FirebaseSceneVersionCache.cache.get(socket);
//   };
//   static set = (
//     socket: Socket,
//     elements: readonly SyncableExcalidrawElement[],
//   ) => {
//     FirebaseSceneVersionCache.cache.set(socket, getSceneVersion(elements));
//   };
// }

export const isSavedToFirebase = (
  portal: Portal,
  elements: readonly ExcalidrawElement[], // KAIR0S_ESLINT_CLEANUP - ExcalidrawElement type import removed
): boolean => {
  // KAIR0S_FIREBASE_NEUTRALIZED
  // if (portal.socket && portal.roomId && portal.roomKey) {
  //   const sceneVersion = getSceneVersion(elements);
  //   return FirebaseSceneVersionCache.get(portal.socket) === sceneVersion;
  // }
  console.warn("KAIR0S: isSavedToFirebase has been neutralized, returning true.");
  return true;
};

export const saveFilesToFirebase = async ({
  prefix,
  files,
}: {
  prefix: string;
  files: { id: FileId; buffer: Uint8Array }[];
}) => {
  // KAIR0S_FIREBASE_NEUTRALIZED
  console.warn("KAIR0S: saveFilesToFirebase has been neutralized.");
  return { savedFiles: [], erroredFiles: files.map(f => f.id) };
  // const storage = await loadFirebaseStorage();

  // const erroredFiles: FileId[] = [];
  // const savedFiles: FileId[] = [];

  // await Promise.all(
  //   files.map(async ({ id, buffer }) => {
  //     try {
  //       const storageRef = ref(storage, `${prefix}/${id}`);
  //       await uploadBytes(storageRef, buffer, {
  //         cacheControl: `public, max-age=${FILE_CACHE_MAX_AGE_SEC}`,
  //       });
  //       savedFiles.push(id);
  //     } catch (error: any) {
  //       erroredFiles.push(id);
  //     }
  //   }),
  // );

  // return { savedFiles, erroredFiles };
};

// const createFirebaseSceneDocument = async ( // KAIR0S_ESLINT_CLEANUP - Unused
//   elements: readonly SyncableExcalidrawElement[],
//   roomKey: string,
// ) => {
//   const sceneVersion = getSceneVersion(elements);
//   const { ciphertext, iv } = await encryptElements(roomKey, elements);
//   return {
//     sceneVersion,
//     ciphertext: Bytes.fromUint8Array(new Uint8Array(ciphertext)),
//     iv: Bytes.fromUint8Array(iv),
//   } as FirebaseStoredScene;
// };

export const saveToFirebase = async (
  portal: Portal,
  elements: readonly SyncableExcalidrawElement[],
  appState: AppState,
) => {
  // KAIR0S_FIREBASE_NEUTRALIZED
  console.warn("KAIR0S: saveToFirebase has been neutralized.");
  return null;
  // const { roomId, roomKey, socket } = portal;
  // if (
  //   // bail if no room exists as there's nothing we can do at this point
  //   !roomId ||
  //   !roomKey ||
  //   !socket ||
  //   isSavedToFirebase(portal, elements)
  // ) {
  //   return null;
  // }

  // const firestore = _getFirestore();
  // const docRef = doc(firestore, "scenes", roomId);

  // const storedScene = await runTransaction(firestore, async (transaction) => {
  //   const snapshot = await transaction.get(docRef);

  //   if (!snapshot.exists()) {
  //     const storedScene = await createFirebaseSceneDocument(elements, roomKey);

  //     transaction.set(docRef, storedScene);

  //     return storedScene;
  //   }

  //   const prevStoredScene = snapshot.data() as FirebaseStoredScene;
  //   const prevStoredElements = getSyncableElements(
  //     restoreElements(await decryptElements(prevStoredScene, roomKey), null),
  //   );
  //   const reconciledElements = getSyncableElements(
  //     reconcileElements(
  //       elements,
  //       prevStoredElements as OrderedExcalidrawElement[] as RemoteExcalidrawElement[],
  //       appState,
  //     ),
  //   );

  //   const storedScene = await createFirebaseSceneDocument(
  //     reconciledElements,
  //     roomKey,
  //   );

  //   transaction.update(docRef, storedScene);

  //   // Return the stored elements as the in memory `reconciledElements` could have mutated in the meantime
  //   return storedScene;
  // });

  // const storedElements = getSyncableElements(
  //   restoreElements(await decryptElements(storedScene, roomKey), null),
  // );

  // FirebaseSceneVersionCache.set(socket, storedElements);

  // return storedElements;
};

export const loadFromFirebase = async (
  roomId: string,
  roomKey: string,
  socket: Socket | null, // KAIR0S_ESLINT_CLEANUP - Socket type import removed
): Promise<readonly SyncableExcalidrawElement[] | null> => {
  // KAIR0S_FIREBASE_NEUTRALIZED
  console.warn("KAIR0S: loadFromFirebase has been neutralized.");
  return null;
  // const firestore = _getFirestore();
  // const docRef = doc(firestore, "scenes", roomId);
  // const docSnap = await getDoc(docRef);
  // if (!docSnap.exists()) {
  //   return null;
  // }
  // const storedScene = docSnap.data() as FirebaseStoredScene;
  // const elements = getSyncableElements(
  //   restoreElements(await decryptElements(storedScene, roomKey), null),
  // );

  // if (socket) {
  //   FirebaseSceneVersionCache.set(socket, elements);
  // }

  // return elements;
};

export const loadFilesFromFirebase = async (
  prefix: string,
  decryptionKey: string,
  filesIds: readonly FileId[],
) => {
  // KAIR0S_FIREBASE_NEUTRALIZED
  console.warn("KAIR0S: loadFilesFromFirebase has been neutralized.");
  return { loadedFiles: [], erroredFiles: new Map() };
  // const loadedFiles: BinaryFileData[] = [];
  // const erroredFiles = new Map<FileId, true>();

  // await Promise.all(
  //   [...new Set(filesIds)].map(async (id) => {
  //     try {
  //       const url = `https://firebasestorage.googleapis.com/v0/b/${
  //         FIREBASE_CONFIG.storageBucket
  //       }/o/${encodeURIComponent(prefix.replace(/^\//, ""))}%2F${id}`;
  //       const response = await fetch(`${url}?alt=media`);
  //       if (response.status < 400) {
  //         const arrayBuffer = await response.arrayBuffer();

  //         const { data, metadata } = await decompressData<BinaryFileMetadata>(
  //           new Uint8Array(arrayBuffer),
  //           {
  //             decryptionKey,
  //           },
  //         );

  //         const dataURL = new TextDecoder().decode(data) as DataURL;

  //         loadedFiles.push({
  //           mimeType: metadata.mimeType || MIME_TYPES.binary,
  //           id,
  //           dataURL,
  //           created: metadata?.created || Date.now(),
  //           lastRetrieved: metadata?.created || Date.now(),
  //         });
  //       } else {
  //         erroredFiles.set(id, true);
  //       }
  //     } catch (error: any) {
  //       erroredFiles.set(id, true);
  //       console.error(error);
  //     }
  //   }),
  // );

  // return { loadedFiles, erroredFiles };
};
