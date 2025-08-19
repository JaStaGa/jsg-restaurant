import nodemailer, {
    type Transporter,
    type SentMessageInfo,
    type TestAccount,
} from "nodemailer";

let transporter: Transporter | null = null;

export async function getTransporter(): Promise<Transporter> {
    if (transporter) return transporter;
    const acc: TestAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
        host: acc.smtp.host,
        port: acc.smtp.port,
        secure: acc.smtp.secure,
        auth: { user: acc.user, pass: acc.pass },
    });
    return transporter;
}

export function previewUrl(info: SentMessageInfo): string | false {
    return nodemailer.getTestMessageUrl(info);
}
