import Menu from "./Menu/Menu";
import LargeLogo from "./LargeLogo";

export default function SignOutPage() {
  return (
    <>
      <LargeLogo />
      <h2>Daily Menu Demo</h2>
      <br />
      <h5> Please enter target daily calories, <br/>diet, and exclusions below:</h5>
      <div>
        <Menu />
     
    </div>
    </>
  );
}
