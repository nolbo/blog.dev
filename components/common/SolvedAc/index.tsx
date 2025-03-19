import SolvedDifficulty from "@/components/common/SolvedDifficulty";

interface SolvedAcProps {
    problemId: number;
}

export default async function SolvedAc({problemId}: SolvedAcProps) {
    const data = await fetch(`https://solved.ac/api/v3/problem/show?problemId=${problemId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "x-solvedac-language": "ko"
        }
    });
    const problem = await data.json();

    return (
        <dl className={"[&>*]:py-[12px] [&>dt]:pb-[6px] [&>dd]:pt-[6px] [&>dd]:border-b [&>dd]:border-default md:grid md:grid-cols-[200px_auto] md:[&>dt]:pb-[12px] md:[&>dd]:pt-[12px] md:[&>*]:border-b md:[&>*]:border-default [&>:last-of-type]:border-b-[0px] [&>dt]:font-bold [&>dd]:flex [&>dd]:items-center"}>
            <dt>난이도</dt>
            <dd><SolvedDifficulty difficulty={problem.level} sprout={problem.sprout}/></dd>
            <dt>알고리즘 분류</dt>
            <dd>
                <div>
                    {
                        problem.tags.map((tag: any, i: number) => (
                            <span key={i} className={"inline-block align-middle mr-[8px] my-[4px] p-[0px_12px] border border-default bg-layer1 rounded-[24px] text-sm"}>
                                <span className={"font-bold align-middle mr-[6px]"}>#{tag.displayNames[0].name}</span>
                                <span className={"text-xs text-description align-middle"}>{tag.key}</span>
                            </span>
                        ))
                    }
                </div>
            </dd>
        </dl>
    )
}