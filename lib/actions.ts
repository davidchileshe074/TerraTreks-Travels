"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
    const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        date: formData.get("date") as string,
        message: formData.get("message") as string,
        timestamp: new Date().toISOString(),
    };

    console.log("--- New Connection Request ---");
    console.table(data);

    try {
        if (process.env.RESEND_API_KEY) {
            const { error } = await resend.emails.send({
                from: 'Terratreks Connect <onboarding@resend.dev>',
                to: ['travel@terratrekstravel.com'],
                subject: `NEW INQUIRY: ${data.name}`,
                html: `
                    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; color: #111D23; border: 1px solid #f0f0f0; border-radius: 20px;">
                        <h1 style="color: #D4AF37; font-size: 24px; font-weight: normal; margin-bottom: 30px; letter-spacing: 2px; text-transform: uppercase;">New Journey Connection</h1>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
                            <div>
                                <p style="text-transform: uppercase; font-size: 10px; tracking: 2px; color: #999; margin-bottom: 5px;">Client Name</p>
                                <p style="font-size: 14px; margin: 0;">${data.name}</p>
                            </div>
                            <div>
                                <p style="text-transform: uppercase; font-size: 10px; tracking: 2px; color: #999; margin-bottom: 5px;">Email Address</p>
                                <p style="font-size: 14px; margin: 0;">${data.email}</p>
                            </div>
                            <div>
                                <p style="text-transform: uppercase; font-size: 10px; tracking: 2px; color: #999; margin-bottom: 5px;">Phone Number</p>
                                <p style="font-size: 14px; margin: 0;">${data.phone}</p>
                            </div>
                            <div>
                                <p style="text-transform: uppercase; font-size: 10px; tracking: 2px; color: #999; margin-bottom: 5px;">Preferred Start Date</p>
                                <p style="font-size: 14px; margin: 0;">${new Date(data.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                            </div>
                        </div>

                        ${data.message ? `
                        <div style="margin-top: 30px; padding: 20px; background: #fafafa; border-radius: 10px;">
                            <p style="text-transform: uppercase; font-size: 10px; tracking: 2px; color: #999; margin-bottom: 10px;">The Narrative (Additional Notes)</p>
                            <p style="font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
                        </div>
                        ` : ''}

                        <hr style="border: none; border-top: 1px solid #f0f0f0; margin: 30px 0;" />
                        <p style="font-size: 10px; color: #ccc; text-align: center;">Transmitted via Terratreks Secure Booking at ${data.timestamp}</p>
                    </div>
                `
            });

            if (error) {
                console.error("Resend Error:", error);
                throw new Error("Email service failed");
            }
        } else {
            console.warn("RESEND_API_KEY not found. Logging data without sending email.");
        }
    } catch (error) {
        console.error("Internal Server Error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again or contact us via WhatsApp."
        };
    }

    return {
        success: true,
        message: "Your inquiry has been received. Our team will contact you within 4–8 hours to start planning your journey."
    };
}
