import FrameComponent6 from "../components/FrameComponent6";
// import FrameComponent61 from "../components/FrameComponent61";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import CarWashContent from "../components/CarWashContent";
import GroupComponent from "../components/GroupComponent";
import FooterContent from "../components/FooterContent";
import FrameComponent8 from "../components/FrameComponent8";
import styles from "./LandingPage.module.css";
import TopComponent from "./TopComponent";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
<TopComponent/>
      <div className={styles.landingPageChild} />
      <FrameComponent7 />
      <div className={styles.minCarServiceContentParent}>
        <div className={styles.minCarServiceContent}>
          <div className={styles.minCarServiceContentChild} />
          <div className={styles.minCarService}>90 Min Car Service</div>
        </div>
        <img className={styles.frameChild} alt="" src="/rectangle-3499@2x.png" />
      </div>
      <section className={styles.servicesGrid}>
        <FrameComponent
          illustrationTemplatesMarginLeft="-2293.3px"
          illustrationTemplatesPadding="581.3px 0px 0px"
        />
        <FrameComponent1
          propPadding="581.3px 0px 0px"
          propWidth="190px"
          propHeight="unset"
        />
        <FrameComponent2
          creativeBrief="Creative brief"
          f84417443f34a48a34f5346Il="/5f84417443f34a48a34f5346-illustration2020template2020creative20briefpng@2x.png"
          propPadding="581.3px 0px 0px"
        />
        <FrameComponent2
          creativeBrief="Employee handbook"
          f84417443f34a48a34f5346Il="/5f84417443f34a2ab54f5347-illustration2020template2020employee20handbookpng@2x.png"
          propPadding="581.3px 0px 0px"
        />
        <FrameComponent2
          creativeBrief="Weekly reviews"
          f84417443f34a48a34f5346Il="/5f84417443f34a13a34f5349-illustration2020template2020weekly20reviewspng@2x.png"
          propPadding="581.3px 0px 0px"
        />
        <FrameComponent2
          creativeBrief="Product planning"
          f84417443f34a48a34f5346Il="/5f84417443f34a0ab14f5344-illustration2020template2020project20planpng@2x.png"
          propPadding="581.3px 0px 0px"
        />
        {/* <FrameComponent3 propPadding="581.3px 0px 0px" /> */}
        <FrameComponent2
          creativeBrief="Product specs"
          f84417443f34a48a34f5346Il="/5f84417443f34a46a84f534a-illustration2020template2020product20specspng@2x.png"
          propPadding="581.3px 0px 0px"
        />
        <FrameComponent2
          creativeBrief="Talent acquisition"
          f84417443f34a48a34f5346Il="/5f84417443f34a4a0a4f5345-illustration2020template2020talent20acquisitionpng@2x.png"
          propPadding="581.3px 0px 0px"
        />
        <FrameComponent1
          propPadding="156.3px 0px 0px"
          propWidth="383.3px"
          propHeight="unset"
        />
        <div className={styles.carWashCard}>
          <CarWashContent />
          {/* <FrameComponent9 /> */}
        </div>
        <FrameComponent3 propPadding="581.3px 0px 0px" />
        <FrameComponent2
          creativeBrief="Product specs"
          f84417443f34a48a34f5346Il="/5f84417443f34a46a84f534a-illustration2020template2020product20specspng@2x.png"
          propPadding="581.3px 0px 0px"
        />
      </section>
      {/* <FrameComponent61 /> */}
      <section className={styles.frameParent}>
        <GroupComponent />
        <div className={styles.footer15LiftBlue}>
          <div className={styles.background} />
          <FooterContent />
          <div className={styles.footerLinksSocial}>
            <div className={styles.linksContainer}>
              <div className={styles.linksWrapper}>
                <div className={styles.links}>
                  <div className={styles.aboutUsLink}>
                    <a className={styles.aboutUs}>About us</a>
                  </div>
                  <div className={styles.discover}>Download</div>
                  <div className={styles.explore}>Premium</div>
                </div>
              </div>
              <div className={styles.socialLinks}>
                <img className={styles.facebookIcon} loading="lazy" alt="" src="/facebook.svg" />
                <div className={styles.socialIcons}>
                  <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
                </div>
                <div className={styles.socialIcons1}>
                  <img className={styles.vimeoIcon} loading="lazy" alt="" src="/vimeo.svg" />
                </div>
                <div className={styles.socialIcons2}>
                  <img className={styles.youtubeIcon} alt="" src="/youtube.svg" />
                </div>
              </div>
            </div>
          </div>
          <FrameComponent8 />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
