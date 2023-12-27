import PageHeader from "@/components/PageHeaders"
import Feedback from "@/components/feedback"

const WriteToGss = () => {
    return (<>
        <div className="container mb-4">
            <PageHeader header="Write To GSS">
                <i className="fa-solid fa-comment"></i>
            </PageHeader>
            <div className='mt-4'>
                <Feedback />
            </div>
        </div>
    </>)
}

export default WriteToGss;