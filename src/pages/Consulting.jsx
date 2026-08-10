import InteriorPageTemplate from "./InteriorPageTemplate.jsx";
import PageMeta from "../components/PageMeta.jsx";
import AppWindowMockup from "../components/mockups/AppWindowMockup.jsx";
import KanbanMockup from "../components/mockups/KanbanMockup.jsx";
import {
  META,
  HERO,
  MOCKUP,
  CAPABILITIES_HEADING,
  CAPABILITIES_HEADING_WIDTH,
  CAPABILITIES,
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
        mockup={
          <AppWindowMockup filename={MOCKUP.filename}>
            <KanbanMockup {...MOCKUP} />
          </AppWindowMockup>
        }
        capabilitiesHeading={CAPABILITIES_HEADING}
        capabilitiesHeadingWidth={CAPABILITIES_HEADING_WIDTH}
        capabilities={CAPABILITIES}
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
