import ReachedItem from "../../moleculs/ReachedItem"

export default function Reached() {
    return (
        <section className="reached pt-50 pb-50">
        <div className="container-fluid">
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                <ReachedItem title="290M+" body="Players Top Up" />
                <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                <ReachedItem title="12.500" body="Games Available" />
                <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                <ReachedItem title="99.9%" body="Happy Players" />
                <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                <ReachedItem title="4.7" body="Rating Wordwide" />
            </div>
        </div>
    </section>
    )
}
