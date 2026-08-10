import InteriorPageTemplate from "./InteriorPageTemplate.jsx";
import PageMeta from "../components/PageMeta.jsx";
import AppWindowMockup from "../components/mockups/AppWindowMockup.jsx";
import CodeEditorMockup from "../components/mockups/CodeEditorMockup.jsx";
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
} from "../data/technology.js";

export default function Technology() {
  return (
    <>
      <PageMeta {...META} />
      <InteriorPageTemplate
        {...HERO}
        breadcrumbPath={META.path}
        mockup={
          <AppWindowMockup filename={MOCKUP.filename}>
            <CodeEditorMockup />
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
