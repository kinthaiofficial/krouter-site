---
layout: ../../layouts/DocsLayout.astro
title: Getting Started with KRouter
description: Install and configure KRouter in 5 minutes. Route Claude Code, Cursor, and other AI agents to the cheapest LLM provider automatically.
lang: en
---

# Getting Started with KRouter

KRouter is a local LLM proxy daemon that intercepts requests from your AI agents (Claude Code, Cursor, OpenClaw, Hermes) and routes them to the cheapest available provider automatically.

## Installation

### macOS

Download the latest DMG from the [download page](/download) or run:

```bash
# macOS (Apple Silicon and Intel)
curl -fsSL https://github.com/kinthaiofficial/krouter/releases/latest/download/krouter-darwin.dmg -o krouter.dmg
open krouter.dmg
```

### Linux

```bash
# Debian/Ubuntu
curl -fsSL https://github.com/kinthaiofficial/krouter/releases/latest/download/krouter-linux.deb -o krouter.deb
sudo dpkg -i krouter.deb

# RPM-based (Fedora, RHEL)
curl -fsSL https://github.com/kinthaiofficial/krouter/releases/latest/download/krouter-linux.rpm -o krouter.rpm
sudo rpm -i krouter.rpm
```

### Windows

Download the installer from the [download page](/download) and run `krouter-setup.exe`.

## How It Works

KRouter runs a local daemon on port **8402** that:

1. Scans your existing agent configurations (Claude Code, Cursor, etc.)
2. Inherits their API keys and provider endpoints automatically
3. Evaluates every outgoing request against all connected providers in real time
4. Forwards the request to the cheapest compatible provider

**Same-protocol routing only.** An Anthropic-protocol request routes only to Anthropic-compatible providers. An OpenAI-protocol request routes only to OpenAI-compatible providers. No cross-protocol conversion occurs — your request arrives at the provider exactly as your agent sent it.

## Starting KRouter

```bash
krouter start
```

KRouter starts in the background. To verify it's running:

```bash
krouter status
```

## Configuring Your Agents

KRouter connects automatically to agents it detects. You do not need to change your agent configuration.

If your agent is running on a non-standard path, open the KRouter dashboard at `http://localhost:8403` and update the path there.

### Manual agent path (if needed)

In the dashboard, go to **Agents → Add path** and enter the path to your agent's configuration file.

## Routing Modes

KRouter supports three built-in routing presets:

| Mode | Behaviour |
|------|-----------|
| **Saver** | Always picks the cheapest provider |
| **Balanced** | Cheapest provider within 20% of the top-quality option |
| **Quality** | Highest-ranked provider for the model family |

Change the mode in the dashboard or via CLI:

```bash
krouter mode saver
krouter mode balanced
krouter mode quality
```

## Budget Control

Set a daily spend limit to prevent runaway costs:

```bash
krouter budget set 5.00   # $5.00 USD daily hard stop
```

KRouter sends SSE alerts at 80% and 95% of the limit. At 100%, all requests are blocked until the next day.

View today's spend:

```bash
krouter budget status
```

## Viewing Logs

```bash
krouter logs          # tail live request log
krouter logs --today  # today's requests only
```

## Stopping KRouter

```bash
krouter stop
```

## KRouter vs LiteLLM

| | KRouter | LiteLLM |
|---|---|---|
| **Setup** | Zero config — inherits agent keys | Manual key entry per provider |
| **Agent support** | Auto-detects Claude Code, Cursor, etc. | Generic OpenAI proxy |
| **Protocol** | Same-protocol routing only | Cross-protocol translation |
| **Budget alerts** | Built-in SSE alerts | Not included |
| **Runs locally** | Yes | Self-hosted or cloud |

## How to save Claude API costs

KRouter's most common use case is cutting Claude Code costs by routing routine requests (code explanation, linting, simple Q&A) to cheaper DeepSeek or Gemini endpoints while keeping complex reasoning on Claude.

The **Balanced** preset handles this automatically — it picks the cheapest provider that scores within 20% of Claude's quality tier for each request type.

## Uninstalling KRouter

```bash
krouter stop
krouter uninstall     # removes daemon and config (~/.kinthai/krouter/)
```

This does not modify your agent configurations.

---

Need help? [Open an issue on GitHub](https://github.com/kinthaiofficial/krouter/issues).
