import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = (context) => mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Kontaktformular", email: "uwe@idle.btx.blue" }],
      headers: { "x-test": "foobar" },
    },
  ],
  from: {
    name: "ACME Support",
    email: "formular@carinaschwarz.dog",
  },
  subject: context.formData.get('name'),
  respondWith: () => {
    return new Response(null, {
      status: 302,
      headers: {
        location: "/nachricht-gesendet/"
      },
    });
  },
})(context);
