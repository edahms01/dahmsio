import InteriorPageTemplate from "./InteriorPageTemplate.jsx";
import PageMeta from "../components/PageMeta.jsx";
import AppWindowMockup from "../components/mockups/AppWindowMockup.jsx";
import DashboardMockup from "../components/mockups/DashboardMockup.jsx";
import {
  META,
  HERO,
  MOCKUP,
  SUBSERVICE_GROUPS,
  PIPELINE_EYEBROW,
  PIPELINE_HEADING,
  PIPELINE,
  CTA,
} from "../data/data.js";

export default function Data() {
  return (
    <>
      <PageMeta {...META} />
      <InteriorPageTemplate
        {...HERO}
        breadcrumbPath={META.path}
        mockup={
          <AppWindowMockup filename={MOCKUP.filename}>
            <DashboardMockup {...MOCKUP} />
          </AppWindowMockup>
        }
        subserviceGroups={SUBSERVICE_GROUPS}
        pipelineEyebrow={PIPELINE_EYEBROW}
        pipelineHeading={PIPELINE_HEADING}
        pipeline={PIPELINE}
        ctaHeading={CTA.heading}
        ctaText={CTA.text}
        ctaButtonLabel={CTA.buttonLabel}
      />
    </>
  );
}
