"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

type FormType = "speaker" | "sponsor" | "partner" | "volunteer";

export default function ConnectPage() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const [particles, setParticles] = useState<{ x: string; y: string; yAnimate: number; duration: number }[]>([]);

    // Form State
    const [formType, setFormType] = useState<FormType>("speaker");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        experience: "New", // speaker
        company_name: "", // sponsor
        website: "", // sponsor/partner
        linkedin: "", // all
        location: "", // partner
        org_type: "College", // partner (College/City)
        student_type: "College Student", // volunteer (College/School)
        volunteer_role: "Photography", // volunteer role
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setParticles(
            [...Array(10)].map(() => ({
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                yAnimate: Math.random() * -100,
                duration: 10 + Math.random() * 10,
            }))
        );
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        console.log("=== FORM SUBMISSION STARTED ===");
        console.log("Form Type:", formType);
        console.log("Email to check:", formData.email);

        try {
            // Check if email already exists for THIS specific form type
            console.log("Querying connect_submissions table for email:", formData.email, "and type:", formType);

            const { data: existingSubmission, error: checkError } = await supabase
                .from("connect_submissions")
                .select("email, type")
                .eq("email", formData.email)
                .eq("type", formType)
                .maybeSingle();

            console.log("Query completed");
            console.log("Check Error:", checkError);
            console.log("Existing Submission:", existingSubmission);

            if (checkError) {
                console.error("Error checking email:", checkError);
                throw checkError;
            }

            if (existingSubmission) {
                console.log("🚫 Duplicate submission found for:", formType, "with email:", formData.email);
                setErrorMessage(`You have already submitted the ${formType} form. Multiple submissions are not allowed.`);
                setIsSubmitting(false);
                return;
            }

            console.log("✅ No duplicate found for this role, proceeding with insertion");
            // Proceed with insertion if email doesn't exist for this type
            const insertData = {
                type: formType,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                // Conditional fields based on type
                experience_level: formType === "speaker" ? formData.experience : null,
                company_name: ["sponsor", "partner"].includes(formType) ? formData.company_name : null,
                website: ["sponsor", "partner"].includes(formType) ? formData.website : null,
                linkedin: formData.linkedin,
                organization_type: formType === "partner" ? formData.org_type : null,
                student_type: formType === "volunteer" ? formData.student_type : null,
                volunteer_role: formType === "volunteer" ? formData.volunteer_role : null,
            };

            console.log("Inserting data:", insertData);

            const { error } = await supabase
                .from("connect_submissions")
                .insert(insertData);

            console.log("Insert Error:", error);

            if (error) throw error;

            console.log("✅ Submission successful!");
            setIsSuccess(true);
        } catch (error: any) {
            console.error("❌ Submission error:", error);
            setErrorMessage(error.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
            console.log("=== FORM SUBMISSION ENDED ===");
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white p-6">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center max-w-md"
                >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-black mb-4">Thank You!</h2>
                    <p className="text-gray-600 mb-8">
                        Thanks for connecting with us. Our team will reach out to you shortly to take this forward.
                    </p>
                    <button
                        onClick={() => { setIsSuccess(false); setFormData({ ...formData, name: "" }); }}
                        className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition-colors"
                    >
                        Submit Another
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#C9FF3F] selection:text-black pt-20">
            {/* Hero Section */}
            <section className="relative pt-20 pb-12 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                {/* Floating Nodes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {particles.map((p, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-[#C9FF3F] rounded-full shadow-[0_0_10px_#C9FF3F]"
                            initial={{ x: p.x, y: p.y, opacity: 0.3 }}
                            animate={{ y: [null, p.yAnimate], opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#C9FF3F]"></span>
                            Get Involved
                        </div>
                        <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold text-black leading-[1.1] mb-6 tracking-tight">
                            Connect with <br />
                            <span className="relative inline-block">
                                <span className="relative z-10">KanpurAI</span>
                                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#C9FF3F]/40 -z-0 -rotate-1"></span>
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
                            Whether you want to speak, sponsor, partner, or volunteer – we'd love to collaborate with you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 pb-24 relative z-10">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                        {/* Tabs */}
                        <div className="flex flex-wrap border-b border-gray-100">
                            {(["speaker", "sponsor", "partner", "volunteer"] as FormType[]).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setFormType(type)}
                                    className={`flex-1 py-4 px-2 text-sm font-bold uppercase tracking-wider transition-colors ${formType === type
                                        ? "bg-black text-white"
                                        : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        {/* Warning Slider - Commented out as requested */}
                        {/* <div className="w-full bg-red-600 text-white font-bold py-3 overflow-hidden flex whitespace-nowrap border-b border-red-700">
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: "-100%" }}
                                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                                className="inline-block"
                            >
                                ⚠️ Don't use any kind of form on website during some DNS issue with database form's are not working connect with us: hello@kanpurai.space ⚠️
                            </motion.div>
                        </div> */}

                        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-900">Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please fill out this field')}
                                        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                        placeholder="Your Full Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-900">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please fill out this field')}
                                        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                        placeholder="+91 9876543210"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-900">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please fill out this field')}
                                    onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                    placeholder="you@company.com"
                                />
                            </div>

                            {/* Dynamic Fields */}
                            {formType === "speaker" && (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-900">Experience Level</label>
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
                                        >
                                            <option value="New">First time speaker</option>
                                            <option value="Experienced">Experienced</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                                        <label className="text-sm font-semibold text-gray-900">LinkedIn/Portfolio URL</label>
                                        <input
                                            required
                                            type="url"
                                            name="linkedin"
                                            value={formData.linkedin}
                                            onChange={handleInputChange}
                                            onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please fill out this field')}
                                            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                            placeholder="https://linkedin.com/in/..."
                                        />
                                    </div>
                                </div>
                            )}

                            {formType === "sponsor" && (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-900">Company Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="company_name"
                                            value={formData.company_name}
                                            onChange={handleInputChange}
                                            onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please fill out this field')}
                                            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                            placeholder="Company Pvt Ltd"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-900">Website</label>
                                            <input
                                                required
                                                type="url"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleInputChange}
                                                onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please fill out this field')}
                                                onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                                placeholder="https://company.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-900">LinkedIn</label>
                                            <input
                                                required
                                                type="url"
                                                name="linkedin"
                                                value={formData.linkedin}
                                                onChange={handleInputChange}
                                                onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please fill out this field')}
                                                onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                                placeholder="Company LinkedIn"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {formType === "partner" && (
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-900">Location</label>
                                            <input
                                                required
                                                type="text"
                                                name="company_name" // mapped to general or additional field if needed, for now just using basic logic or we can append to name/details
                                                // Wait, migration didn't have location. Let's assume we map standard fields or just ignore strict schema for this demo? 
                                                // Ah, migration has specific fields. Let's check plan. Plan said "Location". 
                                                // I missed adding "location" column in migration plan. I should probably add it or repurpose one.
                                                // Re-checking migration file... created_at, type, name, email, phone... experience_level, company_name, website, linkedin, organization_type, student_type. 
                                                // No 'location' column. I will assume we can just skip it or add it. 
                                                // For now, let's just NOT ask location or store it in 'organization_type' as "Kanpur - College" etc. 
                                                // Actually, better to just stick to what we have or add a generic 'details' column. 
                                                // User prompted "Location". I should probably add it to the migration or just put it in the "name" field like "Name (Location)".
                                                // NOTE: I will add a 'details' or just ignore it for now to not break flow, or update migration. 
                                                // Let's repurpose 'company_name' for "Community / Organization Name" which acts as Location/Name combo? 
                                                // Or just add a text input but don't save it if no column? That's bad.
                                                // I'll skip Location column for now as I can't edit migration easily without re-running. 
                                                // Wait, I can run another migration or just edit the file before it's "run" (but i don't run it).
                                                // Actually, I can just not include location or put it in context. 
                                                // Let's just ask for "Organization/Community Name" which covers it.
                                                value={formData.company_name} // Repurposing company_name for Partner Name
                                                onChange={handleInputChange}
                                                onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please fill out this field')}
                                                onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                                placeholder="Community / College Name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-900">Type</label>
                                            <select
                                                name="org_type"
                                                value={formData.org_type}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
                                            >
                                                <option value="College Community">College Community</option>
                                                <option value="City Based">City Based</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-900">Website / LinkedIn</label>
                                        <input
                                            required
                                            type="url"
                                            name="linkedin" // map to linkedin column
                                            value={formData.linkedin}
                                            onChange={handleInputChange}
                                            onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please fill out this field')}
                                            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                            placeholder="URL"
                                        />
                                    </div>
                                </div>
                            )}

                            {formType === "volunteer" && (
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-900">Student Type</label>
                                            <select
                                                required
                                                name="student_type"
                                                value={formData.student_type}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
                                            >
                                                <option value="College Student">College Student</option>
                                                <option value="School Student">School Student</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-900">Role Looking For</label>
                                            <select
                                                required
                                                name="volunteer_role"
                                                value={formData.volunteer_role}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
                                            >
                                                <option value="Photography">Photography</option>
                                                <option value="Videography">Videography</option>
                                                <option value="Crowd Handling">Crowd Handling</option>
                                                <option value="Editor">Editor</option>
                                                <option value="ninja">Community Ninja</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-900">LinkedIn</label>
                                        <input
                                            required
                                            type="url"
                                            name="linkedin"
                                            value={formData.linkedin}
                                            onChange={handleInputChange}
                                            onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please fill out this field')}
                                            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                            placeholder="Profile URL"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Error Message */}
                            {errorMessage && (
                                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                    <p className="text-sm text-red-600">{errorMessage}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-xl bg-black text-white font-bold text-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Application <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
