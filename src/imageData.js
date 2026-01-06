const webImages = import.meta.glob("../src/assets/projects/web/*.webp", {
  eager: true,query: '?url',import: 'default',
});

export const webImg = Object.values(webImages)

const pdmImages = import.meta.glob("../src/assets/projects/pdm/*.webp", {
  eager: true,query: '?url',import: 'default',
});

export const pdmImg = Object.values(pdmImages)

const cgImages = import.meta.glob("../src/assets/projects/cg/*.webp", {
  eager: true,query: '?url',import: 'default',
});

export const cgImg = Object.values(cgImages)

const dsaImages = import.meta.glob("../src/assets/projects/dsa/*.webp", {
  eager: true,query: '?url',import: 'default',
});

export const dsaImg = Object.values(dsaImages)

const ooadImages = import.meta.glob("../src/assets/projects/ooad/*.webp", {
  eager: true,query: '?url',import: 'default',
});

export const ooadImg = Object.values(ooadImages)

const oopImages = import.meta.glob("../src/assets/projects/oop/*.webp", {
  eager: true,query: '?url',import: 'default',
});

export const oopImg = Object.values(oopImages)

const pplImages = import.meta.glob("../src/assets/projects/ppl/*.webp", {
  eager: true,query: '?url',import: 'default',
});

export const pplImg = Object.values(pplImages)
