module.exports = {
  docs: [
    {
      type: "category",
      label: "💡 Getting Started",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "🚀 Get started",
          collapsed: false,
          items: [
            {
              type: "category",
              label: "📦 Installation",
              collapsed: false,
              items: [
                "installation/windows",
                "installation/macos",
                "installation/linux",
              ],
            },
            "installation/fonts",
            "installation/prompt",
            "installation/customize",
            "installation/upgrade",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "⚙️ Configuration",
      link: {
        type: 'doc',
        id: 'configuration/introduction',
      },
      items: [
        "configuration/general",
        "configuration/block",
        "configuration/segment",
        "configuration/sample",
        "configuration/title",
        "configuration/colors",
        "configuration/templates",
        "configuration/secondary-prompt",
        "configuration/debug-prompt",
        "configuration/transient",
        "configuration/line-error",
        "configuration/tooltips",
      ],
    },
    {
      type: "category",
      label: "🌟 Segments",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "🧰 CLI",
          collapsed: true,
          items: [
            "segments/cli/angular",
            "segments/cli/argocd",
            "segments/cli/bazel",
            "segments/cli/buf",
            "segments/cli/bun",
            "segments/cli/cmake",
            "segments/cli/deno",
            "segments/cli/docker",
            "segments/cli/firebase",
            "segments/cli/flutter",
            "segments/cli/gitversion",
            "segments/cli/helm",
            "segments/cli/kubectl",
            "segments/cli/mvn",
            "segments/cli/nbgv",
            "segments/cli/nix-shell",
            "segments/cli/npm",
            "segments/cli/nx",
            "segments/cli/pnpm",
            "segments/cli/quasar",
            "segments/cli/react",
            "segments/cli/talosctl",
            "segments/cli/terraform",
            "segments/cli/ui5tooling",
            "segments/cli/umbraco",
            "segments/cli/unity",
            "segments/cli/xmake",
            "segments/cli/yarn",
          ]
        },
        {
          type: "category",
          label: "☁️ Cloud",
          collapsed: true,
          items: [
            "segments/cloud/aws",
            "segments/cloud/az",
            "segments/cloud/azd",
            "segments/cloud/azfunc",
            "segments/cloud/cds",
            "segments/cloud/cf",
            "segments/cloud/cftarget",
            "segments/cloud/gcp",
            "segments/cloud/pulumi",
            "segments/cloud/sitecore",
          ]
        },
        {
          type: "category",
          label: "🩺 Health",
          collapsed: true,
          items: [
            "segments/health/nightscout",
            "segments/health/strava",
            "segments/health/withings",
          ]
        },
        {
          type: "category",
          label: "✍️ Languages",
          collapsed: true,
          items: [
            "segments/languages/crystal",
            "segments/languages/dart",
            "segments/languages/dotnet",
            "segments/languages/elixir",
            "segments/languages/golang",
            "segments/languages/haskell",
            "segments/languages/java",
            "segments/languages/julia",
            "segments/languages/kotlin",
            "segments/languages/lua",
            "segments/languages/mojo",
            "segments/languages/node",
            "segments/languages/ocaml",
            "segments/languages/perl",
            "segments/languages/php",
            "segments/languages/python",
            "segments/languages/r",
            "segments/languages/ruby",
            "segments/languages/rust",
            "segments/languages/swift",
            "segments/languages/vala",
          ]
        },
        {
          type: "category",
          label: "🎧 Music",
          collapsed: true,
          items: [
            "segments/music/lastfm",
            "segments/music/spotify",
            "segments/music/ytm",
          ]
        },
        {
          type: "category",
          label: "🗂️ Source control",
          collapsed: true,
          items: [
            "segments/scm/fossil",
            "segments/scm/git",
            "segments/scm/mercurial",
            "segments/scm/plastic",
            "segments/scm/sapling",
            "segments/scm/svn",
          ]
        },
        {
          type: "category",
          label: "🖥️ System",
          collapsed: true,
          items: [
            "segments/system/battery",
            "segments/system/command",
            "segments/system/connection",
            "segments/system/executiontime",
            "segments/system/os",
            "segments/system/path",
            "segments/system/project",
            "segments/system/root",
            "segments/system/session",
            "segments/system/shell",
            "segments/system/status",
            "segments/system/sysinfo",
            "segments/system/text",
            "segments/system/time",
            "segments/system/upgrade",
            "segments/system/winreg",
          ]
        },
        {
          type: "category",
          label: "🌐 Web",
          collapsed: true,
          items: [
            "segments/web/brewfather",
            "segments/web/carbonintensity",
            "segments/web/ipify",
            "segments/web/jsonapi",
            "segments/web/nba",
            "segments/web/owm",
            "segments/web/wakatime",
          ]
        },
      ],
    },
    {
      type: "category",
      label: "🤝 Contributing",
      collapsed: true,
      items: [
        "contributing/started",
        "contributing/segment",
        "contributing/git",
        "contributing/plastic",
      ],
    },
    "themes",
    "share",
    "faq",
    "migrating",
    "contributors",
  ],
};
