"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { MemberInsert } from "@/types/volunteer";

interface FeedbackFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ isOpen, onClose, onSuccess }) => {
    const [formData, setFormData] = useState<MemberInsert>({
        name: "",
        email: "",
        role: "",
        feedback: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            // Check if email already exists
            const { data: existingUser, error: checkError } = await supabase
                .from("volunteers")
                .select("email")
                .eq("email", formData.email)
                .maybeSingle();

            if (checkError) {
                console.error("Error checking email:", checkError);
                throw checkError;
            }

            if (existingUser) {
                console.log("Duplicate email found:", formData.email);
                setSubmitStatus("error");
                setErrorMessage("You have already submitted feedback. Multiple submissions are not allowed.");
                setIsSubmitting(false);
                return;
            }

            console.log("No duplicate found, proceeding with insertion");
            // Proceed with insertion if email doesn't exist
            const { error } = await supabase
                .from("volunteers")
                .insert([formData]);

            if (error) throw error;

            setSubmitStatus("success");
            setTimeout(() => {
                onSuccess();
                handleClose();
            }, 1500);
        } catch (error: any) {
            console.error("Error submitting feedback:", error);
            setSubmitStatus("error");
            setErrorMessage(error.message || "Failed to submit feedback. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setFormData({ name: "", email: "", role: "", feedback: "" });
        setSubmitStatus("idle");
        setErrorMessage("");
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            {/* Header */}
                            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                                <h2 className="text-2xl font-bold text-black">Give Feedback</h2>
                                <button
                                    onClick={handleClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Forms Slider Notice - Commented out as requested */}
                            {/* <div className="w-full bg-red-600 text-white font-bold py-2 overflow-hidden flex whitespace-nowrap">
                                <motion.div
                                    initial={{ x: "100%" }}
                                    animate={{ x: "-100%" }}
                                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                                    className="inline-block text-sm"
                                >
                                    ⚠️ Don't use any kind of form on website during some DNS issue with database form's are not working connect with us: hello@kanpurai.space ⚠️
                                </motion.div>
                            </div> */}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C9FF3F] focus:outline-none focus:ring-2 focus:ring-[#C9FF3F]/20 transition-all"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C9FF3F] focus:outline-none focus:ring-2 focus:ring-[#C9FF3F]/20 transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                    <p className="mt-1 text-xs text-gray-500">
                                        We'll use your email to assign a default avatar
                                    </p>
                                </div>

                                {/* Role */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Role *
                                    </label>
                                    <select
                                        required
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C9FF3F] focus:outline-none focus:ring-2 focus:ring-[#C9FF3F]/20 transition-all bg-white"
                                    >
                                        <option value="">Select your role</option>
                                        <option value="Speaker">Speaker</option>
                                        <option value="Attendee">Attendee</option>
                                        <option value="Volunteer">Volunteer</option>
                                    </select>
                                </div>

                                {/* Feedback */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Feedback *
                                    </label>
                                    <textarea
                                        required
                                        value={formData.feedback}
                                        onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C9FF3F] focus:outline-none focus:ring-2 focus:ring-[#C9FF3F]/20 transition-all resize-none"
                                        placeholder="Share your experience with KanpurAI.Space..."
                                    />
                                </div>

                                {/* Error Message */}
                                {submitStatus === "error" && (
                                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                        <p className="text-sm text-red-600">{errorMessage}</p>
                                    </div>
                                )}

                                {/* Success Message */}
                                {submitStatus === "success" && (
                                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <p className="text-sm text-green-600">Feedback submitted successfully!</p>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        className="flex-1 px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 px-6 py-3 rounded-lg bg-[#10b981] text-white font-bold hover:bg-[#059669] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Feedback"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default FeedbackForm;
