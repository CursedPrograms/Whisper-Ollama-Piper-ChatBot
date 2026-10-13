[![Twitter: @NorowaretaGemu](https://img.shields.io/badge/X-@NorowaretaGemu-blue.svg?style=flat)](https://x.com/NorowaretaGemu)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<br>
<div align="center">
  <a href="https://ko-fi.com/cursedentertainment">
    <img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi" style="width: 20%;"/>
  </a>
</div>
<br>

<div align="center">
  <img alt="Python" src="https://img.shields.io/badge/python%20-%23323330.svg?&style=for-the-badge&logo=python&logoColor=white"/>
</div>
<div align="center">
  <img alt="Git" src="https://img.shields.io/badge/git%20-%23323330.svg?&style=for-the-badge&logo=git&logoColor=white"/>
  <img alt="PowerShell" src="https://img.shields.io/badge/PowerShell-%23323330.svg?&style=for-the-badge&logo=powershell&logoColor=white"/>
  <img alt="Shell" src="https://img.shields.io/badge/Shell-%23323330.svg?&style=for-the-badge&logo=gnu-bash&logoColor=white"/>
  <img alt="Batch" src="https://img.shields.io/badge/Batch-%23323330.svg?&style=for-the-badge&logo=windows&logoColor=white"/>
</div>
<br>

# Whisper-Ollama-Piper-ChatBot

**Jenny**, a voice assistant that runs entirely on your own machine: you talk, **Whisper**
turns it into text, a local model in **Ollama** answers, and **Piper** says the answer out loud.
No cloud, no API keys.

**Website:** https://cursedprograms.github.io/Whisper-Ollama-Piper-ChatBot/

[Farica☆Kimora](https://github.com/Farica-Kimora) © Cursed Entertainment

```
mic --arecord--> Whisper (tiny, CPU) --text--> Ollama (phi3:mini) --text--> Piper --aplay--> speakers
```

## What you need
- **Linux** with ALSA (`arecord` / `aplay`, from `alsa-utils`); written for a Raspberry Pi-style setup.
- **Python 3.9+** and **ffmpeg** (Whisper uses it).
- **Ollama** running (`ollama serve`) with the model pulled: `ollama pull phi3:mini`.
- A **Piper voice**: an `.onnx` file and its `.onnx.json` in `voices/` (e.g. `en_US-amy-medium` from
  [rhasspy/piper-voices](https://huggingface.co/rhasspy/piper-voices)).

## How to run
```bash
pip install -r requirements.txt     # requests, numpy, rich, openai-whisper, piper-tts
python main.py
```
Or `./run.sh`, which makes a virtual environment (`psdenv/`) first. Speak when it says
**Speak now** (it records for 4 seconds), and say **goodbye** (or exit / quit / bye / shut down) to stop.

## Settings
Everything is in `config.json` under `Config.Jenny`:

| Key | Default | What it does |
|---|---|---|
| `SystemPrompt` | short, spoken answers | who Jenny is and how she talks |
| `Model` | `phi3:mini` | any model you've pulled into Ollama |
| `MicDevice` | `plughw:1,0` | your microphone; list them with `arecord -l` |
| `SpeakerDevice` | `plughw:2,0` | your speakers; list them with `aplay -l` |
| `RecordSeconds` | `4` | how long each turn listens |

Jenny remembers the last six exchanges, so you can ask follow-up questions.

## License
MIT, see [LICENSE](LICENSE).

---

<br>
<div align="center">
© Cursed Entertainment 2026
</div>
<br>
<div align="center">
<a href="https://cursed-entertainment.itch.io/" target="_blank">
    <img src="https://github.com/CursedPrograms/cursedentertainment/raw/main/images/logos/logo-wide-grey.png"
        alt="CursedEntertainment Logo" style="width:250px;">
</a>
</div>
<br>
<div align="center">
  <a href="https://github.com/SynthWomb" target="_blank">
    <img src="https://github.com/SynthWomb/synth.womb/blob/main/logos/synthwomb07.png" alt="SynthWomb" style="width:200px;"/>
  </a>
</div>
