import { useEffect, useRef } from "react";


const AppSubHeader: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "k") {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <header className="top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b h-16 items-center px-4">
            <h1 className="text-theme-lg text-left justify-center relative text-gray-900 dark:text-gray-100 font-extralight">
                CRM / Account / <span className="font-medium">Account Details</span>
            </h1>
        </header>
    );
};

export default AppSubHeader;