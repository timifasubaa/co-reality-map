import React from "react";
import NavBar from "components/molecules/NavBar";
import InformationCard from "components/molecules/InformationCard";
import "./EntranceExperience.scss";
import PartyTitle from "components/molecules/PartyTitle";
import SecretPasswordForm from "components/molecules/SecretPasswordForm";

import { entranceUnhosted } from "utils/time";
import WithNavigationBar from "components/organisms/WithNavigationBar";

const EntranceExperience = ({ config }) => (
  <WithNavigationBar>
    <div className="container">
      <div className="row mt-3">
        <PartyTitle startUtcSeconds={config.start_utc_seconds} withCountDown />
        <div className="col-5">
          <SecretPasswordForm />
        </div>
      </div>
      {entranceUnhosted(
        config.start_utc_seconds,
        config.entrance_hosted_hours
      ) && (
        <div className="row">
          <div class="col">
            <div class="starting-indication">
              Welcome. We recommend watching the following video to get started.
            </div>
            <div className="embed-responsive embed-responsive-16by9 video-embed mt-2">
              <iframe
                title="Party presentation"
                className="embed-responsive-item"
                src={config.unhosted_entry_video_url}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
      <div className="row mt-3">
        <div className="col-xl-7">
          <img
            src={config.map_url}
            className="map-image"
            alt="The boat party"
          />
        </div>
        <div className="col-xl-5">
          <InformationCard title="About this party">
            Are you feeling lost on the mainland? Aching for freedom, novel
            connection, and the chance to let your freak flag fly? Your wish is
            our command. Come travel the high seas with the Co-Reality
            Collective on our fifth esoteric adventure: The Boat Party -- A
            Voyage of Discovery. Join hundreds of fellow explorers on this
            journey of self-discovery; explore the deepest vessels of yourself
            that have been yearning to break free; and tackle the riddle on a
            collective quest for the ultimate treasure chest. Meet us at the
            Dock of the Bay, pack your sunscreen and say -- “Bon Voyage!” to the
            old you!
          </InformationCard>
          <InformationCard title="About the host">
            <p>
              The Co-Reality Collective organises some of the realest parties
              online. A decentralised international oragnisation of fifty
              artists, party philosophers, performers, and peripatetic citizens,
              Co-Reality seek to bring people together in thought-provoking
              online spaces and to explore the limits of what is possible in
              this new medium of experience. Their four online parties have been
              praised from Norway to Bangkok.
            </p>
            <img
              className="collective-icon"
              src="/collective-icon.png"
              alt="Co-Reality collective"
              width="20"
              height="20"
            />
            <a href="https://co-reality.co/">Co-Reality collective</a>
          </InformationCard>
        </div>
      </div>
    </div>
  </WithNavigationBar>
);

export default EntranceExperience;
