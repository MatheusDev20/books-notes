type Languages = {
  de: URL;
  en: URL;
  pt: URL;
  es: URL;
  fr: URL;
  ja: URL;
};

type AllowedElements = {
  video: HTMLVideoElement;
  audio: HTMLAudioElement;
  canvas: HTMLCanvasElement;
};


function isAvailable<T>(
  obj: T,
  key: string | number | symbol
): key is keyof T {
  // @ts-ignore
  return key in obj;
}

function loadLanguage(collection: Languages, lang: string) {
  if (isAvailable(collection, lang)) {
    // lang is keyof Languages
    collection[lang]; // access ok!
  }
}

function selectElement(collection: AllowedElements, elem: string) {
  if (isAvailable(collection, elem)) {
    // elem is keyof AllowedElements
    collection[elem]; // access ok
  }
}