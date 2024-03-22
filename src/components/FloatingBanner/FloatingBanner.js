import useLocalStorage from "use-local-storage";
import { Link } from "react-router-dom";
import close from "../../assets/close.png";
import "./FloatingBanner.css";

function FloatingBanner(props) {
  /* props: 
    img: image object for left side of banner, ex. donate icon.
    paragraph: paragraph for banner. Should be html/jsx (e.g. wrap in <p>).
    bgColor: background color of banner
    label: UNIQUE label of promotion/event
        - label will be used for the cookie stored when users close the banner ad. 
        - Must be unique, or subsequent banners won't display for users who already closed the previous one
  */

  const [showBanner, setShowBanner] = useLocalStorage(
    props.label,
    true,
  ); /* Cookie for showing/hiding the banner */
  const closeBanner = () => {
    setShowBanner(false);
  };
  return (
    <>
      <div
        class={showBanner ? "floating-banner" : "floating-banner hide"}
        {...(props.bgColor ? { style: { background: props.bgColor } } : "")}
      >
        <Link to="/donate" onClick={closeBanner} class="floating-banner-img">
          <img src={props.img} />
        </Link>
        <Link
          to="/donate"
          onClick={closeBanner}
          class="floating-banner-paragraph"
        >
          {props.paragraph}
        </Link>
        <div class="floating-banner-close" onClick={closeBanner}>
          <img src={close} />
        </div>
      </div>
    </>
  );
}

export default FloatingBanner;
