---
layout: ../../../layouts/DocsLayout.astro
title: KRouter 快速开始
description: 5 分钟安装并配置 KRouter。将 Claude Code、Cursor 等 AI Agent 自动路由到最便宜的 LLM Provider。
lang: zh
---

# KRouter 快速开始

KRouter 是一个本地 LLM 代理守护进程，自动将 AI Agent（Claude Code、Cursor、OpenClaw、Hermes）的请求路由到最便宜的可用 Provider。

## 安装

### macOS

从[下载页面](/zh/download)下载最新 DMG，或运行：

```bash
curl -fsSL https://github.com/kinthaiofficial/krouter/releases/latest/download/krouter-darwin.dmg -o krouter.dmg
open krouter.dmg
```

### Linux

```bash
# Debian/Ubuntu
curl -fsSL https://github.com/kinthaiofficial/krouter/releases/latest/download/krouter-linux.deb -o krouter.deb
sudo dpkg -i krouter.deb

# RPM（Fedora、RHEL）
curl -fsSL https://github.com/kinthaiofficial/krouter/releases/latest/download/krouter-linux.rpm -o krouter.rpm
sudo rpm -i krouter.rpm
```

### Windows

从[下载页面](/zh/download)下载安装包，运行 `krouter-setup.exe`。

## 工作原理

KRouter 在本地端口 **8402** 运行守护进程：

1. 扫描现有 Agent 配置（Claude Code、Cursor 等）
2. 自动继承其 API Key 和 Provider Endpoint
3. 实时评估每个请求的所有已接入 Provider
4. 将请求转发到最便宜的兼容 Provider

**同协议路由。** Anthropic 协议请求只路由到 Anthropic 兼容 Provider；OpenAI 协议请求只路由到 OpenAI 兼容 Provider。不做跨协议转换，信息无损失。

## 启动 KRouter

```bash
krouter start
```

KRouter 在后台运行。验证状态：

```bash
krouter status
```

## 配置 Agent

KRouter 会自动连接检测到的 Agent，无需修改任何 Agent 配置。

若 Agent 安装在非标准路径，请打开管理界面 `http://localhost:8403`，在 **Agents → 添加路径** 中更新。

## 路由模式

| 模式 | 行为 |
|------|------|
| **节省** | 始终选择最便宜的 Provider |
| **均衡** | 在质量最优选项 20% 范围内选最便宜的 |
| **质量** | 选择该模型系列排名最高的 Provider |

通过管理界面或命令行切换：

```bash
krouter mode saver     # 节省模式
krouter mode balanced  # 均衡模式
krouter mode quality   # 质量模式
```

## 预算控制

设置每日消费上限，避免意外超支：

```bash
krouter budget set 5.00   # 每日 $5.00 硬上限
```

KRouter 在到达上限 80% 和 95% 时发送 SSE 告警。到达 100% 时，所有请求被阻止直到次日重置。

查看今日消费：

```bash
krouter budget status
```

## 查看日志

```bash
krouter logs          # 实时追踪请求日志
krouter logs --today  # 仅显示今日请求
```

## 停止 KRouter

```bash
krouter stop
```

## KRouter vs LiteLLM 对比

| | KRouter | LiteLLM |
|---|---|---|
| **配置方式** | 零配置，自动继承 Agent 密钥 | 手动逐 Provider 填写 |
| **Agent 支持** | 自动检测 Claude Code、Cursor 等 | 通用 OpenAI 代理 |
| **路由协议** | 仅同协议路由 | 跨协议转换 |
| **预算告警** | 内置 SSE 告警 | 不包含 |
| **运行方式** | 本地运行 | 自托管或云端 |

## 卸载

```bash
krouter stop
krouter uninstall     # 删除守护进程和配置（~/.kinthai/krouter/）
```

此操作不会修改你的 Agent 配置。

---

需要帮助？[在 GitHub 提交 Issue](https://github.com/kinthaiofficial/krouter/issues)。
