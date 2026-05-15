const adminInquiryTemplate = ({ name, email, phone, message }) => {
  return `
  <html>
    <head>
      <style>
        body{
          font-family: Arial, sans-serif;
        }

        table{
          width: 100%;
          border-collapse: collapse;
        }

        th{
          background: #00d2ff;
          color: #fff;
          padding: 10px;
          text-align: left;
        }

        td{
          padding: 10px;
          border: 1px solid #ddd;
        }

        .header{
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 15px;
          color: #0a3d91;
        }
      </style>
    </head>

    <body>

      <div class="header">
        New Inquiry Details
      </div>

      <table>
        <tr>
          <th>Field</th>
          <th>Customer Information</th>
        </tr>

        <tr>
          <td><strong>Full Name</strong></td>
          <td>${name}</td>
        </tr>

        <tr>
          <td><strong>Email Address</strong></td>
          <td>${email}</td>
        </tr>

        <tr>
          <td><strong>Phone Number</strong></td>
          <td>${phone}</td>
        </tr>

        <tr>
          <td><strong>Message / Plan</strong></td>
          <td>${message}</td>
        </tr>
      </table>

      <p style="font-size:12px;color:#777;margin-top:15px;">
        This email was sent from your website contact form.
      </p>

    </body>
  </html>
  `;
};

export default adminInquiryTemplate;
