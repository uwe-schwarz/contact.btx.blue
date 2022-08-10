import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = (context) => mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Some User", email: "uwe@idle.btx.blue" }],
      "dkim_domain": "example.com", // The value has to be the domain you added DKIM records to and where you're sending your email from
      "dkim_selector": "mailchannels",
      "dkim_private_key": context.env.DKIM_PRIVATE_KEY
    },
  ],
  from: {
    name: "ACME Support",
    email: "support@example.com",
  },
  reply_to: {
    name: "reply",
    email: "mail@example.org",
  },
  respondWith: () => {
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  },
})(context);
