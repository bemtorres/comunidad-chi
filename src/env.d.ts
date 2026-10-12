/// <reference types="astro/client" />

interface Window {
  hablar?: (texto: string) => void;
  escuchar?: (texto: string) => void;
}
