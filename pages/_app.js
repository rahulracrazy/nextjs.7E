import "../styles/global.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize New Relic Browser agent
    (function (l, o, g, g2, e, r) {
      l["NREUM"] = {};
      l["NREUM"].loader = {
        finish: () => {},
        start: () => {},
      };
      l["NREUM"].amd = false;
      l["NREUM"].app = "YOUR_APP_NAME";
      l["NREUM"].dt = 0;
    })(window, document, "script", "js-agent.newrelic.com/nr-XXXX.min.js");

    // Add your New Relic Browser license key
    NREUM.info = {
      beacon: "bam.nr-data.net",
      licenseKey: "YOUR_BROWSER_LICENSE_KEY",
      applicationID: "YOUR_APPLICATION_ID",
      sa: 1,
    };

    // Load the New Relic Browser agent
    var newrelic = window.NREUM;
    newrelic.noticeError = function (err) {
      if (typeof err !== "string") return err;
      var customAttributes = {};
      var stack = err.stack;
      var message = err.message;
      var type = err.name;

      // Report the error to New Relic
      newrelic.addPageAction("Error", {
        stack: stack,
        message: message,
        type: type,
        customAttributes: customAttributes,
      });
    };
  }, []);

  return <Component {...pageProps} />;
}
