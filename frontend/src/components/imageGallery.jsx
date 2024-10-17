import austinTrip from "../images/Austin-trip.png";
import newMexico from "../images/new-mexico.png";
import msaSocials from "../images/msa-socials.png";
import tabling from "../images/Tabling.png";
import communityService from "../images/Community-service.png";
import gbm from "../images/GBM.png";
import sistersSocials from "../images/Sisters-social.png";
import brothersSocials from "../images/Brothers-social.png";
import charityWeek from "../images/Charity-week.png";
import chaiNight from "../images/Chai-night.png";
import cornMaze from "../images/Corn-maze.png";
import ramadanEid from "../images/Eid-Ramadan.png";
import showdown from "../images/Showdown.png";
import education from "../images/Education.png";
import parkKickoff from "../images/Park-Day-Kickoff.png";
import "../css/imageGallery.css";
import { Link } from "react-router-dom";

function ImageGallery() {
  const linkArray = [
    "AF1QipNrmM0vF4RJ-fU_oAWKhN6BnG0YFno_y9gL0rxsY8V2mYcAN1QM6l8pbtUGB82HBw?key=ZHljVkdpeUQ2RnB4alJGT3d5cTBFallteVVNWEx3",
    "AF1QipM0H7iIoJOk5LymYkqhDm0azcfwjFYn0AUUkdLQq2YOzeeT_EuHtNQ9ni1cek1fSg?key=VC1JMWloc1FyazBNLUNCb21kMFU3czhPUjNqVnRn",
    "AF1QipPGnIbXJE5xMUyWUxEU0a9McPZ1O0RcksrZSLYnKsIAuJFfGYXwVJtLsp7rZ4G-8A?key=SmNpMDJzM3lRMVlaNmxfY3lGUXJCUW9ET1FBZmRn",
    "AF1QipPJQuSO0DI2MsKnY7fVAUfQOc4p_syBnexiVIjFg9T2laBDOMgfmjzbVXFiPOo4vQ?key=UE1VeEl6aFItNGl3OXNXUjNTNmJfWEIwcHFpMHpn",
    "AF1QipNybUSSnr4llp62zbwpAoE1ivwpIOrfmutkgGTCzF_Rquv2OHuYrWVUh-d6s69rAw?key=MzVGbXdfMmJYNlJYU05HZHNld2RWRjZIVXdMaWNR",
    "AF1QipNnMLNZtAag6Mj6-ufuXwEuyjEV-N0lGjlJ2NtfFhd0MWecWFvqFNr8iyANYPDweg?key=MGZxWHFWUGVJQTdUVkZkQXNiSGdkMnFYTm40TC13",
    "AF1QipO5EqAkq26jOE-L4bWufRT59pMe8uUJStbdkUVtgKpi6xIBuS9Pkxkn5hhSxXegGA?key=RU5wenFIRk55c3hvTEFMZ3EyNmtlUUNwTlU3V3d3",
    "AF1QipPPRFP3UuheC59gr6z71v3PtcvzVXNtHup8I-D0ASy2vkn8g0EJ7kAPRKvRJpcb6A?key=NTZ4SUpYUWlPNzFTemc5SjRfLXFuNkRIU2dyNUxB",
    "AF1QipNuEVzANlg_GD4CyuxpiKMOJPzPh_ZNMMREznvOVHqdR-RXR-jqYlIhj0RD2vwq8g?key=UVNBdm5Va2d6WGt1SURpd0p4NTRGLTRtVWlqZzhn",
    "AF1QipMFxnJ_0emQoFvldQ7J-p2D_APf20z5WKszZfVDpM4b7dOPuE9_leZ4FcOqivqUQw?key=NXVsOXQxZ016NnRoTjJwX2xUeGNtSHNpMF9weEZR",
    "AF1QipPcWj3jXnufNmkl4NoLJKIIcxdfCIICVTWtVcB13AEDB3XXxUPW8jr_sJh3bHrjmQ?key=VkZaVW5GcnpJYmtTOTA0QnU1dTd0QUd0YzFDby1B",
    "AF1QipNEJBRyl_pHKvfCKkz1z4-9FNWVmAN_nWTaRDVDD08r4F0BK37PaKqVUvlQ-WU0cg?key=LXhyY0xFOTVOSXRIc0RFTGNudkQ4b0hhNGlDVEtR",
    "AF1QipO2Bxs7GKbb80T6pQPc9uHpsHIv_-59gVMYn7v0S8Hyb0ypSza0ML6IDes6jUmJxw?key=ZXlidC00LTd6aHlGMVJSUHJLQWdRc1BKS0hoeFdB",
    "AF1QipPs3b6UZZXvy_BRwZuV_coxOil357LM27hY-13bnwzZA8M4zLRidemD5Vf29SzTyg?key=cElRVmdfUTBPc05fSHpxMGhLbV9pTDB2YWZyX2pB",
    "AF1QipOHLpe6zpqePFqymtdO_B5QvvypogkKQ6IW4JnVNdGb0vBin2eRepYXX6oNOpH_AQ?key=bTZYRlNSaHM3SE0yV1RTaEpaX01yMFphVm1yRFF3",
  ];

  const imageSource = [
    austinTrip,
    newMexico,
    msaSocials,
    tabling,
    communityService,
    gbm,
    sistersSocials,
    brothersSocials,
    charityWeek,
    chaiNight,
    cornMaze,
    ramadanEid,
    showdown,
    education,
    parkKickoff,
  ];

  const pastEvents = [
    "Austin Trip '23",
    "New Mexico '24",
    "MSA Socials",
    "Tabling",
    "Community Service",
    "General Body Meeting",
    "Sisters' Socials",
    "Brothers' Socials",
    "Charity Week",
    "Chai Nights",
    "Corn Maze",
    "Ramadan & Eid",
    "Showdown",
    "Educational Events",
    "Park Kickoff",
  ];

  return (
    <>
      <div class="black-box-2"></div>

      <div class="image-gallery">
        <h2>Event Highlights</h2>
        <div class="gallery-grid">
          {pastEvents.map((event, index) => {
            return (
              <div class="gallery-item">
                <Link
                  to={`https://photos.google.com/share/${linkArray[index]}`}
                >
                  <h3 class="heading">{event}</h3>
                  <img src={imageSource[index]} alt="Event 1" />
                  <div class="overlay"></div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="black-box-2"></div>
    </>
  );
}

export default ImageGallery;
