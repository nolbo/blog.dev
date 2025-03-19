import Ruby1 from "@/public/svg/Ruby1.svg";
import Ruby2 from "@/public/svg/Ruby2.svg";
import Ruby3 from "@/public/svg/Ruby3.svg";
import Ruby4 from "@/public/svg/Ruby4.svg";
import Ruby5 from "@/public/svg/Ruby5.svg";
import Diamond1 from "@/public/svg/Diamond1.svg";
import Diamond2 from "@/public/svg/Diamond2.svg";
import Diamond3 from "@/public/svg/Diamond3.svg";
import Diamond4 from "@/public/svg/Diamond4.svg";
import Diamond5 from "@/public/svg/Diamond5.svg";
import Platinum1 from "@/public/svg/Platinum1.svg";
import Platinum2 from "@/public/svg/Platinum2.svg";
import Platinum3 from "@/public/svg/Platinum3.svg";
import Platinum4 from "@/public/svg/Platinum4.svg";
import Platinum5 from "@/public/svg/Platinum5.svg";
import Gold1 from "@/public/svg/Gold1.svg";
import Gold2 from "@/public/svg/Gold2.svg";
import Gold3 from "@/public/svg/Gold3.svg";
import Gold4 from "@/public/svg/Gold4.svg";
import Gold5 from "@/public/svg/Gold5.svg";
import Silver1 from "@/public/svg/Silver1.svg";
import Silver2 from "@/public/svg/Silver2.svg";
import Silver3 from "@/public/svg/Silver3.svg";
import Silver4 from "@/public/svg/Silver4.svg";
import Silver5 from "@/public/svg/Silver5.svg";
import Bronze1 from "@/public/svg/Bronze1.svg";
import Bronze2 from "@/public/svg/Bronze2.svg";
import Bronze3 from "@/public/svg/Bronze3.svg";
import Bronze4 from "@/public/svg/Bronze4.svg";
import Bronze5 from "@/public/svg/Bronze5.svg";
import Sprout1 from "@/public/svg/Sprout1.svg";
import Sprout2 from "@/public/svg/Sprout2.svg";
import Sprout3 from "@/public/svg/Sprout3.svg";
import Sprout4 from "@/public/svg/Sprout4.svg";
import Sprout5 from "@/public/svg/Sprout5.svg";
import Unrated from "@/public/svg/Unrated.svg";
import NotRatable from "@/public/svg/NotRatable.svg";

interface SolvedDifficulty {
    difficulty: number;
    sprout?: boolean;
}

export default function SolvedDifficulty({difficulty, sprout}: SolvedDifficulty) {
    switch (difficulty) {
        case 0:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em]"}><Unrated /><NotRatable />분류없음</span>);
        case 1:
            return sprout ?
                (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#96cc00]"}><Sprout5 />새싹 V</span>)
                :
                (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#9d4900]"}><Bronze5 />브론즈 V</span>);
        case 2:
            return sprout ?
                (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#96cc00]"}><Sprout4 />새싹 IV</span>)
                :
                (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#a54f00]"}><Bronze4 />브론즈 IV</span>);
        case 3:
            return sprout ?
                (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#96cc00]"}><Sprout3 />새싹 III</span>)
                :
                (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#ad5600]"}><Bronze3 />브론즈 III</span>);
        case 4:
            return sprout ?
                (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#96cc00]"}><Sprout2 />새싹 II</span>)
                :
                (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#b55d0a]"}><Bronze2 />브론즈 II</span>);
        case 5:
            return sprout ?
                (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#96cc00]"}><Sprout1 />새싹 I</span>)
                :
                (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#c67739]"}><Bronze1 />브론즈 I</span>);
        case 6:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#38546e]"}><Silver5 />실버 V</span>);
        case 7:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#3d5a74]"}><Silver4 />실버 IV</span>);
        case 8:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#435f7a]"}><Silver3 />실버 III</span>);
        case 9:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#496580]"}><Silver2 />실버 II</span>);
        case 10:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#4e6a86]"}><Silver1 />실버 I</span>);
        case 11:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#d28500]"}><Gold5 />골드 V</span>);
        case 12:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#df8f00]"}><Gold4 />골드 IV</span>);
        case 13:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#ec9a00]"}><Gold3 />골드 III</span>);
        case 14:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#f9a518]"}><Gold2 />골드 II</span>);
        case 15:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#ffb028]"}><Gold1 />골드 I</span>);
        case 16:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#00c78b]"}><Platinum5 />플래티넘 V</span>);
        case 17:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#00d497]"}><Platinum4 />플래티넘 IV</span>);
        case 18:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#27e2a4]"}><Platinum3 />플래티넘 III</span>);
        case 19:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#3ef0b1]"}><Platinum2 />플래티넘 II</span>);
        case 20:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#51fdbd]"}><Platinum1 />플래티넘 I</span>);
        case 21:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#009ee5]"}><Diamond5 />다이아몬드 V</span>);
        case 22:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#00a9f0]"}><Diamond4 />다이아몬드 IV</span>);
        case 23:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#00b4fc]"}><Diamond3 />다이아몬드 III</span>);
        case 24:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#2bbfff]"}><Diamond2 />다이아몬드 II</span>);
        case 25:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#41caff]"}><Diamond1 />다이아몬드 I</span>);
        case 26:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#e0004c]"}><Ruby5 />루비 V</span>);
        case 27:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#ea0053]"}><Ruby4 />루비 IV</span>);
        case 28:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#f5005a]"}><Ruby3 />루비 III</span>);
        case 29:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#ff0062]"}><Ruby2 />루비 II</span>);
        case 30:
            return (<span className={"[&>*]:inline-block [&>*]:align-middle [&>svg]:mr-[4px] [&>svg]:w-[1em] [&>svg]:h-[1em] text-[#ff3071]"}><Ruby1 />루비 I</span>);
    }
}