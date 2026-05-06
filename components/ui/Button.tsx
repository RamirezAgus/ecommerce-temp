type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    classname?: string;
};

export default function Button({
    children,
    variant = "primary",
    classname = "",
}: ButtonProps) {
    const  base = "px-4 py-2 rounded-lg text-sm font-medium transition";

    const variants = {
        primary: "bg-primary text-white hover:opacity-90",
        secondary: "bg-secondary text-white hover:opacity-90",
        outline: "border border-neutral/30 text-secondary hover:bg-gray-100",
    };

    return (
        <button className={`${base} ${variants[variant]} ${classname}`}>
            {children}
        </button>
    )
}