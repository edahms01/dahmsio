import InteriorPageTemplate from "./InteriorPageTemplate.jsx";
import PageMeta from "../components/PageMeta.jsx";
import AppWindowMockup from "../components/mockups/AppWindowMockup.jsx";
import RoadmapMockup from "../components/mockups/RoadmapMockup.jsx";
import {
  META,
  HERO,
  MOCKUP,
  SUBSERVICE_GROUPS,
  PIPELINE_EYEBROW,
  PIPELINE_HEADING,
  PIPELINE,
  CTA,
} from "../data/consulting.js";

export default function Consulting() {
  return (
    <>
      <PageMeta {...META} />
      <InteriorPageTemplate
        {...HERO}
        breadcrumbPath={META.path}
        mockup={
          <AppWindowMockup filename={MOCKUP.filename}>
            <RoadmapMockup {...MOCKUP} />
          </AppWindowMockup>
        }
        subserviceGroups={SUBSERVICE_GROUPS}
        pipelineEyebrow={PIPELINE_EYEBROW}
        pipelineHeading={PIPELINE_HEADING}
        pipeline={PIPELINE}
        // Pipeline describes the Advisory engagement only (SUBSERVICE_GROUPS[0]) — rendered
        // between Advisory and Talent instead of after the whole section.
        pipelineAfterGroup={0}
        ctaHeading={CTA.heading}
        ctaText={CTA.text}
        ctaButtonLabel={CTA.buttonLabel}
      />
    </>
  );
}
