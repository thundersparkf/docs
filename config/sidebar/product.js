module.exports = [
  {
    type: "category",
    label: "Getting Started",
    items: [
      "product",
      // "user-guide/getting-started/glossary",
      {
        "Setup your account": [
          "user-guide/setup-your-account/create-an-account",
          "user-guide/setup-your-account/configure-your-profile",
          "user-guide/setup-your-account/configure-account-details",
          "user-guide/add-agent-settings",
          "user-guide/add-inbox-settings",
          "user-guide/setting-up-chatwootwidget",
          "user-guide/add-teams-settings",
          "user-guide/add-label-settings",
          "user-guide/integrations",
          "user-guide/applications",
        ],
      },
    ],
    collapsed: false,
    collapsible: false,
  },
  {
    collapsed: false,
    collapsible: true,
    label: "Channels",
    type: "category",
    items: [
      {
        "Website Live Chat": [
          "product/channels/live-chat/create-website-channel",
          "product/channels/live-chat/sdk/setup",
          "product/channels/live-chat/sdk/identity-validation",
          "product/channels/live-chat/conversation-continuity",
          {
            "Setup Instructions": [
              "product/channels/live-chat/webflow-integration",
              "product/channels/live-chat/integrations/docusaurus",
              "product/channels/live-chat/integrations/google-tag-manager",
              "product/channels/live-chat/integrations/react-native-widget",
              "product/channels/live-chat/integrations/nextjs",
              "product/channels/live-chat/integrations/wordpress",
            ],
          },
        ],
      },
      "product/channels/facebook",
      "product/channels/instagram",
      "product/channels/twitter",
      "product/channels/twilio-whatsapp-sms",
      {
        "API Channel": [
          "product/channels/api/create-channel",
          "product/channels/api/send-messages",
          "product/channels/api/receive-messages",
          "product/channels/api/client-apis",
        ],
      },
      {
        "Email": [
          "product/channels/email/create-channel",
          "product/channels/email/configure-imap",
          "product/channels/email/configure-smtp",
          {
            "Gmail": [
              "product/channels/email/gmail/enable-imap",
              "product/channels/email/gmail/less-secure-access",
              "product/channels/email/gmail/generate-app-password",
            ]
          }
        ],
      },
      "product/channels/supported-features",
    ],
  },
  {
    collapsed: false,
    collapsible: true,
    label: "Features",
    type: "category",
    items: [
      "product/features/campaigns",
      "user-guide/features/canned-responses",
      "user-guide/features/custom-attributes",
      "user-guide/contacts",
      "product/inbox/routing-conversations-round-robin",
      "user-guide/features/multilingual-support",
      "user-guide/reports",
      "user-guide/conversation-workflow",
      "product/others/advanced-conversation-filters",
      {
        type: "category",
        label: "Integrations",
        items: ["product/channels/live-chat/integrations/dialogflow", "product/features/webhooks"]
      }
    ],
  },
  {
    collapsed: false,
    collapsible: true,
    label: "Advanced",
    type: "category",
    items: [
      "product/others/agent-bots",
      "product/others/interactive-messages",
      "product/others/webhook-events",
      "product/others/websocket-events",
      "product/others/cookies",
    ],
  },
  { collapsed: false,
    collapsible: true,
    label: "Mobile App",
    type: "category",
    items: ["product/mobile-app/android", "product/mobile-app/ios"],
  },
];
