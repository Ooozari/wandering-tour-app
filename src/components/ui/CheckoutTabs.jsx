"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Heading, Paragraph } from "@/components/ui/typography";

const steps = [
    { id: 1, label: "Customer Details" },
    { id: 2, label: "Payment Information" },
    { id: 3, label: "Done" },
];

export default function CheckoutTabs({ children }) {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div className="w-full flex flex-col gap-6">
            {/* Stepper Header */}
            <div className="flex flex-col gap-4 lg:flex-row items-start lg:items-center justify-between relative border-1 border-lightGrey rounded-2xl shadow-lg p-4">
                {steps.map((step, index) => {
                    // Circle Colors
                    let circleBg = "bg-transparent border-gray-300 text-Grey";
                    if (step.id < currentStep) circleBg = "bg-Positive text-white border-Positive";
                    if (step.id === currentStep) circleBg = "bg-Primary text-white border-Primary";

                    // Line Colors (connects FROM this step)
                    let lineColor = "border-Grey";
                    if (step.id < currentStep) lineColor = "border-Positive";
                    if (step.id === currentStep) lineColor = "border-Primary";

                    return (
                        <React.Fragment key={step.id}>
                            <div className="flex items-center gap-2 relative z-10">
                                <div
                                    className={cn(
                                        "w-7 h-7 rounded-full flex items-center justify-center border-2 font-bold transition",
                                        circleBg
                                    )}
                                >
                                    {step.id}
                                </div>
                                <span
                                    className={cn(
                                        "uppercase font-medium",
                                        step.id < currentStep
                                            ? "text-Positive"
                                            : step.id === currentStep
                                                ? "text-Primary"
                                                : "text-Grey"
                                    )}
                                >
                                    <Paragraph size="md">{step.label}</Paragraph>
                                </span>
                            </div>

                            {/* Line Between Circles */}
                            {index < steps.length - 1 && (
                                <div
                                    className={cn(
                                        "w-px h-6 border-l-2 my-2 ml-[14px] lg:hidden",
                                        step.id < currentStep
                                            ? "border-Positive"
                                            : step.id === currentStep
                                                ? "border-Primary"
                                                : "border-Grey"
                                    )}
                                />
                            )}


                            {index < steps.length - 1 && (
                                <div
                                    className={cn(
                                        "hidden lg:flex flex-1 h-px border-t-2 border-dashed mx-2 z-0",
                                        step.id < currentStep ? "border-Positive" : step.id === currentStep ? "border-Primary" : "border-Grey"
                                    )}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            {/* Stepper Content */}
            <div className="p-5">
                {React.Children.toArray(children)[currentStep - 1]}
            </div>

            {/* Stepper Controls */}
            <div className={cn(
                "mt-4",
                currentStep === 3 ? "flex justify-center" : "flex justify-between"
            )}>
                {currentStep !== 3 && (
                    <Button
                        variant="outline"
                        size="lg"
                        className="px-10 md:px-16 lg:px-20 2xl:px-25 text-Grey font-bold"
                        disabled={currentStep === 1}
                        onClick={() => setCurrentStep((s) => s - 1)}
                    >
                        Back
                    </Button>
                )}

                <Button
                    onClick={
                        currentStep === 3
                            ? undefined // Confirm does nothing
                            : () => setCurrentStep((s) => s + 1)
                    }
                    variant="default"
                    className="px-10 md:px-16 lg:px-20 2xl:px-25 hover:text-Primary font-bold"
                    size="lg"
                >
                    {currentStep === 1 && "Next Step"}
                    {currentStep === 2 && "Place Order"}
                    {currentStep === 3 && "Confirm"}
                </Button>
            </div>


        </div>
    );
}
