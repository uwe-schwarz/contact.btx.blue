import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Kontaktformular", email: "uwe@idle.btx.blue" }],
    },
  ],
  from: {
    name: "Kontaktformular",
    email: "contact@carinaschwarz.dog",
  },
  reply_to: (async ({ request })) => { return { name: "reply", email: request.formData}},
  respondWith: () => {
    return new Response(null, {
      status: 302,
      headers: {
        location: "/nachricht-gesendet/"
      },
    });
  },
});
