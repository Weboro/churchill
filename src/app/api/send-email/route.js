import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      identity,
      firstName,
      lastName,
      email,
      verifyEmail,
      incidentDate,
      incidentTime,
      isOngoing,
      incidentSeverity,
      incidentDescription,
      otherIncidentType,
      reportingAbout,
      osUsed,
      browserUsed,
      deviceUsed,
      incidentType,
      impacted,
      attachedFiles: attachments, // Changed to 'attachments' (plural) for clarity
    } = await req.json();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare mail options
    let mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: "kuickelsayuj@gmail.com",
      subject: `mail by ${firstName} ${lastName}`, // Fixed the subject string
      html: `<table
  cellpadding="0"
  cellspacing="0"
  id="m_6364923093846910505contentOuter"
  style="
    width: 100%;
    border: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: #111;
    font-size: 13px;
    border-collapse: collapse;
    letter-spacing: normal;
    background-color: #f0f0f0;
    background-image: url();
  "
  width="100%"
>
  <tbody>
    <tr>
      <td
        align="center"
        style="border: 0; padding-top: 10px; padding-bottom: 20px"
      >
        <table
          cellpadding="0"
          cellspacing="0"
          id="m_6364923093846910505contentInner"
          style="
            width: 600px;
            border: 0;
            border-collapse: collapse;
            table-layout: fixed;
            background-color: #fff;
          "
          width="600px"
        >
          <tbody>
            <tr>
              <td
                style="border: 0; word-wrap: break-word; word-break: break-word"
                valign="top"
              >
                <div id="m_6364923093846910505page-container">
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      min-width: 100%;
                      max-width: 100%;
                      table-layout: fixed;
                      border: 0;
                      border-collapse: collapse;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      word-wrap: break-word;
                                      word-break: break-word;
                                      border: 0;
                                      padding: 0 0;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                    "
                                  >
                                    <p
                                      style="width: 100%; padding: 0; margin: 0"
                                    >
                                      <img
                                        alt=""
                                        height="112.812"
                                        src="https://ik.imagekit.io/z6yqvf1sq/Banner%2019.jpg?updatedAt=1726710805004"
                                        style="
                                          width: 100%;
                                          max-width: 100%;
                                          vertical-align: top;
                                          display: block;
                                        "
                                        width="600"
                                        class="CToWUd a6T"
                                        data-bit="iit"
                                        tabindex="0"
                                      />
                                      <div
                                        class="a6S"
                                        dir="ltr"
                                        style="
                                          opacity: 0.01;
                                          left: 601.5px;
                                          top: 87px;
                                        "
                                      >
                                        <span
                                          data-is-tooltip-wrapper="true"
                                          class="a5q"
                                          jsaction="JIbuQc:.CLIENT"
                                          ><button
                                            class="VYBDae-JX-I VYBDae-JX-I-ql-ay5-ays CgzRE"
                                            jscontroller="PIVayb"
                                            jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox;focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;"
                                            data-idom-class="CgzRE"
                                            jsname="hRZeKc"
                                            aria-label="Download attachment "
                                            data-tooltip-enabled="true"
                                            data-tooltip-id="tt-c21"
                                            data-tooltip-classes="AZPksf"
                                            id=""
                                            jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTgxMDU2MDkzNDgxNjc3NzczMyJd; 43:WyJpbWFnZS9qcGVnIl0."
                                          >
                                            <span
                                              class="OiePBf-zPjgPe VYBDae-JX-UHGRz"
                                            ></span
                                            ><span
                                              class="bHC-Q"
                                              jscontroller="LBaJxb"
                                              jsname="m9ZlFb"
                                              soy-skip=""
                                              ssk="6:RWVI5c"
                                            ></span
                                            ><span
                                              class="VYBDae-JX-ank-Rtc0Jf"
                                              jsname="S5tZuc"
                                              aria-hidden="true"
                                              ><span
                                                class="bzc-ank"
                                                aria-hidden="true"
                                                ><svg
                                                  viewBox="0 -960 960 960"
                                                  height="20"
                                                  width="20"
                                                  focusable="false"
                                                  class="aoH"
                                                >
                                                  <path
                                                    d="M480-336L288-528l51-51L444-474V-816h72v342L621-579l51,51L480-336ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72H696v-72h72v72q0,29.7-21.16,50.85T695.96-192H263.72Z"
                                                  ></path></svg></span
                                            ></span>
                                            <div class="VYBDae-JX-ano"></div>
                                          </button>
                                          <div
                                            class="ne2Ple-oshW8e-J9"
                                            id="tt-c21"
                                            role="tooltip"
                                            aria-hidden="true"
                                          >
                                            Download
                                          </div></span
                                        >
                                      </div>
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      height: 20px;
                                      border: 0;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                    "
                                  >
                                    <p
                                      style="
                                        height: 20px;
                                        margin: 0;
                                        padding: 0;
                                      "
                                    ></p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                font-size: 13px;
                                letter-spacing: normal;
                                font-family: Arial, Helvetica, sans-serif;
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      word-wrap: break-word;
                                      word-break: break-word;
                                      border: 0;
                                      padding: 6px 16px;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                      font-family: Arial, Helvetica, sans-serif;
                                    "
                                  >
                                    <p style="padding: 0; margin: 0">
                                      <font size="2">Dear Student,</font>
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <strong>identity</strong>:  ${identity}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      <strong>firstName</strong>:  ${firstName}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      <strong>lastName</strong>:  ${lastName}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      <strong>email</strong>:  ${email}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      <strong>incidentDate</strong>:  ${incidentDate}</p>

                                    <p style="padding: 0; margin: 0">
                                      <strong>incidentTime</strong>:  ${incidentTime}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      <strong>isOngoing</strong>:  ${isOngoing}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      <strong>incidentSeverity</strong>:  ${incidentSeverity}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      <strong>incidentDescription</strong>:  ${incidentDescription}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      otherIncidentType</strong>:  ${otherIncidentType}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      reportingAbout</strong>:  ${reportingAbout}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      osUsed</strong>:  ${osUsed}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      browserUsed</strong>:  ${browserUsed}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      deviceUsed</strong>:  ${deviceUsed}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      incidentType</strong>:  ${incidentType.join(
                                        ", "
                                      )}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                    <p style="padding: 0; margin: 0">
                                      impacted</strong>:  ${impacted.join(", ")}
                                    </p>
                                    <p style="padding: 0; margin: 0">
                                      <font size="2"><br /></font>
                                    </p>

                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      height: 20px;
                                      border: 0;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                    "
                                  >
                                    <p
                                      style="
                                        height: 20px;
                                        margin: 0;
                                        padding: 0;
                                      "
                                    ></p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      height: 20px;
                                      border: 0;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                    "
                                  >
                                    <p
                                      style="
                                        height: 20px;
                                        margin: 0;
                                        padding: 0;
                                      "
                                    ></p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                font-size: 13px;
                                letter-spacing: normal;
                                font-family: Arial, Helvetica, sans-serif;
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      word-wrap: break-word;
                                      word-break: break-word;
                                      border: 0;
                                      padding: 6px 16px;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                      font-family: Arial, Helvetica, sans-serif;
                                    "
                                  >
                                    <p
                                      style="
                                        text-align: center;
                                        padding: 0;
                                        margin: 0;
                                      "
                                    >
                                      <span style="padding: 0; margin: 0"
                                        >&nbsp;Churchill Institute of Higher
                                        Education.</span
                                      ><font
                                        style="padding: 0; margin: 0"
                                      ></font>
                                    </p>
                                    <p
                                      style="
                                        text-align: center;
                                        padding: 0;
                                        margin: 0;
                                      "
                                    >
                                      <span style="padding: 0; margin: 0"
                                        >CRICOS Provider Code 04082E | TEQSA
                                        Provider Number PRV14305.</span
                                      >
                                    </p>
                                    <p
                                      style="
                                        text-align: center;
                                        padding: 0;
                                        margin: 0;
                                      "
                                    >
                                      <span style="padding: 0; margin: 0"
                                        >&nbsp;ABN 91 612 507 141.</span
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      height: 20px;
                                      border: 0;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                    "
                                  >
                                    <p
                                      style="
                                        height: 20px;
                                        margin: 0;
                                        padding: 0;
                                      "
                                    ></p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                font-size: 13px;
                                letter-spacing: normal;
                                font-family: Arial, Helvetica, sans-serif;
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      word-wrap: break-word;
                                      word-break: break-word;
                                      border: 0;
                                      padding: 6px 16px;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                      font-family: Arial, Helvetica, sans-serif;
                                    "
                                  >
                                    <p
                                      style="
                                        text-align: justify;
                                        padding: 0;
                                        margin: 0;
                                        line-height: 9pt;
                                      "
                                    >
                                      <span style="padding: 0; margin: 0"
                                        ><font color="#606060"
                                          >Privacy Notice: This email and any
                                          files transmitted with it are
                                          confidential and intended solely for
                                          the use of the individual or entity to
                                          whom they are addressed. If you have
                                          received this email in error, please
                                          notify the sender and delete it from
                                          your system.</font
                                        ></span
                                      ><br />
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      height: 20px;
                                      border: 0;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                    "
                                  >
                                    <p
                                      style="
                                        height: 20px;
                                        margin: 0;
                                        padding: 0;
                                      "
                                    ></p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`,
      // cc: "info@example.co",
      attachments:
        attachments &&
        attachments.map((attachment) => ({
          filename: attachment.name,
          content: Buffer.from(attachment.data, "base64"),
          contentType: attachment.type,
        })),
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
