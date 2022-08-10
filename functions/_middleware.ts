import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = (context) => mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Kontaktformular", email: "uwe@idle.btx.blue" }],
    },
  ],
  from: {
    name: "Kontaktformular",
    email: "contact@carinaschwarz.dog",
  },
  reply_to: context.request.formData.get('mail'),
  respondWith: () => {
    return new Response(
      null, {
        status: 302,
        headers: {
          location: "/nachricht-gesendet/"
        },
      });
  },
})(context);
