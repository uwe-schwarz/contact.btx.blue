/**
 * POST /api/contact
 */
export async function onRequestPost(context) {
  try {
    let input = await context.request.formData();
    let pretty = JSON.stringify([...input], null, 2);

    let content = "";
    for( var i of input ) {
      content += i[0] + ": " + i[1] + "\n";
    }

    let send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify({
            "personalizations": [
                { "to": [ {"email": "e38383@icloud.com",
                        "name": "Carina Schwarz"}]}
            ],
            "from": {
                "email": "contact@carinaschwarz.dog",
                "name": "Kontaktformular",
            },
            "subject": "Test Subject",
            "content": [{
                "type": "text/plain",
                "value": "Test message content\n\n" + content,
            }],
        }),
    });

    let respContent = "";
    // only send the mail on "POST", to avoid spiders, etc.
    if( request.method == "POST" ) {
        const resp = await fetch(send_request);
        const respText = await resp.text();

        respContent = resp.status + " " + resp.statusText + "\n\n" + respText;

    }

    return new Response(respContent, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (err) {
    return new Response('Error parsing JSON content', { status: 400 });
  }
}
