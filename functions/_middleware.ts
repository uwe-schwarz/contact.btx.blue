import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = (async ({ request }) => mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Kontaktformular", email: "uwe@idle.btx.blue" }],
    },
  ],
  from: {
    name: "Kontaktformular",
    email: "contact@carinaschwarz.dog",
  },
  respondWith: () => {
    return new Response(null, {
      status: 302,
      headers: {
        location: "/nachricht-gesendet/"
      },
    });
  },
}));
