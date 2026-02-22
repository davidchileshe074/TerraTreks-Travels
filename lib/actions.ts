"use server";

export async function submitContactForm(formData: FormData) {
    // Mock artificial delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Contact form submitted:", { name, email, message });

    // In a real app, you would send an email or save to DB here
    return {
        success: true,
        message: "Thank you for your inquiry. Our travel designers will contact you shortly."
    };
}
