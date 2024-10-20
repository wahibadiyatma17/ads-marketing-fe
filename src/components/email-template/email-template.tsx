import * as React from "react";

interface EmailTemplateProps {
  fullname: string;
  email: string;
  businessEntityName: string;
  budget: string;
  date: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullname,
  email,
  businessEntityName,
  budget,
  date,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '0px 20px', color: '#333' }}>
    <p style={{color: '#000000'}}>السلام عليكم ورحمة الله وبركاته,</p>
    <p style={{color: '#000000', marginTop:'-12px'}}>A new Learn Quran advertising client has registered with the following details:</p>

    <table style={{ width: '100%', borderCollapse: 'collapse', margin:'24px 0px' }}>
      <tbody>
        <tr>
          <td style={{ fontWeight: 'bold', width:'160px'}}>Full Name</td>
          <td style={{ padding: '8px 0', textAlign: 'center', width: '10px' }}>:</td>
          <td style={{ paddingLeft: '10px' }}>{fullname}</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 'bold', width:'160px'}}>Email</td>
          <td style={{ padding: '8px 0', textAlign: 'center' }}>:</td>
          <td style={{ paddingLeft: '10px' }}>{email}</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 'bold', width:'160px'}}>Business/Entity Name</td>
          <td style={{ padding: '8px 0', textAlign: 'center' }}>:</td>
          <td style={{ paddingLeft: '10px' }}>{businessEntityName}</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 'bold', width:'160px' }}>Advertising Budget</td>
          <td style={{ padding: '8px 0', textAlign: 'center' }}>:</td>
          <td style={{ paddingLeft: '10px' }}>{budget}</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 'bold', width:'160px' }}>Date</td>
          <td style={{ padding: '8px 0', textAlign: 'center' }}>:</td>
          <td style={{ paddingLeft: '10px' }}>{date}</td>
        </tr>
      </tbody>
    </table>
    <p style={{color: '#000000'}}>جزاك الله خيرًا,</p>
    <p style={{color: '#000000', marginTop:'-12px'}}>Admin Learn Quran</p>
  </div>
);

export default EmailTemplate;
