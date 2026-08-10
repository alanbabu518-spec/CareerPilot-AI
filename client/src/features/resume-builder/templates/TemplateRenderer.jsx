import ModernTemplate from "./ModernTemplate";
import ProfessionalTemplate from "./ProffesionalTemplate";
import MinimalTemplate from "./MinimalTemplate";
import CreativeTemplate from "./CreativeTemplate";
import ExecutiveTemplate from "./ExecutiveTemplate";

function TemplateRenderer({ template, resume }) {
  switch (template) {
    case "modern":
      return <ModernTemplate resume={resume} />;

    case "professional":
      return <ProfessionalTemplate resume={resume} />;

    case "minimal":
      return <MinimalTemplate resume={resume} />;

    case "creative":
      return <CreativeTemplate resume={resume} />;

    case "executive":
      return <ExecutiveTemplate resume={resume} />;

    default:
      return <ModernTemplate resume={resume} />;
  }
}

export default TemplateRenderer;
