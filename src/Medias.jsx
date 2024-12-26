import React from "react";

const more = "https://github.com/benidama?tab=repositories";
const facebook =
  "https://www.facebook.com/benimana.joanesquintus?mibextid=ZbWKwL";
const linkedIn =
  "https://www.linkedin.com/in/jean-damascene-benimana-9001b7209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const instagram = "https://www.instagram.com/beni_dama?igsh=Y2ZwZTdtZGM1MTYw";
const tweeter = "https://x.com/BenimanaJeanDa1?t=tdKPR6BD3ujgSJktcLlKQA&s=09";

function Medias() {
  return (
    <div>
      <h5>Please, follow us on:</h5>
      <button type="button" class="btn btn-info m-3">
        <a className="nav-link" href={more} target="_blank">
          Github
        </a>
      </button>

      <button type="button" class="btn btn-info m-3">
        <a className="nav-link" href={facebook} target="_blank">
          Facebook
        </a>
      </button>

      <button type="button" class="btn btn-info m-3">
        <a className="nav-link" href={linkedIn} target="_blank">
          LinkedIn
        </a>
      </button>

      <button type="button" class="btn btn-info m-3">
        <a className="nav-link" href={instagram} target="_blank">
          Instagram
        </a>
      </button>

      <button type="button" class="btn btn-info m-3">
        <a className="nav-link" href={tweeter} target="_blank">
          X
        </a>
      </button>
    </div>
  );
}

export default Medias;
