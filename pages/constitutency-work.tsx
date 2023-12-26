import PageHeader from "@/components/PageHeaders";
import WorkDone from "@/components/WorkDone";

export default function ConstituencyWork() {
    const pdfPath = '/work.pdf';
    return (
        <div className="container mb-4">
            <PageHeader header="Work Done in Constituency">
                <i className="fa-solid fa-book"></i>
            </PageHeader>
            <div>
                <WorkDone pdfPath={pdfPath}></WorkDone>
            </div>
        </div>
    )
}