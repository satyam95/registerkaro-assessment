import Image from "next/image";
import React from "react";

const COMPANIES_DATA = [
  { name: "Coinbase", logo: "/coinbase.png" },
  { name: "Spotify", logo: "/spotify.png" },
  { name: "Slack", logo: "/slack.png" },
  { name: "Dropbox", logo: "/dropbox.png" },
  { name: "Webflow", logo: "/webflow.png" },
  { name: "Zoom", logo: "/zoom.png" },
];

const Clients = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-16">
          <div className="flex justify-center gap-20">
            <Image
              src="/coinbase.png"
              alt="Coinbase logo"
              height={48}
              width={135}
            />
            <Image
              src="/spotify.png"
              alt="Spotify logo"
              height={48}
              width={141}
            />
            <Image
              src="/slack.png"
              alt="Slack logo"
              height={48}
              width={122}
            />
            <Image
              src="/dropbox.png"
              alt="Dropbox logo"
              height={48}
              width={164}
            />
            <Image
              src="/webflow.png"
              alt="Webflow logo"
              height={48}
              width={117}
            />
            <Image
              src="/zoom.png"
              alt="Zoom logo"
              height={48}
              width={98}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
