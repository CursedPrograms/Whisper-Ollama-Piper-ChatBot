// Jenny - walks a few example turns through the pipeline: you speak, Whisper hears, Ollama
// thinks, Piper speaks.

"use strict";

const TURNS = [
  ["What's the boiling point of water at the top of Everest?", "About seventy one degrees Celsius, because the air pressure up there is so low."],
  ["Give me a name for a robot cat.", "How about Purrcy? Short, friendly, and it sounds good out loud."],
  ["How far away is the Moon?", "On average about three hundred and eighty four thousand kilometres."],
  ["Goodbye.", "Goodbye."],
];

const stages = [...document.querySelectorAll(".stage")];
const you = document.getElementById("you");
const jenny = document.getElementById("jenny");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const wait = (ms) => new Promise((r) => setTimeout(r, reduced ? Math.min(ms, 300) : ms));

function light(step) {
  stages.forEach((s) => s.classList.toggle("active", Number(s.dataset.step) === step));
}

async function type(el, text) {
  el.textContent = "";
  for (const ch of text) {
    el.textContent += ch;
    if (!reduced) await wait(22);
  }
}

async function loop() {
  for (let i = 0; ; i = (i + 1) % TURNS.length) {
    const [question, answer] = TURNS[i];
    you.textContent = "…";
    jenny.textContent = "…";
    light(0); await wait(1400);
    light(1); await type(you, question); await wait(500);
    light(2); await wait(1300);
    light(3); await type(jenny, answer);
    light(4); await wait(2600);
  }
}

if (stages.length) loop();
