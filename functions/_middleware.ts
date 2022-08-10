import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = (context) => mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Kontaktformular", email: "uwe@idle.btx.blue" }],
      reply_to: {
        name: context.request.formData.get('name'),
        email: "mail@example.org",
      },
      headers: { "x-test": "foobar" },
    },
  ],
  from: {
    name: "ACME Support",
    email: "formular@carinaschwarz.dog",
  },
  subject: context.env.DKIM_PRIVATE_KEY,
  respondWith: () => {
    return new Response(null, {
      status: 302,
      headers: {
        location: "/nachricht-gesendet/"
      },
    });
  },
})(context);
