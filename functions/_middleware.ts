import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Kontaktformular", email: "e38383@icloud.com" }],
    },
  ],
  from: {
    name: "Kontaktformular",
    email: "contact@carinaschwarz.dog",
  },
  respondWith: () => {
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  },
});
