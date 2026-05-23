export const zh = {
  nav: {
    agents: '支持 Agent',
    providers: '支持 Provider',
    download: '下载',
    docs: '文档',
    github: 'GitHub',
  },
  hero: {
    eyebrow: '智能 LLM 路由器',
    h1: '每次 AI Agent 请求节省 50–80% 费用',
    sub: 'krouter 自动将 Claude Code、Cursor、OpenClaw、Hermes 路由到最便宜的可用 Provider。无需配置，无需重复填写密钥。',
    cta_primary: '下载 macOS 版',
    cta_secondary: '在 GitHub 查看',
  },
  features: {
    heading: '一切所需，开箱即用',
    sub: '一个代理，所有 Provider，零额外配置。',
    items: [
      {
        title: '智能路由',
        desc: '节省 / 均衡 / 质量三种预设模式。请求在同协议内路由，无协议转换，信息无损失。',
      },
      {
        title: '零配置',
        desc: 'krouter 自动继承现有 agent 的 API Key 和 Endpoint，无需重新填写任何内容。',
      },
      {
        title: '预算控制',
        desc: '设置每日硬上限，在 80% 和 95% 时触发 SSE 告警，让账单永无意外。',
      },
      {
        title: '免费 Token 中心',
        desc: '精选免费 tier Provider 目录，一键配置，无需信用卡。',
      },
      {
        title: '完全私密',
        desc: '本地运行，API Key 不存磁盘，零数据上传，MIT 开源协议。',
      },
    ],
  },
  agents: {
    heading: '适配你现有的所有 Agent',
    sub: 'krouter 自动继承 Agent 配置，无需任何重新配置。',
    note: '任何支持 OpenAI 兼容或 Anthropic 兼容协议的 Agent 均可使用。',
  },
  providers: {
    heading: '覆盖所有主流 Provider',
    sub: 'krouter 实时评估所有已接入的 Provider，自动选择最便宜的合适选项。',
  },
  how: {
    heading: '两步即可上手',
    steps: [
      {
        num: '01',
        title: '安装 krouter',
        desc: '下载运行，krouter 在数秒内自动连接你现有的 Claude Code、Cursor 等 Agent 配置。',
      },
      {
        num: '02',
        title: '每次请求自动路由',
        desc: '每次 API 调用都会在所有已接入 Provider 中实时评估，最便宜的兼容选项自动胜出。',
      },
    ],
  },
  cta: {
    heading: '立即开始节省',
    sub: '免费开源，无需注册账号。',
    download: '下载 krouter',
    github: '在 GitHub 加星',
  },
  footer: {
    copy: '© 2026 kinthai.ai',
    github: 'GitHub',
    license: 'MIT 协议',
    tagline: '为 AI Agent 设计的智能 LLM 路由器。',
  },
  download: {
    heading: '下载 krouter',
    sub: '支持 macOS、Linux 和 Windows。',
    latest: '最新版本',
    macos: 'macOS (DMG)',
    linux_deb: 'Linux (DEB)',
    linux_rpm: 'Linux (RPM)',
    windows: 'Windows (EXE)',
    checksums: '校验和',
    changelog: '查看更新日志',
  },
  changelog: {
    heading: '更新日志',
    sub: '版本发布说明与历史记录。',
  },
  docs: {
    heading: '快速开始',
  },
} as const;
