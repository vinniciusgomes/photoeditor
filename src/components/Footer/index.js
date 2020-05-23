import React from "react";
import GitHubButton from "react-github-btn";

import InfoSectionFooter from "../InfoSectionFooter";
import ScaleSlider from "../sliders/ScaleSlider";

import "./footer.css";

export default function Footer(props) {
  return (
    <div className="footer-wrapper">
      <div className="left-panel">
        <InfoSectionFooter />
      </div>
      <div className="center-panel">
        {!props.showCropCanvas && <ScaleSlider />}
      </div>

      <div className="right-panel mt-2">
        <div className="mr-3">
          <GitHubButton
            href="https://github.com/vinniciusgomes"
            target="_blank"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-size="large"
            aria-label="Follow @vinniciusgomes on GitHub"
          >
            Follow @vinniciusgomes
          </GitHubButton>
        </div>

        <GitHubButton
          data-text="See project on GitHub"
          href="https://github.com/vinniciusgomes/photoeditor"
          target="_blank"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="large"
          aria-label="See on GitHub"
        />
      </div>
    </div>
  );
}
