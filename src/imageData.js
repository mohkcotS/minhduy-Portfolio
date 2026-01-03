const webImages = import.meta.glob("../src/assets/projects/web/*.png", {
  eager: true,
});

export const webImg = Object.values(webImages).map((img) => img.default);

const pdmImages = import.meta.glob("../src/assets/projects/pdm/*.png", {
  eager: true,
});

export const pdmImg = Object.values(pdmImages).map((img) => img.default);

const cgImages = import.meta.glob("../src/assets/projects/cg/*.png", {
  eager: true,
});

export const cgImg = Object.values(cgImages).map((img) => img.default);

const dsaImages = import.meta.glob("../src/assets/projects/dsa/*.png", {
  eager: true,
});

export const dsaImg = Object.values(dsaImages).map((img) => img.default);

const ooadImages = import.meta.glob("../src/assets/projects/ooad/*.png", {
  eager: true,
});

export const ooadImg = Object.values(ooadImages).map((img) => img.default);

const oopImages = import.meta.glob("../src/assets/projects/oop/*.png", {
  eager: true,
});

export const oopImg = Object.values(oopImages).map((img) => img.default);

const pplImages = import.meta.glob("../src/assets/projects/ppl/*.png", {
  eager: true,
});

export const pplImg = Object.values(pplImages).map((img) => img.default);
