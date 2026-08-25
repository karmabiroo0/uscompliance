/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "itxvilen5@gmail.com" }],
    subject: "New Contact Submission from " + e.record.get("name"),
    html: "<h2>New Contact Submission</h2>" +
          "<p><strong>Name:</strong> " + e.record.get("name") + "</p>" +
          "<p><strong>Email:</strong> " + e.record.get("email") + "</p>" +
          "<p><strong>Phone:</strong> " + e.record.get("phone") + "</p>" +
          "<p><strong>Service:</strong> " + e.record.get("service") + "</p>" +
          "<p><strong>Message:</strong></p>" +
          "<p>" + e.record.get("message") + "</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "contact_submissions");