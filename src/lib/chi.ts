const VOC = "aeiouáéíóúüAEIOUÁÉÍÓÚÜ";
const esVocal = (c: string) => VOC.includes(c);
const esAcentoFuerte = (c: string) => "áéíóúÁÉÍÓÚ".includes(c);

export function dividirSilabas(palabra: string): string[] {
  if (!palabra) return [];
  const w = palabra;
  const n = w.length;
  const idxV: number[] = [];
  for (let i = 0; i < n; i++) if (esVocal(w[i])) idxV.push(i);
  if (idxV.length === 0) return [w];
  if (idxV.length === 1) return [w];

  const cortes: number[] = [];
  const gruposInseparables = ["br", "cr", "dr", "fr", "gr", "pr", "tr", "bl", "cl", "dl", "fl", "gl", "pl", "tl", "ch", "ll", "rr", "qu", "gu"];
  for (let k = 0; k < idxV.length - 1; k++) {
    const v1 = idxV[k];
    const v2 = idxV[k + 1];
    const entre = w.slice(v1 + 1, v2);
    const c = entre.length;
    if (c === 0) {
      const a = w[v1].toLowerCase();
      const b = w[v2].toLowerCase();
      const debiles = new Set(["i", "u", "ü"]);
      const esDiptongo =
        (debiles.has(a) || debiles.has(b)) &&
        !esAcentoFuerte(w[v1]) &&
        !esAcentoFuerte(w[v2]);
      if (!esDiptongo) cortes.push(v2);
    } else if (c === 1) {
      cortes.push(v1 + 1);
    } else if (c === 2) {
      const cc = entre.toLowerCase();
      cortes.push(gruposInseparables.includes(cc) ? v1 + 1 : v1 + 2);
    } else if (c === 3) {
      const ult2 = entre.slice(1).toLowerCase();
      cortes.push(gruposInseparables.includes(ult2) ? v1 + 2 : v1 + 3);
    } else {
      cortes.push(v1 + c - 1);
    }
  }
  const silabas: string[] = [];
  let inicio = 0;
  for (const corte of cortes) {
    if (corte > 0 && corte < n) {
      silabas.push(w.slice(inicio, corte));
      inicio = corte;
    }
  }
  silabas.push(w.slice(inicio));
  return silabas.filter(Boolean);
}

function copiarMayus(orig: string, dest: string): string {
  if (!orig) return dest;
  return orig[0] === orig[0].toUpperCase()
    ? dest[0].toUpperCase() + dest.slice(1)
    : dest;
}

export function palabraAChi(palabra: string): string {
  const m = palabra.match(
    /^([^A-Za-zÁÉÍÓÚÜÑñáéíóúü]*)([A-Za-zÁÉÍÓÚÜÑñáéíóúü]+)([^A-Za-zÁÉÍÓÚÜÑñáéíóúü]*)$/
  );
  if (!m) return palabra;
  const [, pre, nucleo, post] = m;
  const low = nucleo.toLowerCase();
  if (low === "sí" || low === "si") return pre + copiarMayus(nucleo, "chiis") + post;
  if (low === "no") return pre + copiarMayus(nucleo, "chion") + post;
  const trans = dividirSilabas(nucleo)
    .map((s) => "chi" + s.toLowerCase())
    .join("");
  return pre + copiarMayus(nucleo, trans) + post;
}

export function espanolAChi(texto: string): string {
  return texto
    .split(/(\s+)/)
    .map((chunk) => {
      if (/^\s+$/.test(chunk)) return chunk;
      return chunk
        .split(/([A-Za-zÁÉÍÓÚÜÑñáéíóúü]+)/g)
        .map((p) => (/^[A-Za-zÁÉÍÓÚÜÑñáéíóúü]+$/.test(p) ? palabraAChi(p) : p))
        .join("");
    })
    .join("");
}

export function chiAEspanol(texto: string): string {
  return texto
    .split(/(\s+)/)
    .map((chunk) => {
      if (/^\s+$/.test(chunk)) return chunk;
      return chunk
        .split(/([A-Za-zÁÉÍÓÚÜÑñáéíóúü]+)/g)
        .map((p) => {
          if (!/^[A-Za-zÁÉÍÓÚÜÑñáéíóúü]+$/.test(p)) return p;
          const low = p.toLowerCase();
          if (low === "chiis") return copiarMayus(p, "sí");
          if (low === "chion") return copiarMayus(p, "no");
          if (!low.startsWith("chi")) return p;
          const partes = low.split("chi").filter((x) => x !== "");
          if (partes.length === 0) return p;
          return copiarMayus(p, partes.join(""));
        })
        .join("");
    })
    .join("");
}

export function desgloseChi(es: string): string {
  return es
    .split(/(\s+)/)
    .map((chunk) => {
      if (/^\s+$/.test(chunk)) return " ";
      const limpio = chunk.replace(/[^A-Za-zÁÉÍÓÚÜÑñáéíóúü]/g, "");
      if (!limpio) return chunk;
      const chi = espanolAChi(limpio);
      if (limpio.toLowerCase() === chi.toLowerCase()) return chunk;
      return `${limpio}→${chi}`;
    })
    .join(" ");
}
