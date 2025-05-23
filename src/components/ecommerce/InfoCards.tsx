import React, { useRef } from "react";

const cards = [
    {
        title: "Total Orders",
        value: "123",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.78133C8.49998 4.2812 9.17815 4.00015 9.88533 4H22.1147C22.8219 4.00015 23.5 4.2812 24 4.78133L27.2187 8C27.7188 8.49998 27.9998 9.17815 28 9.88533V25.3333C28 26.3942 27.5786 27.4116 26.8284 28.1618C26.0783 28.9119 25.0609 29.3333 24 29.3333H8C6.93913 29.3333 5.92172 28.9119 5.17157 28.1618C4.42143 27.4116 4 26.3942 4 25.3333V9.88533C4.00015 9.17815 4.2812 8.49998 4.78133 8L8 4.78133ZM22.1147 6.66667H9.88533L7.21867 9.33333H24.7813L22.1147 6.66667ZM13.3333 16C13.3333 15.6464 13.1929 15.3072 12.9428 15.0572C12.6928 14.8071 12.3536 14.6667 12 14.6667C11.6464 14.6667 11.3072 14.8071 11.0572 15.0572C10.8071 15.3072 10.6667 15.6464 10.6667 16C10.6667 17.4145 11.2286 18.771 12.2288 19.7712C13.229 20.7714 14.5855 21.3333 16 21.3333C17.4145 21.3333 18.771 20.7714 19.7712 19.7712C20.7714 18.771 21.3333 17.4145 21.3333 16C21.3333 15.6464 21.1929 15.3072 20.9428 15.0572C20.6928 14.8071 20.3536 14.6667 20 14.6667C19.6464 14.6667 19.3072 14.8071 19.0572 15.0572C18.8071 15.3072 18.6667 15.6464 18.6667 16C18.6667 16.7072 18.3857 17.3855 17.8856 17.8856C17.3855 18.3857 16.7072 18.6667 16 18.6667C15.2928 18.6667 14.6145 18.3857 14.1144 17.8856C13.6143 17.3855 13.3333 16.7072 13.3333 16Z" fill="url(#paint0_linear_38_22399)" />
                <defs>
                    <linearGradient id="paint0_linear_38_22399" x1="16" y1="4" x2="16" y2="29.3333" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C521FF" />
                        <stop offset="0.5" stop-color="#FF2164" />
                        <stop offset="1" stop-color="#FF9B21" />
                    </linearGradient>
                </defs>
            </svg>

        ),
        change: "+28%",
        changeType: "up",
        subtitle: "From The Last Month",
    },
    {
        title: "Total Taken",
        value: "123",
        icon: (
            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1987 5.13866C26.2427 3.16533 25.2374 1.43999 23.7547 0.575994C22.4827 -0.165339 20.908 -0.233339 19.5334 0.625328C18.16 -0.233339 16.584 -0.165339 15.312 0.575994C13.8294 1.43999 12.824 3.16533 12.868 5.13866C12.9254 7.68399 14.896 9.75733 17.78 11.4707C18.316 11.788 18.888 12.148 19.5334 12.148C20.1787 12.148 20.7507 11.788 21.2867 11.4707C24.1707 9.75733 26.1414 7.68399 26.1987 5.13866ZM9.38537 12.4373L6.73203 14.0947C6.234 13.6065 5.56409 13.3335 4.8667 13.3347H3.53337C2.82612 13.3347 2.14784 13.6156 1.64775 14.1157C1.14765 14.6158 0.866699 15.2941 0.866699 16.0013V21.3347C0.866699 22.0419 1.14765 22.7202 1.64775 23.2203C2.14784 23.7204 2.82612 24.0013 3.53337 24.0013H4.8667C5.33479 24.0013 5.79462 23.8781 6.19999 23.644C6.60537 23.41 6.94199 23.0734 7.17603 22.668H8.23737C8.4442 22.6678 8.64825 22.7157 8.83337 22.808L11.9667 24.3747C13.2929 25.0374 14.8023 25.2392 16.256 24.948L20.536 24.0933C21.1214 23.976 21.6734 23.7293 22.1494 23.3707L26.244 20.3C26.6442 19.9999 26.9691 19.6108 27.1928 19.1635C27.4166 18.7161 27.5332 18.2229 27.5334 17.7227V17.648C27.5334 15.288 25.0494 13.752 22.9374 14.808C22.0174 15.268 21.168 15.9747 20.3134 16.5453C20.8067 15.0613 20.0214 13.4147 18.46 13.0253L13.5054 11.7853C12.8101 11.6116 12.0869 11.5798 11.379 11.6918C10.6711 11.8039 9.99306 12.0574 9.38537 12.4373Z" fill="url(#paint0_linear_1980_596)" />
                <defs>
                    <linearGradient id="paint0_linear_1980_596" x1="14.2" y1="0.000640869" x2="14.2" y2="25.0778" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C521FF" />
                        <stop offset="0.5" stop-color="#FF2164" />
                        <stop offset="1" stop-color="#FF9B21" />
                    </linearGradient>
                </defs>
            </svg>

        ),
        change: "-15%",
        changeType: "down",
        subtitle: "From The Last Month",
    },
    {
        title: "Total Revenue",
        value: "123",
        icon: (
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.3999 21.524V23.3333C28.3999 24.4187 27.8919 25.3467 27.1866 26.076C26.4892 26.7987 25.5426 27.388 24.4772 27.8547C22.3412 28.788 19.4852 29.3333 16.3999 29.3333C13.3146 29.3333 10.4586 28.7893 8.32257 27.8547C7.25724 27.388 6.31057 26.7987 5.61324 26.076C4.96657 25.4093 4.48657 24.572 4.41057 23.6013L4.3999 23.3333V21.524C5.0199 21.876 5.68257 22.188 6.3919 22.4507C9.09857 23.452 12.6386 24.0107 16.3999 24.0107C20.1612 24.0107 23.7012 23.452 26.4079 22.4507C26.9399 22.2533 27.4452 22.0293 27.9266 21.78L28.3999 21.524ZM4.3999 14.1907C5.0199 14.5427 5.68257 14.8547 6.3919 15.1173C9.09857 16.1187 12.6386 16.6773 16.3999 16.6773C20.1612 16.6773 23.7012 16.1187 26.4079 15.1173C27.1172 14.8547 27.7799 14.544 28.3999 14.1907V18.3307C27.5145 19.0141 26.531 19.5598 25.4826 19.9493C23.1426 20.816 19.9306 21.3453 16.3999 21.3453C12.8706 21.3453 9.65857 20.816 7.31724 19.9493C6.26882 19.5598 5.28528 19.0141 4.3999 18.3307V14.1907ZM16.3999 4C19.4852 4 22.3412 4.544 24.4772 5.47867C25.5426 5.94533 26.4892 6.53467 27.1866 7.25733C27.8332 7.924 28.3132 8.76133 28.3892 9.732L28.3999 10V10.9973C27.5146 11.6808 26.531 12.2265 25.4826 12.616C23.1426 13.4827 19.9306 14.012 16.3999 14.012C12.8706 14.012 9.65857 13.4827 7.31724 12.616C6.38524 12.2707 5.5439 11.816 4.77724 11.2747L4.3999 10.9973V10C4.3999 8.91467 4.9079 7.98667 5.61324 7.25733C6.31057 6.53467 7.25724 5.94533 8.32257 5.47867C10.4586 4.54533 13.3146 4 16.3999 4Z" fill="url(#paint0_linear_1980_610)" />
                <defs>
                    <linearGradient id="paint0_linear_1980_610" x1="16.3999" y1="4" x2="16.3999" y2="29.3333" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C521FF" />
                        <stop offset="0.5" stop-color="#FF2164" />
                        <stop offset="1" stop-color="#FF9B21" />
                    </linearGradient>
                </defs>
            </svg>

        ),
        change: "+28%",
        changeType: "up",
        subtitle: "From The Last Month",
    },
    {
        title: "Pending Orders",
        value: "$1234.99",
        icon: (
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 2.66667C17.8494 2.66667 19.0667 2.81067 20.2347 3.08134C20.4076 3.1186 20.5713 3.18988 20.7164 3.29104C20.8615 3.39219 20.985 3.5212 21.0797 3.67055C21.1745 3.8199 21.2386 3.98661 21.2682 4.16096C21.2979 4.33532 21.2926 4.51384 21.2526 4.68612C21.2127 4.85841 21.1388 5.02102 21.0354 5.16449C20.932 5.30795 20.801 5.42941 20.6502 5.52178C20.4994 5.61415 20.3317 5.6756 20.1569 5.70253C19.9821 5.72947 19.8037 5.72136 19.632 5.67867C18.9745 5.52592 18.3064 5.4234 17.6334 5.372L17.0734 5.34134L17.5267 5.36801C19.4554 5.51437 21.3197 6.12754 22.9587 7.15467L23.3227 7.39201L24.1307 6.58401C24.3701 6.34233 24.6928 6.2013 25.0328 6.18976C25.3727 6.17823 25.7043 6.29707 25.9595 6.52196C26.2147 6.74685 26.3743 7.06078 26.4056 7.3995C26.437 7.73822 26.3377 8.07611 26.128 8.34401L26.0174 8.46934L25.3574 9.12934C27.2234 11.121 28.3547 13.6892 28.5648 16.4103C28.7748 19.1314 28.051 21.8429 26.5128 24.0973C24.9746 26.3517 22.7138 28.0145 20.1035 28.8112C17.4931 29.6079 14.6892 29.491 12.1542 28.4798C9.61927 27.4686 7.50472 25.6235 6.15945 23.2489C4.81417 20.8743 4.31854 18.112 4.75432 15.4178C5.1901 12.7236 6.53126 10.2585 8.55654 8.42902C10.5818 6.59958 13.1702 5.51516 15.8947 5.35467L16.16 5.34134L16.08 5.34267C15.3907 5.36934 14.716 5.44934 14.0587 5.57467L13.568 5.67867C13.2259 5.7524 12.8685 5.68865 12.573 5.50118C12.2774 5.31371 12.0674 5.01756 11.9883 4.67663C11.9092 4.3357 11.9673 3.97734 12.1501 3.67888C12.3329 3.38042 12.6257 3.1658 12.9654 3.08134C14.1334 2.81067 15.352 2.66667 16.6 2.66667ZM16.6 10.6667C16.2464 10.6667 15.9073 10.8071 15.6572 11.0572C15.4072 11.3072 15.2667 11.6464 15.2667 12V17.3333C15.2667 17.687 15.4072 18.0261 15.6572 18.2761C15.9073 18.5262 16.2464 18.6667 16.6 18.6667C16.9537 18.6667 17.2928 18.5262 17.5428 18.2761C17.7929 18.0261 17.9334 17.687 17.9334 17.3333V12C17.9334 11.6464 17.7929 11.3072 17.5428 11.0572C17.2928 10.8071 16.9537 10.6667 16.6 10.6667Z" fill="url(#paint0_linear_38_22435)" />
                <defs>
                    <linearGradient id="paint0_linear_38_22435" x1="16.6004" y1="2.66667" x2="16.6004" y2="29.3339" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C521FF" />
                        <stop offset="0.5" stop-color="#FF2164" />
                        <stop offset="1" stop-color="#FF9B21" />
                    </linearGradient>
                </defs>
            </svg>

        ),
        change: "-28%",
        changeType: "down",
        subtitle: "From The Last Month",
    },
    {
        title: "Pending Returns",
        value: "$1234.99",
        icon: (
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5334 24.832C14.475 25.1949 12.3547 24.9041 10.4701 24.0004C8.58544 23.0967 7.03114 21.6255 6.02536 19.7933C5.76735 19.3337 5.33835 18.9946 4.83163 18.8496C4.3249 18.7046 3.78142 18.7654 3.31934 19.019C2.85726 19.2725 2.51393 19.6982 2.36401 20.2035C2.21408 20.7088 2.26967 21.2528 2.5187 21.7173C5.32136 26.8307 11.1587 29.8413 17.228 28.7707C24.8414 27.4293 29.9267 20.168 28.584 12.5533C27.24 4.93866 19.98 -0.146673 12.3654 1.19733C9.34849 1.72911 6.58921 3.23545 4.51038 5.48551C2.43155 7.73557 1.14786 10.6052 0.85603 13.6547C0.690697 15.4 2.54403 16.5333 4.01336 15.72L7.77336 13.6373C9.83603 12.496 8.79603 9.34533 6.4587 9.65599L6.3227 9.67466C7.2073 8.26273 8.43069 7.0942 9.88169 6.27525C11.3327 5.4563 12.9653 5.01288 14.6313 4.98529C16.2972 4.95769 17.9436 5.34679 19.4209 6.11724C20.8983 6.88768 22.1597 8.01505 23.0906 9.39691C24.0215 10.7788 24.5923 12.3713 24.7513 14.0299C24.9102 15.6885 24.6522 17.3604 24.0008 18.894C23.3493 20.4275 22.325 21.7739 21.0209 22.8109C19.7168 23.8479 18.1742 24.5427 16.5334 24.832Z" fill="url(#paint0_linear_1980_314)" />
                <defs>
                    <linearGradient id="paint0_linear_1980_314" x1="14.8224" y1="0.981934" x2="14.8224" y2="28.986" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C521FF" />
                        <stop offset="0.5" stop-color="#FF2164" />
                        <stop offset="1" stop-color="#FF9B21" />
                    </linearGradient>
                </defs>
            </svg>

        ),
        change: "-28%",
        changeType: "down",
        subtitle: "From The Last Month",
    },
];

const InfoCards: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative w-full">
            {/* Left Arrow */}
            <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full shadow p-1 flex items-center justify-center focus:outline-none"
                style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)" }}
                onClick={() => scroll("left")}
                aria-label="Scroll left"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-400 dark:text-gray-500"><path d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Cards */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-8"
                style={{ scrollBehavior: "smooth" }}
            >
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="min-w-[270px] max-w-[300px] bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between p-5 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-[#C521FF] via-[#FF2164] to-[#FF9B21]">
                                <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg">
                                    {card.icon}
                                </div>
                            </div>
                            <div className="ml-2">
                                <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">{card.title}</div>
                                <div className="text-gray-900 dark:text-white text-2xl font-bold leading-tight">{card.value}</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                            <div className={`flex items-center gap-1 text-sm font-medium ${card.changeType === "up" ? "text-green-500" : "text-red-500"}`}>
                                {card.changeType === "up" ? (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3334 4C11.1566 4 10.987 4.07024 10.862 4.19526C10.737 4.32029 10.6667 4.48986 10.6667 4.66667C10.6667 4.84348 10.737 5.01305 10.862 5.13807C10.987 5.2631 11.1566 5.33333 11.3334 5.33333H12.3907L9.33339 8.39067L6.80472 5.862C6.6797 5.73702 6.51016 5.66681 6.33339 5.66681C6.15661 5.66681 5.98707 5.73702 5.86205 5.862L1.52872 10.1953C1.46505 10.2568 1.41426 10.3304 1.37932 10.4117C1.34438 10.4931 1.32599 10.5805 1.32522 10.6691C1.32445 10.7576 1.34132 10.8454 1.37484 10.9273C1.40836 11.0092 1.45786 11.0837 1.52046 11.1463C1.58305 11.2089 1.65749 11.2584 1.73942 11.2919C1.82135 11.3254 1.90914 11.3423 1.99766 11.3415C2.08617 11.3407 2.17365 11.3223 2.25499 11.2874C2.33633 11.2525 2.40989 11.2017 2.47139 11.138L6.33339 7.276L8.86205 9.80467C8.98707 9.92965 9.15661 9.99986 9.33339 9.99986C9.51016 9.99986 9.6797 9.92965 9.80472 9.80467L13.3334 6.276V7.33333C13.3334 7.51014 13.4036 7.67971 13.5287 7.80474C13.6537 7.92976 13.8232 8 14.0001 8C14.1769 8 14.3464 7.92976 14.4715 7.80474C14.5965 7.67971 14.6667 7.51014 14.6667 7.33333V4.66667C14.6667 4.48986 14.5965 4.32029 14.4715 4.19526C14.3464 4.07024 14.1769 4 14.0001 4H11.3334Z" fill="#22C55E" />
                                    </svg>

                                ) : (
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_38_22417)">
                                            <path d="M11.786 10.3333H11.5334C11.2682 10.3333 11.0138 10.4387 10.8263 10.6262C10.6387 10.8138 10.5334 11.0681 10.5334 11.3333C10.5334 11.5986 10.6387 11.8529 10.8263 12.0404C11.0138 12.228 11.2682 12.3333 11.5334 12.3333H14.2C14.4652 12.3333 14.7196 12.228 14.9071 12.0404C15.0947 11.8529 15.2 11.5986 15.2 11.3333V8.66667C15.2 8.40145 15.0947 8.1471 14.9071 7.95956C14.7196 7.77203 14.4652 7.66667 14.2 7.66667C13.9348 7.66667 13.6805 7.77203 13.4929 7.95956C13.3054 8.1471 13.2 8.40145 13.2 8.66667V8.91933L10.24 5.95934C10.0525 5.77207 9.79837 5.66688 9.53337 5.66688C9.26837 5.66688 9.0142 5.77207 8.8267 5.95934L6.53337 8.25333L2.9067 4.62667C2.81441 4.5312 2.70403 4.45507 2.582 4.40272C2.45997 4.35037 2.32874 4.32285 2.19596 4.32176C2.06318 4.32067 1.93151 4.34603 1.80864 4.39637C1.68577 4.44671 1.57415 4.52101 1.4803 4.61495C1.38646 4.70889 1.31226 4.82057 1.26203 4.94349C1.21181 5.06641 1.18657 5.1981 1.18779 5.33088C1.189 5.46366 1.21665 5.59487 1.26912 5.71685C1.32158 5.83882 1.39781 5.94913 1.49337 6.04134L5.8267 10.3747C6.0142 10.5619 6.26837 10.6671 6.53337 10.6671C6.79837 10.6671 7.05253 10.5619 7.24003 10.3747L9.53337 8.08L11.786 10.3327V10.3333Z" fill="#DC3545" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_38_22417">
                                                <rect width="16" height="16" fill="white" transform="translate(0.199951)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                )}
                                {card.change}
                            </div>
                            <div className="text-gray-400 dark:text-gray-500 text-xs font-medium">{card.subtitle}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Right Arrow */}
            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full shadow p-1 flex items-center justify-center focus:outline-none"
                style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)" }}
                onClick={() => scroll("right")}
                aria-label="Scroll right"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-400 dark:text-gray-500"><path d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    );
};

export default InfoCards; 