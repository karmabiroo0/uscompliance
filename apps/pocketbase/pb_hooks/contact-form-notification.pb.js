/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const name = e.record.get("name");
  const email = e.record.get("email");
  const phone = e.record.get("phone");
  const service = e.record.get("service");
  const message = e.record.get("message");
  const created = e.record.get("created");
  
  // Format timestamp as readable date/time
  const submissionDate = new Date(created).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/New_York'
  });
  
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #003366; color: white; padding: 20px; text-align: center; border-radius: 4px 4px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .header p { margin: 5px 0 0 0; font-size: 14px; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 4px 4px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #003366; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
        .field-value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #003366; }
        .message-box { background-color: white; padding: 15px; border-left: 3px solid #003366; margin-top: 5px; white-space: pre-wrap; word-wrap: break-word; }
        .footer { background-color: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #ddd; margin-top: 20px; }
        .compliance-notice { background-color: #e8f4f8; padding: 10px; border-left: 3px solid #0066cc; margin-top: 15px; font-size: 12px; color: #333; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>USA Compliance</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">Sender Name</div>
            <div class="field-value">` + name + `</div>
          </div>
          
          <div class="field">
            <div class="field-label">Sender Email</div>
            <div class="field-value"><a href="mailto:` + email + `">` + email + `</a></div>
          </div>
          
          <div class="field">
            <div class="field-label">Sender Phone</div>
            <div class="field-value"><a href="tel:` + phone + `">` + phone + `</a></div>
          </div>
          
          <div class="field">
            <div class="field-label">Service Interested In</div>
            <div class="field-value">` + service + `</div>
          </div>
          
          <div class="field">
            <div class="field-label">Message</div>
            <div class="message-box">` + message + `</div>
          </div>
          
          <div class="field">
            <div class="field-label">Submission Timestamp</div>
            <div class="field-value">` + submissionDate + ` (EST)</div>
          </div>
          
          <div class="compliance-notice">
            <strong>Compliance Notice:</strong> This submission was received through our contact form and is subject to USA data protection regulations. Please handle this information in accordance with applicable privacy laws.
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated notification from USA Compliance Contact System</p>
          <p>Submission ID: ` + e.record.id + `</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  const mailMessage = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: "USA Compliance"
    },
    to: [{ address: "itxvilen5@gmail.com" }],
    subject: "New Contact Form Submission - USA Compliance",
    html: htmlBody
  });
  
  $app.newMailClient().send(mailMessage);
  e.next();
}, "contact_submissions");