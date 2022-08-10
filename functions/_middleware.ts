import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = (context) => mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Kontaktformular", email: "uwe@idle.btx.blue" }],
    },
  ],
  from: {
    name: "ACME Support",
    email: "formular@carinaschwarz.dog",
  },
  reply_to: {
    name: context.env.DKIM_PRIVATE_KEY,
    email: "mail@example.org",
  },
  respondWith: () => {
    return new Response(null, {
      status: 302,
      headers: {
        location: "/nachricht-gesendet/"
      },
    });
  },
})(context);
