import DemoCaseTemplate from "../DemoCaseTemplate.jsx";
import {
  META,
  BREADCRUMBS,
  HERO,
  PROBLEM,
  WHAT_IT_DOES,
  HOW_IT_WORKS,
  FEATURES,
  WHO,
  TRUST,
  CTA,
} from "../../data/demoGodsHeroesMonsters.js";

export default function GodsHeroesAndMonsters() {
  return (
    <DemoCaseTemplate
      meta={META}
      breadcrumbs={BREADCRUMBS}
      hero={HERO}
      problem={PROBLEM}
      whatItDoes={WHAT_IT_DOES}
      howItWorks={HOW_IT_WORKS}
      features={FEATURES}
      who={WHO}
      trust={TRUST}
      cta={CTA}
    />
  );
}
