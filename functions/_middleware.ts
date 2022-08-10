import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = ({env}) => mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Kontaktformular", email: "uwe@idle.btx.blue" }],
      reply_to: {
        name: "reply_to",
        email: "mail@example.org",
      },
      headers: { "x-test": "foobar" },
    },
  ],
  from: {
    name: "ACME Support",
    email: "formular@carinaschwarz.dog",
  },
  subject: env.DKIM_PRIVATE_KEY,
  respondWith: () => {
    return new Response(null, {
      status: 302,
      headers: {
        location: "/nachricht-gesendet/"
      },
    });
  },
});
